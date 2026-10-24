import React, { useState } from 'react';
import {
  Users,
  Award,
  Sparkles,
  Music,
  CheckCircle,
  Send,
  Loader2,
  AlertCircle,
  CheckCircle2,
  Share2
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const ArtistManagementPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    stageName: '',
    email: '',
    phone: '',
    talentCategory: 'Solo Vocalist',
    experienceYears: '1-2 years',
    demoUrl: '',
    bio: '',
    artisticGoals: ''
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successCode, setSuccessCode] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMessage('Please provide your name, email, and contact phone number.');
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
          service: `Ka-Vibez Artist Review — ${formData.talentCategory}`,
          division: 'Ka-Vibez Artist Management',
          experienceLevel: formData.experienceYears,
          message: `Stage Name: ${formData.stageName || 'N/A'} | Demo Link: ${formData.demoUrl || 'None provided'} | Bio: ${formData.bio} | Goals: ${formData.artisticGoals}`
        })
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Failed to submit profile');
      setSuccessCode(data.referenceCode);
    } catch (err: unknown) {
      setErrorMessage(err instanceof Error ? err.message : 'Error submitting profile.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-20 md:space-y-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#C8B6A5]">
          Ka-Vibez Artist Management
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold text-white font-display">
          Talent Representation & Career Guidance
        </h1>
        <p className="text-base text-neutral-300 leading-relaxed">
          Ka-Vibez Artist Management supports aspiring singers, bands, musicians, artists, and performers seeking to develop their artistic identity, cultivate stage presence, and explore genuine industry opportunities.
        </p>
      </div>

      {/* Pillars */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 rounded-2xl bg-[#19191D] border border-[#27272E] space-y-3">
          <Sparkles className="w-6 h-6 text-[#C8B6A5]" />
          <h3 className="text-base font-bold text-white font-display">
            Artistic Identity
          </h3>
          <p className="text-xs text-neutral-300 leading-relaxed">
            Helping you discover your authentic tone, signature sound, and stage visual direction.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#19191D] border border-[#27272E] space-y-3">
          <Award className="w-6 h-6 text-[#C8B6A5]" />
          <h3 className="text-base font-bold text-white font-display">
            Performance Opportunities
          </h3>
          <p className="text-xs text-neutral-300 leading-relaxed">
            Connecting prepared talent with live showcases, private bookings, and company events.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#19191D] border border-[#27272E] space-y-3">
          <Users className="w-6 h-6 text-[#C8B6A5]" />
          <h3 className="text-base font-bold text-white font-display">
            Industry Networking
          </h3>
          <p className="text-xs text-neutral-300 leading-relaxed">
            Building bridges between performers, music producers, directors, and event coordinators.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#19191D] border border-[#27272E] space-y-3">
          <Music className="w-6 h-6 text-[#C8B6A5]" />
          <h3 className="text-base font-bold text-white font-display">
            Repertoire & Demos
          </h3>
          <p className="text-xs text-neutral-300 leading-relaxed">
            Constructive consultation on song selection, demo arrangement, and professional presentation.
          </p>
        </div>
      </section>

      {/* Notice / Disclaimer */}
      <section className="p-6 rounded-xl bg-[#141418] border border-[#27272E] text-xs text-neutral-400 space-y-2">
        <p className="text-white font-semibold flex items-center gap-2">
          <span>Important Professional Guidelines</span>
        </p>
        <p>
          Ka-Vibez Artist Management reviews all submissions individually with integrity and care. In accordance with professional standards, we do not make false promises of guaranteed record contracts, bookings, or instantaneous commercial success. Representation decisions are made based on artistic readiness, commitment, and mutual creative fit.
        </p>
      </section>

      {/* Profile Submission Form */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 space-y-5">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C8B6A5]">
            Artist Profile Intake
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
            Submit Your Artist Portfolio
          </h2>
          <p className="text-sm text-neutral-300 leading-relaxed">
            Tell us about your background, share links to your performances or recorded demos (YouTube, Google Drive, SoundCloud, or social clips), and describe your creative ambitions.
          </p>

          <div className="p-5 rounded-xl bg-[#19191D] border border-[#27272E] space-y-2 text-xs text-neutral-300">
            <p className="text-white font-semibold">Submission Guidelines:</p>
            <ul className="space-y-1 text-neutral-400">
              <li>· High-quality audio or video links are preferred</li>
              <li>· Share both solo or group performances if applicable</li>
              <li>· Demos can be raw phone recordings or studio tracks</li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-7 bg-[#141418] border border-[#27272E] rounded-2xl p-6 sm:p-8">
          {successCode ? (
            <div className="bg-[#19191D] border border-[#C8B6A5]/40 rounded-xl p-8 text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-[#C8B6A5] mx-auto" />
              <h3 className="text-xl font-bold text-white font-display">
                Artist Profile Received
              </h3>
              <p className="text-sm text-neutral-300 max-w-md mx-auto">
                Thank you for sharing your artistry. The Ka-Vibez Artist Management team will review your portfolio and materials.
              </p>
              <div className="bg-[#0B0B0D] p-3 rounded-lg border border-[#27272E] text-xs font-mono text-[#C8B6A5]">
                Reference: {successCode}
              </div>
              <button
                onClick={() => setSuccessCode(null)}
                className="px-4 py-2 rounded-lg bg-[#27272E] hover:bg-[#C8B6A5] hover:text-black text-xs font-medium text-white transition-colors"
              >
                Submit Another Profile
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-lg font-bold text-white font-display mb-1">
                Artist Representation Inquiry
              </h3>
              <p className="text-xs text-neutral-400 mb-4">
                All information is kept strictly confidential for evaluation.
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
                    Legal Name <span className="text-[#35C84A]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Andrea Ramos"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#19191D] border border-[#27272E] text-white text-sm outline-none focus:border-[#C8B6A5]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Stage Name / Band Name (if any)
                  </label>
                  <input
                    type="text"
                    value={formData.stageName}
                    onChange={(e) => setFormData({ ...formData, stageName: e.target.value })}
                    placeholder="e.g. Drea R."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#19191D] border border-[#27272E] text-white text-sm outline-none focus:border-[#C8B6A5]"
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
                    placeholder="artist@gmail.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#19191D] border border-[#27272E] text-white text-sm outline-none focus:border-[#C8B6A5]"
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
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#19191D] border border-[#27272E] text-white text-sm outline-none focus:border-[#C8B6A5]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Primary Artistic Field <span className="text-[#35C84A]">*</span>
                  </label>
                  <select
                    value={formData.talentCategory}
                    onChange={(e) => setFormData({ ...formData, talentCategory: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#19191D] border border-[#27272E] text-white text-sm outline-none focus:border-[#C8B6A5]"
                  >
                    <option value="Solo Vocalist">Solo Vocalist</option>
                    <option value="Band / Group">Band / Musical Group</option>
                    <option value="Instrumentalist (Guitar/Keys/Drums)">Instrumentalist</option>
                    <option value="Dancer / Choreographer">Dancer / Choreographer</option>
                    <option value="Actor / Theater Performer">Actor / Theater Performer</option>
                    <option value="Commercial Model / Talent">Commercial Model / Talent</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Years of Performance Experience
                  </label>
                  <select
                    value={formData.experienceYears}
                    onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#19191D] border border-[#27272E] text-white text-sm outline-none focus:border-[#C8B6A5]"
                  >
                    <option value="Under 1 year">Under 1 year (Aspiring)</option>
                    <option value="1-2 years">1-2 years</option>
                    <option value="3-5 years">3-5 years</option>
                    <option value="5+ years">5+ years (Semi-Professional)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Link to Demo / Video / Social Portfolio
                </label>
                <input
                  type="url"
                  value={formData.demoUrl}
                  onChange={(e) => setFormData({ ...formData, demoUrl: e.target.value })}
                  placeholder="https://youtube.com/... or Google Drive link"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#19191D] border border-[#27272E] text-white text-sm outline-none focus:border-[#C8B6A5]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Short Artist Biography & Career Ambitions <span className="text-[#35C84A]">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  placeholder="Share your musical style, influences, training background, and what you hope to achieve with Ka-Vibez..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#19191D] border border-[#27272E] text-white text-sm outline-none focus:border-[#C8B6A5] resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-lg bg-[#C8B6A5] hover:bg-white text-black font-semibold text-sm tracking-wide transition-colors flex items-center justify-center gap-2"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                <span>Submit Artist Profile for Review</span>
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
