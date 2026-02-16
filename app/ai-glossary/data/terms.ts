/**
 * AI Glossary - Full Terms Data
 * Extended term information with full content and related terms
 */

import { Term } from './all-terms';

export interface FullTerm extends Term {
  fullContent: string;
  related: string[];
}

export const terms: Record<string, FullTerm> = {
  "artificial-intelligence": {
    title: "Artificial Intelligence (AI)",
    slug: "artificial-intelligence",
    category: "A",
    definition: "The simulation of human intelligence processes by computer systems, including learning, reasoning, problem-solving, perception, and language understanding.",
    fullContent: `# Artificial Intelligence (AI)

## Quick Definition

**Artificial Intelligence (AI)** is the simulation of human intelligence processes by computer systems, including learning, reasoning, problem-solving, perception, and language understanding. In the context of modern business and hiring, AI refers to technologies that can perform tasks that typically require human cognition, enabling automation of complex decision-making processes.

## Table of Contents
1. [What is Artificial Intelligence?](#what-is-artificial-intelligence)
2. [History and Evolution of AI](#history-and-evolution-of-ai)
3. [How Artificial Intelligence Works](#how-artificial-intelligence-works)
4. [Key Components and Types of AI](#key-components-and-types-of-ai)
5. [Real-World Applications](#real-world-applications)
6. [AI in Hiring and Recruitment](#ai-in-hiring-and-recruitment)
7. [Advantages and Benefits](#advantages-and-benefits)
8. [Disadvantages and Limitations](#disadvantages-and-limitations)
9. [Future Trends and Developments](#future-trends-and-developments)
10. [Frequently Asked Questions](#frequently-asked-questions)

---

## What is Artificial Intelligence?

Artificial Intelligence, commonly referred to as AI, represents one of the most transformative technological advances in human history. At its core, AI is a branch of computer science dedicated to creating systems capable of performing tasks that traditionally require human intelligence. These tasks include visual perception, speech recognition, decision-making, translation between languages, and pattern recognition.

The fundamental concept behind AI is to create machines that can think, learn, and solve problems autonomously, without constant human intervention. Unlike traditional computer programs that follow explicit instructions, AI systems can adapt to new inputs, learn from experience, and make predictions based on patterns in data.

### Understanding AI Through Analogies

Think of traditional software as a recipe: a developer writes step-by-step instructions for the computer to follow, and the computer executes those instructions exactly as written. If something unexpected happens, the software doesn't know what to do—it can only follow its pre-programmed rules.

AI, by contrast, is more like teaching someone to cook. You show them many examples of dishes, explain the techniques, and provide feedback on their attempts. Over time, they learn to recognize patterns, adjust their techniques, and even create new recipes based on their understanding of cooking principles.

### Why AI Matters Today

We live in an era where data is being generated at an unprecedented rate. Every day, humans create 2.5 quintillion bytes of data through social media, online transactions, sensors, and digital interactions. This data contains valuable patterns and insights that no human could possibly process manually. AI provides the tools to extract meaningful information from this data deluge.

---

## History and Evolution of AI

The story of artificial intelligence is one of ambitious dreams, disappointing winters, and remarkable resurgence.

### The Birth of AI (1940s-1956)

The foundations of AI were laid long before the term "artificial intelligence" was coined. In 1943, Warren McCulloch and Walter Pitts created the first mathematical model of a biological neuron. In 1950, Alan Turing published his landmark paper "Computing Machinery and Intelligence," proposing the Turing Test. The term "artificial intelligence" was coined in 1956 at a conference at Dartmouth College.

### The Deep Learning Revolution (2012-Present)

In 2012, a neural network called AlexNet dramatically outperformed traditional methods in the ImageNet competition. In 2017, Google researchers introduced the Transformer architecture, which led to the development of large language models (LLMs) like GPT.

---

## How Artificial Intelligence Works

At a high level, AI systems work by learning patterns from data and using those patterns to make predictions or decisions.

### Learning from Data

Traditional programming relies on explicit instructions: if X happens, do Y. AI takes a different approach: developers provide examples of what they want the system to learn, and the system figures out the rules itself.

### Machine Learning Approaches

**Supervised Learning**: Training a model on labeled examples—input data paired with the correct output.

**Unsupervised Learning**: Finding patterns in unlabeled data without explicit labels.

**Reinforcement Learning**: An agent learns by interacting with an environment and receiving rewards or penalties.

**Deep Learning**: Using artificial neural networks with many layers to learn hierarchical representations.

---

## Key Components and Types of AI

### Types of AI by Capability

**Artificial Narrow Intelligence (ANI)**: AI designed to perform specific tasks within a limited domain. All existing AI systems are examples of narrow AI.

**Artificial General Intelligence (AGI)**: A hypothetical system with human-level cognitive abilities across all domains. AGI remains a theoretical concept.

**Artificial Superintelligence (ASI)**: A hypothetical AI that surpasses human intelligence across all domains.

### Key AI Technologies

**Natural Language Processing (NLP)**: Enables computers to understand, interpret, and generate human language.

**Computer Vision**: Enables machines to interpret and understand visual information.

**Speech Recognition**: Converts spoken language into text.

---

## Real-World Applications

### Healthcare

AI is revolutionizing healthcare through medical diagnosis, drug discovery, personalized medicine, and healthcare administration.

### Finance

Finance applications include fraud detection, algorithmic trading, credit scoring, and customer service automation.

### Transportation

AI enables autonomous vehicles, traffic management, and logistics optimization.

### Manufacturing

Applications include predictive maintenance, quality control, process optimization, and robotics.

---

## AI in Hiring and Recruitment

### Resume Screening and Parsing

AI-powered systems can extract and standardize information from diverse resume formats, identify key qualifications, and rank candidates.

### Candidate Sourcing

AI helps find qualified candidates through talent database matching, social media analysis, and automated candidate engagement.

### Skills Assessment

AI enables sophisticated evaluation through coding challenges, cognitive tests, personality assessments, and video interview analysis.

---

## Advantages and Benefits

- **Efficiency and Automation**: AI can handle repetitive tasks 24/7 without fatigue
- **Accuracy and Quality**: Reduced errors and precision in tasks
- **Data Processing**: Identifying patterns humans might miss
- **Personalization**: Enabling personalized experiences at scale
- **Cost Reduction**: Automating tasks that would otherwise require human workers

---

## Disadvantages and Limitations

- **Lack of Common Sense**: AI lacks everyday understanding of the world
- **Bias and Fairness**: Systems can learn and perpetuate biases present in training data
- **Black Box Problem**: Many AI systems are difficult to interpret
- **Job Displacement**: Automation threatens certain types of jobs
- **Security Risks**: New security concerns including adversarial attacks

---

## Future Trends

- **Multimodal AI**: Systems that can understand multiple types of data
- **Foundation Models**: Large models that can be adapted to many tasks
- **Explainable AI (XAI)**: Making AI systems more transparent
- **Edge AI**: Running AI on devices rather than in the cloud

---

## Frequently Asked Questions

### What is the difference between AI and machine learning?

Machine learning is a subset of AI focused on systems that learn from data.

### Will AI replace human workers?

AI will automate some tasks but also create new jobs. The most likely scenario is AI augmenting human workers.

### Is AI dangerous?

AI poses real risks including bias, job displacement, and privacy concerns, but also offers tremendous potential for solving humanity's greatest challenges.

---

## Related Terms

- [Machine Learning](/ai-glossary/machine-learning)
- [Deep Learning](/ai-glossary/deep-learning)
- [Neural Network](/ai-glossary/neural-network)
- [Algorithm](/ai-glossary/algorithm)`,
    related: ["machine-learning", "deep-learning", "neural-network", "algorithm", "natural-language-processing", "computer-vision"]
  },

  "machine-learning": {
    title: "Machine Learning (ML)",
    slug: "machine-learning",
    category: "M",
    definition: "A subset of AI that enables systems to learn and improve from experience without being explicitly programmed.",
    fullContent: `# Machine Learning (ML)

## Quick Definition

**Machine Learning** is a subset of artificial intelligence that enables computer systems to learn and improve from experience without being explicitly programmed. Instead of following rigid rules, ML algorithms build mathematical models based on sample data to make predictions or decisions.

## Table of Contents
1. [What is Machine Learning?](#what-is-machine-learning)
2. [History and Evolution](#history-and-evolution)
3. [How Machine Learning Works](#how-machine-learning-works)
4. [Types of Machine Learning](#types-of-machine-learning)
5. [Key Algorithms](#key-algorithms)
6. [Applications](#applications)
7. [ML in Hiring](#ml-in-hiring)
8. [Advantages](#advantages)
9. [Disadvantages](#disadvantages)
10. [Future Trends](#future-trends)
11. [FAQ](#frequently-asked-questions)

---

## What is Machine Learning?

Machine Learning represents a fundamental shift in computing. Traditional programming requires developers to write explicit instructions. ML learns from examples.

### The Learning Analogy

Consider how a child learns to recognize a dog. You don't explain mathematical definitions—you point to various animals and say "that's a dog" or "that's not a dog." Through exposure to many examples, the child develops an internal understanding. ML works similarly.

---

## How Machine Learning Works

### The Learning Framework

1. **Data Collection**: Gathering examples relevant to the task
2. **Feature Extraction**: Converting raw data into a suitable format
3. **Model Selection**: Choosing an appropriate algorithm
4. **Training**: The system improves its performance through iteration
5. **Evaluation**: Testing on unseen data
6. **Deployment**: Using the model to make predictions

---

## Types of Machine Learning

### Supervised Learning

Learning from labeled examples. Used for classification and regression tasks.

### Unsupervised Learning

Finding patterns in unlabeled data through clustering and dimensionality reduction.

### Reinforcement Learning

Learning through trial and error by receiving rewards or penalties.

---

## Key Algorithms

- **Linear Regression**: For predicting continuous values
- **Logistic Regression**: For binary classification
- **Decision Trees**: Tree-based classification
- **Random Forests**: Ensemble of decision trees
- **Support Vector Machines**: Finding optimal decision boundaries
- **Neural Networks**: Learning complex patterns

---

## Applications

### Healthcare
- Disease diagnosis from medical images
- Drug discovery and development

### Finance
- Fraud detection
- Algorithmic trading
- Credit scoring

### Marketing
- Customer segmentation
- Recommendation systems
- Churn prediction

---

## ML in Hiring

- **Resume Screening**: Parsing and matching qualifications
- **Skills Assessment**: Automated evaluation of candidate capabilities
- **Candidate Sourcing**: Finding qualified passive candidates
- **Interview Scheduling**: Coordinating interviews efficiently

---

## Advantages

- **Pattern Recognition**: Identifying patterns in high-dimensional data
- **Automation**: Automating decisions at scale
- **Continuous Improvement**: Systems can continue learning

---

## Disadvantages

- **Data Requirements**: Requires large amounts of quality data
- **Black Box Problem**: Difficult to interpret predictions
- **Bias**: Can perpetuate biases in training data

---

## Frequently Asked Questions

### What's the difference between AI and ML?

AI is the broad field; ML is a subset focused on learning from data.

### Do I need to be good at math to learn ML?

Understanding mathematics helps, but many practitioners successfully apply ML using existing tools and libraries.

---

## Related Terms

- [Artificial Intelligence](/ai-glossary/artificial-intelligence)
- [Deep Learning](/ai-glossary/deep-learning)
- [Neural Network](/ai-glossary/neural-network)
- [Supervised Learning](/ai-glossary/supervised-learning)`,
    related: ["artificial-intelligence", "deep-learning", "neural-network", "supervised-learning", "unsupervised-learning", "reinforcement-learning"]
  },

  "deep-learning": {
    title: "Deep Learning",
    slug: "deep-learning",
    category: "D",
    definition: "A subset of machine learning that uses multi-layered neural networks to learn from vast amounts of data.",
    fullContent: `# Deep Learning

## Quick Definition

**Deep Learning** is a subset of machine learning that uses artificial neural networks with many layers (hence "deep") to model and understand complex patterns in data.

## Table of Contents
1. [What is Deep Learning?](#what-is-deep-learning)
2. [History](#history)
3. [How It Works](#how-it-works)
4. [Architectures](#architectures)
5. [Training](#training)
6. [Applications](#applications)
7. [In Hiring](#in-hiring)
8. [Advantages](#advantages)
9. [Disadvantages](#disadvantages)
10. [Future Trends](#future-trends)
11. [FAQ](#frequently-asked-questions)

---

## What is Deep Learning?

Deep Learning has enabled breakthroughs in tasks previously considered impossible for machines: image recognition, speech recognition, game playing, and more.

### The Depth Advantage

The "deep" refers to the number of layers. Deep networks learn hierarchical representations:
- First layers detect simple features
- Middle layers combine into complex features
- Later layers recognize high-level concepts

---

## History

- **2012**: AlexNet's ImageNet victory sparked the deep learning revolution
- **2014**: GANs enabled realistic image generation
- **2017**: Transformers revolutionized NLP

---

## How It Works

### Artificial Neurons

The basic unit computes: weighted sum of inputs + bias → activation function → output

### Forward Propagation

Information flows from input → hidden layers → output

### Backpropagation

The learning algorithm that adjusts weights to reduce error

---

## Architectures

- **CNNs**: For grid-like data (images)
- **RNNs**: For sequential data (text, time series)
- **Transformers**: For language processing

---

## Applications

- **Computer Vision**: Image recognition, object detection
- **NLP**: Translation, text generation
- **Speech Recognition**: Converting speech to text
- **Game Playing**: AlphaGo, chess engines

---

## In Hiring

- **Resume Analysis**: Understanding semantic meaning in resumes
- **Video Interview Analysis**: Assessing candidate responses
- **Predictive Analytics**: Forecasting job performance

---

## Advantages

- **Automatic Feature Learning**: No manual feature engineering needed
- **State-of-the-Art Performance**: Best results on many benchmarks
- **Scalability**: Performance improves with more data

---

## Disadvantages

- **Data Hungry**: Requires massive datasets
- **Computationally Expensive**: Training requires significant resources
- **Black Box**: Difficult to interpret decisions

---

## FAQ

### Why is it called "deep"?

Refers to the number of layers—deep networks have many hidden layers.

### How much data is needed?

Deep learning typically requires thousands to millions of examples, though transfer learning can reduce this.

---

## Related Terms

- [Machine Learning](/ai-glossary/machine-learning)
- [Neural Network](/ai-glossary/neural-network)
- [CNN](/ai-glossary/convolutional-neural-network)
- [Transformer](/ai-glossary/transformer)`,
    related: ["machine-learning", "neural-network", "convolutional-neural-network", "recurrent-neural-network", "transformer"]
  },

  "neural-network": {
    title: "Neural Network",
    slug: "neural-network",
    category: "N",
    definition: "A computing system inspired by biological neural networks, composed of interconnected nodes (neurons) that process information using connectionist approaches to computation.",
    fullContent: `# Neural Network

## Quick Definition

**Neural Network** is a computing system inspired by biological neural networks, consisting of interconnected nodes (neurons) organized in layers that process information using connectionist approaches to computation.

## Table of Contents
1. [What is a Neural Network?](#what-is-a-neural-network)
2. [Biological Inspiration](#biological-inspiration)
3. [How Neural Networks Work](#how-neural-networks-work)
4. [Types of Neural Networks](#types-of-neural-networks)
5. [Training Process](#training-process)
6. [Applications](#applications)
7. [In Hiring](#in-hiring)
8. [Advantages](#advantages)
9. [Disadvantages](#disadvantages)
10. [Future Trends](#future-trends)
11. [FAQ](#frequently-asked-questions)

---

## What is a Neural Network?

A neural network is essentially a computational model that mimics the way biological neurons communicate. Individual neurons perform simple computations, but when millions are connected properly, they can accomplish remarkable feats.

---

## Biological Inspiration

### Biological Neurons

Real neurons have:
- **Dendrites**: Receive signals
- **Cell body**: Processes signals
- **Axon**: Transmits signals
- **Synapses**: Connections between neurons

### Artificial Neurons

A simplified mathematical model receiving inputs, computing weighted sums, and applying activation functions.

---

## How Neural Networks Work

### Network Architecture

- **Input Layer**: Receives raw data
- **Hidden Layers**: Transform the representation
- **Output Layer**: Produces predictions

### Forward Pass

Information flows forward through the network, with each layer applying computations to its inputs.

### Activation Functions

- **ReLU**: Most common, outputs max(0, x)
- **Sigmoid**: Squashes to 0-1 range
- **Tanh**: Squashes to -1 to 1 range

---

## Types of Neural Networks

- **Feedforward Networks**: Simple one-way flow
- **CNNs**: For images and grid-like data
- **RNNs**: For sequential data
- **Transformers**: For language processing
- **Autoencoders**: For representation learning
- **GANs**: For generating synthetic data

---

## Training Process

1. **Initialization**: Random weights
2. **Forward Propagation**: Compute predictions
3. **Loss Calculation**: Measure error
4. **Backpropagation**: Compute gradients
5. **Weight Update**: Adjust to reduce error

---

## Applications

- **Image Processing**: Classification, detection
- **Natural Language**: Translation, generation
- **Speech**: Recognition and synthesis
- **Finance**: Trading, risk assessment
- **Gaming**: Game playing, strategy

---

## In Hiring

- **Resume Analysis**: Extracting and understanding resume content
- **Skills Assessment**: Evaluating code and responses
- **Predictive Analytics**: Forecasting job performance
- **Employee Analytics**: Retention and engagement prediction

---

## Advantages

- **Flexibility**: Can learn any function given sufficient data
- **Adaptability**: Continues learning as new data arrives
- **Parallelism**: Naturally suited to parallel computation
- **Robustness**: Handles noisy, incomplete data

---

## Disadvantages

- **Black Box**: Difficult to understand decisions
- **Data Hungry**: Requires large training datasets
- **Computationally Expensive**: Training requires significant resources
- **Overfitting**: Can memorize rather than generalize

---

## FAQ

### Are neural networks like the human brain?

Inspired by the brain but much simpler. Biological neurons are more complex, and brains have billions more neurons and connections.

---

## Related Terms

- [Deep Learning](/ai-glossary/deep-learning)
- [Backpropagation](/ai-glossary/backpropagation)
- [Perceptron](/ai-glossary/perceptron)
- [CNN](/ai-glossary/convolutional-neural-network)
- [RNN](/ai-glossary/recurrent-neural-network)`,
    related: ["deep-learning", "backpropagation", "perceptron", "convolutional-neural-network", "recurrent-neural-network", "artificial-intelligence"]
  },

  "algorithm": {
    title: "Algorithm",
    slug: "algorithm",
    category: "A",
    definition: "A step-by-step procedure or a set of rules to be followed in calculations or other problem-solving operations.",
    fullContent: `# Algorithm

## Quick Definition

**Algorithm** is a step-by-step procedure or a set of rules to be followed in calculations or other problem-solving operations, especially by a computer.

## Table of Contents
1. [What is an Algorithm?](#what-is-an-algorithm)
2. [History](#history)
3. [How Algorithms Work](#how-algorithms-work)
4. [Types of Algorithms](#types-of-algorithms)
5. [Algorithm Design](#algorithm-design)
6. [Analysis](#analysis)
7. [Applications](#applications)
8. [In AI](#in-ai)
9. [In Hiring](#in-hiring)
10. [Advantages](#advantages)
11. [Disadvantages](#disadvantages)
12. [Future Trends](#future-trends)
13. [FAQ](#frequently-asked-questions)

---

## What is an Algorithm?

An algorithm is essentially a recipe for solving a problem. Just as a recipe provides step-by-step cooking instructions, an algorithm provides step-by-step problem-solving instructions.

### Key Characteristics

- **Finiteness**: Must terminate after a finite number of steps
- **Definiteness**: Each step must be precisely defined
- **Input**: Zero or more inputs
- **Output**: At least one output
- **Effectiveness**: Steps must be doable

---

## History

The word comes from 9th-century Persian mathematician al-Khwarizmi. Ancient algorithms include Euclid's GCD algorithm and Eratosthenes' sieve for prime numbers.

---

## How Algorithms Work

### Algorithm Structure

1. **Input**: Receive data
2. **Initialization**: Set up conditions
3. **Processing**: Perform operations
4. **Decision Making**: Branch based on conditions
5. **Iteration**: Repeat as needed
6. **Output**: Return results

---

## Types of Algorithms

- **Brute Force**: Try all possibilities
- **Divide and Conquer**: Break into subproblems
- **Dynamic Programming**: Store subproblem solutions
- **Greedy**: Make locally optimal choices
- **Backtracking**: Systematic trial and error
- **Randomized**: Use randomness in the algorithm

---

## Algorithm Design

Good design balances:
- **Correctness**: Produces right results
- **Efficiency**: Uses resources wisely
- **Readability**: Clear and understandable
- **Robustness**: Handles edge cases

---

## Analysis

### Big O Notation

Describes how performance scales:
- **O(1)**: Constant time
- **O(log n)**: Logarithmic
- **O(n)**: Linear
- **O(n²)**: Quadratic
- **O(2ⁿ)**: Exponential

---

## Applications

- **Search Engines**: Finding relevant pages
- **GPS Navigation**: Finding shortest routes
- **Recommendation Systems**: Suggesting content
- **E-commerce**: Processing transactions

---

## In AI

Algorithms are the foundation of all AI systems:
- **Learning Algorithms**: ML algorithms that learn from data
- **Search Algorithms**: Finding optimal solutions
- **Optimization**: Improving model performance

---

## In Hiring

- **Matching Algorithms**: Connecting candidates with jobs
- **Ranking Algorithms**: Prioritizing applicants
- **Scheduling Algorithms**: Coordinating interviews

---

## Advantages

- **Precision**: Execute instructions exactly
- **Speed**: Faster than human computation
- **Scalability**: Handle increasing data
- **Consistency**: Same inputs produce same outputs

---

## Disadvantages

- **Complexity**: Designing requires expertise
- **Rigidity**: Follow rules exactly
- **Computational Cost**: Some algorithms require significant resources

---

## FAQ

### What's the difference between an algorithm and a program?

An algorithm is the logical procedure; a program is the concrete implementation.

---

## Related Terms

- [Machine Learning](/ai-glossary/machine-learning)
- [Heuristic](/ai-glossary/heuristic)
- [Big O Notation](/ai-glossary/big-o-notation)
- [Sorting Algorithm](/ai-glossary/sorting-algorithm)`,
    related: ["machine-learning", "heuristic", "optimization", "data-structures"]
  }
};

/**
 * Get full term by slug
 */
export function getTermBySlug(slug: string): FullTerm | undefined {
  return terms[slug];
}

/**
 * Get all full terms
 */
export function getAllFullTerms(): FullTerm[] {
  return Object.values(terms);
}

/**
 * Get related terms
 */
export function getRelatedTerms(slugs: string[]): FullTerm[] {
  return slugs
    .map(slug => terms[slug])
    .filter((term): term is FullTerm => term !== undefined);
}
