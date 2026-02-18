"use client";

import dynamic from "next/dynamic";

const Stats = dynamic(() => import("@/src/views/Stats"), {
    ssr: false,
    loading: () => <div style={{ minHeight: "400px" }} />,
});

export default function StatsClient() {
    return <Stats />;
}