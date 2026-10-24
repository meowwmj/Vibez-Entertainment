import React, { useState, useEffect } from 'react';
import { X, RefreshCw, Mail, Phone, Calendar, CheckCircle2 } from 'lucide-react';
import { InquirySubmission } from '../types';

interface InquiryViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InquiryViewerModal: React.FC<InquiryViewerModalProps> = ({ isOpen, onClose }) => {
  const [inquiries, setInquiries] = useState<InquirySubmission[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchInquiries = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/inquiries');
      if (!res.ok) throw new Error('Could not fetch inquiries.');
      const data = await res.json();
      setInquiries(data.inquiries || []);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Error reading from backend');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchInquiries();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-3xl bg-[#0B0B0D] border border-[#27272E] rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-[#27272E] pb-4 mb-4">
          <div>
            <h3 className="text-lg font-bold text-white font-display flex items-center gap-2">
              <span>Verified Inquiries System Log</span>
              <span className="text-xs px-2 py-0.5 rounded bg-[#35C84A]/20 text-[#35C84A] font-mono">
                {inquiries.length} Logged
              </span>
            </h3>
            <p className="text-xs text-neutral-400 mt-0.5">
              Backend persistence for lessons, event bookings, artist reviews, and studio sessions.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={fetchInquiries}
              disabled={loading}
              className="p-2 rounded-lg bg-[#19191D] border border-[#27272E] text-neutral-300 hover:text-white transition-colors"
              title="Refresh log"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-[#19191D] border border-[#27272E] text-neutral-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto space-y-3 pr-1">
          {loading && (
            <div className="text-center py-12 text-neutral-400 text-sm">
              Loading backend submissions...
            </div>
          )}

          {error && (
            <div className="text-center py-8 text-red-400 text-sm">
              {error}
            </div>
          )}

          {!loading && inquiries.length === 0 && (
            <div className="text-center py-12 text-neutral-500 text-sm space-y-2">
              <p>No inquiries submitted yet.</p>
              <p className="text-xs text-neutral-400">
                Submit an inquiry via any form on the site to see it recorded here in real time.
              </p>
            </div>
          )}

          {!loading &&
            inquiries.map((inq) => (
              <div
                key={inq.id || inq.referenceCode}
                className="p-4 rounded-xl bg-[#19191D] border border-[#27272E] space-y-2.5 hover:border-[#35C84A]/30 transition-colors"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-white text-sm">{inq.name}</span>
                    <span className="text-xs text-neutral-500">·</span>
                    <span className="text-xs text-[#35C84A] font-medium">{inq.service}</span>
                  </div>
                  <span className="font-mono text-xs text-[#C8B6A5] tabular-nums bg-[#0B0B0D] px-2 py-0.5 rounded border border-[#27272E]">
                    {inq.referenceCode}
                  </span>
                </div>

                <p className="text-xs text-neutral-300 bg-[#0B0B0D]/60 p-2.5 rounded-lg border border-[#27272E]/60 italic">
                  "{inq.message}"
                </p>

                <div className="flex flex-wrap items-center gap-4 text-[11px] text-neutral-400 pt-1">
                  <div className="flex items-center gap-1">
                    <Phone className="w-3 h-3 text-[#35C84A]" />
                    <span className="tabular-nums">{inq.phone}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Mail className="w-3 h-3 text-[#35C84A]" />
                    <span>{inq.email}</span>
                  </div>
                  {inq.preferredDate && (
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#C8B6A5]" />
                      <span>{inq.preferredDate}</span>
                    </div>
                  )}
                  {inq.submittedAt && (
                    <span className="text-neutral-400 tabular-nums ml-auto">
                      {new Date(inq.submittedAt).toLocaleDateString()} {new Date(inq.submittedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  )}
                </div>
              </div>
            ))}
        </div>

        <div className="pt-4 border-t border-[#27272E] text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#27272E] hover:bg-[#35C84A] hover:text-black text-xs font-semibold text-white transition-colors"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
