import { Metadata } from "next";
import StatsClient from "./stats-client";

export const metadata: Metadata = {
    robots: { index: false, follow: false },
};

export default function StatsPage() {
    return <StatsClient />;
}