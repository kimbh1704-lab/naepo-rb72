import React from 'react';
import { Download } from 'lucide-react';

interface HeaderProps {
  onOpenExportModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenExportModal }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 py-3.5">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          className="text-base sm:text-lg font-extrabold tracking-tight text-slate-900 whitespace-nowrap shrink-0 flex items-center gap-2 hover:text-blue-700 transition-colors"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
          <span>내포신도시 RB7 현장안내소</span>
        </a>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold text-slate-600">
          <a href="#overview" className="hover:text-blue-700 transition-colors whitespace-nowrap shrink-0 py-1">
            공사 개요
          </a>
          <a href="#drawings" className="hover:text-blue-700 transition-colors whitespace-nowrap shrink-0 py-1">
            도면 뷰어
          </a>
          <a href="#safety-traffic" className="hover:text-blue-700 transition-colors whitespace-nowrap shrink-0 py-1">
            안전·우회 안내
          </a>
          <a href="#schedule" className="hover:text-blue-700 transition-colors whitespace-nowrap shrink-0 py-1">
            공정 현황
          </a>
          <a href="#contact" className="hover:text-blue-700 transition-colors whitespace-nowrap shrink-0 py-1">
            비상 연락처
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenExportModal}
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>단일 파일 저장</span>
          </button>
        </div>
      </div>
    </header>
  );
};
