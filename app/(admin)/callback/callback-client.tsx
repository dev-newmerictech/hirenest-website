"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase, isSupabaseConfigured } from "@/src/utils/supabaseClient";

export default function CallbackClient() {
    const router = useRouter();

    useEffect(() => {
        if (!isSupabaseConfigured || !supabase) {
            router.replace("/dashboard");
            return;
        }

        // Supabase handles the OAuth code exchange via the URL hash
        // Wait for the session to be established, then redirect
        supabase.auth.getSession().then(({ data: { session } }) => {
            if (session) {
                router.replace("/dashboard");
            } else {
                router.replace("/login");
            }
        });
    }, [router]);

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                fontFamily: "system-ui, sans-serif",
                backgroundColor: "var(--bg-primary, #fff)",
                color: "var(--text-primary, #111)",
            }}
        >
            <div style={{ textAlign: "center" }}>
                <h2>Signing you in...</h2>
                <p>Please wait while we complete your authentication.</p>
            </div>
        </div>
    );
}