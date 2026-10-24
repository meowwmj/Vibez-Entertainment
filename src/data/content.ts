import { DivisionItem, FAQItem, GalleryItem, ServiceItem } from '../types';

export const COMPANY_INFO = {
  name: 'Vibez Entertainment',
  legalName: 'VIBEZ ENTERTAINMENT',
  established: 'October 2011',
  phone: '0915 732 1113',
  phoneClean: '09157321113',
  email: 'kavibez2023@gmail.com',
  facebookMessenger: 'Vibez Entertainment',
  messengerUrl: 'https://m.me/VibezEntertainment',
  tagline: 'Develop Your Talent. Create Your Moment.',
  heroEyebrow: 'YOUR TALENT. YOUR STAGE. YOUR VIBE.',
  heroHeadline: 'Find Your Voice. Own Your Stage. Create Your Future.',
  heroDescription:
    'From voice and music lessons to live events, artist management, and professional recording, VIBEZ ENTERTAINMENT helps bring creative talent and unforgettable experiences to life.',
  trustStatement: 'Proudly developing talent and delivering entertainment services since 2011.',
  companyStory:
    'VIBEZ ENTERTAINMENT is a duly registered company established in October 2011. Owned and operated by professional trainers, the company is engaged in talent development, event conceptualization, organization and management, artist management, and recording.\n\nWe take pride in our dedication to exceeding client expectations through unique, creative, and excellent services. Our mission is to help individuals develop their talents while delivering meaningful entertainment experiences for clients, performers, and audiences.',
  suggestedMission:
    'To discover, mentor, and nurture artistic talent through personalized coaching and professional staging, empowering creators to achieve their artistic potential while producing memorable, high-caliber entertainment experiences for audiences across the Philippines.',
  suggestedVision:
    'To be recognized as a premier Philippine creative hub and entertainment house where passion meets professional excellence—inspiring the next generation of performers, artists, and live event productions.',
  coreValues: [
    {
      title: 'Artistic Excellence',
      description: 'Continuous dedication to vocal technique, musicality, and high-standard stage production.'
    },
    {
      title: 'Trainer-Led Mentorship',
      description: 'Founded and operated by seasoned professional trainers who nurture each student at their own pace.'
    },
    {
      title: 'Integrity & Respect',
      description: 'Transparent guidance for aspiring artists with realistic development pathways and honest feedback.'
    },
    {
      title: 'Creative Passion',
      description: 'Fostering an energetic, supportive environment where performers build confidence and find their voice.'
    }
  ]
};

export const TRUST_FEATURES = [
  {
    title: 'Established in 2011',
    description: 'Over a decade of continuous experience in entertainment and talent development across the Philippines.',
    metric: '14+ Yrs',
    subtitle: 'Track Record'
  },
  {
    title: 'Professional Trainers',
    description: 'Learn with skilled coaches who adapt techniques to beginner, intermediate, and advanced levels.',
    metric: '1-on-1',
    subtitle: 'Adaptive Guidance'
  },
  {
    title: 'Creative Production',
    description: 'From initial concepts and staging to organized concerts, corporate gatherings, and recording projects.',
    metric: 'Full-Cycle',
    subtitle: 'Stage & Events'
  },
  {
    title: 'Talent-Focused',
    description: 'Helping aspiring performers build vocal technique, stage presence, performance skills, and confidence.',
    metric: 'Holistic',
    subtitle: 'Performer Growth'
  }
];

