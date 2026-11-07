import React from 'react';
import { ShieldCheck, Calendar, MapPin, Building2, HardHat, ArrowRight, Eye, PhoneCall } from 'lucide-react';
import { PROJECT_DATA } from '../data/projectData';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50 border-b border-slate-200/80 pt-8 pb-12 sm:pb-16">
      {/* Decorative background grid subtle overlay */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(#1e40af 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Editorial kicker & title */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Headlines, Summary, and Quick CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
              <span className="text-blue-700 font-bold">충청남도개발공사</span>
              <span aria-hidden="true">·</span>
              <span>내포신도시 개발사업</span>
              <span aria-hidden="true">·</span>
              <span>시민 소통 안내소</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] text-balance">
              내포신도시 RB7조성공사 <br className="hidden sm:inline" />
              <span className="text-blue-700">및 대학1 관리공사</span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
              충남도청(내포) 신도시 체계적 발전과 주민 정주여건 개선을 위한 기반조성 공사가 진행됩니다. 
              시민 여러분의 안전한 통행과 쾌적한 생활 환경을 위해 실시간 공사 도면과 안전 및 도로 우회 안내를 제공합니다.
            </p>

            {/* Project Quick Badges / Meta row (No pill capsules, clean unboxed text) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600 pt-2 border-t border-slate-200">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-900 block">공사 위치</span>
                  <span>{PROJECT_DATA.location}</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Calendar className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-900 block">공사 기간 (총 511일)</span>
                  <span className="tabular-nums">{PROJECT_DATA.startDate} ~ {PROJECT_DATA.endDate}</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Building2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-900 block">발주처 / 시공사</span>
                  <span>{PROJECT_DATA.client} · {PROJECT_DATA.contractor}</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-900 block">현장 안전 목표</span>
                  <span>무재해 100% 달성 및 주민 통행 안전 최우선</span>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#drawings"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition shadow-sm"
              >
                <Eye className="w-4 h-4" />
                <span>현장 도면 확대 뷰어</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </a>
              <a
                href="#safety-traffic"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl transition"
              >
                <HardHat className="w-4 h-4 text-amber-600" />
                <span>안전 수칙 & 도로 우회 안내</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:text-blue-700 transition"
              >
                <PhoneCall className="w-4 h-4 text-slate-500" />
                <span>현장 문의</span>
              </a>
            </div>
          </div>

          {/* Right Column: Cute 3D Construction Character with Speech Bubble (5 cols) */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            {/* Character Speech Bubble */}
            <div className="relative mb-3 bg-white p-4 sm:p-5 rounded-2xl shadow-xl border border-blue-100 max-w-sm text-left">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-bold text-blue-900">현장 안전 마스코트 · 내포 반장</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                “안녕하세요, 주민 여러분! 안전모 꾹 눌러쓰고 도면을 꼼꼼히 살피며 
                <strong> 단 한 건의 사고 없는 명품 신도시</strong>를 만들어가겠습니다. 
                궁금하신 도면과 안전 우회로는 아래에서 바로 확인해보세요!”
              </p>
              {/* Bubble pointer triangle */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-r border-b border-blue-100 rotate-45"></div>
            </div>

            {/* Character Image Showcase Frame */}
            <div className="relative group">
              {/* Soft glow circle behind */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-200/50 via-amber-100/40 to-emerald-100/50 rounded-full blur-2xl opacity-70"></div>

              <div className="relative w-64 sm:w-72 md:w-80 h-auto rounded-3xl bg-white/80 p-2 border border-slate-200/80 shadow-2xl overflow-hidden backdrop-blur">
                <img
                  src="/assets/aistudio/____ef33bd39.jpg"
                  alt="귀여운 3D 현장 안전 마스코트 내포 반장 캐릭터"
                  className="w-full h-auto object-contain rounded-2xl transform transition duration-300 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Float tag bottom */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-slate-900/90 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md whitespace-nowrap border border-slate-700 flex items-center gap-1.5">
                <HardHat className="w-3 h-3 text-amber-400" />
                <span>현장대리인 양기봉 소장 & 안전팀 일동</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metrics / Quantitative Rigor Strip */}
        <div className="mt-12 pt-8 border-t border-slate-200/90 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="space-y-1">
            <span className="text-xs font-medium text-slate-500">총 사업비</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono tabular-nums">
              5,470 <span className="text-sm font-sans font-normal text-slate-600">백만원</span>
            </div>
            <p className="text-[11px] text-slate-500">부지조성 및 기반시설 구축비</p>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-medium text-slate-500">전체 공사 기간 (변경 1회)</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono tabular-nums">
              511 <span className="text-sm font-sans font-normal text-slate-600">일간</span>
            </div>
            <p className="text-[11px] text-slate-500">2026.06.15 ~ 2027.11.07</p>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-medium text-slate-500">총 토공량 (절·성토)</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono tabular-nums">
              133,573 <span className="text-sm font-sans font-normal text-slate-600">㎥</span>
            </div>
            <p className="text-[11px] text-slate-500">절토 90,170㎥ / 성토 43,403㎥</p>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-medium text-slate-500">환경·안전 시설</span>
            <div className="text-base sm:text-lg font-extrabold text-emerald-700 tracking-tight leading-snug">
              대학1: 5개소, RB7: 4개소
              <span className="block text-xs font-semibold text-emerald-800">침사지 (총 9개소)</span>
            </div>
            <p className="text-[11px] text-slate-500">세륜기 1식 · 살수차 상시 운영</p>
          </div>
        </div>
      </div>
    </section>
  );
};
