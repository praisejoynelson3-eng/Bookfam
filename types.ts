export interface Book {
  id: string;
  title: string;
  author: string;
  coverUrl: string;
  category: 'Fiction' | 'Non-Fiction' | 'Business' | 'Spiritual';
  rating: number; // 1-5
  curatorTake: string;
  status: 'Vetting' | 'Active Reading' | 'Archived';
  readerSlotsFilled: number;
  totalReaderSlots: number;
}

export interface Testimonial {
  id: string;
  authorName: string;
  bookTitle: string;
  quote: string;
}

export interface PricingTier {
  id: string;
  name: string;
  readersCount: string;
  price: string;
  features: string[];
  recommended?: boolean;
}