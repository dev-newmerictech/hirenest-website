import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import "../styles/breadcrumbs.css";

interface BreadcrumbItem {
    name: string;
    url?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
    return (
        <nav className="breadcrumbs" aria-label="Breadcrumb">
            <ol className="breadcrumbs-list" itemScope itemType="https://schema.org/BreadcrumbList">
                {/* Home breadcrumb */}
                <li className="breadcrumb-item" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                    <Link href="/" className="breadcrumb-link" itemProp="item">
                        <Home size={14} className="breadcrumb-icon" />
                        <span itemProp="name">Home</span>
                    </Link>
                    <meta itemProp="position" content="1" />
                    {items.length > 0 && <ChevronRight size={14} className="breadcrumb-separator" />}
                </li>

                {/* Dynamic breadcrumbs */}
                {items.map((item, index) => {
                    const position = index + 2;
                    const isLast = index === items.length - 1;

                    return (
                        <li
                            key={index}
                            className={`breadcrumb-item ${isLast ? "breadcrumb-item-active" : ""}`}
                            itemProp="itemListElement"
                            itemScope
                            itemType="https://schema.org/ListItem"
                        >
                            {item.url && !isLast ? (
                                <>
                                    <Link href={item.url} className="breadcrumb-link" itemProp="item">
                                        <span itemProp="name">{item.name}</span>
                                    </Link>
                                    <meta itemProp="position" content={position.toString()} />
                                    <ChevronRight size={14} className="breadcrumb-separator" />
                                </>
                            ) : (
                                <>
                                    <span className="breadcrumb-current" itemProp="name">
                                        {item.name}
                                    </span>
                                    <meta itemProp="position" content={position.toString()} />
                                </>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}