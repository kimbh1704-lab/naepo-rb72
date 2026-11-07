import React from 'react';
import { HardHat } from 'lucide-react';
import { PROJECT_DATA } from '../data/projectData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-slate-800">
          {/* Col 1: Wordmark & Identity */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2 text-white font-extrabold text-base">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span>{PROJECT_DATA.name} 현장안내소</span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-md">
              충청남도개발공사와 주식회사 동아엔텍은 내포신도시 주민 여러분의 안전과 편의를 최우선으로 생각하며 투명한 공사 정보와 안전 지침을 전달합니다.
            </p>
            <div className="text-slate-500 text-[11px] space-y-0.5">
              <p>현장 주소: {PROJECT_DATA.location}</p>
              <p>시공사 현장사무소: 041-631-0815 · 발주처: 041-630-4400</p>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">주요 메뉴</h4>
            <ul className="space-y-1.5">
              <li><a href="#overview" className="hover:text-white transition">공사 개요 및 6대 공종</a></li>
              <li><a href="#drawings" className="hover:text-white transition">현장 도면 뷰어 (RB7·대학1)</a></li>
              <li><a href="#safety-traffic" className="hover:text-white transition">안전 수칙 & 도로 우회 안내</a></li>
              <li><a href="#schedule" className="hover:text-white transition">월별 예정 공정표</a></li>
              <li><a href="#contact" className="hover:text-white transition">비상 연락처 및 주민의견</a></li>
            </ul>
          </div>

          {/* Col 3: Legal & Standards */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">관계 기관</h4>
            <ul className="space-y-1.5 text-slate-400">
              <li>발주: 충청남도개발공사</li>
              <li>시공: 주식회사 동아엔텍</li>
              <li>설계: (주)케이지엔지니어링 / 드림이앤디</li>
              <li>관할: 충청남도 홍성군 홍북읍</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© 2026 충청남도개발공사 & 주식회사 동아엔텍. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span>산업안전보건법 및 건설기술진흥법 준수 현장</span>
            <span aria-hidden="true">·</span>
            <span>무재해 안전 시공</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
