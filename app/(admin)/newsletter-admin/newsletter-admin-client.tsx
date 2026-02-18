"use client";

import { useEffect, useState } from "react";
import NewsletterAdmin from "@/src/views/NewsletterAdmin";

export default function NewsletterAdminClient() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);
    if (!mounted) return null;
    return <NewsletterAdmin />;
}