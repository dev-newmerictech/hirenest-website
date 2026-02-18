import { useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { useQuery, useAction } from "convex/react";
import { api } from "../../convex/_generated/api";
import {
    MagnifyingGlass,
    X,
    ArrowRight,
    TextAa,
    Brain,
} from "@phosphor-icons/react";

type SearchMode = "keyword" | "semantic";

interface SearchResult {
    _id: string;
    type: "post" | "page";
    slug: string;
    title: string;
    snippet: string;
    score?: number;
    anchor?: string;
}

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchMode, setSearchMode] = useState<SearchMode>("keyword");
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [semanticResults, setSemanticResults] = useState<SearchResult[] | null>(null);
    const [isSemanticSearching, setIsSemanticSearching] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    /* ---------------- Keyword Search ---------------- */
    const keywordResults = useQuery(
        api.search.search,
        searchMode === "keyword" && searchQuery.trim()
            ? { query: searchQuery }
            : "skip"
    );

    /* ---------------- Semantic Search ---------------- */
    const semanticSearchAction = useAction(api.semanticSearch.semanticSearch);

    useEffect(() => {
        if (searchMode !== "semantic" || !searchQuery.trim()) {
            setSemanticResults(null);
            setIsSemanticSearching(false);
            return;
        }

        setIsSemanticSearching(true);
        const timeout = setTimeout(async () => {
            try {
                const res = await semanticSearchAction({ query: searchQuery });
                setSemanticResults(res as SearchResult[]);
            } catch {
                setSemanticResults([]);
            } finally {
                setIsSemanticSearching(false);
            }
        }, 300);

        return () => clearTimeout(timeout);
    }, [searchQuery, searchMode, semanticSearchAction]);

    const results =
        searchMode === "keyword"
            ? (keywordResults as SearchResult[] | undefined)
            : semanticResults ?? undefined;

    const isLoading =
        searchMode === "keyword"
            ? keywordResults === undefined && searchQuery.trim() !== ""
            : isSemanticSearching;

    /* ---------------- Effects ---------------- */
    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
            setSearchQuery("");
            setSelectedIndex(0);
            setSemanticResults(null);
            setSearchMode("keyword");
        }
    }, [isOpen]);

    useEffect(() => {
        setSelectedIndex(0);
    }, [results]);

    /* ---------------- Keyboard ---------------- */
    const handleKeyDown = useCallback(
        (e: React.KeyboardEvent) => {
            if (e.key === "Tab") {
                e.preventDefault();
                setSearchMode((prev) => (prev === "keyword" ? "semantic" : "keyword"));
                return;
            }

            if (e.key === "Escape") {
                onClose();
                return;
            }

            if (!results || results.length === 0) return;

            switch (e.key) {
                case "ArrowDown":
                    e.preventDefault();
                    setSelectedIndex((i) => (i + 1) % results.length);
                    break;
                case "ArrowUp":
                    e.preventDefault();
                    setSelectedIndex((i) => (i - 1 + results.length) % results.length);
                    break;
                case "Enter":
                    e.preventDefault();
                    const r = results[selectedIndex];
                    if (!r) return;

                    const url =
                        searchMode === "keyword"
                            ? `/${r.slug}?q=${encodeURIComponent(searchQuery)}`
                            : `/${r.slug}`;

                    router.push(url);
                    onClose();
                    break;
            }
        },
        [results, selectedIndex, searchMode, searchQuery, router, onClose]
    );

    const handleResultClick = (slug: string) => {
        const url =
            searchMode === "keyword"
                ? `/blog/${slug}?q=${encodeURIComponent(searchQuery)}`
                : `/blog/${slug}`;
        router.push(url);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="search-modal-backdrop" onClick={(e) => e.target === e.currentTarget && onClose()}>
            <div className="search-modal">
                {/* Mode Toggle */}
                <div className="search-mode-toggle">
                    <button
                        className={`search-mode-btn ${searchMode === "keyword" ? "active" : ""}`}
                        onClick={() => setSearchMode("keyword")}
                    >
                        <TextAa size={16} weight="bold" /> Keyword
                    </button>
                    {/* <button
            className={`search-mode-btn ${searchMode === "semantic" ? "active" : ""}`}
            onClick={() => setSearchMode("semantic")}
          >
            <Brain size={16} weight="bold" /> Semantic
          </button> */}
                </div>

                {/* Input */}
                <div className="search-modal-input-wrapper">
                    <MagnifyingGlass size={20} className="search-modal-icon" weight="bold" />
                    <input
                        ref={inputRef}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder={
                            searchMode === "keyword"
                                ? "Search posts and pages..."
                                : "Describe what you're looking for..."
                        }
                        className="search-modal-input"
                    />
                    <button onClick={onClose} className="search-modal-close">
                        <X size={18} weight="bold" />
                    </button>
                </div>

                {/* Results */}
                <div className="search-modal-results">
                    {searchQuery.trim() === "" ? (
                        <div className="search-modal-hint">
                            <p>{searchMode === "keyword" ? "Type to search" : "Search by meaning"}</p>
                        </div>
                    ) : isLoading ? (
                        <div className="search-modal-loading">Searching...</div>
                    ) : results && results.length === 0 ? (
                        <div className="search-modal-empty">No results found</div>
                    ) : results ? (
                        <ul className="search-results-list">
                            {results.map((r, i) => (
                                <li key={r._id}>
                                    <button
                                        className={`search-result-item ${i === selectedIndex ? "selected" : ""}`}
                                        onClick={() => handleResultClick(r.slug)}
                                        onMouseEnter={() => setSelectedIndex(i)}
                                    >

                                        <div className="search-result-content">
                                            <div className="search-result-title">{r.title}</div>
                                            <div className="search-result-snippet">{r.snippet}</div>
                                        </div>
                                        {searchMode === "semantic" && r.score && (
                                            <span className="search-result-score">
                                                {Math.round(r.score * 100)}%
                                            </span>
                                        )}
                                        <ArrowRight size={16} />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    ) : null}
                </div>
            </div>
        </div>
    );
}
