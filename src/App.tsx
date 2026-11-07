import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { OverviewSection } from './components/OverviewSection';
import { BlueprintViewer } from './components/BlueprintViewer';
import { SafetyTrafficSection } from './components/SafetyTrafficSection';
import { ScheduleSection } from './components/ScheduleSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { StandaloneExportModal } from './components/StandaloneExportModal';

export default function App() {
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* 3-Zone Clean Header */}
      <Header onOpenExportModal={() => setIsExportModalOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section: 3D Cute Character & Key Overview */}
        <Hero />

        {/* 2. Construction Overview: Cards for Site, Budget, 6 Major Work Types */}
        <OverviewSection />

        {/* 3. Interactive Blueprint & Schedule Viewer (Zoom, Pan, Highlights) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <BlueprintViewer />
        </div>

        {/* 4. Character Safety Rules & Detour Guidance (Speech Bubble Layout) */}
        <SafetyTrafficSection />

        {/* 5. Comprehensive Scheduled Milestones & S-Curve Progress Timeline */}
        <ScheduleSection />

        {/* 6. Emergency Contacts & Resident Voice Feedback Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Standalone Single File Modal */}
      <StandaloneExportModal 
        isOpen={isExportModalOpen} 
        onClose={() => setIsExportModalOpen(false)} 
      />
    </div>
  );
}
