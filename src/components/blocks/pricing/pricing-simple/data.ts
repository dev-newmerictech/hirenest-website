export const plans: PlanData[] = [
  {
    value: 'free',
    title: 'Free Plan',
    description: 'Getting started and exploring opportunities',
    colorPalette: 'gray',
    extraline: '',
    features: ['Create your free profile', 
      'Take 1 basic skill assessment', 
      'AI-powered job recommendations (limited)', 
      'Access to verified job listings',
    'Smart resume preview'],
    priceUnit: 'year',
    price: 0,
    priceCurrency: 'US',
    priceSymbol: '$',
    recommended: false,
    buttonText: 'Get Started — It’s Free',
  },
  {
    value: 'pro',
    title: 'Pro Plan',
    description: 'Job seekers serious about getting hired faster',
    extraline: 'Includes Everything in Free, Plus:',
    features: ['Unlimited skill assessments',
       'AI Resume Builder (Full Access)', 
       'Priority AI job matching', 
       'Direct recruiter visibility',
      'Career insights and improvement tips'],
    priceUnit: 'year',
    price: 499,
    priceCurrency: 'US',
    priceSymbol: '$',
    recommended: true,
    buttonText: 'Upgrade to Pro',
  },
  {
    value: 'enterprise',
    title: 'Elite Plan',
    description: 'Professionals who want a personal AI career assistant',
    extraline: 'Includes Everything in Pro, Plus:',
    colorPalette: 'gray',
    features: [
      'AI Career Coach & Personalized Guidance',
      'Smart interview preparation (AI-generated questions)',
      'Verified skill certificate badges',
      'Performance tracking dashboard',
      'Featured candidate spotlight'
    ],
    priceUnit: 'year',
    price: 999,
    priceCurrency: 'US',
    priceSymbol: '$',
    recommended: false,
    buttonText: 'Become an Elite Member',
  },
]

export interface PlanData {
  value: string
  title: string
  description: string
  extraline: string
  features: string[]
  priceUnit: string
  price: number
  priceCurrency: string
  priceSymbol: string
  colorPalette?: string
  recommended?: boolean
  buttonText: string
}
