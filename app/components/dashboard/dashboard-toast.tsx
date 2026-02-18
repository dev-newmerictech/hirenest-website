"use client";

import { useEffect } from "react";
import { CheckCircle, Warning, Info, X } from "@phosphor-icons/react";

// Toast notification types
export type ToastType = "success" | "error" | "info" | "warning";

export interface Toast {
    id: string;
    message: string;
    type: ToastType;
}

// Toast notification component
export function ToastNotification({
    toast,
    onDismiss,
}: {
    toast: Toast;
    onDismiss: (id: string) => void;
}) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onDismiss(toast.id);
        }, 4000);
        return () => clearTimeout(timer);
    }, [toast.id, onDismiss]);

    const getIcon = () => {
        switch (toast.type) {
            case "success":
                return <CheckCircle size={18} weight="fill" />;
            case "error":
                return <Warning size={18} weight="fill" />;
            case "warning":
                return <Warning size={18} weight="fill" />;
            case "info":
            default:
                return <Info size={18} weight="fill" />;
        }
    };

    return (
        <div className={`dashboard-toast ${toast.type}`}>
            <span className="dashboard-toast-icon">{getIcon()}</span>
            <span className="dashboard-toast-message">{toast.message}</span>
            <button
                className="dashboard-toast-close"
                onClick={() => onDismiss(toast.id)}
            >
                <X size={14} />
            </button>
        </div>
    );
}

// Toast container component
export function ToastContainer({
    toasts,
    onDismiss,
}: {
    toasts: Toast[];
    onDismiss: (id: string) => void;
}) {
    if (toasts.length === 0) return null;

    return (
        <div className="dashboard-toast-container">
            {toasts.map((toast) => (
                <ToastNotification key={toast.id} toast={toast} onDismiss={onDismiss} />
            ))}
        </div>
    );
}