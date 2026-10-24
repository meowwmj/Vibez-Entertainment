export type PageId =
  | 'home'
  | 'about'
  | 'training'
  | 'events'
  | 'artist-management'
  | 'recording'
  | 'gallery'
  | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'training' | 'events' | 'management' | 'recording';
  ctaText: string;
  pageTarget: PageId;
  features: string[];
  gradient: string;
  accentColor: string;
}

export interface DivisionItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  focus: string[];
  pageTarget: PageId;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'training' | 'performances' | 'events' | 'recording' | 'talent';
  caption: string;
  date?: string;
  highlightTag?: string;
  mediaType: 'image' | 'performance-clip';
  thumbnailTheme: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface InquirySubmission {
  id?: string;
  referenceCode?: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  division?: string;
  preferredDate?: string;
  experienceLevel?: string;
  message: string;
  submittedAt?: string;
  status?: 'new' | 'reviewed' | 'contacted';
}
