import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Car, 
  HardHat, 
  Sparkles, 
  AlertTriangle, 
  Compass, 
  CheckCircle, 
  Map, 
  Volume2, 
  Wind, 
  Navigation
} from 'lucide-react';
import { SAFETY_NOTICES } from '../data/projectData';

export const SafetyTrafficSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(SAFETY_NOTICES[0].id);
  const currentNotice = SAFETY_NOTICES.find((n) => n.id === activeTab) || SAFETY_NOTICES[0];

  return (
    <section id="safety-traffic" className="py-12 sm:py-16 bg-slate-50/60 border-b border-slate-200/80 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
              <span>주민 안전 통행 및 환경 관리</span>
              <span aria-hidden="true">·</span>
              <span>내포 반장의 현장 가이드</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              안전 수칙 & 도로 우회 안내
            </h2>
            <p className="text-slate-600 text-sm mt-1 max-w-2xl">
              공사 중 인근 주민 여러분과 보행자의 안전을 지키고, 소음과 먼지를 줄이기 위해 시행 중인 현장 대책입니다.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-xl overflow-x-auto self-start md:self-end shadow-sm">
            {SAFETY_NOTICES.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition ${
                  activeTab === item.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {item.tag}
              </button>
            ))}
          </div>
        </div>

        {/* Character Dialogue & Guidance Layout (Hero Mascot with Large Speech Bubble) */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Cute Character Portrait with Badge (4 cols) */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center">
              <div className="relative group mb-3">
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden bg-gradient-to-b from-blue-50 to-amber-50 p-2 border border-slate-200 shadow-md">
                  <img
                    src="/assets/aistudio/____ef33bd39.jpg"
                    alt="현장 안전 캐릭터 내포 반장"
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>
                <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-[11px] font-bold px-3 py-0.5 rounded-full shadow border border-white flex items-center gap-1 whitespace-nowrap">
                  <HardHat className="w-3 h-3 text-white" />
                  <span>내포 반장의 한마디</span>
                </div>
              </div>
              <h4 className="text-sm font-bold text-slate-900 mt-2">현장 안전 지킴이 · 내포 반장</h4>
              <p className="text-xs text-slate-500">주민 여러분의 안전이 가장 중요합니다!</p>
            </div>

            {/* Right: Speech Bubble & Actionable Checklist (8 cols) */}
            <div className="lg:col-span-8 space-y-5">
              {/* Comic Speech Bubble */}
              <div className="relative bg-blue-50/80 border-2 border-blue-200 rounded-2xl p-5 sm:p-6 text-slate-800 shadow-sm">
                {/* Speech Bubble Arrow pointing left towards character */}
                <div className="hidden lg:block absolute top-1/2 -left-3 -translate-y-1/2 w-4 h-4 bg-blue-50 border-l-2 border-b-2 border-blue-200 rotate-45"></div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  <span className="text-xs font-bold text-blue-900 uppercase">
                    {currentNotice.tag} 중점 안내
                  </span>
                </div>
                <p className="text-base sm:text-lg font-semibold text-slate-900 leading-snug">
                  “{currentNotice.speechBubble}”
                </p>
              </div>

              {/* Notice Title & Summary */}
              <div>
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5 text-blue-600" />
                  {currentNotice.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  {currentNotice.summary}
                </p>
              </div>

              {/* Action Rules Checklist */}
              <div className="space-y-2.5 pt-2">
                {currentNotice.content.map((point, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Visual Road Detour & Safety Map Schematics (Interactive Graphic Card) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Detour Roadmap Guide Card (2 cols) */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Map className="w-5 h-5 text-blue-600" />
                <h4 className="text-base font-bold text-slate-900">
                  현장 연접 도로(중로 1-6호선 및 3-40호선) 임시 우회 동선도
                </h4>
              </div>
              <span className="text-xs text-slate-500 font-mono">구역: RB7-1, RB7-2</span>
            </div>

            {/* Visual Route Scheme Canvas / SVG */}
            <div className="relative bg-slate-900 rounded-xl p-5 text-white overflow-hidden">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-4">
                <div className="flex items-center gap-2 text-xs">
                  <span className="w-3 h-3 rounded bg-blue-500"></span>
                  <span>보행자 안전 통로 (B펜스 보호)</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="w-3 h-3 rounded bg-amber-500"></span>
                  <span>공사차량 전용 출입로 (서행 20km/h)</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="w-3 h-3 rounded bg-rose-500"></span>
                  <span>신호수 2인 상시 배치점</span>
                </div>
              </div>

              {/* Stylized Road Network Diagram */}
              <div className="py-4 px-2 space-y-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-3 bg-slate-800/80 p-3 rounded-lg border border-slate-700">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 text-xs font-mono font-bold">진입 교차로</span>
                    <span className="text-xs font-medium">중로 1-6호선 접속 구간</span>
                  </div>
                  <div className="text-xs text-amber-300 flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                    <span>대형 덤프 회전 구간 · 신호수 유도 대기</span>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-3 bg-slate-800/80 p-3 rounded-lg border border-slate-700">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-xs font-mono font-bold">임시 보행로</span>
                    <span className="text-xs font-medium">RB7 단지 외곽 EGI 펜스 안전로</span>
                  </div>
                  <div className="text-xs text-emerald-300 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>낙하물 방지망 및 보행자 전용 데크 통행</span>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-3 bg-slate-800/80 p-3 rounded-lg border border-slate-700">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-400 text-xs font-mono font-bold">세륜 세차</span>
                    <span className="text-xs font-medium">현장 주게이트 자동 세륜기</span>
                  </div>
                  <div className="text-xs text-purple-300 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>바퀴 세척 100% 완료 후 도로 진출</span>
                  </div>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span>통행 문의: 현장사무소 (041-631-0815)</span>
                <span>보행 우회 권장 거리: 약 60m 우회</span>
              </div>
            </div>
          </div>

          {/* Noise & Dust Real-Time Pledge Card (1 col) */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Wind className="w-5 h-5 text-emerald-600" />
                <h4 className="text-base font-bold text-slate-900">클린 현장 약속</h4>
              </div>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                공사 중 발생하는 비산먼지와 소음을 최소화하여 인근 주민여러분의 일상생활 불편을 막겠습니다.
              </p>

              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-800 mb-1">
                    <span className="flex items-center gap-1.5">
                      <Volume2 className="w-3.5 h-3.5 text-blue-600" /> 작업 시간 엄수
                    </span>
                    <span className="text-blue-700">08:00 ~ 17:30</span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    아침 08시 이전 및 일요일에는 중장비 소음 작업을 금지합니다.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-800 mb-1">
                    <span className="flex items-center gap-1.5">
                      <Wind className="w-3.5 h-3.5 text-emerald-600" /> 살수차 1일 4회
                    </span>
                    <span className="text-emerald-700 font-mono">100% 상시</span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    건조기 및 바람 부는 날에는 추가 살수 작업을 즉시 실시합니다.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-800 mb-1">
                    <span className="flex items-center gap-1.5">
                      <Navigation className="w-3.5 h-3.5 text-indigo-600" /> 차단 펜스 관리
                    </span>
                    <span className="text-indigo-700">EGI 276공판</span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    주거지 인접 구간에 방음 판넬을 유지 보수합니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 text-center">
              <span className="text-xs font-medium text-slate-500">
                주민 불편 즉시 접수 핫라인: <strong>041-631-0815</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
