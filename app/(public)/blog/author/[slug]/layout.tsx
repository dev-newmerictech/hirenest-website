export default function AuthorLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <section className="author-layout">{children}</section>;
}