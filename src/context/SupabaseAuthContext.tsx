/**
 * Supabase Auth Context
 * Provides authentication state and methods using Supabase
 */
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { User, Session, AuthError } from "@supabase/supabase-js";
import { supabase, isSupabaseConfigured } from "../../src/utils/supabaseClient";

interface AuthContextType {
  user: User | null | undefined;
  session: Session | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => Promise<{ error: AuthError | null }>;
  signInWithOAuth: (provider: "google" | "github" | "gitlab" | "bitbucket") => Promise<void>;
  signUp: (email: string, password: string) => Promise<{ error: AuthError | null; data?: any }>;
  signOut: () => Promise<void>;
}

const SupabaseAuthContext = createContext<AuthContextType>({
  user: undefined,
  session: null,
  isLoading: false,
  isAuthenticated: false,
  signIn: async () => ({ error: null }),
  signInWithOAuth: async () => { },
  signUp: async () => ({ error: null }),
  signOut: async () => { },
});

// Dummy context for when Supabase is not configured
const dummyAuthContext: AuthContextType = {
  user: undefined,
  session: null,
  isLoading: false,
  isAuthenticated: false,
  signIn: async () => ({ error: null }),
  signInWithOAuth: async () => { },
  signUp: async () => ({ error: null }),
  signOut: async () => { },
};

export function SupabaseAuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null | undefined>(undefined);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);

    if (!isSupabaseConfigured || !supabase) {
      setUser(undefined);
      setIsLoading(false);
      return;
    }

    // Safety timeout - if loading takes too long, assume no session
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
      setUser(null);
    }, 5000); // 5 second timeout

    // Check active sessions and sets the user
    supabase.auth.getSession()
      .then(({ data: { session } }) => {
        clearTimeout(timeoutId);
        setSession(session);
        setUser(session?.user ?? null);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Supabase auth error:", error);
        clearTimeout(timeoutId);
        setUser(null);
        setIsLoading(false);
      });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      setIsLoading(false);
    });

    return () => {
      clearTimeout(timeoutId);
      subscription.unsubscribe();
    };
  }, []);

  const signIn = async (email: string, password: string) => {
    if (!supabase) return { error: null };
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    return { error };
  };

  const signInWithOAuth = async (provider: "google" | "github" | "gitlab" | "bitbucket") => {
    if (!supabase) return;
    await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: window.location.origin + "/callback",
      },
    });
  };

  const signUp = async (email: string, password: string) => {
    if (!supabase) return { error: null };
    const { data, error } = await supabase.auth.signUp({ email, password });
    return { error, data };
  };

  const signOut = async () => {
    if (!supabase) return;
    await supabase.auth.signOut();
    setUser(null);
    setSession(null);
  };

  const value: AuthContextType = {
    user,
    session,
    isLoading: isLoading && !hasMounted, // Only show loading before mount
    isAuthenticated: !!user,
    signIn,
    signInWithOAuth,
    signUp,
    signOut,
  };

  return (
    <SupabaseAuthContext.Provider value={value}>
      {children}
    </SupabaseAuthContext.Provider>
  );
}

export function useSupabaseAuth(): AuthContextType {
  const context = useContext(SupabaseAuthContext);

  // If Supabase is not configured, return dummy context
  if (!isSupabaseConfigured) {
    return dummyAuthContext;
  }

  return context;
}
