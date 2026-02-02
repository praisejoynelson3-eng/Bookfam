import { Book, Testimonial, PricingTier } from './types';

export const INITIAL_BOOKS: Book[] = [
  {
    id: '1',
    title: 'The Silent Enterprise',
    author: 'Elena Vance',
    coverUrl: 'https://picsum.photos/300/450?random=1',
    category: 'Business',
    rating: 5,
    curatorTake: "A masterclass in operational silence. Vance argues that the best companies are the ones you don't hear running.",
    status: 'Archived',
    readerSlotsFilled: 50,
    totalReaderSlots: 50
  },
  {
    id: '2',
    title: 'Echoes of the Old World',
    author: 'Julian Thorne',
    coverUrl: 'https://picsum.photos/300/450?random=2',
    category: 'Fiction',
    rating: 4,
    curatorTake: "Thorne's prose is dense, demanding, and ultimately rewarding. Not for the faint of heart, but essential for the serious reader.",
    status: 'Active Reading',
    readerSlotsFilled: 34,
    totalReaderSlots: 50
  },
  {
    id: '3',
    title: 'Small Business Owner 101',
    author: 'Marcus Reed',
    coverUrl: 'https://picsum.photos/300/450?random=3',
    category: 'Business',
    rating: 4,
    curatorTake: "Practical, stripped of jargon, and deeply honest. The chapter on cash flow management is worth the cover price alone.",
    status: 'Vetting',
    readerSlotsFilled: 0,
    totalReaderSlots: 35
  },
  {
    id: '4',
    title: 'Waking Up in Winter',
    author: 'Sarah Jenkins',
    coverUrl: 'https://picsum.photos/300/450?random=4',
    category: 'Spiritual',
    rating: 5,
    curatorTake: "A gentle yet piercing look at modern mindfulness. Jenkins doesn't preach; she invites.",
    status: 'Archived',
    readerSlotsFilled: 45,
    totalReaderSlots: 45
  },
  {
    id: '5',
    title: 'The Algorithm of Art',
    author: 'Dr. Aris K.',
    coverUrl: 'https://picsum.photos/300/450?random=5',
    category: 'Non-Fiction',
    rating: 3,
    curatorTake: "Provocative concepts, though the execution sometimes gets lost in technical weeds. A fascinating read for tech-creatives.",
    status: 'Active Reading',
    readerSlotsFilled: 12,
    totalReaderSlots: 50
  },
  {
    id: '6',
    title: 'Beneath the Iron Sky',
    author: 'H.R. Mollen',
    coverUrl: 'https://picsum.photos/300/450?random=6',
    category: 'Fiction',
    rating: 5,
    curatorTake: "A dystopian thriller that feels uncomfortably prophetic. Mollen's world-building is second to none.",
    status: 'Archived',
    readerSlotsFilled: 50,
    totalReaderSlots: 50
  },
  {
    id: '7',
    title: 'Zero to One Hundred',
    author: 'Blake Masters (Not that one)',
    coverUrl: 'https://picsum.photos/300/450?random=7',
    category: 'Business',
    rating: 2,
    curatorTake: "Derivative. Reads like a collection of blog posts we've all seen before. Skip.",
    status: 'Archived',
    readerSlotsFilled: 50,
    totalReaderSlots: 50
  },
  {
    id: '8',
    title: 'The Soul of Soil',
    author: 'Mary Green',
    coverUrl: 'https://picsum.photos/300/450?random=8',
    category: 'Spiritual',
    rating: 4,
    curatorTake: "Connecting gardening to spiritual growth isn't new, but Green's voice is undeniably fresh.",
    status: 'Active Reading',
    readerSlotsFilled: 22,
    totalReaderSlots: 40
  },
  {
    id: '9',
    title: 'Data Driven Lies',
    author: 'Samuel Vimes',
    coverUrl: 'https://picsum.photos/300/450?random=9',
    category: 'Non-Fiction',
    rating: 5,
    curatorTake: "Essential reading for the information age. How charts manipulate truth.",
    status: 'Vetting',
    readerSlotsFilled: 0,
    totalReaderSlots: 30
  },
  {
    id: '10',
    title: 'The Last Barista',
    author: 'Coffee Jack',
    coverUrl: 'https://picsum.photos/300/450?random=10',
    category: 'Fiction',
    rating: 3,
    curatorTake: "Charming, cozy, but lacks narrative drive. A perfect rainy Sunday read, nothing more.",
    status: 'Archived',
    readerSlotsFilled: 40,
    totalReaderSlots: 40
  },
  {
    id: '11',
    title: 'Capitalism 2.0',
    author: 'Tech Bro X',
    coverUrl: 'https://picsum.photos/300/450?random=11',
    category: 'Business',
    rating: 3,
    curatorTake: "Ambitions ideas, poor execution. Needs a heavy editorial hand.",
    status: 'Vetting',
    readerSlotsFilled: 5,
    totalReaderSlots: 50
  },
  {
    id: '12',
    title: 'Meditation for Skeptics',
    author: 'Dan Harris-ish',
    coverUrl: 'https://picsum.photos/300/450?random=12',
    category: 'Spiritual',
    rating: 4,
    curatorTake: "Finally, a guide that doesn't require burning sage. Practical and grounded.",
    status: 'Archived',
    readerSlotsFilled: 50,
    totalReaderSlots: 50
  },
  {
    id: '13',
    title: 'The History of Salt',
    author: 'Mark Kurlan',
    coverUrl: 'https://picsum.photos/300/450?random=13',
    category: 'Non-Fiction',
    rating: 5,
    curatorTake: "Who knew a mineral could be this fascinating? A page-turner about chemistry.",
    status: 'Active Reading',
    readerSlotsFilled: 15,
    totalReaderSlots: 25
  },
  {
    id: '14',
    title: 'Ghosts of Berlin',
    author: 'Klaus M.',
    coverUrl: 'https://picsum.photos/300/450?random=14',
    category: 'Fiction',
    rating: 4,
    curatorTake: "Atmospheric and haunting. The city itself is the main character here.",
    status: 'Archived',
    readerSlotsFilled: 30,
    totalReaderSlots: 30
  },
  {
    id: '15',
    title: 'Deep Work Habits',
    author: 'Cal N.',
    coverUrl: 'https://picsum.photos/300/450?random=15',
    category: 'Business',
    rating: 5,
    curatorTake: "If you read one productivity book this year, make it this one.",
    status: 'Active Reading',
    readerSlotsFilled: 48,
    totalReaderSlots: 50
  },
  {
    id: '16',
    title: 'The Quantum Self',
    author: 'Dr. Phys',
    coverUrl: 'https://picsum.photos/300/450?random=16',
    category: 'Spiritual',
    rating: 2,
    curatorTake: "Tries too hard to merge physics and mysticism. Ends up confusing both.",
    status: 'Archived',
    readerSlotsFilled: 20,
    totalReaderSlots: 50
  },
  {
    id: '17',
    title: 'Build in Public',
    author: 'Indie Hacker',
    coverUrl: 'https://picsum.photos/300/450?random=17',
    category: 'Business',
    rating: 4,
    curatorTake: "Transparency as a marketing strategy. A risky but compelling thesis.",
    status: 'Vetting',
    readerSlotsFilled: 0,
    totalReaderSlots: 40
  },
  {
    id: '18',
    title: 'The Lost Colony',
    author: 'SciFi Steve',
    coverUrl: 'https://picsum.photos/300/450?random=18',
    category: 'Fiction',
    rating: 3,
    curatorTake: "Great concept, flat dialogue. The aliens are more human than the humans.",
    status: 'Active Reading',
    readerSlotsFilled: 10,
    totalReaderSlots: 50
  },
  {
    id: '19',
    title: 'Minimalist Marketing',
    author: 'Less Is More',
    coverUrl: 'https://picsum.photos/300/450?random=19',
    category: 'Business',
    rating: 5,
    curatorTake: "Cut the noise. This book teaches you how to say more with less.",
    status: 'Archived',
    readerSlotsFilled: 60,
    totalReaderSlots: 60
  },
  {
    id: '20',
    title: 'Zen and the Art of Coding',
    author: 'Master Oogway',
    coverUrl: 'https://picsum.photos/300/450?random=20',
    category: 'Spiritual',
    rating: 4,
    curatorTake: "Programming as a meditative practice. Surprisingly deep.",
    status: 'Active Reading',
    readerSlotsFilled: 25,
    totalReaderSlots: 30
  },
  {
    id: '21',
    title: 'The Great Resignation',
    author: 'Labor Econ',
    coverUrl: 'https://picsum.photos/300/450?random=21',
    category: 'Non-Fiction',
    rating: 4,
    curatorTake: "A timely analysis of the shifting workforce dynamics post-2020.",
    status: 'Archived',
    readerSlotsFilled: 45,
    totalReaderSlots: 45
  },
  {
    id: '22',
    title: 'Shadows of the Empire',
    author: 'Fantasy Fran',
    coverUrl: 'https://picsum.photos/300/450?random=22',
    category: 'Fiction',
    rating: 5,
    curatorTake: "Epic fantasy done right. No tropes, just pure storytelling.",
    status: 'Active Reading',
    readerSlotsFilled: 49,
    totalReaderSlots: 50
  },
  {
    id: '23',
    title: 'The ETH Standard',
    author: 'Crypto Carl',
    coverUrl: 'https://picsum.photos/300/450?random=23',
    category: 'Business',
    rating: 2,
    curatorTake: "Too speculative. Needs more economic rigor and less hype.",
    status: 'Archived',
    readerSlotsFilled: 15,
    totalReaderSlots: 50
  },
  {
    id: '24',
    title: 'Finding North',
    author: 'Traveler Tom',
    coverUrl: 'https://picsum.photos/300/450?random=24',
    category: 'Non-Fiction',
    rating: 3,
    curatorTake: "A travelogue that gets lost in its own descriptions. Beautiful but slow.",
    status: 'Vetting',
    readerSlotsFilled: 0,
    totalReaderSlots: 20
  },
  {
    id: '25',
    title: 'The Corporate mystic',
    author: 'Guru Gary',
    coverUrl: 'https://picsum.photos/300/450?random=25',
    category: 'Spiritual',
    rating: 3,
    curatorTake: "Trying to bring spirituality to the boardroom. Mixed results.",
    status: 'Active Reading',
    readerSlotsFilled: 8,
    totalReaderSlots: 40
  },
  {
    id: '26',
    title: 'Neon Nights',
    author: 'Cyber Punk',
    coverUrl: 'https://picsum.photos/300/450?random=26',
    category: 'Fiction',
    rating: 4,
    curatorTake: "Style over substance? Maybe. But what style!",
    status: 'Archived',
    readerSlotsFilled: 55,
    totalReaderSlots: 55
  },
  {
    id: '27',
    title: 'Bootstrap Your Life',
    author: 'Self Help Sally',
    coverUrl: 'https://picsum.photos/300/450?random=27',
    category: 'Business',
    rating: 4,
    curatorTake: "Actionable advice for taking control of your career and finances.",
    status: 'Active Reading',
    readerSlotsFilled: 18,
    totalReaderSlots: 30
  },
  {
    id: '28',
    title: 'The Void Stares Back',
    author: 'Horror Hank',
    coverUrl: 'https://picsum.photos/300/450?random=28',
    category: 'Fiction',
    rating: 5,
    curatorTake: "Terrifying. I slept with the lights on for a week.",
    status: 'Archived',
    readerSlotsFilled: 66,
    totalReaderSlots: 66
  },
  {
    id: '29',
    title: 'Modern Stoicism',
    author: 'Marcus A. Jr.',
    coverUrl: 'https://picsum.photos/300/450?random=29',
    category: 'Spiritual',
    rating: 5,
    curatorTake: "Ancient wisdom applied to modern stress. Invaluable.",
    status: 'Active Reading',
    readerSlotsFilled: 42,
    totalReaderSlots: 50
  },
  {
    id: '30',
    title: 'The AI Revolution',
    author: 'Tech Tina',
    coverUrl: 'https://picsum.photos/300/450?random=30',
    category: 'Non-Fiction',
    rating: 4,
    curatorTake: "A balanced look at the future of intelligence. Neither doomer nor boomer.",
    status: 'Vetting',
    readerSlotsFilled: 0,
    totalReaderSlots: 100
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    authorName: 'J.K. Simmons',
    bookTitle: 'The Modern Leader',
    quote: "I was skeptical about paying for readers, but the feedback I received from BookFam was more detailed than my own editor's notes."
  },
  {
    id: 't2',
    authorName: 'Maria V.',
    bookTitle: 'Lost in the City',
    quote: "A.H. Leonard's curation gave my book a badge of honor. The readers weren't just consumers; they were critics in the best sense."
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'p1',
    name: 'The Debut',
    readersCount: '15-20 Readers',
    price: '$250',
    features: [
      'Guaranteed 15+ Reads',
      'Editorial Assessment',
      'Community Newsletter Feature'
    ]
  },
  {
    id: 'p2',
    name: 'The Circle',
    readersCount: '35-50 Readers',
    price: '$550',
    features: [
      'Guaranteed 35+ Reads',
      'Detailed Reader Feedback Report',
      'Dedicated Social Media Campaign',
      'Goodreads/Amazon Review Prompts'
    ],
    recommended: true
  },
  {
    id: 'p3',
    name: 'The Legacy',
    readersCount: '100+ Readers',
    price: '$1,200',
    features: [
      'Guaranteed 100+ Reads',
      'Author Interview Podcast',
      'Priority Vetting Status',
      'Lifetime Vault Listing'
    ]
  }
];