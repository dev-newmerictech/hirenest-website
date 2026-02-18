"use client";

import { ReactNode, useEffect, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { isSupabaseConfigured } from "@/src/utils/supabaseClient";
import { useSupabaseAuth } from "@/src/context/SupabaseAuthContext";
import { isAuthorizedEmail } from "@/src/utils/authValidation";
import {
  Box,
  VStack,
  Text,
  Heading,
  Button,
  Icon,
  Flex,
  Spinner,
} from "@chakra-ui/react";
import { Lock, House } from "@phosphor-icons/react";

interface ProtectedRouteProps {
  children: ReactNode;
}

/**
 * ProtectedRoute Component
 *
 * Wraps children to ensure:
 * 1. User is authenticated (via Supabase)
 * 2. User's email domain is authorized (e.g., @tinycheque.com)
 *
 * If not authenticated, redirects to /login with return URL
 * If authenticated but unauthorized, shows access denied message
 *
 * Note: When Supabase is not configured, allows access (dev mode)
 */
export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { user, isLoading, signOut } = useSupabaseAuth();
  const [isChecking, setIsChecking] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    // If Supabase is not configured, allow access (dev mode)
    if (!isSupabaseConfigured) {
      setIsAuthorized(true);
      setIsChecking(false);
      return;
    }

    // Wait for auth state to load (with timeout safety)
    if (isLoading) {
      const timeoutId = setTimeout(() => {
        console.warn("ProtectedRoute: Auth loading timeout after 3 seconds");
        setIsChecking(false);
        setIsAuthorized(false);
      }, 3000);
      return () => clearTimeout(timeoutId);
    }

    setIsChecking(false);

    // Check if user is authenticated
    if (!user) {
      const search = searchParams.toString();
      const returnUrl = encodeURIComponent(pathname + (search ? `?${search}` : ""));
      router.replace(`/login?redirect=${returnUrl}`);
      return;
    }

    // User is authenticated, check email domain
    if (isAuthorizedEmail(user.email)) {
      setIsAuthorized(true);
    } else {
      setIsAuthorized(false);
    }
  }, [user, isLoading, router, pathname, searchParams]);

  // Loading state - show spinner
  if (isChecking) {
    return (
      <Flex minH="100vh" align="center" justify="center" bg="bg.canvas">
        <VStack gap="4">
          <Spinner size="xl" color="blue.500" />
          <Text color="gray.500">Verifying access...</Text>
        </VStack>
      </Flex>
    );
  }

  // Not authenticated (redirect handled in useEffect)
  if (!user) {
    return null;
  }

  // Unauthorized email domain
  if (!isAuthorized && user) {
    return (
      <Flex minH="100vh" align="center" justify="center" bg="bg.subtle">
        <Box
          maxW="md"
          w="full"
          p="8"
          bg="bg.canvas"
          borderRadius="lg"
          shadow="md"
          textAlign="center"
        >
          <VStack gap="6">
            <Icon color="red.500">
              <Lock size={64} weight="fill" />
            </Icon>

            <Box>
              <Heading size="lg" mb="2">Access Denied</Heading>
              <Text color="fg.muted">
                This page is restricted to team members only.
              </Text>
              <Text fontSize="sm" color="fg.muted" mt="2">
                Signed in as: <Text as="span" fontWeight="medium">{user.email}</Text>
              </Text>
            </Box>

            <VStack gap="3" width="full">
              <Button
                onClick={() => router.push("/")}
                width="full"
                variant="outline"
              >
                <Icon mr="2">
                  <House size={18} />
                </Icon>
                Back to Home
              </Button>
              <Button
                colorPalette="red"
                onClick={signOut}
                width="full"
              >
                Sign Out
              </Button>
            </VStack>
          </VStack>
        </Box>
      </Flex>
    );
  }

  // Authorized - render children
  return <>{children}</>;
}
