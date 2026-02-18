"use client";

export default function DashboardError({ error, reset }: { error: Error; reset: () => void }) {
    return (
        <div style={{ maxWidth: 600, margin: "4rem auto", padding: "2rem", textAlign: "center" }}>
            <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 8 }}>Something went wrong</h2>
            <p style={{ color: "#6b7280", marginBottom: 24 }}>
                We couldn&apos;t load the dashboard. Please try again.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
                <button
                    onClick={reset}
                    style={{ padding: "10px 20px", background: "#6366f1", color: "#fff", border: "none", borderRadius: 8, cursor: "pointer" }}
                >
                    Try again
                </button>
                <a href="/dashboard" style={{ padding: "10px 20px", border: "1px solid #d1d5db", borderRadius: 8, textDecoration: "none", color: "#374151" }}>
                    Go to Dashboard
                </a>
            </div>
        </div>
    );
}