'use client';

import { useParams, useRouter } from 'next/navigation';
import NextLink from 'next/link';
import { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Stack,
  Breadcrumb,
  Link as ChakraLink,
  Flex,
  Separator,
  Badge
} from '@chakra-ui/react';
import { LuHouse, LuArrowLeft } from 'react-icons/lu';

// Extended term data with full content
const termData: Record<string, {
  title: string;
  slug: string;
  category: string;
  definition: string;
  fullContent: string;
  related: string[];
}> = {
  "artificial-intelligence": {
    title: "Artificial Intelligence (AI)",
    slug: "artificial-intelligence",
    category: "A",
    definition: "The simulation of human intelligence processes by computer systems.",
    fullContent: `# Artificial Intelligence (AI)

## Definition
Artificial Intelligence (AI) is the simulation of human intelligence processes by computer systems, including learning, reasoning, and self-correction. It encompasses a broad range of technologies designed to perform tasks that typically require human intelligence.

## How AI Works
AI systems work by combining large datasets with intelligent, iterative processing algorithms. The system learns patterns and features from the data, which it then uses to make predictions or decisions about new data.

## Types of AI
- **Narrow AI**: Designed for specific tasks (e.g., voice assistants, recommendation systems)
- **General AI**: Hypothetical systems with human-level cognitive abilities across all domains
- **Superintelligent AI**: Theoretical AI that surpasses human intelligence

## Applications
- Healthcare: Disease diagnosis, drug discovery
- Finance: Fraud detection, algorithmic trading
- Transportation: Autonomous vehicles
- Customer Service: Chatbots and virtual assistants
- Manufacturing: Predictive maintenance, quality control

## Future Outlook
AI continues to advance rapidly, with developments in areas like generative AI, autonomous systems, and AI research assistance promising to transform industries and daily life.`,
    related: ["machine-learning", "deep-learning", "generative-ai"]
  },
  "machine-learning": {
    title: "Machine Learning (ML)",
    slug: "machine-learning",
    category: "M",
    definition: "A subset of AI that enables systems to learn and improve from experience without being explicitly programmed.",
    fullContent: `# Machine Learning (ML)

## Definition
Machine Learning is a subset of artificial intelligence that enables computer systems to learn and improve from experience without being explicitly programmed. It focuses on developing algorithms that can access data and learn from it.

## How Machine Learning Works
Machine learning algorithms build mathematical models based on sample data, known as "training data," in order to make predictions or decisions without being explicitly programmed to perform the task.

## Types of Machine Learning
1. **Supervised Learning**: Learning with labeled training data
2. **Unsupervised Learning**: Finding patterns in unlabeled data
3. **Reinforcement Learning**: Learning through trial and error with rewards
4. **Semi-Supervised Learning**: Combining labeled and unlabeled data

## Key Concepts
- Training data, validation data, and test data
- Features and labels
- Model evaluation metrics
- Overfitting and underfitting

## Applications
- Email spam filtering
- Image recognition
- Recommendation systems
- Fraud detection
- Medical diagnosis`,
    related: ["deep-learning", "supervised-learning", "unsupervised-learning"]
  },
  "deep-learning": {
    title: "Deep Learning",
    slug: "deep-learning",
    category: "D",
    definition: "A subset of machine learning that uses multi-layered neural networks to learn from vast amounts of data.",
    fullContent: `# Deep Learning

## Definition
Deep Learning is a subset of machine learning that uses artificial neural networks with many layers (hence "deep") to model and understand complex patterns in data.

## How Deep Learning Works
Deep learning models are built using neural networks with multiple hidden layers. Each layer extracts increasingly abstract features from the input data, allowing the model to learn hierarchical representations.

## Key Components
- Neural Networks: Interconnected layers of nodes
- Backpropagation: The algorithm for training neural networks
- Activation Functions: Non-linear transformations that enable learning complex patterns
- Optimizers: Algorithms that adjust network weights

## Popular Architectures
- **CNNs**: For image processing
- **RNNs**: For sequential data
- **Transformers**: For natural language processing
- **GANs**: For generative tasks

## Applications
- Computer vision and image recognition
- Natural language processing
- Speech recognition
- Autonomous driving
- Game playing (AlphaGo)`,
    related: ["neural-network", "convolutional-neural-network", "transformer", "machine-learning"]
  },
  "large-language-model": {
    title: "Large Language Model (LLM)",
    slug: "large-language-model",
    category: "L",
    definition: "A type of AI model trained on vast amounts of text data to understand and generate human-like text.",
    fullContent: `# Large Language Model (LLM)

## Definition
A Large Language Model is a type of artificial intelligence trained on massive amounts of text data to understand, generate, and manipulate human language at a sophisticated level.

## How LLMs Work
LLMs use transformer architecture to process text. They learn patterns, context, and relationships in language by predicting the next token in a sequence during training.

## Key Features
- **Natural Language Understanding**: Comprehending context and nuance
- **Text Generation**: Creating coherent, contextually relevant text
- **Few-Shot Learning**: Adapting to new tasks with minimal examples
- **Multimodal Capabilities**: Processing text, images, and more

## Popular LLMs
- GPT (Generative Pre-trained Transformer) series
- BERT and its variants
- Claude
- LLaMA family

## Applications
- Content creation and copywriting
- Code generation and assistance
- Language translation
- Question answering
- Summarization
- Conversational AI

## Limitations
- Hallucinations (generating false information)
- Knowledge cutoffs
- Bias in training data
- Lack of true understanding`,
    related: ["transformer", "token", "generative-ai", "natural-language-processing"]
  },
  "natural-language-processing": {
    title: "Natural Language Processing (NLP)",
    slug: "natural-language-processing",
    category: "N",
    definition: "The field of AI focused on the interaction between computers and human language.",
    fullContent: `# Natural Language Processing (NLP)

## Definition
Natural Language Processing is a branch of artificial intelligence that helps computers understand, interpret, and manipulate human language.

## How NLP Works
NLP systems use computational linguistics and machine learning to process and analyze large amounts of natural language data.

## Key NLP Tasks
- **Text Classification**: Categorizing documents
- **Named Entity Recognition**: Identifying people, places, organizations
- **Sentiment Analysis**: Determining emotional tone
- **Machine Translation**: Converting text between languages
- **Question Answering**: Extracting answers from text
- **Text Summarization**: Condensing long documents

## Modern Approaches
- **Rule-Based Systems**: Using linguistic rules
- **Statistical Models**: Probabilistic methods
- **Neural Networks**: Deep learning approaches
- **Transformer Models**: State-of-the-art performance

## Applications
- Search engines
- Voice assistants
- Translation services
- Spam filters
- Grammar checkers
- Chatbots`,
    related: ["natural-language-understanding", "natural-language-generation", "sentiment-analysis", "transformer"]
  },
  "generative-ai": {
    title: "Generative AI",
    slug: "generative-ai",
    category: "G",
    definition: "AI systems capable of creating new content, including text, images, audio, and video.",
    fullContent: `# Generative AI

## Definition
Generative AI refers to artificial intelligence systems that can create new content rather than simply analyzing or acting on existing data.

## How Generative AI Works
Generative models learn patterns from training data and then generate new, original content that resembles the training data but isn't identical.

## Types of Generative Models
- **Large Language Models**: Generate text
- **Diffusion Models**: Generate images
- **GANs**: Create realistic images and videos
- **Music Generation Models**: Create audio content
- **Video Generation**: Produce moving images

## Popular Generative AI Tools
- **Text**: ChatGPT, Claude, Gemini
- **Images**: DALL-E, Midjourney, Stable Diffusion
- **Audio**: ElevenLabs, Suno
- **Video**: Sora, Runway

## Applications
- Content creation (articles, marketing copy)
- Image generation and editing
- Code generation
- Music and audio production
- Video creation
- Product design

## Ethical Considerations
- Copyright and ownership
- Misinformation and deepfakes
- Bias in generated content
- Impact on creative industries`,
    related: ["diffusion-model", "generative-adversarial-network", "large-language-model"]
  },
  "computer-vision": {
    title: "Computer Vision",
    slug: "computer-vision",
    category: "C",
    definition: "A field of AI that enables computers to interpret and understand visual information from the world.",
    fullContent: `# Computer Vision

## Definition
Computer Vision is a field of artificial intelligence that enables computers and systems to derive meaningful information from digital images, videos, and other visual inputs.

## How Computer Vision Works
Computer vision systems use machine learning and deep learning models to process visual data, identifying patterns, objects, and features within images and videos.

## Key Tasks
- **Image Classification**: Identifying what's in an image
- **Object Detection**: Locating objects within an image
- **Segmentation**: Outlining objects at pixel level
- **Face Recognition**: Identifying people
- **Optical Character Recognition**: Reading text from images
- **Pose Estimation**: Detecting body positions

## Popular Architectures
- **CNNs**: Convolutional Neural Networks
- **ResNet**: Residual Networks
- **YOLO**: Real-time object detection
- **Vision Transformers**: Attention-based models

## Applications
- Self-driving cars
- Medical imaging diagnosis
- Facial recognition security
- Quality control in manufacturing
- Augmented reality
- Image search engines
- Agricultural monitoring`,
    related: ["convolutional-neural-network", "vision-transformer", "ocr"]
  },
  "retrieval-augmented-generation": {
    title: "RAG (Retrieval-Augmented Generation)",
    slug: "retrieval-augmented-generation",
    category: "R",
    definition: "A technique that enhances LLMs by retrieving relevant external information before generating responses.",
    fullContent: `# Retrieval-Augmented Generation (RAG)

## Definition
RAG is an AI framework that enhances large language models by retrieving relevant, up-to-date information from external knowledge sources before generating responses.

## How RAG Works
1. **Retrieval**: The system searches a knowledge base for relevant documents
2. **Augmentation**: Retrieved context is added to the user's query
3. **Generation**: The LLM generates a response using both the query and retrieved context

## Benefits of RAG
- **Current Information**: Access to up-to-date knowledge beyond training data
- **Reduced Hallucinations**: Grounded responses in retrieved facts
- **Source Attribution**: Can cite where information came from
- **Custom Knowledge**: Works with organization-specific data

## Components
- Vector database for semantic search
- Embedding models for document representation
- LLM for response generation
- Document processing pipeline

## Applications
- Customer support with product documentation
- Research assistants
- Legal document analysis
- Technical question answering
- Enterprise knowledge bases

## Best Practices
- Use quality, curated knowledge sources
- Implement effective chunking strategies
- Choose appropriate embedding models
- Design clear user interfaces for source attribution`,
    related: ["vector-database", "embedding", "large-language-model"]
  },
  "transformer": {
    title: "Transformer",
    slug: "transformer",
    category: "T",
    definition: "A neural network architecture that uses self-attention mechanisms to process sequential data efficiently.",
    fullContent: `# Transformer

## Definition
The Transformer is a neural network architecture introduced in 2017 that uses self-attention mechanisms to process sequential data more efficiently than previous architectures like RNNs.

## How Transformers Work
Transformers use attention mechanisms to weigh the importance of different parts of the input data when producing each part of the output, allowing for parallel processing of sequences.

## Key Components
- **Self-Attention**: Measuring relationships between all positions in a sequence
- **Multi-Head Attention**: Multiple attention mechanisms running in parallel
- **Position Encoding**: Understanding order in sequences
- **Feed-Forward Networks**: Processing attention outputs
- **Layer Normalization**: Stabilizing training

## Impact
Transformers revolutionized NLP and enabled:
- GPT and BERT language models
- Advanced machine translation
- Better text generation
- Efficient training on large datasets

## Applications Beyond Text
- Computer Vision (Vision Transformers)
- Protein folding prediction
- Time series forecasting
- Music generation

## Why Transformers Matter
- Parallel processing enables faster training
- Self-attention captures long-range dependencies
- Scalability to massive datasets
- Foundation for modern LLMs`,
    related: ["attention-mechanism", "large-language-model", "self-attention"]
  },
  "prompt-engineering": {
    title: "Prompt Engineering",
    slug: "prompt-engineering",
    category: "P",
    definition: "The art of crafting and optimizing prompts to get the best possible results from AI models.",
    fullContent: `# Prompt Engineering

## Definition
Prompt engineering is the practice of designing and optimizing input prompts to elicit the best possible responses from AI language models.

## Why It Matters
The quality of an AI model's output depends heavily on how the request is phrased. Good prompts lead to better, more accurate, and more useful responses.

## Key Techniques
- **Clear Instructions**: Be specific about what you want
- **Context Setting**: Provide relevant background information
- **Few-Shot Examples**: Show examples of desired output
- **Chain of Thought**: Ask the model to show its reasoning
- **Role Assignment**: Give the AI a specific role or persona
- **Output Formatting**: Specify desired format explicitly

## Example Frameworks

### CREATE Framework
- **C**ontext: Provide background
- **R**ole: Define AI's role
- **O**bjective: State the goal
- **E**xamples: Show desired outputs
- **T**one: Set the communication style
- **E**xport: Specify output format

### RTF Framework
- **R**ole: Who the AI should be
- **T**ask: What to do
- **F**ormat: How to present results

## Best Practices
- Iterate and refine prompts
- Test with variations
- Be specific and detailed
- Use examples for complex tasks
- Consider the model's knowledge cutoff

## Applications
- Content generation
- Code writing
- Data analysis
- Learning and tutoring
- Creative projects`,
    related: ["prompt", "large-language-model"]
  }
};

