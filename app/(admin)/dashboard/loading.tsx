export default function DashboardLoading() {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "60vh" }}>
            <div className="animate-pulse" style={{ textAlign: "center" }}>
                <div style={{ width: 40, height: 40, border: "3px solid #e5e7eb", borderTopColor: "#6366f1", borderRadius: "50%", animation: "spin 0.8s linear infinite", margin: "0 auto 16px" }} />
                <div style={{ height: 16, width: 120, background: "#e5e7eb", borderRadius: 4, margin: "0 auto" }} />
            </div>
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
    );
}