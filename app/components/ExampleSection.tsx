

"use client";

import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
  HStack,
  Tag,
  Icon,
  Container,
} from "@chakra-ui/react";
import { useState } from "react";
import { Flame, FileText, Video } from "lucide-react";

export default function ExampleSection() {
  const cards = [
    {
      title: "LinkedIn Agency Scaling: Intelligence Framework 97% Miss (2025 Study)",
      icon: FileText,

      tag: "Blog",
      isActive: false,
    },
    {
      title: "How to Get High Paying Jobs LinkedIn: The Ultimate 2025 Guide",
      icon: Flame,

      tag: "Guide",
      isActive: true,
    },
    {
      title: "How to Make Money Fast on LinkedIn: The Platform Where Being Boring Makes You Rich",
      icon: Video,

      tag: "Round Up",
      isActive: false,
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Box py={{ base: 10, md: 10 }} px={{ base: 4, md: 16 }} id="examples">
      <Container
        maxW="7xl"
        px={{ base: 4, sm: 6, lg: 12 }}
        py={6}
        textAlign="center"
        rounded="2xl"

      >
        <VStack gap={4} textAlign="center" maxW="6xl" mx="auto" >
          <Text fontSize="xs" color="black" fontWeight="semibold" mb={2} letterSpacing={"2px"}>
            EXAMPLES
          </Text>
          {/* Heading */}
          <Heading
            as="h2"
            fontSize={{ base: "lg", md: "5xl" }}
            fontWeight="medium"
            mb={10}
          // textAlign={{ base: "center", md: "left" }}
          >
            AI-generated content that {" "}
            <Text as="span" color="#4241ff" fontWeight={"bold"}>
              humans love to read
            </Text>
          </Heading>
        </VStack>


        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1.5fr" }}
          gap={8}
          alignItems="start"
        >
          {/* Left Column */}
          <VStack gap={4} w="full" align="stretch" id="leftCol">
            {cards.map((card, idx) => (
              <Box
                key={idx}
                w="full"
                borderWidth="1px"
                borderRadius="lg"
                py={5}
                px={4}
                boxShadow={activeIndex === idx ? "0 0 0 2px #4241ff" : "sm"}
                _hover={{ boxShadow: "md", bg: "gray.100", cursor: "pointer", borderColor: "#4241ff" }}
                transition="all 0.2s"
                onClick={() => setActiveIndex(idx)}
              >
                <VStack align="start" gap={3}>
                  <Text fontWeight="bold" fontSize="lg" textAlign={"start"}>
                    {card.title}
                  </Text>
                  <HStack justify="space-between" w="full">
                    {/* <HStack>
                      <Icon as={card.icon} color="purple.500" />
                      <Text fontSize="sm" fontWeight="medium">
                        {card.brand}
                      </Text>
                    </HStack> */}
                    <Tag.Root rounded={"lg"} px={2} bg="#DAE9F4">
                      <Tag.Label color="#4241ff">{card.tag}</Tag.Label>
                    </Tag.Root>
                  </HStack>
                </VStack>
              </Box>
            ))}
          </VStack>

          {/* Right Column */}
          <GridItem>
            {/* Wrapper ensures equal height with left side */}
            <Box
              h="415px"

              display="flex"
              flexDir="column"
              justifyContent="stretch"
            >
              {activeIndex === 0 &&
                <Box
                  flex="1"
                  borderRadius="lg"
                  boxShadow="md"
                  p={7}
                  px={10}
                  overflowY="auto"
                  maxH={{ base: "400px", md: "100%" }}
                  textAlign={"start"}
                  tabIndex={0}
                  role="region"
                  aria-label="Blog post content preview"
                >
                  <Text fontWeight="bold" fontSize="2xl" mb={2}>
                    LinkedIn Agency Scaling: Intelligence Framework 97% Miss (2025 Study)
                  </Text>
                  <Box fontSize="md" color="gray.600" mb={4}>
                    <b>By Udit Goenka | July 20, 2025 | Reading Time: 12 minutes</b>
                    <br /><br />

                    <Text fontSize="lg" fontWeight="bold">TL;DR:</Text><br />
                    A 6-month analysis of 500 LinkedIn agencies reveals that 97% remain trapped in manual processes while the top 3% use AI-powered intelligence systems to scale from 5 clients to 50+ without hiring specialists.
                    <br /><br />
                    These elite agencies charge $15,000-$25,000 monthly by positioning intelligence as their core offering, transforming the traditional service delivery model through systematic competitor analysis and industry-specific automation.
                    <br /><br />
                    After spending six months tracking 500 LinkedIn agencies and analyzing 25,000 LinkedIn posts, I discovered something that will fundamentally change how you think about agency scaling.
                    <br /><br />
                    97% of LinkedIn agencies follow the exact same outdated playbook that actually limits their growth. They hire specialists for every industry, create content manually, and compete on creative excellence.
                    <br /><br />
                    The 3% who are crushing it use a completely different approach that most people don’t even know exists.
                    <br /><br />
                    I’m talking about agencies serving Fortune 500 clients who moved from charging $3,000 per month to $25,000 per month by completely changing their service delivery model. Personal brand specialists who went from managing five clients to managing 50 clients without hiring a single additional team member.
                    <br /><br />
                    <Text fontSize="lg" fontWeight="bold">
                      Table of Contents
                    </Text>
                    <Box as="ul" listStyleType="circle">

                      <li>The Scaling Contradiction Destroying Agencies</li>
                      <li>The Intelligence Multiplication Model</li>
                      <li>Phase 1: Systematic Intelligence Foundation</li>
                      <li>Phase 2: Scalable Expertise Delivery</li>
                      <li>Phase 3: Premium Positioning Through Results</li>
                      <li>Four Critical Advantages of Intelligence-First Agencies</li>
                      <li>The Service Evolution Strategy: Real Transformation Case Study</li>
                      <li>Why 90% of Agencies Struggle: Three Fatal Patterns</li>
                      <li>The Intelligence-First Implementation Framework</li>
                      <li>Strategic Intelligence Advantages Most Agencies Miss</li>
                      <li>Intelligence Metrics vs Social Media Vanity Metrics</li>
                      <li>The Autoposting.ai Advantage: Why This Platform Changes Everything</li>
                      <li>Implementation Decision: Your Next Steps</li>
                      <li>The Intelligence Revolution Is Here</li>
                      <li>Frequently Asked Questions</li>
                    </Box>
                    <br />

                    <b>The Scaling Contradiction Destroying Agencies</b><br />
                    Here’s the brutal truth that 78% of agencies face: to serve more clients, they need to hire more people. But hiring more people reduces profit margins and complicates operations. This is what I call the scaling contradiction.
                    <br /><br />
                    Traditional agencies get stuck at $3,000-5,000 monthly retainers, constantly replacing clients instead of growing with them. They burn through profit margins hiring specialists for healthcare, fintech, manufacturing, and every other vertical they want to serve.
                    <br /><br />
                    Meanwhile, AI-powered agencies charge $15,000-25,000 monthly by positioning intelligence as their core offering. They serve manufacturing, healthcare, and fintech clients with identical expertise because their intelligence infrastructure scales without human limitations.
                    <br /><br />
                    The data doesn’t lie. After analyzing LinkedIn strategies across 127 different industries and tracking content performance patterns, I’ve identified the exact methods that separate agencies charging premium rates from those competing on price.
                    <br /><br />

                    <Text fontSize="lg" fontWeight="bold">
                      The Intelligence Multiplication Model
                    </Text>
                    <br />
                    While 89% of struggling agencies manually research every industry, competitor, and audience segment, the successful 3% discovered platforms like autoposting.ai that provide systematic industry intelligence.
                    <br /><br />
                    This isn’t your typical content generator. This platform analyzes competitor strategies, studies audience behavior patterns, and creates industry-specific LinkedIn approaches that perform like you have a team of 20 specialists.
                    <br /><br />

                    <Text fontSize="lg" fontWeight="bold">
                      Phase 1: Systematic Intelligence Foundation
                    </Text><br />

                    Instead of hiring healthcare specialists, fintech experts, and manufacturing consultants, elite agencies input client data into AI-powered platforms and receive:
                    <Box as="ul" listStyleType="circle">
                      <li>Comprehensive competitive analysis</li>
                      <li>Industry-specific audience insights</li>
                      <li>Content strategies tailored to each sector</li>
                      <li>Performance tracking with business metric correlation</li>
                    </Box>
                    <br />

                    <Text fontSize="lg" fontWeight="bold">Phase 2: Scalable Expertise Delivery</Text><br />
                    One agency I tracked serves clients across 12 different industries without hiring 12 specialists. Their secret? They leverage artificial intelligence that already understands what works in manufacturing versus SaaS versus healthcare.
                    <Box as="ul" listStyleType="circle">
                      <li>Audience research and behavioral mapping</li>
                      <li>Competitor strategy breakdown with tactical insights</li>
                      <li>Content personalization and industry adaptation</li>
                      <li>Performance optimization and business metric tracking</li>
                    </Box>
                    <br />

                    <Text fontSize="lg" fontWeight="bold">Phase 3: Premium Positioning Through Results</Text><br />
                    These agencies don’t sell LinkedIn posts. They sell LinkedIn growth systems that clients measure through lead generation and business development results.<br />
                    When you can demonstrate strategies that actually move business metrics, client retention becomes automatic and price objections disappear.
                    <br /><br />

                    <Text fontSize="lg" fontWeight="bold">Four Critical Advantages of Intelligence-First Agencies</Text>
                    <Box as="ul" listStyleType="circle">
                      <li>Industry Intelligence Over Generic Creativity</li>
                      <li>Scaling Without Overhead Multiplication</li>
                      <li>Premium Positioning Through Business Impact</li>
                      <li>Client Results Focus vs Client Management</li>
                    </Box>
                    <br />

                    <Text fontSize="lg" fontWeight="bold">The Service Evolution Strategy: Real Transformation Case Study</Text><br />
                    Starting Position:
                    <Box as="ul" listStyleType="circle">
                      <li>15 clients paying $4,000 per month for social media management</li>
                      <li>Manual research taking 40 hours per client monthly</li>
                      <li>Limited to 3-4 industries due to specialist requirements</li>
                      <li>Constantly competing on creative output rather than business results</li>
                    </Box>
                    <br />

                    <b>The Intelligence Transformation:</b> They recognized that generic LinkedIn advice doesn’t justify premium pricing. Industry-specific intelligence does.<br />
                    Instead of competing on creativity, they established authority through systematic intelligence: “We don’t just create LinkedIn content. We analyze your industry’s content patterns, study your competitors’ engagement strategies, and identify the specific approaches that convert in your sector.”
                    <br /><br />

                    <b>Implementation Framework:</b> Using platforms like autoposting.ai, they developed what I call the intelligence amplification framework:
                    <Box as="ul" listStyleType="circle">
                      <li>Comprehensive industry analysis powered by AI research</li>
                      <li>Competitor strategy breakdown with specific tactical insights</li>
                      <li>Audience behavior mapping with engagement optimization</li>
                      <li>Performance tracking with business metric correlation</li>
                    </Box>
                    <br />

                    <Text fontSize="lg" fontWeight="bold">Results After 90 Days:</Text>
                    <Box as="ul" listStyleType="circle">
                      <li>Average client retainer increased from $4,000 to $12,000</li>
                      <li>Client capacity expanded from 15 to 35 without additional hires</li>
                      <li>Client retention improved from 68% to 94% annually</li>
                      <li>Profit margins increased 240% through reduced overhead</li>
                    </Box>
                    <br />

                    <Text fontSize="lg" fontWeight="bold">Why 90% of Agencies Struggle: Three Fatal Patterns</Text>
                    <Box as="ul" listStyleType="circle">
                      <li><b>The Manual Research Trap:</b> 89% of agencies manually research each industry, competitor, and audience segment. Limited depth, inconsistent quality, and inability to scale without hiring specialists.</li>
                      <li><b>The Creative Competition Fallacy:</b> Agencies compete on creative excellence instead of strategic intelligence and business results.</li>
                      <li><b>The Overhead Multiplication Problem:</b> Hiring more specialists reduces margins and complicates operations; AI-powered agencies scale intelligence instead.</li>
                    </Box>
                    <br />

                    <Text fontSize="lg" fontWeight="bold">The Intelligence-First Implementation Framework</Text><br />
                    Days 1-30: Intelligence Foundation<br />
                    Replace manual research with AI-powered industry analysis, focus 80% on intelligence, 20% on execution, start shifting client conversations to intelligence focus.<br /><br />
                    Days 31-60: Service Transformation<br />
                    Introduce intelligence-based pricing, position as industry intelligence providers, start systematic competitor analysis, develop signature methodologies, scale client capacity without overhead.<br /><br />
                    Days 61-90: Premium Positioning<br />
                    Shift to 70% intelligence, 30% execution, introduce case studies demonstrating impact, create industry-specific service packages, implement revenue attribution tracking, scale what converts systematically.
                    <br /><br />

                    <Text fontSize="lg" fontWeight="bold">Strategic Intelligence Advantages Most Agencies Miss</Text>
                    <Box as="ul" listStyleType="circle">
                      <li>Industry Pattern Recognition</li>
                      <li>Systematic Competitive Analysis</li>
                      <li>Scalable Expertise Infrastructure</li>
                      <li>Business Metric Correlation</li>
                    </Box>
                    <br />

                    <Text fontSize="lg" fontWeight="bold">Intelligence Metrics vs Social Media Vanity Metrics</Text>
                    <Box as="ul" listStyleType="circle">
                      <li><b>Intelligence Metrics:</b> Industry-specific engagement patterns, competitor strategy effectiveness, audience analysis depth, business metric correlation, implementation velocity.</li>
                      <li><b>Traditional Metrics:</b> Generic engagement rates, follower growth, post impressions, basic demographics.</li>
                    </Box>
                    <br />

                    <b>The Autoposting.ai Advantage: Why This Platform Changes Everything</b>
                    <Box as="ul" listStyleType="circle">
                      <li>Real-Time Industry Intelligence: Trend monitoring, competitor content analysis, social listening, emerging topic discovery.</li>
                      <li>Strategic Content Architecture: Topic ideation, content structuring for LinkedIn, tone/style adaptation, SEO integration, fact-checking.</li>
                      <li>Intelligent Automation: Optimal posting times, content calendar planning, performance tracking with business correlation, automated optimization.</li>
                      <li>Competitive Intelligence: SERP analysis, competitor reverse-engineering, trend identification, market positioning opportunities.</li>
                    </Box>
                    <br />

                    <b>Implementation Decision: Your Next Steps</b><br />
                    Choice 1: Keep competing on creativity, hire more specialists, burn margins, replace clients.<br />
                    Choice 2: Implement intelligence frameworks, scale systematically with AI, join the 3% building premium agencies.
                    <br /><br />

                    <b>The Intelligence Revolution Is Here</b><br />
                    500 agencies tracked, 25,000 posts analyzed, 73 successful revenue models examined, client retention measured.<br />
                    Intelligence-first agencies focus on business results, not portfolios; they scale systematically, not headcount; they compete on insights, not creativity.
                    <br /><br />

                    <Text fontSize="lg" fontWeight="bold">Frequently Asked Questions</Text>
                    <Box as="ul" listStyleType="circle">
                      <li>What makes AI-powered LinkedIn agencies different from traditional agencies?</li>
                      <li>How much can agencies save by switching to intelligence-first models?</li>
                      <li>Which industries benefit most from AI-powered LinkedIn strategies?</li>
                      <li>How long does it take to implement the intelligence-first framework?</li>
                      <li>What’s the average price increase agencies see after implementing intelligence strategies?</li>
                      <li>How does autoposting.ai compare to other content creation tools?</li>
                      <li>Can small agencies compete with larger agencies using intelligence platforms?</li>
                      <li>What’s the biggest mistake agencies make when trying to scale?</li>
                      <li>How do intelligence-first agencies retain clients better?</li>
                      <li>Is the intelligence-first approach sustainable long-term?</li>
                      <li>How do agencies measure ROI from intelligence platforms?</li>
                      <li>What training is required to implement intelligence-first strategies?</li>
                      <li>How do agencies handle client customization requests?</li>
                      <li>What happens to creative talent in intelligence-first agencies?</li>
                      <li>Can intelligence platforms replace human expertise entirely?</li>
                      <li>How do agencies transition existing clients to intelligence-first models?</li>
                      <li>What’s the future of LinkedIn agency services?</li>
                      <li>How does the intelligence approach affect agency team structure?</li>
                      <li>What results can agencies expect in the first 90 days?</li>
                      <li>How do intelligence agencies handle competitive pressure?</li>
                    </Box>
                  </Box>
                </Box>


              }
              {activeIndex === 1 &&
                <Box
                  flex="1"
                  borderRadius="lg"
                  boxShadow="md"
                  p={7}
                  overflowY="auto"
                  maxH={{ base: "400px", md: "100%" }}
                  textAlign={"start"}
                  tabIndex={0}
                  role="region"
                  aria-label="Blog post content preview"
                >
                  <Heading as="h1" size="2xl" mb={2} color="#000" lineHeight="tall">
                    How to Get High Paying Jobs LinkedIn: The Ultimate 2025 Guide
                  </Heading>
                  <Text mb={4} fontSize="sm" color="#000">
                    By Udit Goenka | June 25, 2025 | Reading Time: 15 minutes
                  </Text>

                  {/* TL;DR */}
                  <Heading as="h2" size="lg" mt={6} mb={2} color="#000">
                    TL;DR
                  </Heading>
                  <Text mb={4} fontSize="md" lineHeight="tall" color="#000">
                    Want to land a six-figure role through LinkedIn? Stop using it like a glorified resume board. The pros use automation tools, AI features, content strategies, and hidden algorithm hacks that 94% of job seekers never discover. This guide reveals 7 insider methods that can boost your salary by 40-60% in 2025, including Reddit research techniques, LinkedIn automation ethics, and the exact content framework that attracts $150K+ opportunities to your inbox.
                  </Text>

                  {/* Table of Contents */}
                  <Heading as="h2" size="lg" mt={6} mb={3} color="#000">
                    Table of Contents
                  </Heading>
                  <Box as="ul" listStyleType="circle" pl={6} mb={6} fontSize="md" lineHeight="tall" color="#000">
                    <li>The Hidden Reality of LinkedIn Job Hunting</li>
                    <li>Why Most LinkedIn Job Strategies Fail</li>
                    <li>The 7 Insider Strategies That Actually Work</li>
                    <li>The Hidden LinkedIn Features That Change Everything</li>
                    <li>Industry-Specific Strategies for Maximum Impact</li>
                    <li>Measuring Your LinkedIn ROI</li>
                    <li>Common Pitfalls That Kill Your Chances</li>
                    <li>The Psychology Behind High-Paying Job Offers</li>
                    <li>Advanced LinkedIn Analytics for Job Seekers</li>
                    <li>The Future of LinkedIn Job Searching</li>
                    <li>20 FAQs About Getting High-Paying Jobs on LinkedIn</li>
                    <li>Key Takeaways for LinkedIn Job Search Success</li>
                  </Box>

                  {/* Full Content Sections */}

                  <Heading as="h2" size="lg" mt={6} mb={2} color="#000">
                    The Hidden Reality of LinkedIn Job Hunting
                  </Heading>
                  <Text mb={4} fontSize="md" lineHeight="tall" color="#000">
                    You’re scrolling through LinkedIn job postings like everyone else. Clicking “Easy Apply” on dozens of positions. Waiting for responses that never come. Here’s what’s really happening: While you’re playing the basic game, savvy professionals are using advanced strategies that make recruiters hunt them down with $150K+ offers. The difference? They understand that LinkedIn isn’t just a job board – it’s a personal brand amplifier, a content distribution machine, and when used correctly, a direct pipeline to high-paying opportunities.
                  </Text>

                  <Heading as="h2" size="lg" mt={6} mb={2} color="#000">
                    Why Most LinkedIn Job Strategies Fail
                  </Heading>
                  <Text mb={4} fontSize="md" lineHeight="tall" color="#000">
                    Most career advice tells you to “optimize your profile” and “network more.” That’s like bringing a knife to a gunfight. Today’s competitive market demands advanced tactics that 94% of recruiters use but only 6% of job seekers know about. According to recent data from levels.fyi, salary ranges now span from $41,297 to $2,153,000 at top companies like LinkedIn itself. The gap between average and exceptional LinkedIn users has never been wider.
                  </Text>

                  <Heading as="h2" size="lg" mt={6} mb={3} color="#000">
                    The 7 Insider Strategies That Actually Work
                  </Heading>

                  {/* Strategy 1 */}
                  <Heading as="h3" size="md" mt={4} mb={2} color="#000">
                    Strategy 1: Master LinkedIn’s Hidden Algorithm Ranking System
                  </Heading>
                  <Text mb={2} fontSize="md" lineHeight="tall" color="#000">
                    LinkedIn’s search algorithm doesn’t rank profiles randomly. It uses a scoring system called the Social Selling Index (SSI) that most job seekers ignore completely. Your SSI score (0-100) determines whether you appear in the top 10 search results or get buried on page 47.
                  </Text>
                  <Text mb={2} fontSize="md" lineHeight="tall" color="#000">
                    The Four SSI Components:
                  </Text>
                  <Box as="ul" listStyleType="circle" pl={6} mb={4} fontSize="md" lineHeight="tall" color="#000">
                    <li>Professional Brand (25 points): Profile completeness and keyword optimization</li>
                    <li>Finding People (25 points): How effectively you identify decision makers</li>
                    <li>Engaging Insights (25 points): Content sharing and engagement quality</li>
                    <li>Building Relationships (25 points): Connection quality and nurturing</li>
                  </Box>
                  <Text mb={4} fontSize="md" lineHeight="tall" color="#000">
                    Action Steps: Check your SSI score at linkedin.com/sales/ssi. Target 75+ score to rank in top search results. Include industry keywords in your headline. Post industry-relevant content 2-3 times weekly. Engage meaningfully with decision makers’ content daily.
                  </Text>

                  {/* Strategy 2 */}
                  <Heading as="h3" size="md" mt={4} mb={2} color="#000">
                    Strategy 2: The Content-First Approach to Attracting $150K+ Opportunities
                  </Heading>
                  <Text mb={2} fontSize="md" lineHeight="tall" color="#000">
                    Stop chasing jobs. Make them chase you. High-paying positions often go to people who demonstrate expertise publicly before applying. This is the “reverse funnel” approach that transforms you from applicant to sought-after expert.
                  </Text>
                  <Text mb={2} fontSize="md" lineHeight="tall" color="#000">
                    The STEP Content Framework:
                  </Text>
                  <Box as="ul" listStyleType="circle" pl={6} mb={4} fontSize="md" lineHeight="tall" color="#000">
                    <li>S – Storytelling Posts: Share behind-the-scenes moments from your career journey.</li>
                    <li>T – Thought Leadership Content: Share fresh insights, debunk myths, provide unique perspectives.</li>
                    <li>E – Engaging Content: Ask questions, run polls, spark meaningful discussions.</li>
                    <li>P – Personal Content: Share your values, work philosophy, and professional drivers.</li>
                  </Box>
                  <Text mb={4} fontSize="md" lineHeight="tall" color="#000">
                    Content Frequency Formula: Week 1: 2 thought leadership, 1 storytelling; Week 2: 1 thought leadership, 1 engaging, 1 personal; Week 3: 2 thought leadership, 1 storytelling; Week 4: 1 thought leadership, 1 engaging, 1 personal.
                  </Text>

                  {/* Strategy 3 */}
                  <Heading as="h3" size="md" mt={4} mb={2} color="#000">
                    Strategy 3: LinkedIn Automation (The Ethical Way)
                  </Heading>
                  <Text mb={4} fontSize="md" lineHeight="tall" color="#000">
                    60% of successful job seekers use some form of LinkedIn automation. The key is ethical and strategic use. Safe tactics include: auto-view profiles, send connection requests to industry peers, endorse skills systematically, schedule content posting. Tools: HeyReach, Expandi, Waalaxy. Follow the 40/40/20 rule: 40% automated profile visits, 40% automated endorsements, 20% manual outreach. Never exceed 100 actions per day. Personalize key messages.
                  </Text>

                  {/* Strategy 4 */}
                  <Heading as="h3" size="md" mt={4} mb={2} color="#000">
                    Strategy 4: The Reddit Research Advantage
                  </Heading>
                  <Text mb={4} fontSize="md" lineHeight="tall" color="#000">
                    Smart job seekers dig deeper using Reddit’s insider communities: r/jobsearchhacks, r/cscareerquestions, r/consulting, r/financialcareers, r/[CompanyName]. Search company + layoffs, culture, interview, and salary negotiation threads to discover insider info not found elsewhere.
                  </Text>

                  {/* Strategy 5 */}
                  <Heading as="h3" size="md" mt={4} mb={2} color="#000">
                    Strategy 5: Premium Features Most People Ignore
                  </Heading>
                  <Text mb={4} fontSize="md" lineHeight="tall" color="#000">
                    LinkedIn Premium ($39.99/month) offers AI Writing Assistant, Advanced Job Filters, InMail Credits, Who Viewed Your Profile, and Premium Badge. Proper use can generate 10x ROI. ROI Calculation: Even negotiating $3,000 more in salary covers the investment.
                  </Text>

                  {/* Strategy 6 */}
                  <Heading as="h3" size="md" mt={4} mb={2} color="#000">
                    Strategy 6: Advanced Salary Negotiation for LinkedIn-Sourced Opportunities
                  </Heading>
                  <Text mb={4} fontSize="md" lineHeight="tall" color="#000">
                    LinkedIn connections provide leverage. Use phased negotiation: Value Establishment, Market Research Presentation, Total Compensation Focus, Leverage Play. Secret weapon: Mention other companies that have reached out via LinkedIn without disclosing specifics.
                  </Text>

                  {/* Strategy 7 */}
                  <Heading as="h3" size="md" mt={4} mb={2} color="#000">
                    Strategy 7: The Compound Effect of Consistent Professional Presence
                  </Heading>
                  <Text mb={4} fontSize="md" lineHeight="tall" color="#000">
                    High-paying opportunities are the result of consistent visibility over months. 90-Day Compound Strategy: Days 1-30: Foundation Building; Days 31-60: Engagement Acceleration; Days 61-90: Authority Establishment. Automation Advantage: Autoposting.ai helps maintain consistency.
                  </Text>

                  {/* Hidden LinkedIn Features */}
                  <Heading as="h2" size="lg" mt={6} mb={3} color="#000">
                    The Hidden LinkedIn Features That Change Everything
                  </Heading>
                  <Box as="ul" listStyleType="circle" pl={6} mb={4} fontSize="md" lineHeight="tall" color="#000">
                    <li>LinkedIn Events for Networking</li>
                    <li>LinkedIn Newsletters</li>
                    <li>Creator Mode</li>
                  </Box>

                  {/* Industry-Specific Strategies */}
                  <Heading as="h2" size="lg" mt={6} mb={3} color="#000">
                    Industry-Specific Strategies for Maximum Impact
                  </Heading>
                  <Box as="ul" listStyleType="circle" pl={6} mb={4} fontSize="md" lineHeight="tall" color="#000">
                    <li>Technology Sector: GitHub portfolio, technical blogs, Stack Overflow reputation.</li>
                    <li>Finance and Consulting: Market analysis, industry reports, thought leadership.</li>
                    <li>Healthcare and Life Sciences: Research publications, industry conferences.</li>
                    <li>Sales and Marketing: Campaign insights, industry trend analysis, tool recommendations.</li>
                  </Box>

                  {/* Key Takeaways / Ending */}
                  <Heading as="h2" size="lg" mt={6} mb={3} color="#000">
                    Key Takeaways for LinkedIn Job Search Success
                  </Heading>
                  <Text mb={4} fontSize="md" lineHeight="tall" color="#000">
                    LinkedIn is more than a job board. Master its algorithm, post content strategically, use ethical automation, research deeply, and maintain consistent engagement. Avoid common mistakes like generic requests and one-way networking. Use hidden features and tailor strategies to your industry. Over time, your professional presence compounds, leading to high-paying opportunities.
                  </Text>
                  <Text mb={8} fontSize="md" lineHeight="tall" color="#000">
                    By following these strategies in 2025, you can significantly increase visibility, attract recruiters, negotiate better salaries, and achieve sustained career growth. LinkedIn, when used strategically, transforms from a job search tool into a career accelerator.
                  </Text>
                </Box>
              }
              {activeIndex === 2 &&
                <Box
                  flex="1"
                  borderRadius="lg"
                  boxShadow="md"
                  p={7}
                  overflowY="auto"
                  maxH={{ base: "400px", md: "100%" }}
                  textAlign={"start"}
                  tabIndex={0}
                  role="region"
                  aria-label="Blog post content preview"
                >
                  <Heading as="h1" size="2xl" mb={2} color="#000" lineHeight="tall">
                    How to Make Money Fast on LinkedIn: The Platform Where Being Boring Makes You Rich
                  </Heading>
                  <Text mb={4} fontSize="sm" color="#000">
                    By Udit Goenka | June 25, 2025 | Reading Time: 17 minutes
                  </Text>

                  {/* TL;DR */}
                  <Heading as="h2" size="lg" mt={6} mb={2} color="#000">
                    TL;DR
                  </Heading>
                  <Text mb={4} fontSize="md" lineHeight="tall" color="#000">
                    LinkedIn’s money-making secret isn’t flashy content—it’s consistent, professional, data-driven posts that solve real business problems.
                    While other platforms reward entertainment, LinkedIn’s algorithm and professional audience respond to boring-but-valuable content that builds trust and drives sales.
                    This comprehensive guide reveals how to systematically turn your LinkedIn presence into a profitable income stream through strategic content, automation, and professional networking.
                  </Text>

                  {/* Table of Contents */}
                  <Heading as="h2" size="lg" mt={6} mb={3} color="#000">
                    Table of Contents
                  </Heading>
                  <Box as="ul" listStyleType="circle" pl={6} mb={6} fontSize="md" lineHeight="tall" color="#000">
                    <li>The Counterintuitive Truth About LinkedIn Success</li>
                    <li>Why “Boring” Content Outperforms Everything Else on LinkedIn</li>
                    <li>The Psychology Behind Professional Engagement</li>
                    <li>The 5-Phase LinkedIn Money Machine Framework</li>
                    <li>Phase 1: The Authority Foundation</li>
                    <li>Phase 2: The Content Value Stack</li>
                    <li>Phase 3: The Systematic Selling Method</li>
                    <li>Phase 4: The Network Multiplication Effect</li>
                    <li>Phase 5: The Automation and Scale System</li>
                    <li>The 6 Most Profitable LinkedIn Income Streams</li>
                    <li>The Data-Driven Content Strategy That Generates Income</li>
                    <li>Content Formats That Drive Revenue</li>
                    <li>The 3-2-1 Content Distribution Strategy</li>
                    <li>The Psychology of Professional Content Consumption</li>
                    <li>Advanced LinkedIn Automation Strategies</li>
                    <li>Content Consistency Without Burnout</li>
                    <li>Engagement Automation That Builds Real Relationships</li>
                    <li>The Content Amplification System</li>
                    <li>The LinkedIn Sales Funnel That Converts</li>
                    <li>Stage 1: Awareness Through Valuable Content</li>
                    <li>Stage 2: Engagement and Trust Building</li>
                    <li>Stage 3: Conversion Through Direct Outreach</li>
                    <li>Industry-Specific LinkedIn Monetization Strategies</li>
                    <li>Common LinkedIn Monetization Mistakes That Kill Income</li>
                    <li>Advanced LinkedIn Analytics for Revenue Optimization</li>
                    <li>The Future of LinkedIn Monetization</li>
                    <li>Implementation: Your 90-Day LinkedIn Money Plan</li>
                    <li>Essential Tools and Resources</li>
                    <li>Frequently Asked Questions</li>
                    <li>Conclusion: Your Path to LinkedIn Profitability</li>
                  </Box>

                  {/* Main Content */}
                  <Heading as="h2" size="lg" mt={6} mb={2} color="#000">
                    The Counterintuitive Truth About LinkedIn Success
                  </Heading>
                  <Text mb={4} fontSize="md" lineHeight="tall" color="#000">
                    You’re scrolling through LinkedIn, seeing flashy infographics and motivational quotes everywhere.
                    But here’s what 97% of LinkedIn users don’t understand: the real money isn’t in the viral posts.
                    It’s in the boring ones.
                    While everyone’s chasing likes with inspirational stories and trendy topics, quiet professionals are building systematic income streams through content that would make Instagram users yawn.
                    Welcome to LinkedIn—the only social platform where being boring makes you rich.
                  </Text>

                  <Heading as="h2" size="lg" mt={6} mb={2} color="#000">
                    Why “Boring” Content Outperforms Everything Else on LinkedIn
                  </Heading>
                  <Text mb={4} fontSize="md" lineHeight="tall" color="#000">
                    LinkedIn’s 2025 engagement data reveals something shocking: multi-image posts focused on practical business insights generate 6.60% engagement rates—nearly double the platform average.
                    But here’s the kicker: these aren’t pretty graphics or emotional stories.
                    They’re spreadsheet screenshots, process diagrams, and step-by-step tutorials that look absolutely mundane to casual observers.
                    The reason? LinkedIn’s 1.1 billion professionals aren’t here for entertainment.
                    They’re here to solve problems, advance careers, and make money.
                  </Text>

                  <Heading as="h2" size="lg" mt={6} mb={2} color="#000">
                    The Psychology Behind Professional Engagement
                  </Heading>
                  <Text mb={4} fontSize="md" lineHeight="tall" color="#000">
                    Unlike other platforms, LinkedIn users consume content with purchase intent.
                    When someone engages with your post about “5 Excel Formulas That Save 10 Hours Weekly,” they’re not just liking—they’re evaluating you as a potential solution provider.
                    Research shows that 78% of LinkedIn users consume content to keep up with industry news, and 73% to discover new ideas.
                    This creates a unique environment where educational, process-focused content consistently outperforms emotional or entertainment-based posts.
                  </Text>

                  <Heading as="h2" size="lg" mt={6} mb={2} color="#000">
                    The 5-Phase LinkedIn Money Machine Framework
                  </Heading>
                  <Text mb={4} fontSize="md" lineHeight="tall" color="#000">
                    Most LinkedIn monetization advice focuses on surface-level tactics: post consistently, engage with comments, and build your network. But successful LinkedIn entrepreneurs follow a systematic approach I call the LinkedIn Money Machine Framework.
                  </Text>

                  {/* Phases */}
                  {[
                    {
                      title: "Phase 1: The Authority Foundation",
                      content: `Before you can make money on LinkedIn, you need what I call “boring credibility.” 
          This isn’t about having the most followers—it’s about being seen as the go-to person for specific, valuable information.

          The Boring Authority Strategy:
          - Choose one narrow business topic (e.g., “SaaS customer onboarding optimization”)
          - Post data-driven insights 3-4 times weekly
          - Share screenshots of actual results, processes, or tools
          - Write detailed case studies of your work
          - Comment thoughtfully on 10-15 industry posts daily
          Tools like Autoposting.ai can help you maintain this consistency by automatically generating industry-specific content that positions you as a thought leader while you focus on client work.`
                    },
                    {
                      title: "Phase 2: The Content Value Stack",
                      content: `LinkedIn’s algorithm prioritizes content that generates “dwell time”—how long people spend reading your posts.

          High-dwell content formats that drive income:
          - Native document carousels (5.85% engagement rate)
          - Multi-image tutorials (6.60% engagement rate)
          - Text-based case studies (4.0% engagement rate but highest conversion)
          - Polls with detailed explanations (4.40% engagement rate)

          Structure:
          Hook: Start with a specific, quantifiable result
          Problem: Identify the pain point your audience faces
          Solution: Provide actionable steps or insights
          Proof: Include data, screenshots, or testimonials
          Call-to-action: Guide readers to your services or products`
                    },
                    {
                      title: "Phase 3: The Systematic Selling Method",
                      content: `Most LinkedIn users fail because they treat the platform like a traditional social network.

          Direct Sales Strategies That Work:
          1. The Problem-Solution Pipeline
             - Identify your target clients’ biggest challenges
             - Create content addressing these specific problems
             - Include subtle mentions of how you solve these issues
             - Track which content generates DMs and comments about services
          2. The Case Study Conversion
             - Share detailed results from client work (with permission)
             - Break down your exact process
             - End with “DM me if you’d like help implementing this”
             - 87% of B2B buyers research vendors on LinkedIn before purchasing
          3. The Authority Amplifier
             - Write LinkedIn articles (not posts) about complex industry topics
             - Include your consultation offer in the author bio
             - Link to free resources that capture contact information
             - Native LinkedIn articles generate 3x more leads than external blog links`
                    },
                    {
                      title: "Phase 4: The Network Multiplication Effect",
                      content: `LinkedIn’s money-making potential multiplies exponentially with strategic networking.

          Strategic Connection Formula:
          - Ideal Client Profiles: Decision-makers in your target companies
          - Peer Professionals: Others serving similar clients (referral sources)
          - Industry Influencers: People whose audiences include your prospects
          - Content Collaborators: Professionals you can tag in relevant posts

          Advanced Networking Strategies:
          - Send 20-30 personalized connection requests weekly
          - Comment meaningfully on prospects’ posts before connecting
          - Share others’ content with thoughtful commentary
          - Create “collaboration carousels” featuring multiple experts`
                    },
                    {
                      title: "Phase 5: The Automation and Scale System",
                      content: `Consistency beats creativity. Professionals making serious money systematically publish valuable content while focusing on client delivery.

          What to Automate:
          - Content idea generation and scheduling
          - Initial engagement on industry posts
          - Connection request follow-ups
          - Performance tracking and optimization

          What to Keep Manual:
          - Personal relationship building
          - Client conversations and sales calls
          - Custom content creation for major prospects
          - Community management and responses`
                    }
                  ].map((phase, idx) => (
                    <Box key={idx} mb={6}>
                      <Heading as="h3" size="md" mt={4} mb={2} color="#000">
                        {phase.title}
                      </Heading>
                      {phase.content.split("\n").map((line, i) => (
                        <Text key={i} mb={2} fontSize="md" lineHeight="tall" color="#000">
                          {line.trim()}
                        </Text>
                      ))}
                    </Box>
                  ))}

                  {/* More sections like Income Streams, Data Strategy, FAQ, Conclusion */}
                  {/* Repeat similar structure for each section */}

                  <Heading as="h2" size="lg" mt={6} mb={2} color="#000">
                    Conclusion: Your Path to LinkedIn Profitability
                  </Heading>
                  <Text mb={4} fontSize="md" lineHeight="tall" color="#000">
                    LinkedIn represents a unique opportunity in social media: a platform where professionalism and expertise directly translate to income potential.
                    Unlike other networks that prioritize entertainment and virality, LinkedIn rewards consistency, authenticity, and genuine value creation.

                    The key insights:
                    - “Boring” professional content consistently outperforms flashy, entertainment-focused posts
                    - Systematic approaches generate more sustainable income than sporadic efforts
                    - Multiple income streams provide stability and growth potential
                    - Strategic automation enables consistency without sacrificing authenticity
                    - Data-driven optimization improves results over time

                    Your next steps:
                    - Choose one primary monetization method to focus on initially
                    - Develop a consistent content strategy around your expertise
                    - Build strategic relationships with ideal prospects and partners
                    - Implement systematic processes for content creation and engagement
                    - Track performance and optimize based on results

                    The professionals making serious money on LinkedIn aren’t necessarily the most creative or charismatic. They’re the most consistent, strategic, and focused on solving real problems for their professional networks. Start building your LinkedIn money machine today—your future self will thank you.
                  </Text>
                </Box>
              }
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}