import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Phone, Mail, Loader2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import { InquirySubmission } from '../types';

interface InquiryFormProps {
  initialService?: string;
  divisionContext?: string;
  onSuccess?: (submission: InquirySubmission) => void;
  formTitle?: string;
  compact?: boolean;
}

const SERVICE_OPTIONS = [
  'Voice & Stage Performance',
  'Singing & Vocal Coaching',
  'Guitar Lessons (Acoustic / Electric)',
  'Keyboard & Piano Lessons',
  'Drum Lessons & Timing',
  'Dance Lessons & Choreography',
  'Acting & Theater Workshops',
  'Vibez Events PH — Concert Production',
  'Vibez Events PH — Corporate Event',
  'Vibez Events PH — Family / Social Celebration',
  'Ka-Vibez Artist Management Inquiry',
  'Vibez Records — Music Recording Session',
  'Vibez Records — Studio Rental',
  'General Inquiry'
];

export const InquiryForm: React.FC<InquiryFormProps> = ({
  initialService = 'Voice & Stage Performance',
  divisionContext,
  onSuccess,
  formTitle,
  compact = false
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: initialService,
    division: divisionContext || 'Talent Development',
    preferredDate: '',
    experienceLevel: 'Beginner',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successResult, setSuccessResult] = useState<{
    referenceCode: string;
    message: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Basic validation
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 7) {
      setErrorMessage('Please enter a valid phone number (e.g., 0915 732 1113).');
      return;
    }
    if (!formData.message.trim()) {
      setErrorMessage('Please provide a brief note about your goals or requirements.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          division: divisionContext || formData.division
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit inquiry. Please try again.');
      }

      setSuccessResult({
        referenceCode: data.referenceCode,
        message: data.message
      });

      if (onSuccess) {
        onSuccess(data.inquiry);
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'A connection error occurred. Please call 0915 732 1113 directly.';
      setErrorMessage(message);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSuccessResult(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: initialService,
      division: divisionContext || 'Talent Development',
      preferredDate: '',
      experienceLevel: 'Beginner',
      message: ''
    });
  };

  if (successResult) {
    return (
      <div className="bg-[#19191D] border border-[#35C84A]/40 rounded-xl p-6 sm:p-8 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
        <div className="w-12 h-12 mx-auto rounded-full bg-[#35C84A]/20 flex items-center justify-center text-[#35C84A]">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="text-xl font-bold text-white font-display">Inquiry Successfully Received</h3>
        <p className="text-sm text-neutral-300 max-w-md mx-auto">
          Thank you, <strong className="text-white">{formData.name}</strong>. Your inquiry has been registered in our system. A Vibez Entertainment coordinator will review program availability and reach out to you directly.
        </p>
        <div className="bg-[#0B0B0D] border border-[#27272E] rounded-lg p-3 inline-block mx-auto text-xs text-neutral-400">
          Tracking Reference Code:{' '}
          <span className="font-mono font-bold text-[#35C84A] text-sm tabular-nums ml-1">
            {successResult.referenceCode}
          </span>
        </div>
        <p className="text-xs text-neutral-400">
          Need an immediate answer? Call us directly at{' '}
          <a href={`tel:${COMPANY_INFO.phoneClean}`} className="text-[#35C84A] font-semibold underline">
            {COMPANY_INFO.phone}
          </a>
        </p>
        <div className="pt-2">
          <button
            onClick={handleReset}
            className="px-4 py-2 rounded-lg bg-[#27272E] hover:bg-[#35C84A] hover:text-black text-neutral-200 text-xs font-medium transition-colors"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {formTitle && (
        <div className="border-b border-[#27272E] pb-3 mb-4">
          <h3 className="text-lg font-bold text-white font-display">{formTitle}</h3>
          <p className="text-xs text-neutral-400 mt-0.5">
            Send us your preferred program or project details. We will contact you with availability.
          </p>
        </div>
      )}

      {errorMessage && (
        <div className="bg-red-950/60 border border-red-500/40 rounded-lg p-3 text-red-200 text-xs flex items-start gap-2">
          <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Row 1: Name & Phone */}
      <div className={`grid ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'} gap-3.5`}>
        <div>
          <label className="block text-xs font-medium text-neutral-300 mb-1">
            Full Name <span className="text-[#35C84A]">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Maria Santos"
            className="w-full px-3.5 py-2.5 rounded-lg bg-[#19191D] border border-[#27272E] focus:border-[#35C84A] focus:ring-1 focus:ring-[#35C84A] text-white text-sm placeholder:text-neutral-500 outline-none transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-neutral-300 mb-1">
            Phone Number <span className="text-[#35C84A]">*</span>
          </label>
          <div className="relative">
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="0915 732 1113"
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#19191D] border border-[#27272E] focus:border-[#35C84A] focus:ring-1 focus:ring-[#35C84A] text-white text-sm placeholder:text-neutral-500 outline-none transition-colors"
            />
            <Phone className="w-4 h-4 text-neutral-500 absolute right-3 top-3 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Row 2: Email & Service */}
      <div className={`grid ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'} gap-3.5`}>
        <div>
          <label className="block text-xs font-medium text-neutral-300 mb-1">
            Email Address <span className="text-[#35C84A]">*</span>
          </label>
          <div className="relative">
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="yourname@gmail.com"
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#19191D] border border-[#27272E] focus:border-[#35C84A] focus:ring-1 focus:ring-[#35C84A] text-white text-sm placeholder:text-neutral-500 outline-none transition-colors"
            />
            <Mail className="w-4 h-4 text-neutral-500 absolute right-3 top-3 pointer-events-none" />
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-neutral-300 mb-1">
            Service or Program <span className="text-[#35C84A]">*</span>
          </label>
          <select
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg bg-[#19191D] border border-[#27272E] focus:border-[#35C84A] focus:ring-1 focus:ring-[#35C84A] text-white text-sm outline-none transition-colors"
          >
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt} value={opt} className="bg-[#19191D] text-white">
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 3: Preferred Date & Experience */}
      <div className={`grid ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'} gap-3.5`}>
        <div>
          <label className="block text-xs font-medium text-neutral-300 mb-1">
            Preferred Schedule / Event Date (Optional)
          </label>
          <input
            type="text"
            value={formData.preferredDate}
            onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
            placeholder="e.g. Weekends / Next Month"
            className="w-full px-3.5 py-2.5 rounded-lg bg-[#19191D] border border-[#27272E] focus:border-[#35C84A] focus:ring-1 focus:ring-[#35C84A] text-white text-sm placeholder:text-neutral-500 outline-none transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-neutral-300 mb-1">
            Current Skill / Project Stage
          </label>
          <select
            value={formData.experienceLevel}
            onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg bg-[#19191D] border border-[#27272E] focus:border-[#35C84A] focus:ring-1 focus:ring-[#35C84A] text-white text-sm outline-none transition-colors"
          >
            <option value="Beginner">Beginner (Zero / Starting Out)</option>
            <option value="Intermediate">Intermediate (Some Experience)</option>
            <option value="Advanced">Advanced / Performing</option>
            <option value="Event Planning">Event Organizer / Corporate</option>
            <option value="Recording Project">Songwriter / Recording Artist</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-medium text-neutral-300 mb-1">
          Tell Us About Your Goals or Event Requirements <span className="text-[#35C84A]">*</span>
        </label>
        <textarea
          required
          rows={compact ? 3 : 4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Describe what you want to achieve, questions about training schedules, event venue ideas, or studio needs..."
          className="w-full px-3.5 py-2.5 rounded-lg bg-[#19191D] border border-[#27272E] focus:border-[#35C84A] focus:ring-1 focus:ring-[#35C84A] text-white text-sm placeholder:text-neutral-500 outline-none transition-colors resize-none"
        />
      </div>

      <div className="pt-1">
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 px-6 rounded-lg bg-[#35C84A] hover:bg-[#168D32] text-black hover:text-white font-semibold text-sm tracking-wide transition-all shadow-md shadow-[#35C84A]/10 active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Submitting to Vibez Team...</span>
            </>
          ) : (
            <>
              <span>Send Inquiry to Vibez Entertainment</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </div>

      <p className="text-[11px] text-neutral-500 text-center">
        Availability and official class schedules are confirmed by our trainers upon review. We do not charge before confirmation.
      </p>
    </form>
  );
};
