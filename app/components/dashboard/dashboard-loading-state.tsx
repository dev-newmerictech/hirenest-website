"use client";

import Link from "next/link";

// Loading state component for auth
export function LoadingState() {
    return (
        <div className="dashboard-auth-container">
            <p>Loading authentication...</p>
        </div>
    );
}

// Dashboard disabled message
export function DashboardDisabled() {
    return (
        <div className="dashboard-auth-container">
            <div className="dashboard-auth-card">
                <h1>Dashboard Disabled</h1>
                <p>The dashboard is currently disabled in site configuration.</p>
                <p
                    style={{
                        marginTop: "1rem",
                        fontSize: "0.875rem",
                        color: "var(--text-secondary)",
                    }}
                >
                    To enable the dashboard, set <code>dashboard.enabled: true</code> in{" "}
                    <code>siteConfig.ts</code>.
                </p>
                <p style={{ marginTop: "1.5rem" }}>
                    <Link href="/">Back to Home</Link>
                </p>
            </div>
        </div>
    );
}