export const DIVISIONS: DivisionItem[] = [
  {
    id: 'talent-development',
    name: 'Talent Development',
    subtitle: 'Voice, Music, Dance & Acting Instruction',
    description:
      'Professional instruction and performance training for aspiring singers, musicians, dancers, and performers.',
    focus: ['Voice & Pitch Control', 'Guitar, Keyboard & Drums', 'Stage Presence & Repertoire', 'Beginner to Advanced'],
    pageTarget: 'training'
  },
  {
    id: 'vibez-events',
    name: 'Vibez Events PH',
    subtitle: 'Live Shows, Concerts & Event Coordination',
    description:
      'Concerts, event conceptualization, production, and end-to-end management for private, corporate, and public gatherings.',
    focus: ['Concert Production', 'Corporate Gatherings', 'Family Celebrations', 'Full Technical Coordination'],
    pageTarget: 'events'
  },
  {
    id: 'ka-vibez',
    name: 'Ka-Vibez Artist Management',
    subtitle: 'Talent Representation & Career Guidance',
    description:
      'Artist development and management inquiries for aspiring singers, bands, musicians, and performers.',
    focus: ['Artistic Identity', 'Performance Opportunities', 'Demo Consultation', 'Industry Networking'],
    pageTarget: 'artist-management'
  },
  {
    id: 'vibez-records',
    name: 'Vibez Records',
    subtitle: 'Studio Recording & Music Production',
    description:
      'Recording, music production, and studio rental services tailored to emerging artists and musical projects.',
    focus: ['Vocal & Instrument Tracking', 'Music Production & Mixing', 'Studio Rental Scheduling', 'Creative Collaboration'],
    pageTarget: 'recording'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'voice-stage',
    title: 'Voice & Stage Performance',
    tagline: 'Vocal coaching and live stage craft',
    description:
      'Develop vocal technique, pitch, confidence, and stage presence through guided singing lessons and performance workshops.',
    category: 'training',
    ctaText: 'Explore Training',
    pageTarget: 'training',
    features: [
      'Breath support & pitch accuracy',
      'Vocal range expansion & high-note technique',
      'Stage movement & microphone dynamics',
      'Individual & workshop coaching'
    ],
    gradient: 'from-[#35C84A]/20 via-[#168D32]/10 to-transparent',
    accentColor: '#35C84A'
  },
  {
    id: 'music-lessons',
    title: 'Music Lessons',
    tagline: 'Guitar, keyboard, and drums',
    description:
      'Learn guitar, keyboard, or drums with instruction suited to your current skill level and musical goals.',
    category: 'training',
    ctaText: 'Find Your Lesson',
    pageTarget: 'training',
    features: [
      'Acoustic & electric guitar fundamentals',
      'Keyboard melody, chords & rhythm',
      'Drum technique, timing & groove',
      'Structured step-by-step curriculum'
    ],
    gradient: 'from-[#C8B6A5]/25 via-transparent to-transparent',
    accentColor: '#C8B6A5'
  },
  {
    id: 'dance-acting',
    title: 'Dance & Acting',
    tagline: 'Movement, expression, and theater skills',
    description:
      'Build movement, expression, confidence, and performance skills through dance lessons and acting workshops.',
    category: 'training',
    ctaText: 'Inquire About Classes',
    pageTarget: 'training',
    features: [
      'Body rhythm & choreography basics',
      'Scene study & character development',
      'Audition preparation & projection',
      'Expressive stage confidence'
    ],
    gradient: 'from-[#19191D] via-[#168D32]/15 to-transparent',
    accentColor: '#35C84A'
  },
  {
    id: 'events-management',
    title: 'Events Management',
    tagline: 'Vibez Events PH production & coordination',
    description:
      'Bring your ideas to life with creative planning and event production for concerts, corporate gatherings, family celebrations, and social events.',
    category: 'events',
    ctaText: 'Plan Your Event',
    pageTarget: 'events',
    features: [
      'Creative theme & stage conceptualization',
      'Comprehensive on-site coordination',
      'Concert audio & lighting oversight',
      'Pre-event prep through post-event wrap-up'
    ],
    gradient: 'from-[#35C84A]/25 via-[#19191D] to-transparent',
    accentColor: '#35C84A'
  },
  {
    id: 'artist-management',
    title: 'Artist Management',
    tagline: 'Ka-Vibez Talent representation',
    description:
      'Explore opportunities to develop your artistic identity and pursue your goals as a singer, band, musician, or performer.',
    category: 'management',
    ctaText: 'Artist Inquiries',
    pageTarget: 'artist-management',
    features: [
      'Individual artist review & consultation',
      'Brand development & performance readiness',
      'Networking with producers & event planners',
      'Demo & portfolio presentation assistance'
    ],
    gradient: 'from-[#C8B6A5]/20 via-[#19191D] to-transparent',
    accentColor: '#C8B6A5'
  },
  {
    id: 'recording-studio',
    title: 'Recording & Studio Rental',
    tagline: 'Vibez Records production hub',
    description:
      'Take your music from idea to recording with studio and music production services tailored to your project.',
    category: 'recording',
    ctaText: 'Discuss Your Project',
    pageTarget: 'recording',
    features: [
      'Professional vocal & acoustic tracking',
      'Music production & arrangement',
      'Studio space rental by appointment',
      'Clean audio monitoring environment'
    ],
    gradient: 'from-[#35C84A]/20 via-[#168D32]/10 to-transparent',
    accentColor: '#35C84A'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Vocal Performance & Stage Coaching Session',
    category: 'training',
    caption: 'Student working with our vocal coach on breath support, dynamics, and mic control during a private training session.',
    date: 'Training Program',
    highlightTag: 'Voice Training',
    mediaType: 'image',
    thumbnailTheme: 'from-[#19191D] to-[#0B0B0D]'
  },
  {
    id: 'gal-2',
    title: 'Live Concert Stage Lighting & Sound Check',
    category: 'events',
    caption: 'Vibez Events PH sound and lighting production crew preparing the stage for an evening live concert performance.',
    date: 'Concert Production',
    highlightTag: 'Vibez Events PH',
    mediaType: 'image',
    thumbnailTheme: 'from-[#168D32]/30 to-[#0B0B0D]'
  },
  {
    id: 'gal-3',
    title: 'Studio Vocal Tracking Session',
    category: 'recording',
    caption: 'Artist tracking lead vocals at Vibez Records with condenser microphone and calibrated monitoring acoustic space.',
    date: 'Vibez Records',
    highlightTag: 'Studio Session',
    mediaType: 'image',
    thumbnailTheme: 'from-[#C8B6A5]/20 to-[#19191D]'
  },
  {
    id: 'gal-4',
    title: 'Acoustic Guitar Mastery Workshop',
    category: 'training',
    caption: 'Hands-on chord transition and fingerpicking fundamentals coaching for beginner and intermediate guitarists.',
    date: 'Instrument Training',
    highlightTag: 'Music Lessons',
    mediaType: 'image',
    thumbnailTheme: 'from-[#19191D] to-[#168D32]/20'
  },
  {
    id: 'gal-5',
    title: 'Ka-Vibez Talent Rehearsal & Showcase',
    category: 'talent',
    caption: 'Aspiring performers rehearsing dynamic stage choreography and group harmony routines under trainer guidance.',
    date: 'Talent Showcase',
    highlightTag: 'Ka-Vibez Artists',
    mediaType: 'image',
    thumbnailTheme: 'from-[#35C84A]/20 to-[#0B0B0D]'
  },
  {
    id: 'gal-6',
    title: 'Drum & Percussion Timing Lab',
    category: 'training',
    caption: 'One-on-one drum lesson breaking down meter, dynamic fills, and tempo consistency behind the studio drum kit.',
    date: 'Rhythm Training',
    highlightTag: 'Drum Workshop',
    mediaType: 'image',
    thumbnailTheme: 'from-[#C8B6A5]/15 to-[#0B0B0D]'
  },
  {
    id: 'gal-7',
    title: 'Corporate Gala Stage Management',
    category: 'events',
    caption: 'Seamless event coordination, program timing, and entertainment sequence execution for a premier corporate gathering.',
    date: 'Corporate Event',
    highlightTag: 'Event Production',
    mediaType: 'image',
    thumbnailTheme: 'from-[#168D32]/25 to-[#19191D]'
  },
  {
    id: 'gal-8',
    title: 'Acting & Stage Expression Workshop',
    category: 'training',
    caption: 'Students practicing monologue delivery, emotional projection, and spatial stage blocking with professional trainers.',
    date: 'Acting Workshop',
    highlightTag: 'Drama & Acting',
    mediaType: 'image',
    thumbnailTheme: 'from-[#19191D] to-[#35C84A]/15'
  },
  {
    id: 'gal-9',
    title: 'Music Production & Mixing Console',
    category: 'recording',
    caption: 'Multi-track arrangement and audio balancing session inside Vibez Records audio production workstation.',
    date: 'Studio Tech',
    highlightTag: 'Vibez Records',
    mediaType: 'image',
    thumbnailTheme: 'from-[#C8B6A5]/25 to-[#0B0B0D]'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'Do you accept beginners?',
    answer:
      'Yes, absolutely. Our training programs are designed to support different experience levels, from zero-experience beginners learning their first notes to intermediate performers refining their technique. Contact us to find a suitable class or program for your current stage.'
  },
  {
    question: 'What lessons are available?',
    answer:
      'We offer Singing and Voice Coaching, Voice & Stage Performance, Guitar lessons (acoustic and electric), Keyboard lessons, Drum lessons, Dance training, and Acting workshops.'
  },
  {
    question: 'Do you offer advanced training?',
    answer:
      'Yes. Both beginner and advanced singing and stage performance courses are offered, tailored to audition preparation, stage projection, vocal stamina, and repertoire mastery. Inquire with us about current advanced schedule availability.'
  },
  {
    question: 'Can I rent a studio?',
    answer:
      'Yes. Vibez Records offers studio rental for recording sessions and musical projects. Contact us to discuss your recording requirements, available schedules, equipment details, and rates.'
  },
  {
    question: 'Can you organize concerts and corporate events?',
    answer:
      'Yes! Vibez Events PH handles concerts, corporate events, family celebrations, and social gatherings. We support full conceptualization, technical production, and day-of-event management. Share your requirements for a tailored plan.'
  },
  {
    question: 'How can I inquire about artist management?',
    answer:
      'Contact Ka-Vibez Artist Management through our official contact channels (phone 0915 732 1113, email kavibez2023@gmail.com, or our online form). Please share your background, musical direction, and any existing portfolio or audio demo.'
  },
  {
    question: 'How do I get started?',
    answer:
      'You can call us directly at 0915 732 1113, email us at kavibez2023@gmail.com, message Vibez Entertainment on Facebook Messenger, or submit our online inquiry form with your preferred service and schedule.'
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'A Personalized Learning Approach',
    description:
      'Training can adapt to each student’s unique vocal range, experience, and musical aspirations rather than a rigid one-size-fits-all lesson plan.'
  },
  {
    title: 'Creative Professionals',
    description:
      'Founded, owned, and operated by professional trainers and entertainment practitioners passionate about the craft.'
  },
  {
    title: 'Multiple Creative Services',
    description:
      'Access training, live event staging, artist career management, and studio recording within a unified creative home.'
  },
  {
    title: 'Experience Since 2011',
    description:
      'Over a decade of established company history rooted in genuine talent development and memorable live productions.'
  }
];
