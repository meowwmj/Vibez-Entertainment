import React, { useState } from 'react';
import {
  Mic,
  Music,
  Sparkles,
  Calendar,
  Disc,
  Users,
  ArrowRight,
  Phone,
  Mail,
  ChevronDown,
  ShieldCheck,
  CheckCircle,
  ExternalLink,
  Award
} from 'lucide-react';
import { PageId } from '../types';
import {
  COMPANY_INFO,
  DIVISIONS,
  FAQS,
  GALLERY_ITEMS,
  SERVICES,
  TRUST_FEATURES,
  WHY_CHOOSE_US
} from '../data/content';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: (serviceName?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenBooking
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const serviceIconMap: Record<string, React.ReactNode> = {
    'voice-stage': <Mic className="w-5 h-5 text-[#35C84A]" />,
    'music-lessons': <Music className="w-5 h-5 text-[#C8B6A5]" />,
    'dance-acting': <Sparkles className="w-5 h-5 text-[#35C84A]" />,
    'events-management': <Calendar className="w-5 h-5 text-[#35C84A]" />,
    'artist-management': <Users className="w-5 h-5 text-[#C8B6A5]" />,
    'recording-studio': <Disc className="w-5 h-5 text-[#35C84A]" />
  };

  return (
    <div className="space-y-24 md:space-y-32">
      {/* =========================================================================
          SECTION 3: HERO
          ========================================================================= */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-[#1F1F24]">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0D] via-[#111115] to-[#0B0B0D] pointer-events-none" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#35C84A]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-[#C8B6A5]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Hero Text */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#19191D] border border-[#27272E] text-xs font-semibold tracking-wider text-[#35C84A] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#35C84A]" />
                <span>{COMPANY_INFO.heroEyebrow}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display leading-[1.1] text-balance">
                Find Your Voice. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-[#35C84A]">
                  Own Your Stage.
                </span>{' '}
                <br />
                Create Your Future.
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-neutral-300 max-w-xl leading-relaxed">
                {COMPANY_INFO.heroDescription}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('training')}
                  className="px-6 py-3.5 rounded-lg bg-[#35C84A] hover:bg-[#168D32] text-black hover:text-white font-semibold text-sm tracking-wide transition-all shadow-lg shadow-[#35C84A]/15 active:scale-[0.98] flex items-center gap-2"
                >
                  <span>Explore Our Programs</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onOpenBooking()}
                  className="px-6 py-3.5 rounded-lg bg-[#19191D] hover:bg-[#27272E] border border-[#27272E] text-white font-semibold text-sm tracking-wide transition-all hover:border-[#35C84A]/40"
                >
                  Start an Inquiry
                </button>
              </div>

              {/* Supporting Trust Statement */}
              <div className="pt-4 flex items-center gap-3 text-xs text-[#C8B6A5] border-t border-[#1F1F24] max-w-md">
                <ShieldCheck className="w-4 h-4 text-[#35C84A] shrink-0" />
                <span>{COMPANY_INFO.trustStatement}</span>
              </div>
            </div>

            {/* Right Column: Hero Visual Showcase */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl p-1 bg-gradient-to-br from-[#27272E] via-[#19191D] to-[#0B0B0D] shadow-2xl">
                <div className="relative rounded-xl bg-[#0F0F12] p-6 sm:p-8 overflow-hidden border border-[#27272E]/50">
                  {/* Decorative Stage Lighting Glow */}
                  <div className="absolute top-0 right-0 w-36 h-36 bg-[#35C84A]/20 rounded-full blur-2xl pointer-events-none" />

                  <div className="flex items-center justify-between border-b border-[#27272E] pb-4 mb-6">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#35C84A]" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-white">
                        Vibez Studio & Stage
                      </span>
                    </div>
                    <span className="text-xs text-[#C8B6A5] font-mono">
                      OCT 2011 — PRESENT
                    </span>
                  </div>

                  {/* Stage Performance Feature Card */}
                  <div className="space-y-5">
                    <div className="p-4 rounded-xl bg-[#19191D] border border-[#27272E]">
                      <div className="flex items-center justify-between text-xs text-neutral-400 mb-2">
                        <span className="text-[#35C84A] font-medium">Stage Craft & Voice</span>
                        <span className="tabular-nums">Coaching Module</span>
                      </div>
                      <p className="text-sm font-semibold text-white">
                        Vocal Range, Pitch & High-Note Technique
                      </p>
                      <p className="text-xs text-neutral-300 mt-1">
                        Professional trainer-led curriculum customized for beginner through stage performers.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-left">
                      <div className="p-3.5 rounded-lg bg-[#19191D]/80 border border-[#27272E]">
                        <span className="text-[11px] text-neutral-400 uppercase tracking-wider">Live Staging</span>
                        <p className="text-sm font-bold text-white mt-0.5">Vibez Events PH</p>
                        <span className="text-[11px] text-[#35C84A]">Full Production</span>
                      </div>
                      <div className="p-3.5 rounded-lg bg-[#19191D]/80 border border-[#27272E]">
                        <span className="text-[11px] text-neutral-400 uppercase tracking-wider">Audio Lab</span>
                        <p className="text-sm font-bold text-white mt-0.5">Vibez Records</p>
                        <span className="text-[11px] text-[#C8B6A5]">Studio Sessions</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => onOpenBooking('Voice & Stage Performance')}
                        className="w-full py-2.5 rounded-lg bg-[#35C84A] hover:bg-[#168D32] text-black hover:text-white font-semibold text-xs tracking-wide transition-colors text-center"
                      >
                        Book a Trial Lesson / Inquiry
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: TRUST AND EXPERIENCE (4 CLEAN FEATURE BLOCKS)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_FEATURES.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-xl bg-[#19191D] border border-[#27272E] space-y-3 hover:border-[#35C84A]/40 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-white font-display tabular-nums">
                  {item.metric}
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#35C84A]">
                  {item.subtitle}
                </span>
              </div>
              <h3 className="text-base font-bold text-white font-display">
                {item.title}
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: OUR SERVICES (6 VISUAL SERVICE CARDS)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#35C84A]">
            Comprehensive Entertainment Ecosystem
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-white font-display">
            Everything You Need to Bring Your Talent to Life.
          </h2>
          <p className="text-sm text-neutral-300">
            Discover professional training, creative production, and entertainment services designed around your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="group relative rounded-2xl bg-[#19191D] border border-[#27272E] p-6 flex flex-col justify-between hover:border-[#35C84A]/50 transition-all duration-200 hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-lg bg-[#0B0B0D] border border-[#27272E]">
                    {serviceIconMap[srv.id]}
                  </div>
                  <span className="text-[11px] uppercase tracking-wider text-[#C8B6A5] font-mono">
                    {srv.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white font-display group-hover:text-[#35C84A] transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-[#C8B6A5] mt-0.5">
                    {srv.tagline}
                  </p>
                </div>

                <p className="text-xs text-neutral-300 leading-relaxed">
                  {srv.description}
                </p>

                <ul className="space-y-1.5 pt-2 border-t border-[#27272E]/60 text-xs text-neutral-400">
                  {srv.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#35C84A] shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-4 flex items-center justify-between border-t border-[#27272E]">
                <button
                  onClick={() => onNavigate(srv.pageTarget)}
                  className="text-xs font-semibold text-white hover:text-[#35C84A] transition-colors flex items-center gap-1"
                >
                  <span>{srv.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onOpenBooking(srv.title)}
                  className="text-xs text-[#35C84A] hover:underline"
                >
                  Quick Inquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: TRAINING & DEVELOPMENT FEATURE
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#141418] border border-[#27272E] p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#35C84A]">
                Talent Development Division
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-display">
                Your Potential Deserves the Spotlight.
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Great performances begin with practice, guidance, and confidence. Our training programs help students strengthen their skills, explore their creativity, and grow as performers.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-200 pt-2">
                <div className="p-3 rounded-lg bg-[#19191D] border border-[#27272E]">
                  <strong className="text-white block mb-0.5">Vocal Technique & Pitch</strong>
                  Breath control, resonance, and reaching high notes safely.
                </div>
                <div className="p-3 rounded-lg bg-[#19191D] border border-[#27272E]">
                  <strong className="text-white block mb-0.5">Instrument Mastery</strong>
                  Step-by-step coaching for guitar, keyboard, and drum kits.
                </div>
                <div className="p-3 rounded-lg bg-[#19191D] border border-[#27272E]">
                  <strong className="text-white block mb-0.5">Stage Craft & Presence</strong>
                  Microphone dynamics, stage movement, and expression.
                </div>
                <div className="p-3 rounded-lg bg-[#19191D] border border-[#27272E]">
                  <strong className="text-white block mb-0.5">Dance & Acting</strong>
                  Body rhythm, scene study, monologue delivery, and theater.
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('training')}
                  className="px-5 py-2.5 rounded-lg bg-[#35C84A] hover:bg-[#168D32] text-black hover:text-white font-semibold text-xs tracking-wide transition-colors"
                >
                  Find the Right Program
                </button>
                <button
                  onClick={() => onOpenBooking('Voice & Stage Performance')}
                  className="text-xs text-[#C8B6A5] hover:text-white transition-colors"
                >
                  Inquire directly for schedule →
                </button>
              </div>

              <p className="text-[11px] text-neutral-500 italic">
                * Program details, schedules, and availability are provided upon inquiry.
              </p>
            </div>

            <div className="lg:col-span-6 bg-[#0B0B0D] p-6 rounded-xl border border-[#27272E] space-y-4">
              <div className="flex items-center justify-between border-b border-[#27272E] pb-3">
                <span className="text-xs font-semibold text-white">Student Progress Focus</span>
                <span className="text-xs text-[#35C84A] font-mono">Trainer-Led</span>
              </div>
              <div className="space-y-3 text-xs text-neutral-300">
                <div className="p-3 rounded-lg bg-[#19191D] border border-[#27272E]">
                  <span className="font-semibold text-white">1. Diagnostic & Voice Assessment</span>
                  <p className="text-neutral-400 mt-0.5">Identify vocal range, strengths, posture, and areas of growth.</p>
                </div>
                <div className="p-3 rounded-lg bg-[#19191D] border border-[#27272E]">
                  <span className="font-semibold text-white">2. Tailored Technical Drills</span>
                  <p className="text-neutral-400 mt-0.5">Vocal scales, interval pitch matching, articulation, and tempo stamina.</p>
                </div>
                <div className="p-3 rounded-lg bg-[#19191D] border border-[#27272E]">
                  <span className="font-semibold text-white">3. Stage Readiness & Repertoire</span>
                  <p className="text-neutral-400 mt-0.5">Performance songs, stage confidence, live mic handling, and audition prep.</p>
                </div>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('training')}
                  className="w-full py-2.5 rounded-lg bg-[#27272E] hover:bg-[#35C84A] hover:text-black text-white font-medium text-xs transition-colors"
                >
                  View Full Training Curriculum
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: EVENTS PRODUCTION (VIBEZ EVENTS PH)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-[#19191D] via-[#141418] to-[#0B0B0D] border border-[#27272E] p-8 lg:p-12 relative overflow-hidden">
          <div className="max-w-2xl space-y-4 relative z-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#35C84A]">
              Vibez Events PH
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-display">
              Your Vision. Our Creativity. An Event to Remember.
            </h2>
            <p className="text-sm text-neutral-300 leading-relaxed">
              From concerts and live performances to corporate and social gatherings, Vibez Events PH helps transform event ideas into coordinated experiences. We support the process from conceptualization and planning through production and post-event coordination.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
              <div className="p-3 rounded-lg bg-[#0B0B0D] border border-[#27272E] text-center">
                <p className="text-xs font-bold text-white">Concerts</p>
                <span className="text-[10px] text-[#35C84A]">Live Staging</span>
              </div>
              <div className="p-3 rounded-lg bg-[#0B0B0D] border border-[#27272E] text-center">
                <p className="text-xs font-bold text-white">Corporate</p>
                <span className="text-[10px] text-[#35C84A]">Galas & Launches</span>
              </div>
              <div className="p-3 rounded-lg bg-[#0B0B0D] border border-[#27272E] text-center">
                <p className="text-xs font-bold text-white">Family Events</p>
                <span className="text-[10px] text-[#35C84A]">Milestones</span>
              </div>
              <div className="p-3 rounded-lg bg-[#0B0B0D] border border-[#27272E] text-center">
                <p className="text-xs font-bold text-white">Production</p>
                <span className="text-[10px] text-[#35C84A]">Audio & Lights</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('events')}
                className="px-5 py-2.5 rounded-lg bg-[#35C84A] hover:bg-[#168D32] text-black hover:text-white font-semibold text-xs tracking-wide transition-colors"
              >
                Let’s Plan Your Event
              </button>
              <button
                onClick={() => onOpenBooking('Vibez Events PH — Event Production')}
                className="px-5 py-2.5 rounded-lg bg-[#0B0B0D] border border-[#27272E] text-white hover:text-[#35C84A] text-xs font-medium transition-colors"
              >
                Request Event Proposal
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: ARTIST MANAGEMENT (KA-VIBEZ)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#141418] border border-[#27272E] rounded-2xl p-8 lg:p-12">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C8B6A5]">
              Ka-Vibez Artist Management
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-display">
              Your Talent Has a Story. Let’s Help You Tell It.
            </h2>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Ka-Vibez Artist Management supports aspiring singers, bands, musicians, artists, and models as they explore their place in the entertainment and creative industries.
            </p>

            <ul className="space-y-2 text-xs text-neutral-300">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#C8B6A5]" />
                <span>Artist development, styling, and repertoire curation</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#C8B6A5]" />
                <span>Showcase and live performance opportunity reviews</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#C8B6A5]" />
                <span>Demo and portfolio submission evaluation</span>
              </li>
            </ul>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => onNavigate('artist-management')}
                className="px-5 py-2.5 rounded-lg bg-[#C8B6A5] hover:bg-white text-black font-semibold text-xs tracking-wide transition-colors"
              >
                Submit an Artist Inquiry
              </button>
            </div>

            <p className="text-[11px] text-neutral-400 italic pt-2">
              * Inquiries are reviewed individually. Representation and career opportunities are based on fit and merit; no promises or guarantees are made.
            </p>
          </div>

          <div className="lg:col-span-5 bg-[#0B0B0D] p-6 rounded-xl border border-[#27272E] space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C8B6A5]">
              Artist Profile Guidelines
            </span>
            <p className="text-xs text-neutral-300 leading-relaxed">
              When submitting your inquiry, include:
            </p>
            <div className="space-y-2 text-xs text-neutral-400">
              <div className="p-2.5 rounded bg-[#19191D] border border-[#27272E]">
                1. Full name & musical/artistic discipline
              </div>
              <div className="p-2.5 rounded bg-[#19191D] border border-[#27272E]">
                2. Link to demo, video clip, or audio sample (if available)
              </div>
              <div className="p-2.5 rounded bg-[#19191D] border border-[#27272E]">
                3. Short artist biography or vision for your sound
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: RECORDING & VIBEZ RECORDS
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#141418] border border-[#27272E] p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#35C84A]">
                Vibez Records
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-display">
                Turn Your Sound Into Something Real.
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Vibez Records caters to recording and music production projects. Whether you're developing a song or planning your next recording session, connect with our team to discuss your creative goals.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 rounded bg-[#19191D] border border-[#27272E] text-xs text-white">
                  Recording
                </span>
                <span className="px-3 py-1 rounded bg-[#19191D] border border-[#27272E] text-xs text-white">
                  Music Production
                </span>
                <span className="px-3 py-1 rounded bg-[#19191D] border border-[#27272E] text-xs text-white">
                  Studio Rental
                </span>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <button
                  onClick={() => onNavigate('recording')}
                  className="px-5 py-2.5 rounded-lg bg-[#35C84A] hover:bg-[#168D32] text-black hover:text-white font-semibold text-xs tracking-wide transition-colors"
                >
                  Inquire About Recording
                </button>
                <button
                  onClick={() => onOpenBooking('Vibez Records — Studio Rental')}
                  className="text-xs text-[#C8B6A5] hover:text-white"
                >
                  Studio Rental Inquiries →
                </button>
              </div>

              <p className="text-[11px] text-neutral-500 italic">
                * Inquire to check studio facility availability, engineer schedules, and project rates.
              </p>
            </div>

            <div className="lg:col-span-5 bg-[#0B0B0D] p-6 rounded-xl border border-[#27272E] space-y-3">
              <h3 className="text-sm font-bold text-white">Studio Session Workflow</h3>
              <div className="space-y-2 text-xs text-neutral-400">
                <div className="p-2.5 rounded bg-[#19191D] border border-[#27272E]">
                  <strong className="text-white block">Pre-Production Consultation</strong>
                  Discussion of song tempo, key, stems, and session plan.
                </div>
                <div className="p-2.5 rounded bg-[#19191D] border border-[#27272E]">
                  <strong className="text-white block">Tracking & Vocal Capture</strong>
                  Quality microphone tracking with dedicated playback foldback.
                </div>
                <div className="p-2.5 rounded bg-[#19191D] border border-[#27272E]">
                  <strong className="text-white block">Mix & Bounce Delivery</strong>
                  Reference mixing and audio delivery tailored for release.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: COMPANY DIVISIONS
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#35C84A]">
            Unified Creative House
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-white font-display">
            One Creative Community. Multiple Ways to Make It Happen.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DIVISIONS.map((div) => (
            <div
              key={div.id}
              className="p-6 rounded-xl bg-[#19191D] border border-[#27272E] flex flex-col justify-between hover:border-[#35C84A]/40 transition-colors"
            >
              <div className="space-y-3">
                <span className="text-[11px] font-mono text-[#35C84A] uppercase">
                  Division
                </span>
                <h3 className="text-lg font-bold text-white font-display">
                  {div.name}
                </h3>
                <p className="text-xs text-[#C8B6A5]">
                  {div.subtitle}
                </p>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {div.description}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-[#27272E]">
                <button
                  onClick={() => onNavigate(div.pageTarget)}
                  className="text-xs font-semibold text-white hover:text-[#35C84A] transition-colors flex items-center gap-1.5"
                >
                  <span>Explore Division</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 11: WHY CHOOSE VIBEZ ENTERTAINMENT?
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#35C84A]">
            Our Distinction
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-white font-display">
            Built Around Talent. Driven by Creativity.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={item.title}
              className="p-6 rounded-xl bg-[#19191D] border border-[#27272E] space-y-3"
            >
              <span className="text-xs font-mono text-[#C8B6A5] block">
                0{idx + 1}.
              </span>
              <h3 className="text-base font-bold text-white font-display">
                {item.title}
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 12: GALLERY / HIGHLIGHTS PREVIEW
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#35C84A]">
              Visual Proof & Archive
            </p>
            <h2 className="text-2xl sm:text-4xl font-bold text-white font-display mt-1">
              See the Talent. Feel the Energy.
            </h2>
          </div>
          <button
            onClick={() => onNavigate('gallery')}
            className="text-xs font-semibold text-[#35C84A] hover:text-white flex items-center gap-1.5 transition-colors self-start sm:self-auto"
          >
            <span>Explore Full Gallery ({GALLERY_ITEMS.length} Highlights)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.slice(0, 6).map((item) => (
            <div
              key={item.id}
              onClick={() => onNavigate('gallery')}
              className="cursor-pointer group p-5 rounded-xl bg-[#19191D] border border-[#27272E] hover:border-[#35C84A]/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="h-32 rounded-lg bg-gradient-to-br from-[#27272E] to-[#0B0B0D] p-4 flex flex-col justify-between border border-[#27272E]">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#35C84A]">
                    {item.highlightTag}
                  </span>
                  <div className="text-right">
                    <span className="text-[10px] text-[#C8B6A5]">{item.date}</span>
                  </div>
                </div>
                <h3 className="text-sm font-bold text-white font-display group-hover:text-[#35C84A] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-400 line-clamp-2">
                  {item.caption}
                </p>
              </div>
              <div className="pt-3 mt-2 border-t border-[#27272E] text-[11px] text-neutral-400 flex items-center justify-between">
                <span className="capitalize">{item.category}</span>
                <span className="text-[#35C84A] group-hover:underline">View in gallery →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 13: TESTIMONIALS / EXPERIENCE INVITATION
          (Respects prompt: "Use verified testimonials only. If testimonials are
          not yet available, hide this section or replace it with an invitation to
          experience the training and services. Never invent names, quotes, ratings.")
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-[#19191D] to-[#141418] border border-[#27272E] text-center max-w-3xl mx-auto space-y-4">
          <Award className="w-10 h-10 text-[#35C84A] mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
            Experience the Vibez Standard Firsthand
          </h2>
          <p className="text-sm text-neutral-300 leading-relaxed">
            We hold ourselves to authentic client and student satisfaction. We invite you to schedule a consultation or trial lesson with our professional trainers to discover our teaching approach, studio environment, and creative energy.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenBooking('Voice & Stage Performance')}
              className="px-6 py-3 rounded-lg bg-[#35C84A] hover:bg-[#168D32] text-black hover:text-white font-semibold text-xs tracking-wide transition-colors"
            >
              Inquire About a Trial or Studio Visit
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 14: FREQUENTLY ASKED QUESTIONS (ACCESSIBLE ACCORDION)
          ========================================================================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#35C84A]">
            Answers & Clarifications
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={faq.question}
                className="rounded-xl bg-[#19191D] border border-[#27272E] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#35C84A]"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-neutral-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#35C84A]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-5 text-xs text-neutral-300 leading-relaxed border-t border-[#27272E]/60 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          SECTION 15: FINAL CONVERSION SECTION
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-gradient-to-br from-[#0B0B0D] via-[#141418] to-[#168D32]/25 border border-[#35C84A]/30 p-8 sm:p-14 text-center overflow-hidden">
          {/* Ambient Lighting */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#35C84A]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#35C84A]">
              Connect With Vibez Entertainment
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display">
              Ready to Take the Next Step?
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Whether you're learning your first song, preparing for the stage, planning an event, or creating new music, let's talk about your next move.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onOpenBooking()}
                className="px-6 py-3.5 rounded-lg bg-[#35C84A] hover:bg-[#168D32] text-black hover:text-white font-semibold text-sm tracking-wide transition-all shadow-lg shadow-[#35C84A]/20"
              >
                Start Your Inquiry
              </button>

              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="px-6 py-3.5 rounded-lg bg-[#19191D] hover:bg-[#27272E] border border-[#27272E] text-white font-semibold text-sm tracking-wide transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#35C84A]" />
                <span className="tabular-nums">Call {COMPANY_INFO.phone}</span>
              </a>
            </div>

            <div className="pt-2 text-xs text-neutral-400">
              Direct email:{' '}
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="text-[#35C84A] hover:underline"
              >
                {COMPANY_INFO.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
