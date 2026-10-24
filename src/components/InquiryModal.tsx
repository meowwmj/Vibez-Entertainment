import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { InquiryForm } from './InquiryForm';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  divisionContext?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  initialService,
  divisionContext
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-xl bg-[#0B0B0D] border border-[#27272E] rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-[#19191D] border border-[#27272E] text-neutral-400 hover:text-white transition-colors"
          aria-label="Close Inquiry Dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <InquiryForm
          initialService={initialService || 'Voice & Stage Performance'}
          divisionContext={divisionContext}
          formTitle="Book a Lesson or Inquire"
          compact
        />
      </div>
    </div>
  );
};
