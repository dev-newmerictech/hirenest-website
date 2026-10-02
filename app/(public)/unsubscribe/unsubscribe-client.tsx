"use client";

import dynamic from "next/dynamic";

const Unsubscribe = dynamic(() => import("@/src/views/Unsubscribe"), {
    ssr: false,
    loading: () => <div style={{ minHeight: "200px" }} />,
});

export default function UnsubscribeClient() {
    return <Unsubscribe />;
}