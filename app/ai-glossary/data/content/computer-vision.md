# Computer Vision

## Quick Definition

**Computer Vision** is a field of artificial intelligence that enables computers to interpret and understand visual information from the world, including images and videos. For HR professionals, computer vision powers technologies that analyze video interviews, process scanned resumes and documents, verify candidate identity, and enable new approaches to talent assessment. It's the technology behind facial recognition, document scanning, and automated visual inspection—transforming how machines "see" and understand visual information.

## Table of Contents
1. [What is Computer Vision?](#what-is-computer-vision)
2. [How Humans See vs. How Computers See](#how-humans-see-vs-how-computers-see)
3. [History and Evolution](#history-and-evolution)
4. [How Computer Vision Works](#how-computer-vision-works)
5. [Key Computer Vision Tasks](#key-computer-vision-tasks)
6. [Neural Networks in Computer Vision](#neural-networks-in-computer-vision)
7. [Applications Across Industries](#applications-across-industries)
8. [Computer Vision in HR and Hiring](#computer-vision-in-hr-and-hiring)
9. [Ethical Considerations](#ethical-considerations)
10. [Challenges and Limitations](#challenges-and-limitations)
11. [Future Trends](#future-trends)
12. [Frequently Asked Questions](#frequently-asked-questions)

---

## What is Computer Vision?

Computer vision teaches machines to see and understand visual information. Just as humans use their eyes and brains to process visual information, computer vision systems use cameras and algorithms to interpret images and videos.

The goal is not merely to capture images—that's what cameras do—but to extract meaningful information from them. A computer vision system doesn't just "see" a face; it recognizes whose face it is. It doesn't just capture a document; it reads and understands the text.

### The Visual Understanding Problem

Vision seems effortless to humans. We open our eyes and instantly understand our environment. But this apparent simplicity masks extraordinary complexity:

**The Inverse Problem**: Vision is fundamentally an "inverse problem." The 3D world projects onto 2D retinas (or camera sensors), and our brains must reconstruct the 3D world from this 2D projection. Many different 3D scenes could produce the same 2D image, yet humans (and computer vision systems) must determine which is correct.

**Variability**: Visual data is incredibly variable. The same object looks different from different angles, under different lighting, with different backgrounds, and partially occluded.

**Context and World Knowledge**: Understanding visual scenes requires vast world knowledge. Is that person running or dancing? Is that object a weapon or a toy? Answering requires understanding context and human behavior.

**Ambiguity**: Visual information is often ambiguous. Is that a shadow or an object? Is that surface rough or smooth? Resolving ambiguity requires reasoning and additional information.

---

## How Humans See vs. How Computers See

### Human Vision

Human vision is a complex process involving eyes, optic nerves, and the brain:

**Eyes**: Light enters through the cornea and pupil, is focused by the lens, and strikes the retina. Photoreceptor cells (rods and cones) convert light into electrical signals.

**Optic Nerve**: These signals travel along the optic nerve to the brain.

**Visual Cortex**: The primary visual cortex (V1) processes basic features like edges and orientations. Higher visual areas (V2, V4, IT cortex) process increasingly complex features—shapes, objects, faces, scenes.

**Interpretation**: The brain integrates visual information with memories, knowledge, and expectations to understand and interpret what we see.

### Computer Vision

Computer vision systems take a different approach:

**Image Capture**: Digital cameras capture images using sensors that convert light into digital values. Each pixel has RGB values representing color.

**Preprocessing**: Images are often preprocessed to enhance features—noise reduction, contrast adjustment, resizing.

**Feature Extraction**: Algorithms identify important features in the image—edges, corners, textures, shapes.

**Pattern Recognition**: Machine learning models match features to learned patterns to identify objects, classify scenes, or make predictions.

**Interpretation**: Higher-level reasoning combines recognition results to understand the scene and make decisions.

The key difference: biological vision evolved through millions of years of natural selection, while computer vision is engineered using mathematical and computational principles.

---

## History and Evolution

The history of computer vision spans multiple eras, each with distinct approaches:

### 1960s-1970s: Early Beginnings

**1966**: Summer Vision Project at MIT—started the ambition of building a significant part of a visual system in a summer. (This proved wildly optimistic.)

**1970s**: Development of basic edge detection algorithms (Sobel operator, Canny edge detector) and fundamental techniques for processing images.

Focus was on extracting simple features—edges, lines, corners—and using these to build representations of images.

### 1980s: The Marr Paradigm

David Marr proposed an influential framework for vision:
- **Primal Sketch**: Edge detection and basic feature extraction
- **2.5D Sketch**: Depth and orientation information
- **3D Model Representation**: Complete 3D object models

This framework influenced research but proved difficult to implement computationally.

### 1990s: Statistical Approaches

Rise of statistical and machine learning approaches:
- **Eigenfaces** (1991): Using principal component analysis for face recognition
- **Support Vector Machines** and other ML methods for classification
- **Improved feature extraction**: Scale-Invariant Feature Transform (SIFT) and similar algorithms

Focus shifted from hand-crafted rules to learning from data.

### 2010s: Deep Learning Revolution

**2012**: AlexNet's breakthrough in ImageNet competition demonstrated the power of deep convolutional neural networks for image recognition.

This sparked a revolution:
- Performance on image recognition benchmarks improved dramatically
- Deep learning replaced hand-crafted features for virtually all vision tasks
- New architectures (ResNet, Inception, YOLO, etc.) pushed performance boundaries

### Present: Foundation Models and Beyond

**Vision Transformers**: Applying transformer architectures (successful in NLP) to computer vision
- **Multimodal models**: Systems like CLIP that understand both images and text
- **Diffusion models**: Revolutionary image generation capabilities
- **Foundation models**: Large models pre-trained on diverse visual tasks

---

## How Computer Vision Works

Understanding the technical foundation of computer vision helps appreciate its capabilities and limitations.

### Images as Data

Digital images are arrays of numbers:

**Grayscale Images**: Two-dimensional arrays where each value (0-255) represents brightness at that pixel.

**Color Images**: Three-dimensional arrays (height × width × 3) for RGB values—red, green, and blue color channels.

**Video**: Sequences of images, adding a temporal dimension.

Computer vision algorithms manipulate these numerical arrays to extract information.

### Edge Detection

Edges are fundamental features—boundaries between different regions in an image. Common edge detection algorithms:

**Sobel Operator**: Computes gradients to find regions of rapid intensity change.

**Canny Edge Detector**: Multi-stage algorithm that detects edges with good localization and minimal false detections.

**Laplacian of Gaussian**: Second derivative operator that finds zero-crossings for edge detection.

Edges serve as building blocks for more complex features and object recognition.

### Feature Detection and Description

Beyond edges, algorithms identify distinctive features:

**Corners**: Points where intensity changes in multiple directions (Harris corner detector, FAST detector).

**Blobs**: Regions of similar properties (SIFT, SURF).

**Feature Descriptors**: Numerical representations of features that can be matched across images (SIFT descriptors, ORB descriptors).

These features enable tasks like image stitching, object recognition, and tracking.

### Image Classification

Assigning a single label to an entire image: "this image contains a cat," "this image contains a car."

Modern approaches use **Convolutional Neural Networks (CNNs)**:
- **Convolutional layers**: Apply filters across the image to detect features
- **Pooling layers**: Reduce spatial dimensions while retaining important information
- **Fully connected layers**: Combine features to make final predictions

CNNs learn hierarchical representations—early layers detect simple features (edges, textures), later layers detect complex features (faces, objects), final layers make predictions.

### Object Detection

Finding and locating multiple objects in an image:

**Two-stage approaches** (Faster R-CNN): First propose regions that might contain objects, then classify each region.

**Single-stage approaches** (YOLO, SSD): Make predictions directly from the image in a single pass—faster but potentially less accurate.

**Output**: Bounding boxes around detected objects, plus class labels and confidence scores.

**HR Example**: Detecting and identifying people in a video interview, tracking their movements.

### Semantic Segmentation

Assigning a class label to each pixel in an image, dividing the image into regions based on object boundaries.

**Applications**: Medical image analysis (segmenting tumors), autonomous driving (segmenting road, pedestrians, other vehicles).

**HR Example**: Identifying different regions in a document—headers, paragraphs, tables, signatures.

---

## Key Computer Vision Tasks

Different computer vision systems focus on different tasks:

### Image Classification

Assigning a single label to an entire image. The fundamental building block for more complex tasks.

### Object Detection

Finding and localizing multiple objects in an image with bounding boxes and class labels.

### Semantic Segmentation

Labeling each pixel with its object category.

### Instance Segmentation

Segmenting each instance of an object separately (distinguishing between individual people rather than just "person" class).

### Pose Estimation

Estimating the pose or position of a person—identifying the position of joints (shoulders, elbows, knees, etc.).

**HR Example**: Analyzing candidate body language and engagement during video interviews.

### Face Recognition

Identifying or verifying a person's identity from facial features.

**HR Example**: Identity verification for remote hiring, securing access to HR systems.

### Optical Character Recognition (OCR)

Converting images of text into machine-readable text.

**HR Example**: Processing scanned resumes, extracting information from ID documents, digitizing paper applications.

### Tracking

Following objects or people across video frames.

**HR Example**: Tracking speakers in a video interview, monitoring engagement through attention and gaze.

---

## Neural Networks in Computer Vision

### Convolutional Neural Networks (CNNs)

The architecture that revolutionized computer vision:

**Convolutional Layers**: Apply filters (kernels) across the image, computing dot products between filter values and image patches. This detects features regardless of position.

**Pooling Layers**: Reduce spatial dimensions (typically by taking maximum values in small regions). This provides translation invariance and reduces computation.

**Activation Functions**: Introduce non-linearity (ReLU is common).

**Fully Connected Layers**: Combine features to make final predictions.

**Training**: CNNs learn filters automatically from data, rather than using hand-designed filters.

### Popular CNN Architectures

**LeNet-5** (1998): Early CNN for handwritten digit recognition.

**AlexNet** (2012): Breakthrough performance in ImageNet competition, sparking the deep learning revolution.

**VGG** (2014): Deeper networks with repeated 3×3 convolutions.

**GoogLeNet/Inception** (2014): Introduced the inception module with multiple filter sizes in parallel.

**ResNet** (2015): Introduced skip connections that enable training of very deep networks (152 layers or more).

**EfficientNet** (2019): Compound scaling of network depth, width, and resolution for better efficiency.

### Vision Transformers

Recently, transformer architectures (successful in NLP) have been applied to computer vision:

**Vision Transformer (ViT)**: Divides images into patches, treats patches as tokens, and applies transformer attention.

**Swin Transformer**: Hierarchical transformer architecture with shifted windows for efficient computation.

Transformers are achieving state-of-the-art results on many benchmarks, though CNNs remain widely used.

---

## Applications Across Industries

### Healthcare

**Medical Imaging**: Analyzing X-rays, MRIs, CT scans for disease detection and diagnosis.

**Surgical Assistance**: Augmented reality overlays during surgery, instrument tracking.

**Patient Monitoring**: Detecting patient condition, falls, or distress from video feeds.

### Automotive

**Autonomous Driving**: Detecting lanes, other vehicles, pedestrians, traffic signs and signals.

**Driver Monitoring**: Detecting drowsiness, distraction, or impairment.

**Parking Assistance**: Automated parking, detecting obstacles.

### Retail

**Checkout-Free Shopping**: Amazon Go style stores using cameras to track items.

**Shelf Monitoring**: Automatically checking stock levels, pricing compliance.

**Customer Analytics**: Counting customers, tracking paths through stores, analyzing demographics.

### Manufacturing

**Quality Control**: Detecting defects in products on assembly lines.

**Safety Monitoring**: Detecting safety violations, protective equipment compliance.

**Inventory Management**: Monitoring stock, automating ordering.

### Security

**Surveillance**: Monitoring for suspicious activities, recognizing wanted individuals.

**Access Control**: Face recognition for building access.

**Perimeter Security**: Detecting intrusions, tracking movements.

### Entertainment

**Content Creation**: Visual effects, colorization, style transfer.

**Gaming**: Motion capture, real-time animation.

**Sports Analytics**: Analyzing player and ball movements.

---

## Computer Vision in HR and Hiring

### Document Processing

HR deals with vast amounts of paper and PDF documents:

**Resume Parsing**: Converting visual resume formats into structured data:
- Layout analysis: identifying headers, sections, lists
- Text extraction: OCR for non-digital resumes
- Structure understanding: recognizing work experience, education, skills sections

**ID Verification**: Automatically extracting information from government IDs:
- Document detection: identifying ID type and orientation
- Text extraction: reading name, ID number, dates
- Security features: detecting holograms, UV features (anti-fraud)

**Form Processing**: Digitizing paper applications and forms:
- Field identification: locating name, address, signature fields
- Data extraction: reading handwritten and printed information
- Validation: checking completeness and accuracy

### Video Interview Analysis

Video interviews provide rich data, and computer vision can analyze various aspects:

**Presence Detection**: Ensuring the candidate is present and visible throughout the interview.

**Attention Monitoring**: Tracking gaze direction to assess engagement:
- Looking at the interviewer/camera vs. looking away
- Distracted behavior (checking phone, looking around)
- Eye contact patterns

**Facial Expression Analysis**: While controversial, some systems attempt to infer emotional states:
- Smile detection (friendliness, enthusiasm)
- Attention/concentration indicators
- Nervousness indicators

**Posture and Body Language**: Analyzing non-verbal communication:
- Sitting posture (alert, slumped, fidgeting)
- Hand gestures and body movements
- Overall engagement indicators

**Important Ethical Considerations**: Video interview analysis raises significant privacy and bias concerns. Analyzing appearance, facial expressions, or body language may:
- Introduce demographic bias (different groups express themselves differently)
- Violate privacy expectations
- Lack scientific validation (do measured traits actually predict job performance?)

Best practice: Focus analysis on speech content (using NLP) rather than appearance. If visual analysis is used, obtain informed consent, audit for bias, and maintain human oversight.

### Proctoring and Identity Verification

For remote hiring and assessments:

**Identity Verification**: Ensuring candidates are who they claim to be:
- Face matching: comparing live video to ID photo
- Liveness detection: ensuring a real person is present (not a photo or video)

**Proctoring**: Monitoring for integrity during remote assessments:
- Detecting multiple people in frame
- Identifying unauthorized materials or devices
- Tracking gaze for suspicious behavior

### Analytics and Insights

Visual data provides insights for optimizing hiring processes:

**Interview Analysis**: Understanding patterns across many interviews:
- Typical duration and pacing
- Common response lengths
- Non-verbal patterns

**Facility Analysis**: For on-site hiring events or career fairs:
- Traffic patterns: where candidates spend time
- Engagement: which displays attract attention
- Demographics: estimating diversity and reach

---

## Ethical Considerations

Computer vision in HR raises important ethical questions:

### Privacy and Consent

Recording and analyzing video creates privacy concerns:
- What data is collected?
- How is it stored and protected?
- Who has access?
- How long is it retained?

Candidates should give informed consent for video recording and analysis.

### Bias and Fairness

Computer vision systems can perpetuate or amplify biases:
- **Training data bias**: If training data underrepresents certain groups, performance may be worse for those groups
- **Algorithmic bias**: Systems may perform differently based on demographics, even when not explicitly using demographic information
- **Proxy discrimination**: Visual features correlated with demographics may be used for decisions

Regular auditing for disparate impact across demographic groups is essential.

### Surveillance Concerns

Visual monitoring can feel like surveillance:
- Candidates may feel uncomfortable being recorded and analyzed
- Could deter qualified candidates from applying
- May affect candidate behavior (artificial rather than natural)

### Validity Questions

Even when technical systems work well, questions remain about validity:
- Do measured visual traits actually predict job performance?
- Are the correlations meaningful or spurious?
- Could conscious or unconscious bias be affecting interpretation?

Visual analysis should be used cautiously, with clear evidence of validity and regular validation.

---

## Challenges and Limitations

### Lighting and Environmental Variability

Visual appearance changes dramatically with lighting:
- Brightness and contrast variations
- Shadows and reflections
- Different color temperatures

Systems must be robust to these variations, often requiring careful normalization and augmentation.

### Occlusion and Clutter

Objects may be partially hidden (occluded) or in cluttered environments:
- Identifying objects that are partially visible
- Separating objects from complex backgrounds
- Handling overlapping objects

### Computational Complexity

High-resolution video and complex models require significant computation:
- Real-time processing requires efficient algorithms and hardware
- High-resolution images increase memory and computation requirements
- Complex models (like deep CNNs) require GPUs or specialized hardware

### Generalization

Models trained on one domain may not generalize to others:
- A face recognition system trained on professional headshots may fail with webcam video
- Document parsers trained on specific formats may fail with unusual layouts
- Systems may perform differently across demographics or regions

### Interpretability

Deep learning models for vision are often black boxes:
- Difficult to understand why specific predictions were made
- Challenging to debug when errors occur
- Hard to provide explanations to humans

For HR applications, explainability matters when making decisions about candidates.

---

## Future Trends

The future of computer vision in HR looks exciting but requires careful implementation:

### Improved Understanding

More sophisticated visual understanding:
- **Scene understanding**: Recognizing not just objects but relationships and context
- **Common sense**: Incorporating world knowledge into visual reasoning
- **Cultural awareness**: Understanding cultural differences in expression and behavior

### Multimodal Integration

Combining vision with other modalities:
- **Vision + Language**: Visual question answering, image captioning, video understanding
- **Vision + Audio**: Analyzing video with both visual and audio information
- **Vision + Sensors**: Combining cameras with depth sensors, microphones, and other devices

### Edge Deployment

Running computer vision on local devices rather than in the cloud:
- **Privacy**: Data stays on device
- **Latency**: Real-time processing without network delays
- **Reliability**: Works without internet connection

### Few-Shot and Self-Supervised Learning

Reducing data requirements:
- **Few-shot learning**: Learning from just a few examples
- **Self-supervised learning**: Learning from unlabeled data
- **Synthetic data**: Generating training data rather than collecting it

### Explainable AI

Making vision systems more interpretable:
- **Attention visualization**: Showing what the model focused on
- **Saliency maps**: Highlighting important regions
- **Feature visualization**: Understanding what features are being detected

---

## Frequently Asked Questions

### Is computer vision the same as image processing?

No. Image processing focuses on manipulating images (enhancement, compression, filtering) without necessarily understanding their content. Computer vision aims to understand and extract meaning from visual data.

### Can computer vision detect lies?

Not directly. While some systems claim to detect deception from facial micro-expressions or physiological indicators, the scientific validity is questionable. Visual cues alone are unreliable indicators of deception. HR should not rely on such systems for high-stakes decisions.

### How accurate is facial recognition?

State-of-the-art facial recognition can be highly accurate in ideal conditions (frontal, well-lit images). However, accuracy decreases with:
- Poor lighting or unusual angles
- Facial hair, glasses, or makeup
- Age, race, and gender disparities (system performs worse for some groups)

For HR applications, these limitations matter greatly. Use with caution and regular validation.

### Can computer vision read body language?

It can detect and track body language patterns (posture, gestures, gaze direction), but interpreting their meaning requires context and cultural knowledge. Different cultures express themselves differently, and individual variation is substantial. Inferences about personality or fit from body language should be made cautiously.

### What data do computer vision systems need?

Training data requirements vary:
- **Traditional ML**: Thousands of labeled examples
- **Deep learning**: Tens to hundreds of thousands of labeled examples
- **Transfer learning**: Can reduce requirements significantly

For HR applications, many models use pre-trained vision models fine-tuned on domain-specific data.

### What's the difference between 2D and 3D computer vision?

**2D Vision**: Works with flat images and videos. Most common applications—recognition, detection, segmentation—operate in 2D.

**3D Vision**: Works with three-dimensional data, including:
- **Depth cameras**: Measure distance to each pixel
- **Stereo vision**: Using two cameras to infer depth
- **Point clouds**: 3D representations of scenes
- **3D reconstruction**: Building 3D models from 2D images

3D vision is more complex but enables applications like spatial understanding, augmented reality, and robotics.

### How do computer vision systems handle different lighting conditions?

Robust systems use various techniques:
- **Histogram equalization**: Normalizing brightness and contrast
- **Adaptive thresholding**: Adjusting to local lighting conditions
- **Data augmentation**: Training on images with varied lighting
- **HDR imaging**: Capturing wider dynamic range
- **Infrared/thermal**: Using wavelengths less sensitive to visible light variations

### What are some common computer vision algorithms?

Traditional algorithms (before deep learning):
- **Canny edge detector**: Edge detection
- **SIFT/ORB**: Feature detection and description
- **Hough transform**: Detecting lines, circles, other shapes
- **Optical flow**: Tracking motion between frames
- **Kalman filters**: Tracking objects over time

Modern approaches use deep neural networks (CNNs, transformers) which learn features automatically from data rather than using hand-crafted algorithms.

---

## Case Studies: Computer Vision in HR

### Case Study 1: Automated Resume Processing

A large technology company received 50,000+ resumes annually. Manual processing was time-consuming and error-prone.

**Solution**: A computer vision system that:
1. Scanned or photographed paper resumes
2. Used OCR to convert images to text
3. Analyzed layout to identify sections (experience, education, skills)
4. Extracted structured information for their ATS

**Results**:
- 75% reduction in processing time
- 95% accuracy for information extraction
- Faster time-to-hire
- Recruiters focused on qualified candidates rather than data entry

**Key Learning**: Combining OCR with layout analysis was crucial—simple OCR produced disorganized text, but understanding document structure made extraction reliable.

### Case Study 2: Video Interview Analytics

A remote-first hiring platform wanted to improve their video interview experience.

**Solution**: Computer vision analysis that:
1. Detected candidate presence and framing
2. Tracked gaze direction to measure engagement
3. Monitored audio levels for technical issues
4. Provided feedback on lighting and camera positioning

**Approach**: Focus on technical quality and engagement, not facial expressions or personality inferences. Explicitly avoided appearance-based analysis to prevent bias.

**Results**:
- 40% reduction in technical issues during interviews
- Improved candidate experience (better framing, lighting)
- Data on optimal interview length and engagement patterns

**Key Learning**: Focusing on technical quality rather than personality assessment avoided bias concerns while still providing value.

### Case Study 3: Diversity Analytics at Career Fairs

A company wanted to understand diversity at their recruiting events.

**Solution**: Anonymous visual analysis that:
1. Counted attendees (without storing identifying information)
2. Estimated demographics from visual patterns
3. Tracked traffic patterns through the venue
4. Measured engagement at different displays

**Privacy protections**: No facial recognition, no individual identification, data aggregated immediately, no storage of raw video.

**Results**:
- Identified which locations and events attracted diverse candidates
- Improved event planning and targeting
- Demonstrated commitment to diversity goals

**Key Learning**: Privacy-preserving visual analytics can provide valuable insights without compromising individual privacy.

---

## Implementation Considerations

For organizations implementing computer vision in HR:

### Data Privacy

Compliance with privacy regulations (GDPR, CCPA):
- **Informed consent**: Candidates must understand what's being recorded and how it's used
- **Data minimization**: Collect only what's necessary
- **Secure storage**: Encrypt video data, control access
- **Retention limits**: Delete data when no longer needed
- **Right to deletion**: Honor requests to remove data

### Bias Mitigation

Ensuring fair and equitable systems:
- **Training data**: Ensure diverse representation
- **Regular audits**: Test for disparate impact across demographic groups
- **Fairness constraints**: Build fairness into models where possible
- **Human oversight**: Maintain human review of automated decisions
- **Transparency**: Be open about what systems do and their limitations

### Technical Considerations

**Infrastructure**:
- **Computing resources**: Video processing requires significant CPU/GPU power
- **Storage**: Video consumes substantial storage
- **Bandwidth**: Real-time video needs good internet connections
- **Latency**: Processing should be fast enough for intended use

**Accuracy requirements**:
- **High stakes** (employment decisions): Requires higher accuracy and more oversight
- **Low stakes** (document digitization): Lower accuracy may be acceptable

**Integration**:
- How will visual systems integrate with existing HR tech stack?
- What data needs to flow between systems?
- How will results be presented to users?

### Change Management

**User acceptance**:
- Train recruiters and hiring managers on how to use the tools
- Explain capabilities and limitations
- Provide ongoing support

**Candidate experience**:
- Explain what's being done and why
- Obtain informed consent
- Provide options to opt-out where possible

**Stakeholder alignment**:
- Legal/compliance: Review for regulatory compliance
- IT/Security: Review data handling practices
- DEI: Audit for disparate impact
- Communications: Manage candidate messaging

---

## Emerging Applications

### Emotion Recognition

Controversial but developing field that attempts to recognize emotional states from facial expressions, voice patterns, and physiological signals.

**HR Applications** (approach with caution):
- **Customer service**: Assessing candidate empathy and warmth
- **Sales**: Evaluating persuasion and interpersonal skills
- **Leadership**: Identifying confidence and presence

**Concerns**:
- Cultural variation in emotional expression
- Privacy and surveillance concerns
- Questionable validity for predicting job performance
- Potential for bias and discrimination

**Best practice**: Avoid using emotion recognition for hiring decisions. Evidence is insufficient, and ethical concerns are substantial.

### Gaze and Attention Analysis

Tracking where candidates look during video interviews or assessments:

**Applications**:
- **Engagement**: Is candidate paying attention?
- **Focus**: What information is being prioritized?
- **Authenticity**: Is candidate reading from a script?

**Limitations**:
- Webcam quality affects accuracy
- Cultural differences in eye contact norms
- Personal variation in natural gaze patterns

### Microexpression Analysis

Detecting very brief facial expressions (1/25 to 1/5 of a second) that might indicate concealed emotions.

**Status**: Scientifically controversial. Validity for real-world applications is unproven.

**HR Recommendation**: Do not use. Evidence is insufficient, and potential for bias and misinterpretation is high.

---

## Technical Deep Dive: How CNNs Work

For those seeking deeper understanding of how modern computer vision works:

### Convolution Operation

The fundamental operation in CNNs:

**Input**: An image (height × width × channels for RGB)

**Filter/Kernel**: A small matrix of weights (typically 3×3 or 5×5)

**Operation**: Slide the filter across the image, computing element-wise multiplication and summation at each position.

**Output**: A feature map highlighting locations where the filter's pattern was found.

**Example**: An edge detector filter produces high values at edges, low values elsewhere.

### Pooling

Reducing spatial dimensions while preserving important information:

**Max Pooling**: Taking the maximum value in each region (most common)

**Average Pooling**: Taking the average value in each region

**Purpose**: Reduces computation, provides translation invariance (recognizing features regardless of exact position)

### Fully Connected Layers

After convolution and pooling, the network uses fully connected layers to combine features and make predictions.

**Flattening**: Converting 2D/3D feature maps into a 1D vector

**Dense layers**: Every neuron connected to every neuron in the previous layer

**Output**: Final predictions (class probabilities, bounding boxes, segmentation masks)

### Training

CNNs learn through supervised learning:

1. **Forward pass**: Input image produces predictions
2. **Loss calculation**: Compare predictions to actual labels
3. **Backpropagation**: Compute gradients of loss with respect to weights
4. **Weight update**: Adjust weights to reduce loss
5. **Repeat**: Iterate over training data multiple times

The network learns filters that detect useful features (edges, textures, patterns) and combinations of features that recognize objects.

---

## Evaluation Metrics

How do we measure computer vision performance?

### Classification Metrics

**Accuracy**: Percentage of correct predictions

**Top-5 Accuracy**: Is correct answer in top 5 predictions? (Used for large numbers of classes)

**Precision/Recall**: For imbalanced datasets

**F1-score**: Harmonic mean of precision and recall

### Detection Metrics

**IoU (Intersection over Union)**: Overlap between predicted and actual bounding boxes

**mAP (mean Average Precision)**: Average precision across all classes at various IoU thresholds

**AP50, AP75**: Average precision at IoU thresholds of 0.5, 0.75

### Segmentation Metrics

**Pixel Accuracy**: Percentage of pixels correctly classified

**IoU**: Overlap between predicted and actual segmentation

**Dice Coefficient**: Similar to IoU but less sensitive to small objects

### Speed Metrics

**FPS (Frames Per Second)**: How many frames can be processed per second

**Latency**: Time from input to output

**Inference Time**: How long the model takes to make a prediction

For HR applications, both accuracy and speed matter. Real-time video analysis requires higher FPS than document processing.

---

## Related Terms

- **[Artificial Intelligence](/ai-glossary/artificial-intelligence)** - The broader field
- **[Machine Learning](/ai-glossary/machine-learning)** - Learning from data
- **[Deep Learning](/ai-glossary/deep-learning)** - Neural networks
- **[CNN](/ai-glossary/convolutional-neural-network)** - Architecture for images
- **[OCR](/ai-glossary/ocr)** - Converting images of text to digital text
- **[Facial Recognition](/ai-glossary/facial-recognition)** - Identifying faces
- **[Computer Vision](/ai-glossary/computer-vision)** - AI that sees
- **[Pose Estimation](/ai-glossary/pose-estimation)** - Body position detection

---

## Further Reading

**Books**:
- "Computer Vision: Algorithms and Applications" by Richard Szeliski
- "Deep Learning for Vision Systems" by Mohamed Elgendy
- "Learning OpenCV 4 Computer Vision with Python"

**Online Courses**:
- [Coursera - Deep Learning Specialization](https://www.coursera.org/specializations/deep-learning) by Andrew Ng
- [Udacity - Computer Vision Nanodegree](https://www.udacity.com/course/computer-vision-nanodegree--nd013)

**Tools and Libraries**:
- [OpenCV](https://opencv.org) - Open-source computer vision library
- [PyTorch](https://pytorch.org) - Deep learning framework with vision support
- [TensorFlow](https://www.tensorflow.org) - Deep learning framework

---

*This glossary entry provides a comprehensive overview of Computer Vision specifically for HR professionals and recruiters. For definitions of related terms, explore our full AI Glossary.*
