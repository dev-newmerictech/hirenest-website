'use client';

import { useState, useMemo } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Input,
  SimpleGrid,
  Button,
  Stack,
  Badge,
  Link,
  Flex,
  Spacer,
  Accordion,
  Span
} from '@chakra-ui/react';
import { LuSearch } from 'react-icons/lu';
import NextLink from 'next/link';
import { ChevronRight } from 'lucide-react';
import { SectionHeader } from '@/src/components/blocks/faqs/faq-with-inline-headline/section-header';

// Client-side data - would normally import from data files
const allTerms = [
  { title: "Algorithm", slug: "algorithm", category: "A", definition: "A step-by-step procedure or formula for solving a problem." },
  { title: "Artificial General Intelligence (AGI)", slug: "artificial-general-intelligence", category: "A", definition: "Hypothetical AI with human-level cognitive abilities across all domains." },
  { title: "Artificial Intelligence (AI)", slug: "artificial-intelligence", category: "A", definition: "The simulation of human intelligence processes by computer systems." },
  { title: "Attention Mechanism", slug: "attention-mechanism", category: "A", definition: "Allows models to focus on specific parts of input data when producing output." },
  { title: "Augmented Intelligence", slug: "augmented-intelligence", category: "A", definition: "AI systems designed to enhance human capabilities rather than replace them." },
  { title: "Autoencoder", slug: "autoencoder", category: "A", definition: "A neural network that learns to copy its input to its output." },
  { title: "Backpropagation", slug: "backpropagation", category: "B", definition: "Method for calculating gradients to train neural networks." },
  { title: "Bias", slug: "bias", category: "B", definition: "Systematic error producing unfair outcomes in AI models." },
  { title: "Big Data", slug: "big-data", category: "B", definition: "Extremely large datasets analyzed to reveal patterns and trends." },
  { title: "Bot", slug: "bot", category: "B", definition: "Software that runs automated tasks over the internet." },
  { title: "Chatbot", slug: "chatbot", category: "C", definition: "Computer program designed to simulate conversation with human users." },
  { title: "Computer Vision", slug: "computer-vision", category: "C", definition: "AI field enabling computers to interpret and understand visual information." },
  { title: "Convolutional Neural Network (CNN)", slug: "convolutional-neural-network", category: "C", definition: "Neural network architecture effective for image recognition tasks." },
  { title: "Cost Function", slug: "cost-function", category: "C", definition: "Measures difference between model predictions and actual values." },
  { title: "Data Augmentation", slug: "data-augmentation", category: "D", definition: "Techniques to increase training data diversity through transformations." },
  { title: "Data Mining", slug: "data-mining", category: "D", definition: "Discovering patterns in large data sets using various methods." },
  { title: "Deep Learning", slug: "deep-learning", category: "D", definition: "Machine learning using multi-layered neural networks." },
  { title: "Diffusion Model", slug: "diffusion-model", category: "D", definition: "Generative model that learns by reversing a noise diffusion process." },
  { title: "Embedding", slug: "embedding", category: "E", definition: "Representation of data as vectors in continuous space." },
  { title: "Epoch", slug: "epoch", category: "E", definition: "One complete pass through the entire training dataset." },
  { title: "Ethical AI", slug: "ethical-ai", category: "E", definition: "AI designed to be fair, transparent, and respectful of human values." },
  { title: "Expert System", slug: "expert-system", category: "E", definition: "System emulating human expert decision-making." },
  { title: "Feature Engineering", slug: "feature-engineering", category: "F", definition: "Using domain knowledge to extract features from raw data." },
  { title: "Feature Extraction", slug: "feature-extraction", category: "F", definition: "Selecting and transforming raw data into representative features." },
  { title: "Fine-Tuning", slug: "fine-tuning", category: "F", definition: "Training a pre-trained model on a specific smaller dataset." },
  { title: "Foundation Model", slug: "foundation-model", category: "F", definition: "Large-scale model trained on broad data for various tasks." },
  { title: "GAN (Generative Adversarial Network)", slug: "generative-adversarial-network", category: "G", definition: "Two networks competing to generate synthetic data instances." },
  { title: "Generative AI", slug: "generative-ai", category: "G", definition: "AI systems capable of creating new content." },
  { title: "Gradient Descent", slug: "gradient-descent", category: "G", definition: "Optimization algorithm to minimize cost function." },
  { title: "Ground Truth", slug: "ground-truth", category: "G", definition: "Accurate expected output used as reference for training." },
  { title: "Hallucination", slug: "hallucination", category: "H", definition: "When AI generates false information presented as fact." },
  { title: "Hyperparameter", slug: "hyperparameter", category: "H", definition: "Parameter set before learning begins." },
  { title: "Hybrid AI", slug: "hybrid-ai", category: "H", definition: "Combines multiple AI approaches for better results." },
  { title: "Inference", slug: "inference", category: "I", definition: "Using trained models to make predictions on new data." },
  { title: "Intelligent Agent", slug: "intelligent-agent", category: "I", definition: "Autonomous entity observing environment and taking actions." },
  { title: "Interpretability", slug: "interpretability", category: "I", definition: "Degree to which humans can understand AI decisions." },
  { title: "IoT (Internet of Things)", slug: "internet-of-things", category: "I", definition: "Network of physical objects with sensors and software." },
  { title: "Joint Probability", slug: "joint-probability", category: "J", definition: "Likelihood of multiple events occurring simultaneously." },
  { title: "K-Means Clustering", slug: "k-means-clustering", category: "K", definition: "Unsupervised algorithm partitioning data into K clusters." },
  { title: "Knowledge Base", slug: "knowledge-base", category: "K", definition: "Structured collection of facts for AI reasoning." },
  { title: "Knowledge Graph", slug: "knowledge-graph", category: "K", definition: "Network of entities and their relationships." },
  { title: "K-Nearest Neighbors (KNN)", slug: "k-nearest-neighbors", category: "K", definition: "Algorithm classifying based on similarity measures." },
  { title: "Large Language Model (LLM)", slug: "large-language-model", category: "L", definition: "AI model trained on vast text to understand and generate language." },
  { title: "Learning Rate", slug: "learning-rate", category: "L", definition: "Controls model changes during training." },
  { title: "Linear Regression", slug: "linear-regression", category: "L", definition: "Statistical method modeling variable relationships." },
  { title: "Logistic Regression", slug: "logistic-regression", category: "L", definition: "Statistical method for predicting binary outcomes." },
  { title: "Machine Learning (ML)", slug: "machine-learning", category: "M", definition: "Systems that learn from experience without explicit programming." },
  { title: "Model", slug: "model", category: "M", definition: "Mathematical representation of real-world processes." },
  { title: "Multimodal AI", slug: "multimodal-ai", category: "M", definition: "AI processing multiple data types simultaneously." },
  { title: "Natural Language Generation (NLG)", slug: "natural-language-generation", category: "N", definition: "Generating natural language from structured data." },
  { title: "Natural Language Processing (NLP)", slug: "natural-language-processing", category: "N", definition: "AI interaction between computers and human language." },
  { title: "Natural Language Understanding (NLU)", slug: "natural-language-understanding", category: "N", definition: "Machine comprehension of meaning in text or speech." },
  { title: "Neural Network", slug: "neural-network", category: "N", definition: "Computing system inspired by biological neural networks." },
  { title: "Normalization", slug: "normalization", category: "N", definition: "Rescaling data to standard range for training." },
  { title: "OCR (Optical Character Recognition)", slug: "ocr", category: "O", definition: "Converting document images into editable data." },
  { title: "One-Shot Learning", slug: "one-shot-learning", category: "O", definition: "Learning from only one or a few examples." },
  { title: "Overfitting", slug: "overfitting", category: "O", definition: "Model learning training data too well including noise." },
  { title: "Parameter", slug: "parameter", category: "P", definition: "Internal learned variables in a model." },
  { title: "Pattern Recognition", slug: "pattern-recognition", category: "P", definition: "Automated recognition of patterns in data." },
  { title: "Prompt", slug: "prompt", category: "P", definition: "Input provided to AI model to generate output." },
  { title: "Prompt Engineering", slug: "prompt-engineering", category: "P", definition: "Crafting prompts to get best AI results." },
  { title: "Preprocessing", slug: "preprocessing", category: "P", definition: "Preparing raw data for machine learning." },
  { title: "Pretrained Model", slug: "pretrained-model", category: "P", definition: "Model previously trained for use as starting point." },
  { title: "Quantization", slug: "quantization", category: "Q", definition: "Reducing precision to decrease model size." },
  { title: "Query", slug: "query", category: "Q", definition: "Request for information from AI system." },
  { title: "RAG (Retrieval-Augmented Generation)", slug: "retrieval-augmented-generation", category: "R", definition: "Enhancing LLMs with external information retrieval." },
  { title: "Recurrent Neural Network (RNN)", slug: "recurrent-neural-network", category: "R", definition: "Neural network designed for sequential data." },
  { title: "Reinforcement Learning", slug: "reinforcement-learning", category: "R", definition: "Learning through interaction with reward feedback." },
  { title: "ResNet (Residual Network)", slug: "resnet", category: "R", definition: "Deep learning architecture with skip connections." },
  { title: "Robotics", slug: "robotics", category: "R", definition: "Designing and building robots with AI." },
  { title: "Semi-Supervised Learning", slug: "semi-supervised-learning", category: "S", definition: "Using labeled and unlabeled data for training." },
  { title: "Sentiment Analysis", slug: "sentiment-analysis", category: "S", definition: "Determining emotional tone in text." },
  { title: "Supervised Learning", slug: "supervised-learning", category: "S", definition: "Learning from labeled training data." },
  { title: "Support Vector Machine (SVM)", slug: "support-vector-machine", category: "S", definition: "Algorithm finding optimal hyperplane for classification." },
  { title: "Synthetic Data", slug: "synthetic-data", category: "S", definition: "Artificially generated data mimicking real data." },
  { title: "Token", slug: "token", category: "T", definition: "Smallest unit of text processed by AI models." },
  { title: "Tokenization", slug: "tokenization", category: "T", definition: "Breaking text into tokens for processing." },
  { title: "Transfer Learning", slug: "transfer-learning", category: "T", definition: "Reusing model trained on one task for another." },
  { title: "Transformer", slug: "transformer", category: "T", definition: "Neural network using attention for sequential data." },
  { title: "Turing Test", slug: "turing-test", category: "T", definition: "Test of machine's ability to exhibit intelligent behavior." },
  { title: "Underfitting", slug: "underfitting", category: "U", definition: "Model too simple to capture data patterns." },
  { title: "Unsupervised Learning", slug: "unsupervised-learning", category: "U", definition: "Finding patterns in unlabeled data." },
  { title: "Validation Set", slug: "validation-set", category: "V", definition: "Data for tuning hyperparameters and preventing overfitting." },
  { title: "Vector Database", slug: "vector-database", category: "V", definition: "Database optimized for storing and querying vectors." },
  { title: "Virtual Assistant", slug: "virtual-assistant", category: "V", definition: "AI-powered agent performing tasks for users." },
  { title: "Vision Transformer (ViT)", slug: "vision-transformer", category: "V", definition: "Transformer architecture applied to computer vision." },
  { title: "Weak AI (Narrow AI)", slug: "weak-ai", category: "W", definition: "AI designed for specific tasks within limited domain." },
  { title: "Weight", slug: "weight", category: "W", definition: "Parameter determining connection strength in neural networks." },
  { title: "XAI (Explainable AI)", slug: "explainable-ai", category: "X", definition: "AI providing human-understandable explanations for decisions." },
  { title: "Zero-Shot Learning", slug: "zero-shot-learning", category: "Z", definition: "Learning to recognize objects never seen before." }
];