// Basic term info for all terms (for fallback)
const basicTerms: Record<string, { title: string; category: string; definition: string }> = {
  "algorithm": { title: "Algorithm", category: "A", definition: "A step-by-step procedure for solving problems." },
  "attention-mechanism": { title: "Attention Mechanism", category: "A", definition: "Allows models to focus on specific input parts." },
  "backpropagation": { title: "Backpropagation", category: "B", definition: "Method for calculating gradients to train networks." },
  "bias": { title: "Bias", category: "B", definition: "Systematic error producing unfair outcomes." },
  "chatbot": { title: "Chatbot", category: "C", definition: "Computer program simulating human conversation." },
  "convolutional-neural-network": { title: "Convolutional Neural Network (CNN)", category: "C", definition: "Neural network for image recognition." },
  "diffusion-model": { title: "Diffusion Model", category: "D", definition: "Generative model using noise diffusion." },
  "embedding": { title: "Embedding", category: "E", definition: "Data representation as continuous vectors." },
  "neural-network": { title: "Neural Network", category: "N", definition: "Computing system inspired by biological networks." },
  "supervised-learning": { title: "Supervised Learning", category: "S", definition: "Learning from labeled training data." },
  "unsupervised-learning": { title: "Unsupervised Learning", category: "U", definition: "Finding patterns in unlabeled data." },
  "reinforcement-learning": { title: "Reinforcement Learning", category: "R", definition: "Learning through reward-based feedback." },
  "token": { title: "Token", category: "T", definition: "Smallest unit of text processed by AI." },
  "vector-database": { title: "Vector Database", category: "V", definition: "Database for storing and querying vector embeddings." },
  "hallucination": { title: "Hallucination", category: "H", definition: "When AI generates false information as fact." },
  "fine-tuning": { title: "Fine-Tuning", category: "F", definition: "Training a pre-trained model on specific data." },
  "foundation-model": { title: "Foundation Model", category: "F", definition: "Large-scale model for various tasks." },
  "generative-adversarial-network": { title: "GAN", category: "G", definition: "Two networks competing to generate synthetic data." },
  "gradient-descent": { title: "Gradient Descent", category: "G", definition: "Optimization algorithm minimizing cost function." },
  "hyperparameter": { title: "Hyperparameter", category: "H", definition: "Parameter set before learning begins." },
  "inference": { title: "Inference", category: "I", definition: "Using trained models for predictions." },
  "learning-rate": { title: "Learning Rate", category: "L", definition: "Controls model changes during training." },
  "overfitting": { title: "Overfitting", category: "O", definition: "Model learning training data too well." },
  "underfitting": { title: "Underfitting", category: "U", definition: "Model too simple for data patterns." },
  "parameter": { title: "Parameter", category: "P", definition: "Internal learned variable in model." },
  "prompt": { title: "Prompt", category: "P", definition: "Input provided to AI model." },
  "quantization": { title: "Quantization", category: "Q", definition: "Reducing precision for smaller models." },
  "recurrent-neural-network": { title: "Recurrent Neural Network (RNN)", category: "R", definition: "Neural network for sequential data." },
  "resnet": { title: "ResNet", category: "R", definition: "Deep network with skip connections." },
  "sentiment-analysis": { title: "Sentiment Analysis", category: "S", definition: "Determining emotional tone in text." },
  "tokenization": { title: "Tokenization", category: "T", definition: "Breaking text into tokens for processing." },
  "transfer-learning": { title: "Transfer Learning", category: "T", definition: "Reusing pre-trained model for new task." },
  "vision-transformer": { title: "Vision Transformer (ViT)", category: "V", definition: "Transformer for computer vision tasks." },
  "zero-shot-learning": { title: "Zero-Shot Learning", category: "Z", definition: "Learning to recognize unseen objects." },
};

