export default function BlogPostLoading() {
    return (
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
            <div className="animate-pulse">
                <div style={{ height: 36, width: "70%", background: "#e5e7eb", borderRadius: 8, marginBottom: 16 }} />
                <div style={{ display: "flex", gap: 16, marginBottom: 32 }}>
                    <div style={{ height: 14, width: 100, background: "#f3f4f6", borderRadius: 4 }} />
                    <div style={{ height: 14, width: 80, background: "#f3f4f6", borderRadius: 4 }} />
                    <div style={{ height: 14, width: 60, background: "#f3f4f6", borderRadius: 4 }} />
                </div>
                <div style={{ height: 400, background: "#e5e7eb", borderRadius: 12, marginBottom: 32 }} />
                {Array.from({ length: 8 }).map((_, i) => (
                    <div
                        key={i}
                        style={{
                            height: 14,
                            width: `${65 + Math.random() * 35}%`,
                            background: "#f3f4f6",
                            borderRadius: 4,
                            marginBottom: 12,
                        }}
                    />
                ))}
            </div>
        </div>
    );
}