import React from 'react';
import { Phone, Mail, MessageCircle, ArrowUpRight } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { PageId } from '../types';
import { COMPANY_INFO, DIVISIONS } from '../data/content';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: (serviceName?: string) => void;
  onOpenInquiriesViewer: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenBooking,
  onOpenInquiriesViewer
}) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B0B0D] border-t border-[#1F1F24] text-neutral-400 text-sm">
      {/* Upper Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => handleNav('home')}
              className="text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#35C84A] rounded"
            >
              <BrandLogo size="lg" showTagline />
            </button>
            <p className="text-neutral-300 text-sm leading-relaxed max-w-sm pt-2">
              Duly registered Philippine entertainment and talent development company established in October 2011. Operated by professional trainers dedicated to creative excellence across voice, music, live events, artist management, and studio recording.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => onOpenBooking()}
                className="px-4 py-2 rounded-lg bg-[#35C84A] text-black font-semibold text-xs tracking-wide hover:bg-[#168D32] hover:text-white transition-colors"
              >
                Inquire With Us
              </button>
              <button
                onClick={onOpenInquiriesViewer}
                className="px-3.5 py-2 rounded-lg bg-[#19191D] border border-[#27272E] text-neutral-300 hover:text-white text-xs transition-colors flex items-center gap-1.5"
                title="View verified submission logs"
              >
                <span>Submission Log</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#35C84A]" />
              </button>
            </div>
          </div>

          {/* Col 2: Divisions */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-white">
              Company Divisions
            </p>
            <ul className="space-y-2 text-neutral-300">
              {DIVISIONS.map((div) => (
                <li key={div.id}>
                  <button
                    onClick={() => handleNav(div.pageTarget)}
                    className="hover:text-[#35C84A] transition-colors text-left flex items-center gap-1 group"
                  >
                    <span>{div.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Programs & Training */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-white">
              Training & Workshops
            </p>
            <ul className="space-y-2 text-neutral-300">
              <li>
                <button onClick={() => handleNav('training')} className="hover:text-[#35C84A] transition-colors text-left">
                  Singing & Voice Coaching
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('training')} className="hover:text-[#35C84A] transition-colors text-left">
                  Voice & Stage Performance
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('training')} className="hover:text-[#35C84A] transition-colors text-left">
                  Guitar & Keyboard Lessons
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('training')} className="hover:text-[#35C84A] transition-colors text-left">
                  Drum Timing & Technique
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('training')} className="hover:text-[#35C84A] transition-colors text-left">
                  Dance & Acting Workshops
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Channels */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-white">
              Direct Contact
            </p>
            <div className="space-y-2.5 text-neutral-300">
              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="flex items-center gap-2 hover:text-[#35C84A] transition-colors group"
              >
                <div className="p-1.5 rounded bg-[#19191D] border border-[#27272E] group-hover:border-[#35C84A]/50">
                  <Phone className="w-3.5 h-3.5 text-[#35C84A]" />
                </div>
                <span className="tabular-nums font-medium">{COMPANY_INFO.phone}</span>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2 hover:text-[#35C84A] transition-colors group"
              >
                <div className="p-1.5 rounded bg-[#19191D] border border-[#27272E] group-hover:border-[#35C84A]/50">
                  <Mail className="w-3.5 h-3.5 text-[#35C84A]" />
                </div>
                <span className="truncate">{COMPANY_INFO.email}</span>
              </a>

              <a
                href={COMPANY_INFO.messengerURL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#35C84A] transition-colors group"
              >
                <div className="p-1.5 rounded bg-[#19191D] border border-[#27272E] group-hover:border-[#35C84A]/50">
                  <MessageCircle className="w-3.5 h-3.5 text-[#35C84A]" />
                </div>
                <span>Messenger: Vibez Entertainment</span>
              </a>
            </div>
            <p className="text-xs text-neutral-500 pt-2">
              Inquiries are answered during official training & office hours.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#19191D] bg-[#08080A] py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© 2026 VIBEZ ENTERTAINMENT. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button onClick={() => handleNav('about')} className="hover:text-neutral-300 transition-colors">
              About Us
            </button>
            <button onClick={() => handleNav('contact')} className="hover:text-neutral-300 transition-colors">
              Inquire
            </button>
            <span className="text-neutral-400">Philippines</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