// Format markdown content to HTML-like structure
function formatMarkdown(content: string): React.ReactNode {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];

  for (const line of lines) {
    if (line.startsWith('# ')) {
      elements.push(
        <Heading as="h1" fontSize="2xl" fontWeight="700" color="gray.900" mt="8" mb="4">
          {line.substring(2)}
        </Heading>
      );
    } else if (line.startsWith('## ')) {
      elements.push(
        <Heading as="h2" fontSize="xl" fontWeight="600" color="gray.900" mt="6" mb="3">
          {line.substring(3)}
        </Heading>
      );
    } else if (line.startsWith('### ')) {
      elements.push(
        <Heading as="h3" fontSize="lg" fontWeight="600" color="gray.900" mt="4" mb="2">
          {line.substring(4)}
        </Heading>
      );
    } else if (line.startsWith('- **')) {
      const match = line.match(/- \*\*(.*?)\*\*: (.*)/);
      if (match) {
        elements.push(
          <Text as="li" ml="6" color="gray.700" lineHeight="tall">
            <Text as="strong" fontWeight="600">{match[1]}</Text>: {match[2]}
          </Text>
        );
      }
    } else if (line.startsWith('- ')) {
      elements.push(
        <Text as="li" ml="6" color="gray.700" lineHeight="tall">
          {line.substring(2)}
        </Text>
      );
    } else if (line.match(/^\d+\. /)) {
      elements.push(
        <Text as="li" ml="6" color="gray.700" lineHeight="tall">
          {line.replace(/^\d+\. /, '')}
        </Text>
      );
    } else if (line.trim() === '') {
      elements.push(<Box h="4" />);
    } else if (line.startsWith('**') && line.endsWith('**')) {
      elements.push(
        <Text as="p" fontWeight="600" color="gray.900" mt="2">
          {line.replace(/\*\*/g, '')}
        </Text>
      );
    } else if (line.includes('**')) {
      const parts = line.split(/\*\*(.*?)\*\*/);
      elements.push(
        <Text as="p" color="gray.700" lineHeight="tall" mt="2">
          {parts.map((part, i) =>
            i % 2 === 1 ? <Text as="strong" fontWeight="600">{part}</Text> : part
          )}
        </Text>
      );
    } else {
      elements.push(
        <Text as="p" color="gray.700" lineHeight="tall" mt="2">
          {line}
        </Text>
      );
    }
  }

  return <Stack as="ul" style={{ listStyle: 'none' }}>{elements}</Stack>;
}

