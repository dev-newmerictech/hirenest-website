import "../../styles/route-styles.css";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // Dashboard shell — sidebar and header are rendered inside DashboardContent
    // since they share deep state (activeSection, editingItem, toasts, etc.)
    return <>{children}</>;
}