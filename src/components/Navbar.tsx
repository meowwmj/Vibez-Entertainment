import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/content';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenBooking: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenBooking
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'training', label: 'Training' },
    { id: 'events', label: 'Events' },
    { id: 'artist-management', label: 'Artist Management' },
    { id: 'recording', label: 'Recording' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleLinkClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-[#0B0B0D]/95 backdrop-blur-md border-b border-[#27272E] shadow-xl shadow-black/40 py-2.5'
          : 'bg-[#0B0B0D] border-b border-[#1F1F24] py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
        {/* Brand Zone */}
        <button
          onClick={() => handleLinkClick('home')}
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#35C84A] rounded p-0.5 text-left"
          aria-label="Vibez Entertainment Home"
        >
          <BrandLogo size="md" />
        </button>

        {/* Desktop Nav Links */}
        <nav
          className="hidden xl:flex items-center gap-6 2xl:gap-8"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-sm font-medium tracking-wide transition-colors whitespace-nowrap relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#35C84A] rounded ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#35C84A] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Primary Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`tel:${COMPANY_INFO.phoneClean}`}
            className="hidden sm:inline-flex lg:hidden xl:hidden items-center justify-center p-2 rounded-lg bg-[#19191D] text-white hover:text-[#35C84A] border border-[#27272E] transition-colors"
            title="Call 0915 732 1113"
          >
            <Phone className="w-4 h-4 text-[#35C84A]" />
          </a>

          <button
            onClick={() => onOpenBooking('Voice & Stage Performance')}
            className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg bg-[#35C84A] hover:bg-[#168D32] text-black hover:text-white font-semibold text-xs sm:text-sm tracking-wide transition-all shadow-md shadow-[#35C84A]/10 active:scale-[0.98] whitespace-nowrap flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#35C84A]"
          >
            <span>Book a Lesson</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg bg-[#19191D] border border-[#27272E] text-neutral-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#35C84A]"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-[#27272E] bg-[#0B0B0D] px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-left text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#19191D] text-[#35C84A] font-semibold border-l-2 border-[#35C84A]'
                      : 'text-neutral-300 hover:bg-[#19191D] hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="text-xs text-[#35C84A]">Active</span>}
                </button>
              );
            })}
          </nav>

          <div className="mt-5 pt-4 border-t border-[#1F1F24] flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 rounded-lg bg-[#35C84A] text-black font-semibold text-sm tracking-wide text-center"
            >
              Book a Lesson / Inquire Now
            </button>
            <div className="flex items-center justify-between text-xs text-neutral-400 px-1 pt-1">
              <span>Direct Phone:</span>
              <a href={`tel:${COMPANY_INFO.phoneClean}`} className="text-white font-medium hover:text-[#35C84A]">
                {COMPANY_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
