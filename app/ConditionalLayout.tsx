"use client"

import { usePathname } from "next/navigation"

export function ConditionalLayout({ children, navbar, footer }: {
    children: React.ReactNode,
    navbar: React.ReactNode,
    footer: React.ReactNode
}) {
    const pathname = usePathname()
    const isDashboard = pathname?.startsWith("/dashboard")
    const isRaw = pathname?.startsWith("/raw")

    const showLayout = !isDashboard && !isRaw

    return (
        <>
            {showLayout && navbar}
            {children}
            {showLayout && footer}
        </>
    )
}
