'use client';

import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  Heading,
  HStack,
  VStack,
  Separator,
  Flex,
  Button,
} from '@chakra-ui/react';
import Image from 'next/image';
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaYoutube,
  FaInstagram,
} from 'react-icons/fa';
import { LuShield, LuLock, LuCheck } from 'react-icons/lu';

const footerLinks = {
  features: {
    title: 'Job Seeker Features',
    links: [
      { label: 'AI Resume Builder', href: '/ai-resume-builder' },
      { label: 'Smart Job Matching', href: '/smart-job-matching' },
      { label: 'Career Insights Dashboard', href: '/career-insights' },
      { label: '350+ Skill Assessments', href: '/skill-assessments' },
      { label: 'Profile Optimization Tools', href: '/profile-optimization' },
      { label: 'Fast-Track Applications', href: '/fast-track-applications' },
    ],
  },
  resources: {
    title: 'Job Provider Features',
    links: [
      { label: 'AI Candidate Ranking', href: '/ai-candidate-ranking' },
      { label: 'Unlimited Skill Assessments', href: '/skill-assessments' },
      // { label: 'Video Interview Platform', href: '/video-interviews' },
      { label: 'Hiring Analytics Dashboard', href: '/hiring-analytics' },
      { label: 'Verified Candidate Profiles', href: '/verified-candidates' },
      { label: 'Custom Assessment Builder', href: '/custom-assessments' },
      { label: 'Team Collaboration Tools', href: '/team-collaboration' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '/careers' },
    ],
  },
  legal: {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms-of-service' },
      { label: 'Refund Policy', href: '/refund-policy' },
      { label: 'Cookie Policy', href: '/cookie-policy' },
      { label: 'Security', href: '/security' },
    ],
  },
};

const socialLinks = [
  { icon: FaLinkedin, href: '', label: 'LinkedIn' },
  { icon: FaTwitter, href: '', label: 'Twitter' },
  { icon: FaYoutube, href: '', label: 'YouTube' },
];

const trustBadges = [
  { icon: LuCheck, text: '99.9% Uptime SLA' },
  { icon: LuShield, text: 'GDPR Compliant' },
  { icon: LuLock, text: 'Bank-Grade Encryption' },
];

export function Block() {
  return (
    <Box bg="bg.muted" pt={{ base: '10' }} pb="8">
      <Container maxW="9xl">
        <Stack gap={{ base: '10', md: '10' }}>
          {/* Main Footer Content */}
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 5 }} gap={{ base: '8', md: '6' }}>
            {/* Products Column */}
            <VStack align="flex-start" gap="4" ml={10}>

              <Image src="/HpLogo.svg" alt="Hirenest" width={200} height={100} />
              <Text
                fontSize={{ base: 'md', md: 'lg' }} color="fg.muted">
                Connect with opportunities and talent through validated skills and AI-powered matching.
              </Text>
            </VStack>

            {/* Features Column */}
            <VStack align="flex-start" gap="4" ml={10}>
              <Heading fontSize={{ base: 'md', md: 'lg' }} fontWeight="700">
                {footerLinks.features.title}
              </Heading>
              <Stack gap="3">
                {footerLinks.features.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    fontSize={{ base: 'md' }}
                    color="fg.muted"
                    _hover={{ color: 'brand.500' }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Stack>
            </VStack>

            {/* Resources Column */}
            <VStack align="flex-start" gap="4" ml={10}>
              <Heading fontSize={{ base: 'md', md: 'lg' }} fontWeight="700">
                {footerLinks.resources.title}
              </Heading>
              <Stack gap="3">
                {footerLinks.resources.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    fontSize={{ base: 'md' }}
                    color="fg.muted"
                    _hover={{ color: 'brand.500' }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Stack>
            </VStack>

            {/* Company Column */}
            <VStack align="flex-start" gap="4" ml={10}>
              <Heading fontSize={{ base: 'md', md: 'lg' }} fontWeight="700">
                {footerLinks.company.title}
              </Heading>
              <Stack gap="3">
                {footerLinks.company.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    fontSize={{ base: 'md' }}
                    color="fg.muted"
                    _hover={{ color: 'brand.500' }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Stack>
            </VStack>

            {/* Legal Column */}
            <VStack align="flex-start" gap="4" ml={10}>
              <Heading fontSize={{ base: 'md', md: 'lg' }} fontWeight="700">
                {footerLinks.legal.title}
              </Heading>
              <Stack gap="3">
                {footerLinks.legal.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    fontSize={{ base: 'md' }}
                    color="fg.muted"
                    _hover={{ color: 'brand.500' }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Stack>
            </VStack>
          </SimpleGrid>

          <Separator p={0} m={0} gap={5} />

          {/* Bottom Section */}
          <Stack
            gap="6"
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
            align={{ base: 'flex-start', md: 'center' }}
          >
            {/* Copyright & Trust Badges */}
            <Stack gap="4" flex="1" ml={10}>
              <Text fontSize={{ base: 'md' }} color="fg.muted">
                © 2026 Hirenest.ai | Hire people who can actually do the job.
              </Text>
            </Stack>

            {/* Social Links and Join Our Community Button */}
            <HStack gap="4" ml={'10'} mr={'10'} flexWrap="wrap">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  _focus={
                    {
                      border: 'none'
                    }
                  }
                >
                  <Box
                    as={social.icon}
                    fontSize={{ base: 'md', md: 'lg' }}
                    color="fg.muted"
                    _hover={{ color: 'brand.500' }}
                    transition="color 0.2s"
                  />
                </Link>
              ))}
            </HStack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
