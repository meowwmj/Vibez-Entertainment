import React, { useState } from 'react';
import {
  Mic,
  Music,
  Sparkles,
  Guitar,
  Volume2,
  Users,
  CheckCircle,
  Phone,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { InquiryForm } from '../components/InquiryForm';
import { COMPANY_INFO } from '../data/content';

interface TrainingPageProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const TrainingPage: React.FC<TrainingPageProps> = ({ onOpenBooking }) => {
  const [selectedProgram, setSelectedProgram] = useState('Voice & Stage Performance');

  const programs = [
    {
      id: 'voice-stage',
      title: 'Voice & Stage Performance',
      focus: 'Stage presence, vocal dynamics & mic handling',
      description:
        'Combines foundational vocal pedagogy with live performance craft. Students learn breath management, vocal stamina, posture, dynamic mic technique, and commanding stage confidence.',
      topics: [
        'Vocal technique, pitch & tone quality',
        'Reaching high notes safely with proper placement',
        'Overcoming stage fright & developing artist presence',
        'Microphone technique & live acoustic dynamics'
      ]
    },
    {
      id: 'singing-coaching',
      title: 'Singing & Voice Coaching',
      focus: 'Beginner to advanced vocal fundamentals',
      description:
        'Individualized voice coaching designed around your vocal range, timbre, and goals. Covers interval training, resonance, breath support, and song interpretation.',
      topics: [
        'Breath support & diaphragmatic control',
        'Pitch accuracy & ear training',
        'Vocal health & warm-up routines',
        'Repertoire selection suited to your tone'
      ]
    },
    {
      id: 'guitar-lessons',
      title: 'Guitar Lessons',
      focus: 'Acoustic & electric guitar coaching',
      description:
        'Structured guitar lessons taking students from finger placement and basic chords to rhythmic strumming patterns, melodic scales, and live accompaniment.',
      topics: [
        'Open chords, barre chords & fingerstyle',
        'Rhythmic strumming & timing consistency',
        'Scales & lead melodies',
        'Playing along with songs and accompaniment'
      ]
    },
    {
      id: 'keyboard-lessons',
      title: 'Keyboard Lessons',
      focus: 'Piano & keyboard melody, harmony & rhythm',
      description:
        'Practical keyboard training focusing on hand coordination, chord progressions, reading lead sheets, and accompanying vocal performances.',
      topics: [
        'Two-hand coordination & keyboard layout',
        'Major, minor & harmonic chord voicings',
        'Rhythmic groove & tempo consistency',
        'Vocal accompaniment & performance prep'
      ]
    },
    {
      id: 'drum-lessons',
      title: 'Drum Lessons',
      focus: 'Drum kit technique, timing & groove',
      description:
        'Learn the foundation of rhythm, stick control, dynamic independence, and timing stability across various musical grooves.',
      topics: [
        'Stick grip & foot pedal coordination',
        'Basic rock, pop & syncopated beats',
        'Tempo control & playing with a metronome',
        'Dynamic accents and clean transitions'
      ]
    },
    {
      id: 'dance-lessons',
      title: 'Dance Lessons',
      focus: 'Movement, choreography & performance rhythm',
      description:
        'Develop body awareness, stage mobility, choreography execution, and rhythm synchronization to elevate your stage presence.',
      topics: [
        'Rhythm & body coordination',
        'Contemporary stage choreography',
        'Stamina & performance agility',
        'Synchronized movement for soloists and groups'
      ]
    },
    {
      id: 'acting-workshops',
      title: 'Acting Workshops',
      focus: 'Expression, scene study & character delivery',
      description:
        'Explore dramatic expression, dialogue delivery, character immersion, and audition readiness guided by experienced coaches.',
      topics: [
        'Voice projection & speech clarity',
        'Emotional connection & scene study',
        'Monologue delivery & theater fundamentals',
        'Audition techniques & camera readiness'
      ]
    }
  ];

  return (
    <div className="space-y-20 md:space-y-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#35C84A]">
          Talent Development Division
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold text-white font-display">
          Training & Talent Development
        </h1>
        <p className="text-base text-neutral-300 leading-relaxed">
          Owned and operated by professional trainers, VIBEZ ENTERTAINMENT provides comprehensive instruction designed to nurture your unique talent. Our coaching supports vocal technique, pitch, vocal quality, stage confidence, performance skills, and artistic development.
        </p>
        <p className="text-xs text-[#C8B6A5] italic">
          * Program details, schedules, and instructor availability are provided upon inquiry.
        </p>
      </div>

      {/* Program Grid */}
      <section className="space-y-8">
        <div className="border-b border-[#27272E] pb-3">
          <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
            Available Training Disciplines
          </h2>
          <p className="text-xs text-neutral-400 mt-1">
            Choose a program below to review details and submit a lesson inquiry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((prog) => {
            const isSelected = selectedProgram === prog.title;
            return (
              <div
                key={prog.id}
                className={`p-6 rounded-2xl bg-[#19191D] border transition-all duration-200 flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#35C84A] shadow-lg shadow-[#35C84A]/10'
                    : 'border-[#27272E] hover:border-[#35C84A]/40'
                }`}
              >
                <div className="space-y-3">
                  <span className="text-[11px] font-mono text-[#35C84A] uppercase">
                    Coaching Module
                  </span>
                  <h3 className="text-lg font-bold text-white font-display">
                    {prog.title}
                  </h3>
                  <p className="text-xs text-[#C8B6A5] font-medium">
                    {prog.focus}
                  </p>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {prog.description}
                  </p>

                  <div className="pt-2 border-t border-[#27272E]/60">
                    <p className="text-[11px] font-semibold text-white mb-1.5">
                      Key Focus Areas:
                    </p>
                    <ul className="space-y-1 text-xs text-neutral-400">
                      {prog.topics.map((t) => (
                        <li key={t} className="flex items-start gap-1.5">
                          <CheckCircle className="w-3.5 h-3.5 text-[#35C84A] shrink-0 mt-0.5" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-[#27272E] flex items-center justify-between">
                  <button
                    onClick={() => {
                      setSelectedProgram(prog.title);
                      const formElem = document.getElementById('lesson-form-section');
                      if (formElem) formElem.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-xs font-semibold text-[#35C84A] hover:underline flex items-center gap-1"
                  >
                    <span>Inquire for {prog.title}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Student-Focused Benefits */}
      <section className="rounded-2xl bg-[#141418] border border-[#27272E] p-8 lg:p-12">
        <div className="max-w-2xl space-y-3 mb-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#35C84A]">
            Why Train With Us
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
            Designed for Genuine Performer Growth
          </h2>
          <p className="text-xs text-neutral-300">
            Our coaching focuses on long-term vocal health, authentic musicality, and real-world stage presence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 rounded-xl bg-[#19191D] border border-[#27272E] space-y-2">
            <ShieldCheck className="w-6 h-6 text-[#35C84A]" />
            <h4 className="text-sm font-bold text-white">Vocal Technique & Range</h4>
            <p className="text-xs text-neutral-400">
              Safe methods to project notes, access high registers, and preserve vocal chords.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#19191D] border border-[#27272E] space-y-2">
            <Mic className="w-6 h-6 text-[#35C84A]" />
            <h4 className="text-sm font-bold text-white">Stage Confidence</h4>
            <p className="text-xs text-neutral-400">
              Overcome performance anxiety with guided stage exercises and posture coaching.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#19191D] border border-[#27272E] space-y-2">
            <Users className="w-6 h-6 text-[#35C84A]" />
            <h4 className="text-sm font-bold text-white">Professional Trainers</h4>
            <p className="text-xs text-neutral-400">
              Instruction by seasoned industry coaches who understand live performance demands.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#19191D] border border-[#27272E] space-y-2">
            <Volume2 className="w-6 h-6 text-[#35C84A]" />
            <h4 className="text-sm font-bold text-white">Studio & Event Pathway</h4>
            <p className="text-xs text-neutral-400">
              Direct access to Vibez Events PH showcases and Vibez Records studio facilities.
            </p>
          </div>
        </div>
      </section>

      {/* Lesson Inquiry Form Section */}
      <section id="lesson-form-section" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 space-y-5">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#35C84A]">
            Take the First Step
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
            Book a Lesson / Inquire Now
          </h2>
          <p className="text-sm text-neutral-300 leading-relaxed">
            Tell us about your musical interest, experience level, and preferred training schedule. Our coaches will review your inquiry and follow up directly with current availability.
          </p>

          <div className="p-5 rounded-xl bg-[#19191D] border border-[#27272E] space-y-3 text-xs text-neutral-300">
            <div className="font-semibold text-white">Direct Inquiries:</div>
            <p>
              Phone: <a href={`tel:${COMPANY_INFO.phoneClean}`} className="text-[#35C84A] font-semibold">{COMPANY_INFO.phone}</a>
            </p>
            <p>
              Email: <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#35C84A]">{COMPANY_INFO.email}</a>
            </p>
            <p>
              Facebook Messenger: <span className="text-white font-medium">{COMPANY_INFO.facebookMessenger}</span>
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 bg-[#141418] border border-[#27272E] rounded-2xl p-6 sm:p-8">
          <InquiryForm
            initialService={selectedProgram}
            divisionContext="Talent Development"
            formTitle="Lesson Inquiry Form"
          />
        </div>
      </section>
    </div>
  );
};
