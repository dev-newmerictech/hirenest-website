/**
 * AI Glossary - All Terms Data
 * Basic term information for listing pages
 */

export interface Term {
  title: string
  slug: string
  category: string
  definition: string
}

export const allTerms: Term[] = [
  // A
  {
    title: "Algorithm",
    slug: "algorithm",
    category: "A",
    definition: "A step-by-step procedure or formula for solving a problem or completing a task."
  },
  {
    title: "Artificial General Intelligence (AGI)",
    slug: "artificial-general-intelligence",
    category: "A",
    definition: "A hypothetical type of AI that would possess the ability to understand, learn, and apply knowledge across a wide variety of tasks, matching human cognitive abilities."
  },
  {
    title: "Artificial Intelligence (AI)",
    slug: "artificial-intelligence",
    category: "A",
    definition: "The simulation of human intelligence processes by computer systems, including learning, reasoning, and self-correction."
  },
  {
    title: "Attention Mechanism",
    slug: "attention-mechanism",
    category: "A",
    definition: "A technique in neural networks that allows the model to focus on specific parts of the input data when producing output."
  },
  {
    title: "Augmented Intelligence",
    slug: "augmented-intelligence",
    category: "A",
    definition: "AI systems designed to enhance human intelligence and capabilities rather than replace them."
  },
  {
    title: "Autoencoder",
    slug: "autoencoder",
    category: "A",
    definition: "A type of neural network that learns to copy its input to its output, used for dimensionality reduction and feature learning."
  },

  // B
  {
    title: "Backpropagation",
    slug: "backpropagation",
    category: "B",
    definition: "A method for calculating the gradient of the loss function with respect to each weight in the network, used for training neural networks."
  },
  {
    title: "Bias",
    slug: "bias",
    category: "B",
    definition: "Systematic error in AI models that produces unfair outcomes due to prejudices in training data or algorithm design."
  },
  {
    title: "Big Data",
    slug: "big-data",
    category: "B",
    definition: "Extremely large datasets that can be analyzed to reveal patterns and trends, particularly relating to human behavior and interactions."
  },
  {
    title: "Bot",
    slug: "bot",
    category: "B",
    definition: "A software application that runs automated tasks over the internet, often used for web crawling or chat interactions."
  },

  // C
  {
    title: "Chatbot",
    slug: "chatbot",
    category: "C",
    definition: "A computer program designed to simulate conversation with human users, especially over the internet."
  },
  {
    title: "Computer Vision",
    slug: "computer-vision",
    category: "C",
    definition: "A field of AI that enables computers to interpret and understand visual information from the world, such as images and videos."
  },
  {
    title: "Convolutional Neural Network (CNN)",
    slug: "convolutional-neural-network",
    category: "C",
    definition: "A type of neural network particularly effective for image recognition and processing tasks."
  },
  {
    title: "Cost Function",
    slug: "cost-function",
    category: "C",
    definition: "A mathematical function that measures the difference between the model's predictions and the actual values, used to optimize model performance."
  },

  // D
  {
    title: "Data Augmentation",
    slug: "data-augmentation",
    category: "D",
    definition: "Techniques used to increase the diversity of training data by applying transformations like rotation, scaling, or flipping."
  },
  {
    title: "Data Mining",
    slug: "data-mining",
    category: "D",
    definition: "The process of discovering patterns in large data sets involving methods at the intersection of machine learning, statistics, and database systems."
  },
  {
    title: "Deep Learning",
    slug: "deep-learning",
    category: "D",
    definition: "A subset of machine learning that uses multi-layered neural networks to learn from vast amounts of data."
  },
  {
    title: "Diffusion Model",
    slug: "diffusion-model",
    category: "D",
    definition: "A type of generative model that learns to generate data by reversing a diffusion process that adds noise to data."
  },

  // E
  {
    title: "Embedding",
    slug: "embedding",
    category: "E",
    definition: "A representation of data (like words) as vectors in a continuous vector space where similar items are close together."
  },
  {
    title: "Epoch",
    slug: "epoch",
    category: "E",
    definition: "One complete pass through the entire training dataset during the training of a machine learning model."
  },
  {
    title: "Ethical AI",
    slug: "ethical-ai",
    category: "E",
    definition: "The practice of designing and developing AI systems that are fair, transparent, accountable, and respectful of human values."
  },
  {
    title: "Expert System",
    slug: "expert-system",
    category: "E",
    definition: "A computer system that emulates the decision-making ability of a human expert, using a knowledge base and inference engine."
  },

  // F
  {
    title: "Feature Engineering",
    slug: "feature-engineering",
    category: "F",
    definition: "The process of using domain knowledge to extract features from raw data that make machine learning algorithms work better."
  },
  {
    title: "Feature Extraction",
    slug: "feature-extraction",
    category: "F",
    definition: "The process of selecting and transforming raw data into a set of features that better represent the underlying problem."
  },
  {
    title: "Fine-Tuning",
    slug: "fine-tuning",
    category: "F",
    definition: "The process of taking a pre-trained model and training it further on a specific, usually smaller, dataset."
  },
  {
    title: "Foundation Model",
    slug: "foundation-model",
    category: "F",
    definition: "A large-scale AI model trained on broad data that can be adapted to a wide range of downstream tasks."
  },

  // G
  {
    title: "GAN (Generative Adversarial Network)",
    slug: "generative-adversarial-network",
    category: "G",
    definition: "A type of neural network architecture where two networks compete with each other to generate new, synthetic instances of data."
  },
  {
    title: "Generative AI",
    slug: "generative-ai",
    category: "G",
    definition: "AI systems capable of creating new content, including text, images, audio, and video."
  },
  {
    title: "Gradient Descent",
    slug: "gradient-descent",
    category: "G",
    definition: "An optimization algorithm used to minimize the cost function by iteratively moving towards the minimum."
  },
  {
    title: "Ground Truth",
    slug: "ground-truth",
    category: "G",
    definition: "The accurate, expected output for a given input in a machine learning dataset, used as a reference for training."
  },

  // H
  {
    title: "Hallucination",
    slug: "hallucination",
    category: "H",
    definition: "When an AI model generates false or misleading information presented as confident fact."
  },
  {
    title: "Hyperparameter",
    slug: "hyperparameter",
    category: "H",
    definition: "A parameter whose value is set before the learning process begins, controlling the behavior of the training algorithm."
  },
  {
    title: "Hybrid AI",
    slug: "hybrid-ai",
    category: "H",
    definition: "An AI system that combines multiple approaches, such as symbolic AI and neural networks, to leverage their respective strengths."
  },

  // I
  {
    title: "Inference",
    slug: "inference",
    category: "I",
    definition: "The process of using a trained machine learning model to make predictions or decisions on new, unseen data."
  },
  {
    title: "Intelligent Agent",
    slug: "intelligent-agent",
    category: "I",
    definition: "An autonomous entity that observes its environment and takes actions to achieve specific goals."
  },
  {
    title: "Interpretability",
    slug: "interpretability",
    category: "I",
    definition: "The degree to which a human can understand the cause of a decision made by an AI model."
  },
  {
    title: "IoT (Internet of Things)",
    slug: "internet-of-things",
    category: "I",
    definition: "A network of physical objects embedded with sensors and software that can connect and exchange data."
  },

  // J
  {
    title: "Joint Probability",
    slug: "joint-probability",
    category: "J",
    definition: "The likelihood of two or more events occurring simultaneously, fundamental in probabilistic machine learning."
  },
  {
    title: "JSON (JavaScript Object Notation)",
    slug: "json",
    category: "J",
    definition: "A lightweight data interchange format commonly used for API responses and data storage in AI applications."
  },

  // K
  {
    title: "K-Means Clustering",
    slug: "k-means-clustering",
    category: "K",
    definition: "An unsupervised learning algorithm that partitions data into K clusters based on feature similarity."
  },
  {
    title: "Knowledge Base",
    slug: "knowledge-base",
    category: "K",
    definition: "A structured collection of facts and rules used by AI systems to reason and make decisions."
  },
  {
    title: "Knowledge Graph",
    slug: "knowledge-graph",
    category: "K",
    definition: "A network of entities and their relationships, used to represent and reason about complex knowledge."
  },
  {
    title: "K-Nearest Neighbors (KNN)",
    slug: "k-nearest-neighbors",
    category: "K",
    definition: "A simple algorithm that stores all available cases and classifies new data based on similarity measures."
  },

  // L
  {
    title: "Large Language Model (LLM)",
    slug: "large-language-model",
    category: "L",
    definition: "A type of AI model trained on vast amounts of text data to understand and generate human-like text."
  },
  {
    title: "Learning Rate",
    slug: "learning-rate",
    category: "L",
    definition: "A hyperparameter that controls how much the model changes in response to the estimated error during training."
  },
  {
    title: "Linear Regression",
    slug: "linear-regression",
    category: "L",
    definition: "A statistical method used to model the relationship between a dependent variable and one or more independent variables."
  },
  {
    title: "Logistic Regression",
    slug: "logistic-regression",
    category: "L",
    definition: "A statistical method for predicting binary outcomes using a logistic function."
  },

  // M
  {
    title: "Machine Learning (ML)",
    slug: "machine-learning",
    category: "M",
    definition: "A subset of AI that enables systems to learn and improve from experience without being explicitly programmed."
  },
  {
    title: "Model",
    slug: "model",
    category: "M",
    definition: "A mathematical representation of a real-world process, trained on data to make predictions or decisions."
  },
  {
    title: "Multimodal AI",
    slug: "multimodal-ai",
    category: "M",
    definition: "AI systems that can process and understand multiple types of data simultaneously, such as text, images, and audio."
  },

  // N
  {
    title: "Natural Language Generation (NLG)",
    slug: "natural-language-generation",
    category: "N",
    definition: "The process of generating natural language text from structured data or representations."
  },
  {
    title: "Natural Language Processing (NLP)",
    slug: "natural-language-processing",
    category: "N",
    definition: "The field of AI focused on the interaction between computers and human language."
  },
  {
    title: "Natural Language Understanding (NLU)",
    slug: "natural-language-understanding",
    category: "N",
    definition: "A subset of NLP focused on machine comprehension of meaning and intent in text or speech."
  },
  {
    title: "Neural Network",
    slug: "neural-network",
    category: "N",
    definition: "A computing system inspired by biological neural networks, composed of interconnected nodes (neurons) that process information."
  },
  {
    title: "Normalization",
    slug: "normalization",
    category: "N",
    definition: "The process of rescaling data to a standard range, typically between 0 and 1, to improve model training."
  },

  // O
  {
    title: "OCR (Optical Character Recognition)",
    slug: "ocr",
    category: "O",
    definition: "Technology that converts different types of documents, such as scanned paper documents, into editable and searchable data."
  },
  {
    title: "One-Shot Learning",
    slug: "one-shot-learning",
    category: "O",
    definition: "A machine learning approach where a model learns to recognize new objects from only one or a few examples."
  },
  {
    title: "Overfitting",
    slug: "overfitting",
    category: "O",
    definition: "When a model learns the training data too well, including noise and outliers, resulting in poor generalization to new data."
  },

  // P
  {
    title: "Parameter",
    slug: "parameter",
    category: "P",
    definition: "Internal variables of a model that are learned from training data, such as weights in a neural network."
  },
  {
    title: "Pattern Recognition",
    slug: "pattern-recognition",
    category: "P",
    definition: "The automated recognition of patterns and regularities in data."
  },
  {
    title: "Prompt",
    slug: "prompt",
    category: "P",
    definition: "The input text or instruction provided to an AI model to generate a desired output."
  },
  {
    title: "Prompt Engineering",
    slug: "prompt-engineering",
    category: "P",
    definition: "The art of crafting and optimizing prompts to get the best possible results from AI models."
  },
  {
    title: "Preprocessing",
    slug: "preprocessing",
    category: "P",
    definition: "The process of preparing raw data for machine learning by cleaning, transforming, and organizing it."
  },
  {
    title: "Pretrained Model",
    slug: "pretrained-model",
    category: "P",
    definition: "A model that has been previously trained on a large dataset and can be used as a starting point for other tasks."
  },

  // Q
  {
    title: "Quantization",
    slug: "quantization",
    category: "Q",
    definition: "The process of reducing the precision of model parameters to decrease model size and increase inference speed."
  },
  {
    title: "Query",
    slug: "query",
    category: "Q",
    definition: "A request for information from a database or AI system, often expressed in natural language or a formal query language."
  },

  // R
  {
    title: "RAG (Retrieval-Augmented Generation)",
    slug: "retrieval-augmented-generation",
    category: "R",
    definition: "A technique that enhances LLMs by retrieving relevant external information before generating responses."
  },
  {
    title: "Recurrent Neural Network (RNN)",
    slug: "recurrent-neural-network",
    category: "R",
    definition: "A type of neural network designed for sequential data by maintaining internal state or memory."
  },
  {
    title: "Reinforcement Learning",
    slug: "reinforcement-learning",
    category: "R",
    definition: "A type of machine learning where an agent learns by interacting with an environment and receiving rewards or penalties."
  },
  {
    title: "ResNet (Residual Network)",
    slug: "resnet",
    category: "R",
    definition: "A deep learning architecture that uses skip connections to enable training of very deep networks."
  },
  {
    title: "Robotics",
    slug: "robotics",
    category: "R",
    definition: "The field of designing and building robots, often integrated with AI for autonomous operation."
  },

  // S
  {
    title: "Semi-Supervised Learning",
    slug: "semi-supervised-learning",
    category: "S",
    definition: "A learning approach that uses a small amount of labeled data with a large amount of unlabeled data for training."
  },
  {
    title: "Sentiment Analysis",
    slug: "sentiment-analysis",
    category: "S",
    definition: "The use of NLP to determine the emotional tone or opinion expressed in a piece of text."
  },
  {
    title: "Supervised Learning",
    slug: "supervised-learning",
    category: "S",
    definition: "A type of machine learning where the model learns from labeled training data to make predictions."
  },
  {
    title: "Support Vector Machine (SVM)",
    slug: "support-vector-machine",
    category: "S",
    definition: "A supervised learning algorithm used for classification and regression tasks by finding the optimal hyperplane."
  },
  {
    title: "Synthetic Data",
    slug: "synthetic-data",
    category: "S",
    definition: "Artificially generated data that mimics real-world data, used for training AI models when real data is scarce."
  },

  // T
  {
    title: "Token",
    slug: "token",
    category: "T",
    definition: "The smallest unit of text that an AI model processes, which can be a word, part of a word, or a character."
  },
  {
    title: "Tokenization",
    slug: "tokenization",
    category: "T",
    definition: "The process of breaking text into smaller units called tokens for processing by language models."
  },
  {
    title: "Transfer Learning",
    slug: "transfer-learning",
    category: "T",
    definition: "A technique where a model developed for one task is reused as the starting point for a model on a second task."
  },
  {
    title: "Transformer",
    slug: "transformer",
    category: "T",
    definition: "A neural network architecture that uses self-attention mechanisms to process sequential data efficiently."
  },
  {
    title: "Turing Test",
    slug: "turing-test",
    category: "T",
    definition: "A test of a machine's ability to exhibit intelligent behavior equivalent to, or indistinguishable from, that of a human."
  },

  // U
  {
    title: "Underfitting",
    slug: "underfitting",
    category: "U",
    definition: "When a model is too simple to capture the underlying patterns in the data, resulting in poor performance."
  },
  {
    title: "Unsupervised Learning",
    slug: "unsupervised-learning",
    category: "U",
    definition: "A type of machine learning where the model finds patterns in unlabeled data without explicit output labels."
  },

  // V
  {
    title: "Validation Set",
    slug: "validation-set",
    category: "V",
    definition: "A portion of data set aside from training data used to tune hyperparameters and prevent overfitting."
  },
  {
    title: "Vector Database",
    slug: "vector-database",
    category: "V",
    definition: "A database optimized for storing and querying vector embeddings, commonly used in semantic search and RAG applications."
  },
  {
    title: "Virtual Assistant",
    slug: "virtual-assistant",
    category: "V",
    definition: "An AI-powered software agent that can perform tasks or services for an individual based on commands or questions."
  },
  {
    title: "Vision Transformer (ViT)",
    slug: "vision-transformer",
    category: "V",
    definition: "A transformer architecture applied to computer vision tasks, treating image patches as sequences."

  },

  // W
  {
    title: "Weak AI (Narrow AI)",
    slug: "weak-ai",
    category: "W",
    definition: "AI designed to perform specific tasks within a limited domain, as opposed to general intelligence."
  },
  {
    title: "Weight",
    slug: "weight",
    category: "W",
    definition: "A parameter in a neural network that determines the strength of the connection between neurons."
  },
  {
    title: "Weights and Biases",
    slug: "weights-and-biases",
    category: "W",
    definition: "The learnable parameters in neural networks; weights control input importance, biases offset activation functions."
  },

  // X
  {
    title: "XAI (Explainable AI)",
    slug: "explainable-ai",
    category: "X",
    definition: "AI systems designed to provide human-understandable explanations for their decisions and predictions."
  },

  // Z
  {
    title: "Zero-Shot Learning",
    slug: "zero-shot-learning",
    category: "Z",
    definition: "A machine learning approach where a model can recognize or classify objects it has never seen before."
  },
];

/**
 * Get all terms
 */
export function getAllTerms(): Term[] {
  return allTerms;
}

/**
 * Get term by slug
 */
export function getTermBySlug(slug: string): Term | undefined {
  return allTerms.find(term => term.slug === slug);
}

/**
 * Get terms by category (letter)
 */
export function getTermsByCategory(category: string): Term[] {
  return allTerms.filter(term => term.category === category);
}

/**
 * Get all categories sorted
 */
export function getAllCategories(): string[] {
  const categories = Array.from(new Set(allTerms.map(t => t.category)));
  return categories.sort((a, b) => {
    if (a === '#') return 1;
    if (b === '#') return -1;
    return a.localeCompare(b);
  });
}

/**
 * Search terms by query
 */
export function searchTerms(query: string): Term[] {
  const q = query.toLowerCase();
  return allTerms.filter(term =>
    term.title.toLowerCase().includes(q) ||
    term.definition.toLowerCase().includes(q)
  );
}

/**
 * Get alphabet navigation
 */
export function getAlphabet(): string[] {
  return ['#', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
}
