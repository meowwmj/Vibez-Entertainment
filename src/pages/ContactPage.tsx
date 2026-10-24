import React from 'react';
import { Phone, Mail, MessageCircle, Clock, ShieldCheck, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import { InquiryForm } from '../components/InquiryForm';

interface ContactPageProps {
  onOpenInquiriesViewer: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenInquiriesViewer }) => {
  return (
    <div className="space-y-16 md:space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#35C84A]">
          Direct Communication Channels
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold text-white font-display">
          Contact & Booking
        </h1>
        <p className="text-base text-neutral-300 leading-relaxed">
          Ready to enroll in vocal or music lessons, plan your concert or corporate event, submit an artist profile, or reserve studio time? Contact VIBEZ ENTERTAINMENT directly through any of our official channels.
        </p>
      </div>

      {/* Prominent Action Cards for Phone, Email, Messenger */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Phone Card */}
        <div className="p-6 rounded-2xl bg-[#19191D] border border-[#27272E] space-y-3 flex flex-col justify-between hover:border-[#35C84A]/50 transition-colors">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#0B0B0D] border border-[#27272E] flex items-center justify-center text-[#35C84A]">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-display">
              Official Hotline
            </h3>
            <p className="text-xs text-neutral-400">
              Direct voice calls for training consultations, event urgencies, and immediate scheduling.
            </p>
            <div className="text-lg font-bold text-white tabular-nums">
              {COMPANY_INFO.phone}
            </div>
          </div>
          <div className="pt-4 border-t border-[#27272E]">
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="w-full py-2.5 rounded-lg bg-[#35C84A] hover:bg-[#168D32] text-black hover:text-white font-semibold text-xs tracking-wide transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Now</span>
            </a>
          </div>
        </div>

        {/* Email Card */}
        <div className="p-6 rounded-2xl bg-[#19191D] border border-[#27272E] space-y-3 flex flex-col justify-between hover:border-[#35C84A]/50 transition-colors">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#0B0B0D] border border-[#27272E] flex items-center justify-center text-[#35C84A]">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-display">
              Email Correspondence
            </h3>
            <p className="text-xs text-neutral-400">
              Send detailed technical riders, corporate proposals, demo audio files, or formal inquiries.
            </p>
            <div className="text-sm font-semibold text-white break-all">
              {COMPANY_INFO.email}
            </div>
          </div>
          <div className="pt-4 border-t border-[#27272E]">
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="w-full py-2.5 rounded-lg bg-[#19191D] border border-[#27272E] hover:border-[#35C84A] text-white hover:text-[#35C84A] font-semibold text-xs tracking-wide transition-colors flex items-center justify-center gap-2"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Send Email</span>
            </a>
          </div>
        </div>

        {/* Messenger Card */}
        <div className="p-6 rounded-2xl bg-[#19191D] border border-[#27272E] space-y-3 flex flex-col justify-between hover:border-[#35C84A]/50 transition-colors">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#0B0B0D] border border-[#27272E] flex items-center justify-center text-[#35C84A]">
              <MessageCircle className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-display">
              Facebook Messenger
            </h3>
            <p className="text-xs text-neutral-400">
              Chat directly with our team on our official social channel for quick questions.
            </p>
            <div className="text-sm font-semibold text-white">
              {COMPANY_INFO.facebook}
            </div>
          </div>
          <div className="pt-4 border-t border-[#27272E]">
            <a
              href={"https://www.facebook.com/kavibezph"}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-lg bg-[#19191D] border border-[#27272E] hover:border-[#35C84A] text-white hover:text-[#35C84A] font-semibold text-xs tracking-wide transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Open Facebook</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Form Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#35C84A]">
              Online Booking Desk
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Tell Us How We Can Support Your Journey
            </h2>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Every inquiry is reviewed by our lead trainers and production coordinators. Please provide as much detail as possible regarding your schedule and goals.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#19191D] border border-[#27272E] space-y-3 text-xs text-neutral-300">
            <div className="flex items-center gap-2 text-white font-semibold">
              <Clock className="w-4 h-4 text-[#35C84A]" />
              <span>Response Turnaround</span>
            </div>
            <p className="text-neutral-400">
              Online inquiries are typically processed within 24 to 48 hours. For urgent weekend session booking or event coordination, calling <strong>{COMPANY_INFO.phone}</strong> is recommended.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#19191D] border border-[#27272E] space-y-3 text-xs text-neutral-400">
            <div className="flex items-center justify-between">
              <span className="text-white font-semibold">Backend Inquiries Log</span>
              <button
                onClick={onOpenInquiriesViewer}
                className="text-xs text-[#35C84A] hover:underline"
              >
                Inspect Submissions →
              </button>
            </div>
            <p>
              All submissions are stored directly in the Vibez Entertainment backend database.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 bg-[#141418] border border-[#27272E] rounded-2xl p-6 sm:p-8">
          <InquiryForm
            initialService="General Inquiry"
            formTitle="Comprehensive Inquiry & Booking Form"
          />
        </div>
      </div>
    </div>
  );
};
