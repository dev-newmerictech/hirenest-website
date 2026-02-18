import { Metadata } from "next";
import UnsubscribeClient from "./unsubscribe-client";

export const metadata: Metadata = {
    robots: { index: false, follow: false },
};

export default function UnsubscribePage() {
    return <UnsubscribeClient />;
}