const alphabet = ['#', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const glossaryFaqs = [
  {
    question: "What is the difference between AI and Machine Learning?",
    answer: "AI is the broader concept of machines being able to carry out tasks in a way that we would consider 'smart'. Machine Learning is a subset of AI that focuses on giving computers the ability to learn from data without being explicitly programmed."
  },
  {
    question: "What is a Large Language Model (LLM)?",
    answer: "A Large Language Model is an AI system trained on massive amounts of text data that can understand and generate human-like text. Examples include GPT, Claude, and Gemini."
  },
  {
    question: "What is Prompt Engineering?",
    answer: "Prompt Engineering is the practice of designing and optimizing the input prompts given to AI models to get the best, most accurate, and most useful responses."
  },
  {
    question: "What's the difference between supervised and unsupervised learning?",
    answer: "Supervised learning uses labeled data where the correct answers are known, while unsupervised learning finds patterns in unlabeled data without predefined outcomes."
  }
];

export default function AIGlossaryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

  // Group terms by category
  const groupedTerms = useMemo(() => {
    const groups: Record<string, typeof allTerms> = {};

    for (const term of allTerms) {
      if (!groups[term.category]) {
        groups[term.category] = [];
      }
      groups[term.category].push(term);
    }

    return groups;
  }, []);

  // Filter terms based on search
  const filteredGroups = useMemo(() => {
    if (!searchQuery && !selectedLetter) {
      return groupedTerms;
    }

    const filtered: Record<string, typeof allTerms> = {};

    for (const [category, terms] of Object.entries(groupedTerms)) {
      const matchingTerms = terms.filter(term => {
        const matchesSearch = !searchQuery ||
          term.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          term.definition.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesLetter = !selectedLetter || term.category === selectedLetter;

        return matchesSearch && matchesLetter;
      });

      if (matchingTerms.length > 0) {
        filtered[category] = matchingTerms;
      }
    }

    return filtered;
  }, [groupedTerms, searchQuery, selectedLetter]);

  const availableCategories = Object.keys(filteredGroups).sort((a, b) => {
    if (a === '#') return 1;
    if (b === '#') return -1;
    return a.localeCompare(b);
  });

  const scrollToLetter = (letter: string) => {
    setSelectedLetter(letter === selectedLetter ? null : letter);
  };

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    setSelectedLetter(null);
  };

  const [showAll, setShowAll] = useState(false)
  return (
    <Box>
      {/* Hero Section */}
      <Box bg="white" py={{ base: '16', md: '24' }}>
        <Container maxW="7xl">
          <Stack align="center" textAlign="center" gap="6">
            <Text
              fontSize="sm" fontWeight="600" color="#4241ff" textTransform="uppercase" letterSpacing="wider"
              textAlign={{ base: 'center', lg: 'left' }}
              mt={{ base: '16', }}
            >
              AI Knowledge Hub
            </Text>
            <Heading
              as="h1"
              fontSize={{ base: '4xl', md: '6xl' }}
              fontWeight="800"
              color="gray.900"
              lineHeight="1.1"
            >
              AI <Text as="span" color="#4241ff">Knowledge Hub</Text>
            </Heading>
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color="gray.600"
              maxW="3xl"
            >
              Your comprehensive guide to Artificial Intelligence, Machine Learning, and Deep Learning terminology. Explore 80+ technical terms explained simply.
            </Text>

            {/* Search Bar */}
            <Box w={{ base: 'full', md: '2xl' }} position="relative">
              <Input
                placeholder="Search AI terms..."
                size="2xl"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                pl="12"
                bg="white"
                borderColor="gray.300"
                rounded="full"
                _focus={{ borderColor: '#4241ff', boxShadow: '0 0 0 3px rgba(66, 65, 255, 0.1)' }}
              />
              <Box
                position="absolute"
                left="4"
                top="8"
                transform="translateY(-50%)"
                color="gray.400"
              >
                <LuSearch size={20} />
              </Box>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* A-Z Navigation */}
      <Box
        borderBottom="1px solid"
        borderColor="gray.200"
        position="sticky"
        top="84px"
        zIndex="10"
        py="4"
        bg="#0071fb"
      >
        <Container maxW="full">
          <Flex
            gap="2"
            flexWrap="wrap"
            justify="center"
          >
            {alphabet.map((letter) => {
              const isAvailable = availableCategories.includes(letter);
              const isActive = selectedLetter === letter;

              return (
                <Button
                  key={letter}
                  size="md"
                  variant="ghost"
                  minW="10"
                  h="10"
                  rounded="md"
                  fontWeight={isActive ? '700' : '500'}
                  color={isActive ? '#0071fb' : isAvailable ? '#fff' : '#fff'}
                  bg={isActive ? '#fff' : undefined}
                  _hover={
                    isAvailable
                      ? { bg: isActive ? '#0071fb' : '#fff' }
                      : undefined
                  }
                  cursor={'pointer'}
                  onClick={() => scrollToLetter(letter)}
                >
                  {letter}
                </Button>
              );
            })}
          </Flex>
        </Container>
      </Box>

      {/* Terms Grid */}
      <Box bg="gray.50" py={{ base: '12', md: '16' }}>
        <Container maxW="7xl">
          {availableCategories.length === 0 ? (
            <Box textAlign="center" py="12">
              <Text color="gray.500" fontSize="lg">
                No terms found matching your search.
              </Text>
            </Box>
          ) : (
            <Stack gap="12">
              {availableCategories.map((category) => (
                <Box key={category}>
                  <Heading
                    as="h2"
                    fontSize="3xl"
                    fontWeight="700"
                    color="gray.900"
                    mb="6"
                    id={`letter-${category}`}
                  >
                    {category}
                  </Heading>
                  <SimpleGrid
                    columns={{ base: 1, md: 2, lg: 3 }}
                    gap="4"
                  >
                    {filteredGroups[category].map((term) => (
                      <Link
                        key={term.slug}
                        href={`/ai-glossary/${term.slug}`}
                        _hover={{ textDecoration: 'none' }}
                      >
                        <Box
                          p="5"
                          bg="white"
                          rounded="lg"
                          borderWidth="1px"
                          borderColor="gray.200"
                          transition="all 0.2s"
                          _hover={{
                            borderColor: '#F77F00',
                            shadow: 'md',
                            transform: 'translateY(-2px)'
                          }}
                          h="full"
                        >
                          <Heading
                            as="h3"
                            fontSize={{ base: 'lg', md: 'xl' }}
                            fontWeight="600"
                            color="gray.900"
                            mb="2"
                          >
                            {term.title}
                          </Heading>
                          <Text
                            fontSize={{ base: 'sm', md: 'md' }}
                            color="gray.600"
                            lineHeight="tall"
                          >
                            {term.definition}
                          </Text>
                          <Link
                            href={`/ai-glossary/${term.slug}`}
                            _hover={{ textDecoration: 'none' }}
                            display="flex"
                            alignItems="center"
                            gap="2"
                            mt="2"
                            color="#0071fb"
                            fontSize="sm"
                          >
                            Read More <ChevronRight size={20} />
                          </Link>
                        </Box>
                      </Link>
                    ))}
                  </SimpleGrid>
                </Box>
              ))}
            </Stack>
          )}
        </Container>
      </Box>

      {/* CTA Section */}
      <Box bg="#0071fb" py={{ base: '12', md: '16' }}>
        <Container maxW="7xl">
          <Stack align="center" textAlign="center" gap="6">
            <Heading
              as="h2"
              fontSize={{ base: '2xl', md: '3xl' }}
              fontWeight="700"
              color="white"
            >
              Explore AI-Powered Hiring
            </Heading>
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color="white"
              colorPalette="white"
              maxW="2xl"
              opacity="0.95"
            >
              Discover how Hirenest uses AI to connect job seekers with employers through intelligent matching and assessments.
            </Text>
            <Flex gap="4" direction={{ base: 'column', sm: 'row' }}>
              <NextLink href="/job-seeker">
                <Button
                  as="a"
                  size="lg"
                  bg="white"
                  color="#0071fb"
                  fontWeight="600"
                  rounded="full"
                  _hover={{ bg: 'gray.100' }}
                >
                  For Job Seekers
                </Button>
              </NextLink>
              <NextLink href="/job-provider">
                <Button
                  as="a"
                  size="lg"
                  bg="transparent"
                  color="white"
                  fontWeight="600"
                  rounded="full"
                  border="2px solid"
                  borderColor="white"
                  _hover={{ bg: 'rgba(255, 255, 255, 0.1)' }}
                >
                  For Employers
                </Button>
              </NextLink>
            </Flex>
          </Stack>
        </Container>
      </Box>

      <Box mx="auto" bg="white">
        <Container py={{ base: '16' }} maxW="7xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: '12', lg: '24' }}>
            <SectionHeader
              headline="Got Questions? We've Got Answers!"
              description=""
              tagline="Support"
              alignItems="start"
              maxW="lg"
            >
            </SectionHeader>

            <Stack gap="8" flex="1">
              <Accordion.Root multiple defaultValue={[glossaryFaqs[0].question]}>
                {glossaryFaqs.slice(0, showAll ? glossaryFaqs.length : 5).map(({ question, answer }) => (
                  <Accordion.Item key={question} value={question}>
                    <Accordion.ItemTrigger fontSize={{ base: 'lg', md: 'xl' }} color="#000" fontWeight={'600'} py="4">
                      <Span flex="1">{question}</Span>
                      <Accordion.ItemIndicator />
                    </Accordion.ItemTrigger>
                    <Accordion.ItemContent fontSize={{ base: 'md', md: 'lg' }} color="#6e6e73" fontWeight={'400'}>
                      <Accordion.ItemBody>{answer}</Accordion.ItemBody>
                    </Accordion.ItemContent>
                  </Accordion.Item>
                ))}
              </Accordion.Root>
              <Button
                fontSize={{ base: 'md', md: 'lg' }}
                alignSelf="center"
                variant="outline"
                colorPalette="gray"
                onClick={() => setShowAll(true)}
                display={showAll ? 'none' : 'flex'}
              >
                Show more FAQs
              </Button>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
}
