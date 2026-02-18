"use client";

import { useState, useEffect } from "react";
import { Warning, X, SpinnerGap, FloppyDisk } from "@phosphor-icons/react";

// Sync Warning modal component - warns when saving synced content
export interface SyncWarningModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSaveAnyway: () => void;
    onDownload: () => void;
    onCopy: () => void;
    itemName: string;
    itemType: "post" | "page";
    isSaving: boolean;
}

export function SyncWarningModal({
    isOpen,
    onClose,
    onSaveAnyway,
    onDownload,
    onCopy,
    itemName,
    itemType,
    isSaving,
}: SyncWarningModalProps) {
    const [copied, setCopied] = useState(false);
    const [downloaded, setDownloaded] = useState(false);

    const handleCopy = async () => {
        await onCopy();
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleDownload = () => {
        onDownload();
        setDownloaded(true);
        setTimeout(() => setDownloaded(false), 2000);
    };

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget && !isSaving) {
            onClose();
        }
    };

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape" && !isSaving) {
                onClose();
            }
        };
        if (isOpen) {
            document.addEventListener("keydown", handleEsc);
        }
        return () => document.removeEventListener("keydown", handleEsc);
    }, [isOpen, onClose, isSaving]);

    // Reset states when modal closes
    useEffect(() => {
        if (!isOpen) {
            setCopied(false);
            setDownloaded(false);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="dashboard-modal-backdrop" onClick={handleBackdropClick}>
            <div className="dashboard-modal dashboard-modal-sync-warning">
                <div className="dashboard-modal-header">
                    <div className="dashboard-modal-icon dashboard-modal-icon-warning">
                        <Warning size={24} weight="fill" />
                    </div>
                    <h3 className="dashboard-modal-title">Synced Content Warning</h3>
                    <button
                        className="dashboard-modal-close"
                        onClick={onClose}
                        disabled={isSaving}
                    >
                        <X size={18} weight="bold" />
                    </button>
                </div>

                <div className="dashboard-modal-content">
                    <p className="dashboard-modal-message">
                        This {itemType} was synced from a database markdown file.
                    </p>
                    <p className="dashboard-modal-warning-text">
                        Changes saved here will be <strong>overwritten</strong> on the next{" "}
                        <code>npm run sync</code>. To persist your changes, download or copy
                        the markdown and update your local file.
                    </p>
                </div>

                <div className="dashboard-modal-footer">
                    <div className="dashboard-modal-actions">
                        <button
                            className="dashboard-modal-btn secondary"
                            onClick={onClose}
                            disabled={isSaving}
                        >
                            Cancel
                        </button>
                        <button
                            className="dashboard-modal-btn primary"
                            onClick={onSaveAnyway}
                            disabled={isSaving}
                        >
                            {isSaving ? (
                                <>
                                    <SpinnerGap size={16} className="animate-spin" />
                                    <span>Saving...</span>
                                </>
                            ) : (
                                <>
                                    <FloppyDisk size={16} />
                                    <span>Save Anyway</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}