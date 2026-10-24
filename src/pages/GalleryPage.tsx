import React, { useState } from 'react';
import { Sparkles, Tag, Eye, Filter } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/content';
import { GalleryItem } from '../types';
import { LightboxModal } from '../components/LightboxModal';

interface GalleryPageProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Highlights' },
    { id: 'training', label: 'Training & Workshops' },
    { id: 'events', label: 'Concerts & Events' },
    { id: 'recording', label: 'Recording Sessions' },
    { id: 'talent', label: 'Artists & Talent' }
  ];

  const filteredItems =
    activeCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="space-y-16 md:space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#35C84A]">
          Visual Archives & Productions
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold text-white font-display">
          Gallery & Our Work
        </h1>
        <p className="text-base text-neutral-300 leading-relaxed">
          Explore authentic highlights across voice coaching sessions, instrument workshops, stage productions, artist rehearsals, and Vibez Records studio tracking.
        </p>
      </div>

      {/* Category Filter Bar */}
      <div className="flex flex-wrap items-center gap-2 border-b border-[#27272E] pb-4">
        <div className="flex items-center gap-1.5 text-xs text-neutral-500 mr-2">
          <Filter className="w-3.5 h-3.5" />
          <span>Filter:</span>
        </div>
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#35C84A] ${
                isActive
                  ? 'bg-[#35C84A] text-black font-semibold shadow-sm'
                  : 'bg-[#19191D] border border-[#27272E] text-neutral-300 hover:text-white hover:border-neutral-500'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Gallery Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="cursor-pointer group rounded-2xl bg-[#19191D] border border-[#27272E] overflow-hidden hover:border-[#35C84A]/50 transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between"
          >
            {/* Visual Card Top */}
            <div className="relative h-48 bg-gradient-to-br from-[#27272E] via-[#141418] to-[#0B0B0D] p-5 flex flex-col justify-between overflow-hidden border-b border-[#27272E]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#35C84A]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#35C84A]/20 transition-colors" />

              <div className="flex items-center justify-between relative z-10">
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-black/60 text-[#35C84A] border border-white/10">
                  {item.highlightTag}
                </span>
                <span className="text-[11px] text-neutral-400">
                  {item.date}
                </span>
              </div>

              <div className="relative z-10 flex items-center justify-between">
                <div className="p-2 rounded-lg bg-black/50 text-[#C8B6A5] border border-white/10">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-[11px] font-medium text-white bg-black/70 px-2.5 py-1 rounded-md border border-white/10">
                  <Eye className="w-3.5 h-3.5 text-[#35C84A]" />
                  <span>Inspect</span>
                </div>
              </div>
            </div>

            {/* Content Bottom */}
            <div className="p-5 space-y-2.5">
              <h3 className="text-base font-bold text-white font-display group-hover:text-[#35C84A] transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed line-clamp-2">
                {item.caption}
              </p>
              <div className="pt-2 text-[11px] text-[#C8B6A5] flex items-center gap-1.5">
                <Tag className="w-3 h-3 text-[#35C84A]" />
                <span className="capitalize">{item.category}</span>
                <span>·</span>
                <span>Vibez Entertainment Archive</span>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        item={selectedItem}
        items={filteredItems}
        onClose={() => setSelectedItem(null)}
        onSelect={(newItem) => setSelectedItem(newItem)}
        onOpenBooking={onOpenBooking}
      />
    </div>
  );
};
