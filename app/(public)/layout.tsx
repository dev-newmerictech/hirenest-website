"use client";
import "@/app/styles/route-styles.css";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ScrollToTopOnNav from "@/app/components/ScrollToTopOnNav";
import { SidebarProvider } from "@/src/context/SidebarContext";

// Lazy-load page tracking to avoid SSR hook errors (Convex context not available server-side)
function PageTracker() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);

    if (!mounted) return null;

    // Dynamic import to ensure hooks only run client-side
    return <PageTrackerInner />;
}

function PageTrackerInner() {
    const { usePageTracking } = require("@/src/hooks/usePageTracking");
    usePageTracking();
    return null;
}

// Note: Header/Footer are provided by LayoutWrapper in root layout.
// This layout adds the main-content wrapper + context providers for (public) routes.
export default function PublicLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isWide = pathname === "/stats" || pathname === "/blog";

    return (
        <SidebarProvider>
            <PageTracker />
            <ScrollToTopOnNav />
            <div className={isWide ? "main-content-wide" : "main-content"}>
                {children}
            </div>
        </SidebarProvider>
    );
}