import React, { useState } from 'react';
import {
  Disc,
  Mic,
  Sliders,
  Volume2,
  CheckCircle,
  Clock,
  Send,
  Loader2,
  AlertCircle,
  CheckCircle2
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const RecordsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    sessionType: 'Vocal Recording Session',
    targetHours: '2-4 hours',
    preferredDate: '',
    projectDescription: ''
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successCode, setSuccessCode] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMessage('Please provide your name, email, and phone number.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: `Vibez Records — ${formData.sessionType}`,
          division: 'Vibez Records',
          preferredDate: formData.preferredDate,
          message: `Estimated Duration: ${formData.targetHours} | Project Notes: ${formData.projectDescription}`
        })
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Failed to submit studio request');
      setSuccessCode(data.referenceCode);
    } catch (err: unknown) {
      setErrorMessage(err instanceof Error ? err.message : 'Error submitting studio request.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-20 md:space-y-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#35C84A]">
          Music Production & Audio Engineering
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold text-white font-display">
          Vibez Records
        </h1>
        <p className="text-base text-neutral-300 leading-relaxed">
          Vibez Records caters to recording and music production projects. Whether you are cutting your first vocal demo, tracking acoustic instruments, arranging a full song, or renting studio time, connect with our production team to discuss your creative project.
        </p>
        <p className="text-xs text-[#C8B6A5] italic">
          * Studio rental, rates, equipment specs, and session engineers are scheduled upon inquiry.
        </p>
      </div>

      {/* Services List */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-[#19191D] border border-[#27272E] space-y-3 hover:border-[#35C84A]/40 transition-colors">
          <Mic className="w-6 h-6 text-[#35C84A]" />
          <h3 className="text-lg font-bold text-white font-display">
            Vocal & Instrument Tracking
          </h3>
          <p className="text-xs text-neutral-300 leading-relaxed">
            Clean condenser microphone capture for solo vocalists, duets, acoustic guitar, keyboards, and voiceovers with dedicated headphone monitoring.
          </p>
          <ul className="space-y-1.5 pt-2 text-xs text-neutral-400">
            <li className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-[#35C84A]" />
              <span>Multi-take tracking & vocal comping</span>
            </li>
            <li className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-[#35C84A]" />
              <span>Dedicated acoustically treated booth</span>
            </li>
          </ul>
        </div>

        <div className="p-6 rounded-2xl bg-[#19191D] border border-[#27272E] space-y-3 hover:border-[#35C84A]/40 transition-colors">
          <Sliders className="w-6 h-6 text-[#C8B6A5]" />
          <h3 className="text-lg font-bold text-white font-display">
            Music Production & Mixing
          </h3>
          <p className="text-xs text-neutral-300 leading-relaxed">
            Collaborate on full track arrangements, rhythm programming, instrumental layering, balancing, and delivery tailored for digital distribution.
          </p>
          <ul className="space-y-1.5 pt-2 text-xs text-neutral-400">
            <li className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-[#C8B6A5]" />
              <span>Arrangement & beat production</span>
            </li>
            <li className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-[#C8B6A5]" />
              <span>EQ, compression & spatial stereo balance</span>
            </li>
          </ul>
        </div>

        <div className="p-6 rounded-2xl bg-[#19191D] border border-[#27272E] space-y-3 hover:border-[#35C84A]/40 transition-colors">
          <Clock className="w-6 h-6 text-[#35C84A]" />
          <h3 className="text-lg font-bold text-white font-display">
            Studio Space Rental
          </h3>
          <p className="text-xs text-neutral-300 leading-relaxed">
            Rent our studio by block hours for rehearsals, self-directed podcast recordings, audio content creation, or private session work.
          </p>
          <ul className="space-y-1.5 pt-2 text-xs text-neutral-400">
            <li className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-[#35C84A]" />
              <span>Hourly and block schedule booking</span>
            </li>
            <li className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-[#35C84A]" />
              <span>Assisting sound engineer on request</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Studio Workflow */}
      <section className="rounded-2xl bg-[#141418] border border-[#27272E] p-8 lg:p-12 space-y-6">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#35C84A]">
            Production Standards
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
            Your Session at Vibez Records
          </h2>
          <p className="text-xs text-neutral-300">
            Every session is treated with technical discipline and artistic patience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-4 rounded-xl bg-[#19191D] border border-[#27272E] space-y-2">
            <span className="text-xs font-mono text-[#35C84A]">Step 01</span>
            <h4 className="text-sm font-bold text-white">Project Consultation</h4>
            <p className="text-xs text-neutral-400">
              Review guide tracks, lyrics, key adjustments, and target release specifications.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#19191D] border border-[#27272E] space-y-2">
            <span className="text-xs font-mono text-[#35C84A]">Step 02</span>
            <h4 className="text-sm font-bold text-white">Recording Phase</h4>
            <p className="text-xs text-neutral-400">
              Warm-up, level balancing, clean vocal takes, harmonies, and instrument overdubs.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#19191D] border border-[#27272E] space-y-2">
            <span className="text-xs font-mono text-[#35C84A]">Step 03</span>
            <h4 className="text-sm font-bold text-white">Bounce & Delivery</h4>
            <p className="text-xs text-neutral-400">
              High-resolution WAV/MP3 stereo bounces and stems packaged for distribution.
            </p>
          </div>
        </div>
      </section>

      {/* Recording Inquiry Form */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 space-y-5">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#35C84A]">
            Book Session Time
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
            Inquire About Recording or Studio Rental
          </h2>
          <p className="text-sm text-neutral-300 leading-relaxed">
            Contact Vibez Records to discuss your upcoming single, EP, podcast, or studio rental block. We will follow up with rates and open calendar dates.
          </p>

          <div className="p-5 rounded-xl bg-[#19191D] border border-[#27272E] space-y-3 text-xs text-neutral-300">
            <p className="text-white font-semibold">Direct Studio Contacts:</p>
            <p>
              Phone: <a href={`tel:${COMPANY_INFO.phoneClean}`} className="text-[#35C84A] font-semibold">{COMPANY_INFO.phone}</a>
            </p>
            <p>
              Email: <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#35C84A]">{COMPANY_INFO.email}</a>
            </p>
            <p>
              Messenger: <span className="text-white font-medium">{COMPANY_INFO.facebookMessenger}</span>
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 bg-[#141418] border border-[#27272E] rounded-2xl p-6 sm:p-8">
          {successCode ? (
            <div className="bg-[#19191D] border border-[#35C84A]/40 rounded-xl p-8 text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-[#35C84A] mx-auto" />
              <h3 className="text-xl font-bold text-white font-display">
                Studio Request Received
              </h3>
              <p className="text-sm text-neutral-300 max-w-md mx-auto">
                Thank you! Our studio engineer will check schedule openings for your requested project.
              </p>
              <div className="bg-[#0B0B0D] p-3 rounded-lg border border-[#27272E] text-xs font-mono text-[#35C84A]">
                Reference: {successCode}
              </div>
              <button
                onClick={() => setSuccessCode(null)}
                className="px-4 py-2 rounded-lg bg-[#27272E] hover:bg-[#35C84A] hover:text-black text-xs font-medium text-white transition-colors"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-lg font-bold text-white font-display mb-1">
                Studio Project Inquiry
              </h3>
              <p className="text-xs text-neutral-400 mb-4">
                Share your requirements to receive availability and studio rate info.
              </p>

              {errorMessage && (
                <div className="p-3 bg-red-950/60 border border-red-500/40 rounded-lg text-xs text-red-200 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Your Name / Artist Name <span className="text-[#35C84A]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Leo Santos"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#19191D] border border-[#27272E] text-white text-sm outline-none focus:border-[#35C84A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Contact Phone <span className="text-[#35C84A]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="0915 732 1113"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#19191D] border border-[#27272E] text-white text-sm outline-none focus:border-[#35C84A]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Email Address <span className="text-[#35C84A]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="contact@email.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#19191D] border border-[#27272E] text-white text-sm outline-none focus:border-[#35C84A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Session Service Type <span className="text-[#35C84A]">*</span>
                  </label>
                  <select
                    value={formData.sessionType}
                    onChange={(e) => setFormData({ ...formData, sessionType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#19191D] border border-[#27272E] text-white text-sm outline-none focus:border-[#35C84A]"
                  >
                    <option value="Vocal Recording Session">Vocal Recording Session</option>
                    <option value="Full Song Production & Arrangement">Full Song Production & Arrangement</option>
                    <option value="Studio Space Rental (Rehearsal/Podcast)">Studio Space Rental</option>
                    <option value="Audio Mixing & Mastering Consultation">Audio Mixing & Mastering</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Estimated Duration Needed
                  </label>
                  <select
                    value={formData.targetHours}
                    onChange={(e) => setFormData({ ...formData, targetHours: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#19191D] border border-[#27272E] text-white text-sm outline-none focus:border-[#35C84A]"
                  >
                    <option value="2-3 hours">2-3 hours</option>
                    <option value="Half-Day (4-5 hours)">Half-Day (4-5 hours)</option>
                    <option value="Full-Day (8 hours)">Full-Day (8 hours)</option>
                    <option value="Multi-Day Project">Multi-Day Project</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Preferred Session Date
                  </label>
                  <input
                    type="text"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    placeholder="e.g. Next Saturday morning"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#19191D] border border-[#27272E] text-white text-sm outline-none focus:border-[#35C84A]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Project Notes & Musical Background <span className="text-[#35C84A]">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.projectDescription}
                  onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                  placeholder="Describe your song, instrument requirements, backing track availability, or special studio needs..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#19191D] border border-[#27272E] text-white text-sm outline-none focus:border-[#35C84A] resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-lg bg-[#35C84A] hover:bg-[#168D32] text-black hover:text-white font-semibold text-sm tracking-wide transition-colors flex items-center justify-center gap-2"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                <span>Send Studio Inquiry</span>
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
