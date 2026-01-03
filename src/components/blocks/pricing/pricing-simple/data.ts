export const plans: PlanData[] = [
  {
    value: 'free',
    title: 'Free Plan',
    description: 'Getting started and exploring opportunities',
    extraline: '',
    colorPalette: 'gray',
    features: [
      'Create your free profile',
      'Take 1 basic skill assessment',
      'AI-powered job recommendations (limited)',
      'Access to verified job listings',
      'Smart resume preview',
    ],
    priceUnit: 'year',
    price: 0,
    priceCurrency: 'US',
    priceSymbol: '$',
    recommended: false,
    buttonText: 'Coming Soon',
  },
  {
    value: 'pro',
    title: 'Pro Plan',
    description: 'Job seekers serious about getting hired faster',
    extraline: 'Includes Everything in Free, Plus:',
    features: [
      'Unlimited skill assessments across 350+ tests',
      'AI Resume Builder with full template access that adapts to each application',
      'Priority AI job matching with higher visibility',
      'Direct recruiter visibility in searches',
      'Career insights and personalized improvement tips',
    ],
    priceUnit: 'year',
    price: 499,
    priceCurrency: 'US',
    priceSymbol: '$',
    recommended: true,
    buttonText: 'Coming Soon',
  },
  {
    value: 'enterprise',
    title: 'Elite Plan',
    description: 'Professionals who want a personal AI career assistant',
    extraline: 'Includes Everything in Pro, Plus:',
    colorPalette: 'gray',
    features: [
      'AI Career Coach with personalized guidance and long-term strategy',
      'Smart interview preparation with AI-generated practice questions mirroring real scenarios',
      'Verified skill certificate badges that prove your abilities to employers',
      'Performance tracking dashboard with detailed analytics',
      'Featured candidate spotlight for maximum recruiter visibility',
    ],
    priceUnit: 'year',
    price: 999,
    priceCurrency: 'US',
    priceSymbol: '$',
    recommended: false,
    buttonText: 'Coming Soon',
  },
];


export interface PlanData {
  value: string
  title: string
  description: string
  extraline: string
  features: string[]
  priceUnit: 'month' | 'year'
  price: number
  priceCurrency: string
  priceSymbol: string
  colorPalette?: string
  recommended?: boolean
  buttonText: string
  isAvailable?: boolean
  ctaAction?: 'signup' | 'upgrade' | 'contact-sales'
}

