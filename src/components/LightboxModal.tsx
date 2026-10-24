import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Sparkles, Tag } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
  onOpenBooking: (serviceName?: string) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  items,
  onClose,
  onSelect,
  onOpenBooking
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (!item) return;
      const currentIndex = items.findIndex((i) => i.id === item.id);
      if (e.key === 'ArrowRight' && currentIndex < items.length - 1) {
        onSelect(items[currentIndex + 1]);
      } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        onSelect(items[currentIndex - 1]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, items, onClose, onSelect]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < items.length - 1;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative max-w-4xl w-full bg-[#111115] border border-[#27272E] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors border border-white/10"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Visual Showcase Half */}
        <div className="relative md:w-3/5 bg-[#0B0B0D] flex items-center justify-center p-6 min-h-[300px] md:min-h-[460px] border-b md:border-b-0 md:border-r border-[#27272E]">
          {/* Artistic Representation Graphic */}
          <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center relative overflow-hidden rounded-xl border border-[#27272E]/60 bg-gradient-to-br from-[#19191D] via-[#0B0B0D] to-[#168D32]/10">
            {/* Ambient Glow */}
            <div className="absolute -top-16 -left-16 w-48 h-48 rounded-full bg-[#35C84A]/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-[#C8B6A5]/10 blur-3xl pointer-events-none" />

            <div className="w-20 h-20 rounded-2xl bg-[#19191D] border border-[#35C84A]/30 flex items-center justify-center mb-4 shadow-lg text-[#35C84A]">
              <Sparkles className="w-10 h-10" />
            </div>

            <span className="text-xs font-mono uppercase tracking-widest text-[#35C84A] mb-1">
              {item.highlightTag || 'Vibez Archive'}
            </span>
            <h4 className="text-xl font-bold text-white font-display max-w-sm">
              {item.title}
            </h4>

            <div className="mt-4 flex items-center gap-2 text-xs text-neutral-400">
              <Tag className="w-3.5 h-3.5 text-[#C8B6A5]" />
              <span className="capitalize">{item.category} Category</span>
              <span>·</span>
              <span>Verified Session</span>
            </div>
          </div>

          {/* Navigation Arrows */}
          {hasPrev && (
            <button
              onClick={() => onSelect(items[currentIndex - 1])}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 hover:bg-[#35C84A] hover:text-black text-white transition-colors border border-white/10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {hasNext && (
            <button
              onClick={() => onSelect(items[currentIndex + 1])}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 hover:bg-[#35C84A] hover:text-black text-white transition-colors border border-white/10"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Details Half */}
        <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-[#111115]">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs text-neutral-400">
              <span className="px-2.5 py-1 rounded-md bg-[#19191D] border border-[#27272E] text-[#35C84A] font-medium uppercase tracking-wider text-[11px]">
                {item.date}
              </span>
              <span className="tabular-nums">
                {currentIndex + 1} of {items.length}
              </span>
            </div>

            <h3 className="text-xl font-bold text-white font-display leading-tight">
              {item.title}
            </h3>

            <p className="text-sm text-neutral-300 leading-relaxed">
              {item.caption}
            </p>

            <div className="bg-[#19191D] p-3.5 rounded-xl border border-[#27272E] text-xs space-y-1.5 text-neutral-400">
              <div className="text-white font-medium">Production Division</div>
              <div>Vibez Entertainment Studio & Stage Production Unit</div>
              <div className="text-[11px] text-[#C8B6A5]">Official training session & performance record</div>
            </div>
          </div>

          <div className="pt-6 border-t border-[#27272E] space-y-3">
            <button
              onClick={() => {
                onClose();
                onOpenBooking(item.title);
              }}
              className="w-full py-2.5 rounded-lg bg-[#35C84A] hover:bg-[#168D32] text-black hover:text-white font-semibold text-xs tracking-wide transition-colors"
            >
              Inquire About Similar Program
            </button>
            <p className="text-[11px] text-neutral-500 text-center">
              Use arrow keys (← →) or click buttons to navigate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
