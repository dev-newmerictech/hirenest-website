"use client";

import { useEffect, useState } from "react";
import Dashboard from "@/src/views/Dashboard";

export default function DashboardPagesClient() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);
    if (!mounted) return null;
    return <Dashboard initialSection="pages" />;
}