const termFaqs = [
  {
    question: "How can I learn more about this topic?",
    answer: "We recommend starting with online courses from platforms like Coursera or edX, or exploring research papers on arXiv for in-depth understanding."
  },
  {
    question: "Are there practical applications I can try?",
    answer: "Yes! Many AI tools and platforms offer free tiers where you can experiment with these concepts hands-on."
  }
];

export default function TermPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.term as string;

  const [term, setTerm] = useState<(typeof termData)[keyof typeof termData] | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (slug) {
      const found = termData[slug];
      if (found) {
        setTerm(found);
        setNotFound(false);
      } else if (basicTerms[slug]) {
        // Create a basic term entry
        setTerm({
          title: basicTerms[slug].title,
          slug,
          category: basicTerms[slug].category,
          definition: basicTerms[slug].definition,
          fullContent: `# ${basicTerms[slug].title}\n\n## Definition\n${basicTerms[slug].definition}\n\n## Overview\nThis term is part of the AI glossary. More detailed content will be added soon.`,
          related: []
        });
        setNotFound(false);
      } else {
        setNotFound(true);
      }
    }
  }, [slug]);

  if (notFound) {
    return (
      <Box bg="gray.50" minH="60vh" py="16">
        <Container maxW="7xl" textAlign="center">
          <Heading fontSize="3xl" fontWeight="700" color="gray.900" mb="4">
            Term Not Found
          </Heading>
          <Text color="gray.600" fontSize="lg" mb="8">
            Sorry, we couldn't find the AI term you're looking for.
          </Text>
          <Button
            onClick={() => router.push('/ai-glossary')}
            variant="outline"
          >
            <LuArrowLeft /> Back to Glossary
          </Button>
        </Container>
      </Box>
    );
  }

  if (!term) {
    return null;
  }

  // Get related terms with full data
  const relatedTerms = term.related
    .map(r => termData[r] || basicTerms[r])
    .filter(Boolean);

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: term.title,
            description: term.definition,
          })
        }}
      />

      {/* Breadcrumbs */}
      <Box bg="white" borderBottom="1px solid" borderColor="gray.200">
        <Container maxW="7xl" py="4">
          <Flex gap="2" align="center" fontSize="sm" color="gray.600">
            <NextLink href="/" style={{ display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none', color: 'inherit' }}>
              <LuHouse /> Home
            </NextLink>
            <Text>/</Text>
            <NextLink href="/ai-glossary" style={{ textDecoration: 'none', color: 'inherit' }}>
              AI Glossary
            </NextLink>
            <Text>/</Text>
            <Text fontWeight="500">{term.title}</Text>
          </Flex>
        </Container>
      </Box>

      {/* Term Content */}
      <Box bg="gray.50" py={{ base: '12', md: '16' }}>
        <Container maxW="4xl">
          <Stack gap="8">
            {/* Back Button */}
            <Button
              onClick={() => router.push('/ai-glossary')}
              variant="ghost"
              w="fit-content"
            >
              <LuArrowLeft /> Back to Glossary
            </Button>

            {/* Term Header */}
            <Stack gap="4">
              <Badge
                colorPalette="orange"
                w="fit-content"
                px="3"
                py="1"
                rounded="full"
                fontSize="sm"
                fontWeight="semibold"
              >
                {term.category}
              </Badge>
              <Heading
                as="h1"
                fontSize={{ base: '3xl', md: '4xl' }}
                fontWeight="700"
                color="gray.900"
                lineHeight="1.2"
              >
                {term.title}
              </Heading>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color="gray.600"
                fontStyle="italic"
              >
                {term.definition}
              </Text>
            </Stack>

            <Separator borderColor="gray.200" />

            {/* Full Content */}
            <Box className="prose prose-lg max-w-none">
              {formatMarkdown(term.fullContent)}
            </Box>

            {/* Related Terms */}
            {relatedTerms.length > 0 && (
              <>
                <Separator borderColor="gray.200" />
                <Box>
                  <Heading as="h2" fontSize="xl" fontWeight="600" color="gray.900" mb="4">
                    Related Terms
                  </Heading>
                  <Flex gap="3" flexWrap="wrap">
                    {relatedTerms.map((related: any) => (
                      <ChakraLink
                        key={related.slug}
                        href={`/ai-glossary/${related.slug}`}
                        _hover={{ textDecoration: 'none' }}
                      >
                        <Badge
                          bg="white"
                          borderWidth="1px"
                          borderColor="gray.300"
                          color="gray.700"
                          px="4"
                          py="2"
                          rounded="md"
                          fontSize="sm"
                          fontWeight="500"
                          _hover={{
                            borderColor: '#F77F00',
                            color: '#F77F00'
                          }}
                          transition="all 0.2s"
                          cursor="pointer"
                        >
                          {related.title || related.slug}
                        </Badge>
                      </ChakraLink>
                    ))}
                  </Flex>
                </Box>
              </>
            )}

            {/* FAQ Section */}
            <Box bg="white" p="6" rounded="lg" borderWidth="1px" borderColor="gray.200">
              <Heading as="h2" fontSize="xl" fontWeight="600" color="gray.900" mb="4">
                Frequently Asked Questions
              </Heading>
              <Stack gap="4">
                {termFaqs.map((faq, index) => (
                  <Box key={index}>
                    <Text as="h3" fontWeight="600" color="gray.900" mb="2">
                      {faq.question}
                    </Text>
                    <Text color="gray.600" lineHeight="tall">
                      {faq.answer}
                    </Text>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
