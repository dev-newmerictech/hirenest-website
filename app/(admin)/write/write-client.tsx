"use client";

import { useEffect, useState } from "react";
import Write from "@/src/views/Write";

export default function WriteClient() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);
    if (!mounted) return null;
    return <Write />;
}