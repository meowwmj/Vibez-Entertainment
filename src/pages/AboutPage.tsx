import React from 'react';
import {
  ShieldCheck,
  Award,
  Users,
  Sparkles,
  ArrowRight,
  Phone,
  Mail,
  CheckCircle,
  FileText
} from 'lucide-react';
import { PageId } from '../types';
import { COMPANY_INFO, DIVISIONS } from '../data/content';
import { BrandLogo } from '../components/BrandLogo';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: (serviceName?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenBooking
}) => {
  return (
    <div className="space-y-20 md:space-y-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      {/* Hero Header with Brand Mark */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-8 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#35C84A]">
            About Vibez Entertainment
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-white font-display">
            Dedicated to Developing Talent & Delivering Excellence Since 2011.
          </h1>
          <p className="text-base text-neutral-300 leading-relaxed max-w-2xl">
            Founded in October 2011 and operated by professional trainers, VIBEZ ENTERTAINMENT has grown into a trusted Philippine creative house uniting training, live events, artist management, and studio recording.
          </p>
        </div>

        <div className="lg:col-span-4 flex flex-col items-center justify-center p-8 rounded-2xl bg-[#141418] border border-[#27272E] text-center space-y-3">
          <BrandLogo size="lg" />
          <div className="pt-2 text-xs text-[#C8B6A5] font-mono">
            ESTABLISHED OCTOBER 2011
          </div>
          <p className="text-xs text-neutral-400">
            Duly registered Philippine entertainment and talent development enterprise.
          </p>
        </div>
      </div>

      {/* Official Company Introduction Box */}
      <section className="rounded-2xl bg-[#141418] border border-[#35C84A]/30 p-8 lg:p-12 relative overflow-hidden">
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#35C84A]">
            <FileText className="w-4 h-4" />
            <span>Official Company Introduction</span>
          </div>

          <blockquote className="text-base sm:text-lg text-white font-medium leading-relaxed italic border-l-2 border-[#35C84A] pl-4">
            “VIBEZ ENTERTAINMENT is a duly registered company established in October 2011. Owned and operated by professional trainers, the company is engaged in talent development, event conceptualization, organization and management, artist management, and recording.
            <br /><br />
            We take pride in our dedication to exceeding client expectations through unique, creative, and excellent services. Our mission is to help individuals develop their talents while delivering meaningful entertainment experiences for clients, performers, and audiences.”
          </blockquote>
        </div>
      </section>

      {/* Mission & Vision (with label for approval) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-2xl bg-[#19191D] border border-[#27272E] space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white font-display">
              Mission Statement
            </h3>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0B0B0D] text-[#C8B6A5] border border-[#27272E]">
              Core Purpose
            </span>
          </div>
          <p className="text-sm text-neutral-300 leading-relaxed">
            {COMPANY_INFO.suggestedMission}
          </p>
          <p className="text-[11px] text-neutral-500 italic">
            * Note: Proposed statement for client reference and review.
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-[#19191D] border border-[#27272E] space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white font-display">
              Vision Statement
            </h3>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0B0B0D] text-[#35C84A] border border-[#27272E]">
              Future Horizon
            </span>
          </div>
          <p className="text-sm text-neutral-300 leading-relaxed">
            {COMPANY_INFO.suggestedVision}
          </p>
          <p className="text-[11px] text-neutral-500 italic">
            * Note: Proposed statement for client reference and review.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="space-y-8">
        <div className="border-b border-[#27272E] pb-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#35C84A]">
            Our Foundation
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display mt-1">
            Core Values
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPANY_INFO.coreValues.map((val) => (
            <div
              key={val.title}
              className="p-6 rounded-2xl bg-[#19191D] border border-[#27272E] space-y-2.5"
            >
              <h4 className="text-base font-bold text-white font-display">
                {val.title}
              </h4>
              <p className="text-xs text-neutral-300 leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Professional Training Approach */}
      <section className="rounded-2xl bg-[#141418] border border-[#27272E] p-8 lg:p-12 space-y-6">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#35C84A]">
            Pedagogy & Philosophy
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
            The Professional Trainer-Led Approach
          </h2>
          <p className="text-sm text-neutral-300 leading-relaxed">
            Unlike schools with rigid, impersonal syllabi, Vibez Entertainment was built directly by professional trainers who teach, perform, and produce. We recognize that vocal technique, physical agility, and artistic confidence are deeply personal.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
          <div className="p-4 rounded-xl bg-[#19191D] border border-[#27272E] space-y-2">
            <h4 className="text-sm font-bold text-white">Technique Without Strain</h4>
            <p className="text-xs text-neutral-400">
              Focusing on vocal cord health, proper breath placement, and tension-free tone production.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#19191D] border border-[#27272E] space-y-2">
            <h4 className="text-sm font-bold text-white">Stage-Ready Confidence</h4>
            <p className="text-xs text-neutral-400">
              Transforming classroom practice into dynamic microphone handling and fearless audience engagement.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#19191D] border border-[#27272E] space-y-2">
            <h4 className="text-sm font-bold text-white">Creative Integration</h4>
            <p className="text-xs text-neutral-400">
              Students have direct avenues to live stages through Vibez Events PH and original recording at Vibez Records.
            </p>
          </div>
        </div>
      </section>

      {/* Company Divisions Quick Grid */}
      <section className="space-y-8">
        <div className="border-b border-[#27272E] pb-3">
          <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
            Our Operating Divisions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DIVISIONS.map((div) => (
            <div
              key={div.id}
              className="p-6 rounded-xl bg-[#19191D] border border-[#27272E] space-y-3 flex flex-col justify-between"
            >
              <div>
                <h4 className="text-base font-bold text-white font-display">
                  {div.name}
                </h4>
                <p className="text-xs text-[#C8B6A5] mt-0.5">
                  {div.subtitle}
                </p>
                <p className="text-xs text-neutral-300 mt-2 leading-relaxed">
                  {div.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#27272E]">
                <button
                  onClick={() => onNavigate(div.pageTarget)}
                  className="text-xs font-semibold text-[#35C84A] hover:underline flex items-center gap-1"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="p-8 rounded-2xl bg-gradient-to-r from-[#19191D] to-[#141418] border border-[#27272E] text-center space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
          Partner With Vibez Entertainment
        </h3>
        <p className="text-xs sm:text-sm text-neutral-300 max-w-xl mx-auto">
          Whether you want to explore lessons, coordinate a concert production, or record in our studio, we welcome your inquiry.
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onOpenBooking()}
            className="px-6 py-2.5 rounded-lg bg-[#35C84A] hover:bg-[#168D32] text-black hover:text-white font-semibold text-xs tracking-wide transition-colors"
          >
            Inquire With Our Team
          </button>
          <a
            href={`tel:${COMPANY_INFO.phoneClean}`}
            className="px-6 py-2.5 rounded-lg bg-[#0B0B0D] border border-[#27272E] text-white hover:text-[#35C84A] font-semibold text-xs transition-colors flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5 text-[#35C84A]" />
            <span>{COMPANY_INFO.phone}</span>
          </a>
        </div>
      </section>
    </div>
  );
};
