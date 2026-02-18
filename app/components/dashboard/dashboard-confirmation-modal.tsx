"use client";

import { Warning, Info, X } from "@phosphor-icons/react";

// Confirmation Modal Component
export interface ConfirmationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    onCopy: () => void;
    title: string;
    message: string;
    confirmLabel?: string;
    cancelLabel?: string;
    isDestructive?: boolean;
}

export function ConfirmationModal({
    isOpen,
    onClose,
    onConfirm,
    title,
    message,
    confirmLabel = "Confirm",
    cancelLabel = "Cancel",
    isDestructive = false,
}: ConfirmationModalProps) {
    if (!isOpen) return null;

    return (
        <div
            className="dashboard-modal-backdrop"
            onClick={(e) => {
                if (e.target === e.currentTarget) onClose();
            }}
        >
            <div className="dashboard-modal">
                <div className="dashboard-modal-header">
                    <div
                        className={`dashboard-modal-icon ${isDestructive ? "destructive" : ""}`}
                        style={isDestructive ? { color: "var(--red-500)" } : undefined}
                    >
                        {isDestructive ? <Warning size={24} /> : <Info size={24} />}
                    </div>
                    <h3 className="dashboard-modal-title">{title}</h3>
                    <button className="dashboard-modal-close" onClick={onClose}>
                        <X size={18} weight="bold" />
                    </button>
                </div>
                <p className="dashboard-modal-description">{message}</p>
                <div className="dashboard-modal-footer">
                    <div className="dashboard-modal-actions">
                        <button className="dashboard-modal-btn secondary" onClick={onClose}>
                            {cancelLabel}
                        </button>
                        <button
                            className={`dashboard-modal-btn ${isDestructive ? "destructive" : "primary"}`}
                            style={
                                isDestructive
                                    ? {
                                        backgroundColor: "var(--red-500)",
                                        color: "white",
                                        border: "none",
                                    }
                                    : undefined
                            }
                            onClick={onConfirm}
                        >
                            {confirmLabel}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}