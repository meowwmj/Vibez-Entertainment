/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { TopContactBar } from './components/TopContactBar';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { InquiryModal } from './components/InquiryModal';
import { InquiryViewerModal } from './components/InquiryViewerModal';
import { HomePage } from './pages/HomePage';
import { TrainingPage } from './pages/TrainingPage';
import { EventsPage } from './pages/EventsPage';
import { ArtistManagementPage } from './pages/ArtistManagementPage';
import { RecordsPage } from './pages/RecordsPage';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { Phone, Calendar, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from './data/content';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedBookingService, setSelectedBookingService] = useState<string | undefined>(
    undefined
  );
  const [inquiriesViewerOpen, setInquiriesViewerOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync hash with page
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = [
        'home',
        'about',
        'training',
        'events',
        'artist-management',
        'recording',
        'gallery',
        'contact'
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Scroll position listener for scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (serviceName?: string) => {
    setSelectedBookingService(serviceName || 'Voice & Stage Performance');
    setBookingModalOpen(true);
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0B0B0D] text-[#F5F5F3] flex flex-col font-sans selection:bg-[#35C84A] selection:text-black">
      {/* Top Contact Strip */}
      <TopContactBar />

      {/* Sticky Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage onNavigate={handleNavigate} onOpenBooking={handleOpenBooking} />
        )}
        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} onOpenBooking={handleOpenBooking} />
        )}
        {currentPage === 'training' && (
          <TrainingPage onOpenBooking={handleOpenBooking} />
        )}
        {currentPage === 'events' && <EventsPage />}
        {currentPage === 'artist-management' && <ArtistManagementPage />}
        {currentPage === 'recording' && <RecordsPage />}
        {currentPage === 'gallery' && (
          <GalleryPage onOpenBooking={handleOpenBooking} />
        )}
        {currentPage === 'contact' && (
          <ContactPage onOpenInquiriesViewer={() => setInquiriesViewerOpen(true)} />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
        onOpenInquiriesViewer={() => setInquiriesViewerOpen(true)}
      />

      {/* Quick Booking Modal */}
      <InquiryModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialService={selectedBookingService}
      />

      {/* Backend Inquiries System Log Viewer */}
      <InquiryViewerModal
        isOpen={inquiriesViewerOpen}
        onClose={() => setInquiriesViewerOpen(false)}
      />

      {/* Floating Scroll-to-Top Button */}
      {showScrollTop && (
        <button
          onClick={handleScrollTop}
          className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-30 p-2.5 rounded-full bg-[#19191D] border border-[#27272E] text-white hover:text-[#35C84A] hover:border-[#35C84A] shadow-xl transition-all"
          aria-label="Scroll to top of page"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Mobile Bottom Quick-Action Strip (Compact, respecting 15% mobile sticky cap) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#0B0B0D]/95 backdrop-blur-md border-t border-[#27272E] px-4 py-2.5 flex items-center justify-between gap-3 shadow-2xl">
        <a
          href={`tel:${COMPANY_INFO.phoneClean}`}
          className="flex-1 py-2 rounded-lg bg-[#19191D] border border-[#27272E] text-white font-medium text-xs flex items-center justify-center gap-1.5"
        >
          <Phone className="w-3.5 h-3.5 text-[#35C84A]" />
          <span>Call Us</span>
        </a>

        <button
          onClick={() => handleOpenBooking()}
          className="flex-1 py-2 rounded-lg bg-[#35C84A] text-black font-semibold text-xs flex items-center justify-center gap-1.5"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Lesson</span>
        </button>
      </div>
    </div>
  );
}
