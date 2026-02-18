"use client";

import { usePathname } from "next/navigation";

/* Force React to unmount/remount children when the blog route changes.
   Without this key, startTransition keeps old content visible during navigation.
   DOM method patches in root layout prevent removeChild errors from third-party scripts. */
export default function BlogRouteKey({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    return <div key={pathname}>{children}</div>;
}