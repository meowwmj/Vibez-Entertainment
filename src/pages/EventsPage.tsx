import React, { useState } from 'react';
import {
  Calendar,
  Sparkles,
  Music,
  Users,
  CheckCircle,
  Clock,
  Send,
  Loader2,
  AlertCircle,
  CheckCircle2
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const EventsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: 'Concert & Live Performance',
    targetDate: '',
    location: '',
    expectedGuests: '',
    requirements: ''
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successCode, setSuccessCode] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMessage('Please fill in your name, email, and contact phone number.');
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
          service: `Vibez Events PH — ${formData.eventType}`,
          division: 'Vibez Events PH',
          preferredDate: formData.targetDate,
          message: `Location: ${formData.location || 'TBD'} | Guests: ${formData.expectedGuests || 'TBD'} | Details: ${formData.requirements}`
        })
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit event inquiry');
      }

      setSuccessCode(data.referenceCode);
    } catch (err: unknown) {
      setErrorMessage(err instanceof Error ? err.message : 'Error submitting event inquiry.');
    } finally {
      setLoading(false);
    }
  };

  const eventTypes = [
    {
      title: 'Concerts & Live Shows',
      desc: 'Full-stage coordination, audio engineering, live performers, lighting choreography, and crowd management.'
    },
    {
      title: 'Corporate Events & Galas',
      desc: 'Annual conferences, company anniversaries, product launches, brand activations, and formal dinners.'
    },
    {
      title: 'Family & Milestones',
      desc: 'Weddings, debuts, anniversary milestones, and private family celebrations with tailored entertainment.'
    },
    {
      title: 'Social & Community Events',
      desc: 'Festivals, talent showcases, charity balls, and public entertainment gatherings.'
    }
  ];

  return (
    <div className="space-y-20 md:space-y-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      {/* Hero Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#35C84A]">
          Events Management Division
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold text-white font-display">
          Vibez Events PH
        </h1>
        <p className="text-base text-neutral-300 leading-relaxed">
          From concerts and live performances to corporate galas and family milestones, Vibez Events PH is your creative partner. We guide the complete process: conceptualization, production planning, audio-visual management, stage direction, and on-site coordination.
        </p>
      </div>

      {/* Event Categories */}
      <section className="space-y-8">
        <div className="border-b border-[#27272E] pb-3">
          <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
            Event Management Capabilities
          </h2>
          <p className="text-xs text-neutral-400 mt-1">
            Tailored staging and professional management for gatherings of all scales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {eventTypes.map((et) => (
            <div
              key={et.title}
              className="p-6 rounded-2xl bg-[#19191D] border border-[#27272E] space-y-3 hover:border-[#35C84A]/40 transition-colors"
            >
              <Calendar className="w-5 h-5 text-[#35C84A]" />
              <h3 className="text-base font-bold text-white font-display">
                {et.title}
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                {et.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Production Cycle */}
      <section className="rounded-2xl bg-[#141418] border border-[#27272E] p-8 lg:p-12 space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#35C84A]">
            End-To-End Execution
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
            How We Manage Your Event
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-4 rounded-xl bg-[#19191D] border border-[#27272E] space-y-2">
            <span className="text-xs font-mono text-[#35C84A]">Phase 01</span>
            <h4 className="text-sm font-bold text-white">Event Conceptualization</h4>
            <p className="text-xs text-neutral-400">
              Theming, creative direction, program structure, and entertainment line-up curation.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#19191D] border border-[#27272E] space-y-2">
            <span className="text-xs font-mono text-[#35C84A]">Phase 02</span>
            <h4 className="text-sm font-bold text-white">Pre-Event Preparation</h4>
            <p className="text-xs text-neutral-400">
              Technical riders, staging logistics, performer rehearsals, and vendor alignment.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#19191D] border border-[#27272E] space-y-2">
            <span className="text-xs font-mono text-[#35C84A]">Phase 03</span>
            <h4 className="text-sm font-bold text-white">Production Management</h4>
            <p className="text-xs text-neutral-400">
              Live cueing, sound and lighting engineering, stage management, and artist hospitality.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#19191D] border border-[#27272E] space-y-2">
            <span className="text-xs font-mono text-[#35C84A]">Phase 04</span>
            <h4 className="text-sm font-bold text-white">Post-Event Wrap-up</h4>
            <p className="text-xs text-neutral-400">
              Orderly egress, technical breakdown, media handover, and client debrief.
            </p>
          </div>
        </div>
      </section>

      {/* Event Inquiry Form */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 space-y-5">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#35C84A]">
            Inquire for Your Date
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
            Plan Your Event With Vibez Events PH
          </h2>
          <p className="text-sm text-neutral-300 leading-relaxed">
            Share your envisioned date, venue preference, and production requirements. Our event directors will respond with conceptual options and logistical scheduling.
          </p>

          <div className="p-5 rounded-xl bg-[#19191D] border border-[#27272E] space-y-3 text-xs text-neutral-300">
            <div className="font-semibold text-white">Event Inquiries Hotlines:</div>
            <p>
              Phone: <a href={`tel:${COMPANY_INFO.phoneClean}`} className="text-[#35C84A] font-semibold">{COMPANY_INFO.phone}</a>
            </p>
            <p>
              Email: <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#35C84A]">{COMPANY_INFO.email}</a>
            </p>
            <p>
              Facebook: <span className="text-white font-medium">{COMPANY_INFO.facebookMessenger}</span>
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 bg-[#141418] border border-[#27272E] rounded-2xl p-6 sm:p-8">
          {successCode ? (
            <div className="bg-[#19191D] border border-[#35C84A]/40 rounded-xl p-8 text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-[#35C84A] mx-auto" />
              <h3 className="text-xl font-bold text-white font-display">
                Event Inquiry Received
              </h3>
              <p className="text-sm text-neutral-300 max-w-md mx-auto">
                Thank you! Our Vibez Events PH production team will review your specifications and contact you to discuss scheduling and logistics.
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
                Event Coordination Request
              </h3>
              <p className="text-xs text-neutral-400 mb-4">
                Fill out the details below to receive a custom discussion proposal.
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
                    Contact Name / Company <span className="text-[#35C84A]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe / Apex Corp"
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
                    placeholder="contact@company.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#19191D] border border-[#27272E] text-white text-sm outline-none focus:border-[#35C84A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Event Type <span className="text-[#35C84A]">*</span>
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#19191D] border border-[#27272E] text-white text-sm outline-none focus:border-[#35C84A]"
                  >
                    <option value="Concert & Live Performance">Concert & Live Performance</option>
                    <option value="Corporate Event / Gala">Corporate Event / Gala</option>
                    <option value="Family / Milestone Celebration">Family / Milestone Celebration</option>
                    <option value="Festival / Community Show">Festival / Community Show</option>
                    <option value="Audio/Lighting Production Only">Audio/Lighting Production Only</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Target Date
                  </label>
                  <input
                    type="text"
                    value={formData.targetDate}
                    onChange={(e) => setFormData({ ...formData, targetDate: e.target.value })}
                    placeholder="e.g. Nov 15, 2026"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#19191D] border border-[#27272E] text-white text-sm outline-none focus:border-[#35C84A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Venue / City
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Quezon City / Manila"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#19191D] border border-[#27272E] text-white text-sm outline-none focus:border-[#35C84A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Est. Guest Count
                  </label>
                  <input
                    type="text"
                    value={formData.expectedGuests}
                    onChange={(e) => setFormData({ ...formData, expectedGuests: e.target.value })}
                    placeholder="e.g. 150-300 pax"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#19191D] border border-[#27272E] text-white text-sm outline-none focus:border-[#35C84A]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Event Vision & Production Requirements <span className="text-[#35C84A]">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  placeholder="Describe your event theme, required sound/lights, artist bookings, stage needs..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#19191D] border border-[#27272E] text-white text-sm outline-none focus:border-[#35C84A] resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-lg bg-[#35C84A] hover:bg-[#168D32] text-black hover:text-white font-semibold text-sm tracking-wide transition-colors flex items-center justify-center gap-2"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                <span>Submit Event Coordination Inquiry</span>
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
