import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const TopContactBar: React.FC = () => {
  return (
    <div className="bg-[#19191D] border-b border-[#27272E] text-xs text-[#C8B6A5] py-2 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="font-medium text-white/90">
            {COMPANY_INFO.tagline}
          </span>
          <span className="hidden sm:inline text-neutral-600">·</span>
          <span className="hidden sm:inline text-neutral-400">
            Est. Oct 2011 · Professional Trainers
          </span>
        </div>

        <div className="flex items-center gap-4 sm:gap-6 text-neutral-300">
          <a
            href={`tel:${COMPANY_INFO.phoneClean}`}
            className="flex items-center gap-1.5 hover:text-[#35C84A] transition-colors whitespace-nowrap"
            title="Call Vibez Entertainment"
          >
            <Phone className="w-3.5 h-3.5 text-[#35C84A]" />
            <span className="tabular-nums font-medium">{COMPANY_INFO.phone}</span>
          </a>

          <a
            href={`mailto:${COMPANY_INFO.email}`}
            className="hidden md:flex items-center gap-1.5 hover:text-[#35C84A] transition-colors whitespace-nowrap"
            title="Email Vibez Entertainment"
          >
            <Mail className="w-3.5 h-3.5 text-[#35C84A]" />
            <span>{COMPANY_INFO.email}</span>
          </a>

          <a
            href={COMPANY_INFO.messengerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-[#35C84A] transition-colors whitespace-nowrap"
            title="Message on Facebook Messenger"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#35C84A]" />
            <span className="hidden sm:inline">Messenger:</span>
            <span className="text-white font-medium">{COMPANY_INFO.facebookMessenger}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
