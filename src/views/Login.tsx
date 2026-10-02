import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { isSupabaseConfigured } from "@/src/utils/supabaseClient";
import { useSupabaseAuth } from "@/src/context/SupabaseAuthContext";
import { isAuthorizedEmail, getUnauthorizedMessage } from "@/src/utils/authValidation";
import {
  Box,
  VStack,
  HStack,
  Text,
  Heading,
  Button,
  Input,
  Field,
  Fieldset,
  Link as ChakraLink,
  Icon,
  Flex,
  Container,
  AbsoluteCenter,
  Separator,
} from "@chakra-ui/react";
import { Shield, Lock, ArrowRight } from "@phosphor-icons/react";

export default function Login() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user, isLoading, signIn, signInWithOAuth } = useSupabaseAuth();

  // Get redirect path from query params, default to "/dashboard"
  const redirectTo = searchParams?.get("redirect") || "/dashboard";

  // Form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const [isUnauthorized, setIsUnauthorized] = useState(false);

  // Validate email domain - only @tinycheque.com allowed
  const isValidTinychequeEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@tinycheque\.com$/i;
    return emailRegex.test(email);
  };

  // Check if email is valid when it changes
  useEffect(() => {
    if (email && !isValidTinychequeEmail(email)) {
      setEmailError("Only @tinycheque.com email addresses are allowed");
    } else {
      setEmailError(null);
    }
  }, [email]);

  const isFormValid = email && password && isValidTinychequeEmail(email) && !emailError;

  // Redirect if already authenticated and authorized
  useEffect(() => {
    if (!isSupabaseConfigured) {
      setIsChecking(false);
      return;
    }

    if (!isLoading) {
      if (user) {
        if (isAuthorizedEmail(user.email)) {
          router.replace(redirectTo);
        } else {
          setIsUnauthorized(true);
          setIsChecking(false);
        }
      } else {
        setIsChecking(false);
      }
    }
  }, [user, isLoading, router, redirectTo]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const { error } = await signIn(email, password);

    if (error) {
      setError(error.message || "Failed to sign in");
    }
    // If successful, the auth state change will trigger redirect via useEffect

    setIsSubmitting(false);
  };

  const handleOAuthSignIn = async (provider: "google" | "github") => {
    setError(null);
    await signInWithOAuth(provider);
  };

  // Loading state while checking authentication
  if (isChecking || isLoading) {
    return (
      <Container maxW="md" py="20">
        <AbsoluteCenter axis="both">
          <VStack gap="4">
            <Icon color="colorPalette.fg">
              <Shield size={48} weight="duotone" />
            </Icon>
            <Text color="fg.muted">Verifying access...</Text>
          </VStack>
        </AbsoluteCenter>
      </Container>
    );
  }

  // Unauthorized state
  if (isUnauthorized && user) {
    return (
      <Container maxW="md" py="20">
        <VStack gap="6" align="stretch">
          <Box textAlign="center">
            <Icon color="red.fg" mb="4">
              <Lock size={64} weight="fill" />
            </Icon>
            <Heading size="lg" mb="2">Access Denied</Heading>
            <Text color="fg.muted">
              {getUnauthorizedMessage(user.email)}
            </Text>
            <Text fontSize="sm" color="fg.muted" mt="2">
              Signed in as: <Text as="span" fontWeight="medium">{user.email}</Text>
            </Text>
          </Box>
          <HStack justify="center">
            <Button variant="ghost" onClick={() => router.push("/")}>
              Back to Home
            </Button>
            <Button
              colorPalette="red"
              onClick={() => window.location.href = "/"}
            >
              Sign Out
            </Button>
          </HStack>
        </VStack>
      </Container>
    );
  }

  // Supabase not configured
  if (!isSupabaseConfigured) {
    return (
      <Container maxW="md" py="20">
        <VStack gap="6" align="stretch">
          <Box textAlign="center">
            <Icon color="orange.fg" mb="4">
              <Shield size={64} weight="duotone" />
            </Icon>
            <Heading size="lg" mb="2">Authentication Not Configured</Heading>
            <Text color="fg.muted">
              Supabase authentication is not configured. Please set up the required environment variables.
            </Text>
          </Box>
          <Box bg="bg.subtle" p="4" borderRadius="md">
            <Text fontSize="sm" color="fg.muted" fontFamily="mono">
              NEXT_PUBLIC_SUPABASE_URL<br />
              NEXT_PUBLIC_SUPABASE_ANON_KEY
            </Text>
          </Box>
          <Button onClick={() => router.push("/")} alignSelf="center">
            Back to Home
          </Button>
        </VStack>
      </Container>
    );
  }

  // Main login form - Beautiful, centered design
  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bg="linear-gradient(135deg, #f5f7fa 0%, #e4e8ec 100%)"
      px="4"
    >
      <Box
        maxW="480px"
        width="full"
        bg="white"
        borderRadius="2xl"
        shadow="xl"
        p="10"
        borderWidth="1px"
        borderColor="gray.200"
      >
        <VStack gap="8" align="stretch">
          {/* Header with Logo */}
          <Box textAlign="center">
            <Flex justifyContent="center" mb="6">
              <img src="/seologo.svg" alt="SEOengine Logo" width={250} height="auto" />
            </Flex>
            <Heading as={'h1'} size="3xl" mb="3" fontWeight="bold" color="#1a202c">
              Welcome Back
            </Heading>
            <Text fontSize="lg" color="gray.600">
              Sign in to access your dashboard
            </Text>
          </Box>

          {/* Login Form */}
          <form onSubmit={handleSubmit}>
            <VStack gap="5" align="stretch">
              {/* General error message */}
              {error && (
                <Box bg="red.50" borderRadius="lg" p="3" borderWidth="1px" borderColor="red.200" textAlign="center">
                  <Text color="red.600" fontSize="sm" fontWeight="medium">
                    {error}
                  </Text>
                </Box>
              )}

              <Field.Root>
                <Field.Label fontSize="md" fontWeight="600" color="#2d3748">
                  Email Address
                </Field.Label>
                <Input
                  type="email"
                  placeholder="you@tinycheque.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  size="lg"
                  fontSize="md"
                  px="4"
                  py="3"
                  borderRadius="lg"
                  borderWidth="2px"
                  borderColor={emailError ? "red.300" : "gray.200"}
                  _focus={{ borderColor: emailError ? "red.400" : "#4241ff", boxShadow: "0 0 0 3px rgba(2, 62, 138, 0.1)" }}
                />
                {emailError && (
                  <Text color="red.500" fontSize="sm" mt="1" fontWeight="medium">
                    ⚠️ {emailError}
                  </Text>
                )}
              </Field.Root>

              <Field.Root>
                <Field.Label fontSize="md" fontWeight="600" color="#2d3748">
                  Password
                </Field.Label>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  size="lg"
                  fontSize="md"
                  px="4"
                  py="3"
                  borderRadius="lg"
                  borderWidth="2px"
                  borderColor="gray.200"
                  _focus={{ borderColor: "#4241ff", boxShadow: "0 0 0 3px rgba(2, 62, 138, 0.1)" }}
                />
              </Field.Root>

              <Button
                bg="#4241ff"
                color="white"
                size="lg"
                width="full"
                type="submit"
                disabled={!isFormValid || isSubmitting}
                fontSize="lg"
                fontWeight="semibold"
                py="4"
                borderRadius="lg"
                _hover={{ bg: !isFormValid ? "#4241ff" : "#023068" }}
                _active={{ bg: "#012855" }}
                mt="2"
                opacity={!isFormValid ? 0.6 : 1}
                cursor={!isFormValid ? "not-allowed" : "pointer"}
              >
                <HStack gap="2">
                  <Text>{isSubmitting ? "Signing in..." : "Sign In"}</Text>
                  {!isSubmitting && (
                    <Icon>
                      <ArrowRight weight="bold" />
                    </Icon>
                  )}
                </HStack>
              </Button>
            </VStack>
          </form>

          {/* Footer Info */}
          <Box
            bg="blue.50"
            borderRadius="lg"
            p="4"
            textAlign="center"
            borderWidth="1px"
            borderColor="blue.100"
          >
            <Text fontSize="sm" color="blue.700" fontWeight="medium">
              🔒 Only Tinycheque employees can access
            </Text>
          </Box>

          {/* Back Link */}
          <Text textAlign="center" fontSize="sm" color="gray.600">
            <ChakraLink
              href="/"
              onClick={(e) => {
                e.preventDefault();
                router.push("/blog");
              }}
              color="#4241ff"
              fontWeight="medium"
              display="inline-flex"
              alignItems="center"
              gap="1"
            >
              ← Back to Home
            </ChakraLink>
          </Text>
        </VStack>
      </Box>
    </Flex>
  );
}
