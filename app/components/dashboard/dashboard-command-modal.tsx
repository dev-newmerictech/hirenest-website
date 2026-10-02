"use client";

import { useState, useEffect } from "react";
import { Terminal, X, Check, Copy } from "@phosphor-icons/react";

// Command modal component
export interface CommandModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    command: string;
    description?: string;
}

export function CommandModal({
    isOpen,
    onClose,
    title,
    command,
    description,
}: CommandModalProps) {
    const [copied, setCopied] = useState(false);

    const handleCopyCommand = async () => {
        await navigator.clipboard.writeText(command);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };
        if (isOpen) {
            document.addEventListener("keydown", handleEsc);
        }
        return () => document.removeEventListener("keydown", handleEsc);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="dashboard-modal-backdrop" onClick={handleBackdropClick}>
            <div className="dashboard-modal">
                <div className="dashboard-modal-header">
                    <div className="dashboard-modal-icon">
                        <Terminal size={24} weight="regular" />
                    </div>
                    <h3 className="dashboard-modal-title">{title}</h3>
                    <button className="dashboard-modal-close" onClick={onClose}>
                        <X size={18} weight="bold" />
                    </button>
                </div>

                {description && (
                    <p className="dashboard-modal-description">{description}</p>
                )}

                <div className="dashboard-modal-command-container">
                    <code className="dashboard-modal-command">{command}</code>
                    <button
                        className="dashboard-modal-copy-btn"
                        onClick={handleCopyCommand}
                        title="Copy command"
                    >
                        {copied ? <Check size={16} /> : <Copy size={16} />}
                    </button>
                </div>

                <div className="dashboard-modal-footer">
                    <p className="dashboard-modal-hint">
                        Copy this command and run it in your terminal
                    </p>
                    <div className="dashboard-modal-actions">
                        <button className="dashboard-modal-btn secondary" onClick={onClose}>
                            Close
                        </button>
                        <button
                            className="dashboard-modal-btn primary"
                            onClick={handleCopyCommand}
                        >
                            {copied ? "Copied!" : "Copy Command"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}