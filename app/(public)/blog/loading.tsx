export default function BlogLoading() {
    return (
        <div className="blog-loading" style={{ maxWidth: 1200, margin: "0 auto", padding: "2rem 1rem" }}>
            <div style={{ height: 40, width: "40%", background: "#e5e7eb", borderRadius: 8, marginBottom: 32 }} className="animate-pulse" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 24 }}>
                {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="animate-pulse" style={{ borderRadius: 12, overflow: "hidden" }}>
                        <div style={{ height: 200, background: "#e5e7eb" }} />
                        <div style={{ padding: 16 }}>
                            <div style={{ height: 20, width: "80%", background: "#e5e7eb", borderRadius: 4, marginBottom: 12 }} />
                            <div style={{ height: 14, width: "60%", background: "#f3f4f6", borderRadius: 4 }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}