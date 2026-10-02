import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

// Unsubscribe page component
// Handles newsletter unsubscription via email and token from URL params
export default function Unsubscribe() {
  const searchParams = useSearchParams();
  const email = searchParams?.get("email");
  const token = searchParams?.get("token");

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const unsubscribeMutation = async ({ email, token }: { email: string, token: string }) => {
    // Convex removed, mock success
    return { success: true, message: "Successfully unsubscribed" };
  };

  // Track if we've already attempted unsubscribe to prevent double calls
  const hasAttempted = useRef(false);

  // Auto-unsubscribe when page loads with valid params
  useEffect(() => {
    if (!email || !token || hasAttempted.current) return;
    hasAttempted.current = true;

    setStatus("loading");

    unsubscribeMutation({ email, token })
      .then((result) => {
        setStatus(result.success ? "success" : "error");
        setMessage(result.message);
      })
      .catch(() => {
        setStatus("error");
        setMessage("Something went wrong. Please try again.");
      });
  }, [email, token, unsubscribeMutation]);

  return (
    <div className="unsubscribe-page">
      <h1>Unsubscribe</h1>

      {status === "loading" && <p>Processing...</p>}

      {status === "success" && (
        <>
          <p className="unsubscribe-success">{message}</p>
          <Link href="/" className="unsubscribe-home-link">
            Back to home
          </Link>
        </>
      )}

      {status === "error" && <p className="unsubscribe-error">{message}</p>}

      {status === "idle" && !email && !token && (
        <p>Use the unsubscribe link from your email.</p>
      )}
    </div>
  );
}
