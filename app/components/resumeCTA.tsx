import { Badge, Box, Button, Container, Grid, Heading, Text, VStack } from "@chakra-ui/react";

export const ResumeCTA = () => (
    <Box margin="0 auto">
        <Container maxW="6xl" bg="rgba(16, 37, 67, 1)" py={{ base: 16, md: 20 }} px={{ base: 8, md: 16 }} borderRadius="16px" mb={{ base: 16 }}>
            <VStack>
                <Heading
                    as="h2"
                    fontSize={{ base: '4xl' }}
                    maxW={{ md: '6xl' }}
                    mx="auto"
                    lineHeight="tighter"
                    fontWeight="bold"
                    color="white"
                    textAlign="center"
                    mb={4}
                >
                    Your Resume, Reinvented by AI
                </Heading>
                <Text
                    fontSize={{ base: 'md', md: 'xl' }}
                    fontWeight="500"
                    color="white"
                    textAlign="center"
                    maxW={{ md: '4xl' }}
                    mx="auto"
                    lineHeight="relaxed"
                    mb={8}
                >
                    Hirenest uses AI to design dynamic resumes that adapt to your skills, role, and industry. helping you stand out in every application.
                </Text>
                <Button
                    size={{ base: 'md', md: 'xl' }}
                    borderRadius="full"
                    background="linear-gradient(90deg, #0071fb 0%, #b000ea 100%)"
                    color="white"
                    fontWeight="medium"
                    minW={{ base: 'auto', md: '300px' }}
                    _hover={{
                        background: 'linear-gradient(90deg, #0071fb 0%, #b000ea 100%)',
                        opacity: 0.9,
                    }}
                >
                    Try the AI Resume Builder
                </Button>
            </VStack>
        </Container>
        <Container maxW="6xl" p={0} mb={{ base: 16 }}>

            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4}>
                <Box bg="rgba(70, 62, 254, 1)" borderRadius="24px" p={8}>
                    <Badge mb={12} color="rgba(42, 63, 94, 1)" shadow={'0px 4px 13px 0px rgba(0, 0, 0, 0.13)'} bg="white" borderRadius="full" px={5} py={3} fontSize={{ base: 'sm', md: 'md' }} fontWeight="medium">
                        Smart AI Feature
                    </Badge>
                    <Heading
                        as="h3"
                        fontSize={{ base: '2xl', md: '3xl' }}
                        fontWeight="bold"
                        color="white"
                        textAlign="left"
                        mb={4}
                    >
                        AI Matching Algorithm
                    </Heading>
                    <Text
                        fontSize={{ base: 'md', md: 'xl' }}
                        fontWeight="500"
                        color="white"
                        textAlign="left"
                        maxW={{ md: '4xl' }}
                        mx="auto"
                        lineHeight="relaxed"
                        mb={8}
                    >
                        Matches you with job opportunities based on real skills, experience, and career goals — not just keywords. It studies your profile, understands your strengths, and recommends the roles where you’re most likely to succeed.
                    </Text>
                    <Button
                        variant="outline"
                        color="white"
                        rounded="full"
                    >
                        Know More
                    </Button>
                </Box>

                <Box bg="rgba(175, 1, 234, 1)" borderRadius="24px" p={8}>
                    <Badge mb={12} color="rgba(42, 63, 94, 1)" shadow={'0px 4px 13px 0px rgba(0, 0, 0, 0.13)'} bg="white" borderRadius="full" px={5} py={3} fontSize={{ base: 'sm', md: 'md' }} fontWeight="medium">
                        Smart AI Feature
                    </Badge>
                    <Heading
                        as="h3"
                        fontSize={{ base: '2xl', md: '3xl' }}
                        fontWeight="bold"
                        color="white"
                        textAlign="left"
                        mb={4}
                    >
                        Skill Gap Insights
                    </Heading>
                    <Text
                        fontSize={{ base: 'md', md: 'xl' }}
                        fontWeight="500"
                        color="white"
                        textAlign="left"
                        maxW={{ md: '4xl' }}
                        mx="auto"
                        lineHeight="relaxed"
                        mb={8}
                    >
                        Shows exactly which skills you’re missing for your dream roles. Get personalized recommendations on what to learn next, helping you grow faster and stay ahead in your career.
                    </Text>
                    <Button
                        variant="outline"
                        color="white"
                        rounded="full"
                        mt={7}
                    >
                        Know More
                    </Button>
                </Box>
            </Grid>
        </Container>
        <Container maxW="6xl" bg="rgba(244, 244, 244, 1)" py={{ base: 12 }} px={{ base: 8 }} borderRadius="16px">

            <Grid templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }} gap={14}>
                <Box textAlign="center" display="flex" flexDirection="column" alignItems="center" justifyContent="center">

                    <Heading as="h3" fontSize={{ base: '3xl', md: '5xl' }} fontWeight="bold" color="rgba(42, 63, 94, 1)" textAlign="left" mb={4}>
                        100K+
                    </Heading>
                    <Text fontSize={{ base: 'md', md: 'xl' }} fontWeight="500" color="rgba(42, 63, 94, 1)" textAlign="center" maxW={{ md: '4xl' }} mx="auto" lineHeight="relaxed">
                        Skill Assessments <br /> Taken
                    </Text>
                </Box>
                <Box textAlign="center" display="flex" flexDirection="column" alignItems="center" justifyContent="center">

                    <Heading as="h3" fontSize={{ base: '3xl', md: '5xl' }} fontWeight="bold" color="rgba(42, 63, 94, 1)" textAlign="left" mb={4}>
                        85%
                    </Heading>
                    <Text fontSize={{ base: 'md', md: 'xl' }} fontWeight="500" color="rgba(42, 63, 94, 1)" textAlign="center" maxW={{ md: '4xl' }} mx="auto" lineHeight="relaxed">
                        Users Got Interview Calls Faster
                    </Text>
                </Box>
                <Box textAlign="center" display="flex" flexDirection="column" alignItems="center" justifyContent="center">

                    <Heading as="h3" fontSize={{ base: '3xl', md: '5xl' }} fontWeight="bold" color="rgba(42, 63, 94, 1)" textAlign="left" mb={4}>
                        3x
                    </Heading>
                    <Text fontSize={{ base: 'md', md: 'xl' }} fontWeight="500" color="rgba(42, 63, 94, 1)" textAlign="center" maxW={{ md: '4xl' }} mx="auto" lineHeight="relaxed">
                        Faster Hiring <br /> With AI
                    </Text>
                </Box>
                <Box textAlign="center" display="flex" flexDirection="column" alignItems="center" justifyContent="center">

                    <Heading as="h3" fontSize={{ base: '3xl', md: '5xl' }} fontWeight="bold" color="rgba(42, 63, 94, 1)" textAlign="left" mb={4}>
                    50K+
                    </Heading>
                    <Text fontSize={{ base: 'md', md: 'xl' }} fontWeight="500" color="rgba(42, 63, 94, 1)" textAlign="center" maxW={{ md: '4xl' }} mx="auto" lineHeight="relaxed">
                    Verified Job <br /> Listings
                    </Text>
                </Box>
            </Grid>
        </Container>
    </Box>
)