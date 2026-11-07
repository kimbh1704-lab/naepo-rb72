import React, { useState } from 'react';
import { Calendar, TrendingUp, CheckCircle2, Clock, AlertCircle, BarChart3, ChevronRight } from 'lucide-react';
import { MONTHLY_SCHEDULE, MonthlyScheduleItem } from '../data/projectData';

export const ScheduleSection: React.FC = () => {
  const [selectedMonthIndex, setSelectedMonthIndex] = useState<number>(0);
  const activeItem: MonthlyScheduleItem = MONTHLY_SCHEDULE[selectedMonthIndex];

  return (
    <section id="schedule" className="py-12 sm:py-16 bg-white border-b border-slate-200/80 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
              <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold">변경 1회 승인본</span>
              <span aria-hidden="true">·</span>
              <span>18개월 종합 마일스톤</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              공정 일정 및 단계별 시공 계획 [변경 1회]
            </h2>
            <p className="text-slate-600 text-sm mt-1 max-w-2xl">
              2026년 6월 15일 착공부터 2027년 11월 7일 준공까지의 공정률 곡선(S-Curve)과 월별 중점 관리 공종을 확인하세요.
            </p>
          </div>

          <div className="text-right self-start md:self-end">
            <span className="text-xs font-semibold text-slate-500">전체 목표 공정률</span>
            <div className="text-xl sm:text-2xl font-black text-blue-700 font-mono tabular-nums">
              100.0% <span className="text-xs font-sans font-medium text-slate-600">(총 511일)</span>
            </div>
          </div>
        </div>

        {/* Interactive Month Scroller / Timeline Bar */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-4 sm:p-6 mb-8 shadow-sm">
          <div className="flex items-center justify-between text-xs font-bold text-slate-600 mb-3 px-1">
            <span>월별 추진 단계 선택</span>
            <span className="text-blue-700">선택된 기간: {activeItem.month}</span>
          </div>

          {/* Horizontal Scrubber / Step Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
            {MONTHLY_SCHEDULE.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedMonthIndex(idx)}
                className={`flex-shrink-0 px-3.5 py-2.5 rounded-xl border text-left transition-all ${
                  selectedMonthIndex === idx
                    ? 'bg-blue-600 border-blue-600 text-white shadow-md scale-[1.02]'
                    : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-100'
                }`}
              >
                <span className={`text-[11px] block font-mono font-semibold ${selectedMonthIndex === idx ? 'text-blue-100' : 'text-slate-400'}`}>
                  {item.month}
                </span>
                <span className="text-xs font-bold whitespace-nowrap block mt-0.5">
                  {item.phase}
                </span>
                <span className={`text-[11px] font-mono block mt-1 ${selectedMonthIndex === idx ? 'text-blue-200' : 'text-blue-600'}`}>
                  누계 {item.planProgress}%
                </span>
              </button>
            ))}
          </div>

          {/* Cumulative Progress Bar for Current Month */}
          <div className="mt-5 pt-4 border-t border-slate-200">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-1.5">
              <span>{activeItem.month} 누적 계획 공정률 (S-Curve)</span>
              <span className="font-mono text-blue-700 font-bold">{activeItem.planProgress}%</span>
            </div>
            <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transition-all duration-500"
                style={{ width: `${Math.min(100, activeItem.planProgress)}%` }}
              />
            </div>
          </div>
        </div>

        {/* Selected Month Detail Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Phase Details (7 cols) */}
          <div className="md:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
              <div>
                <span className="text-xs font-bold text-blue-700 font-mono">{activeItem.month} 주요 작업</span>
                <h3 className="text-lg font-bold text-slate-900 mt-0.5">{activeItem.phase}</h3>
              </div>
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-blue-50 text-blue-700 border border-blue-200">
                당월 진척도 +{activeItem.monthlyProgress}%
              </span>
            </div>

            <h4 className="text-xs font-bold text-slate-500 mb-3 uppercase tracking-wider">
              당월 핵심 시공 항목
            </h4>
            <div className="space-y-2.5">
              {activeItem.mainWorks.map((work, wIdx) => (
                <div key={wIdx} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{work}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-900">
              <div className="flex items-center gap-2 font-bold mb-1">
                <AlertCircle className="w-4 h-4 text-amber-600" />
                <span>당월 중점 안전·환경 관리 방침</span>
              </div>
              <p className="text-amber-800 leading-relaxed font-medium">
                {activeItem.safetyFocus}
              </p>
            </div>
          </div>

          {/* S-Curve Overview & Quality Checkpoint (5 cols) */}
          <div className="md:col-span-5 bg-slate-50 rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <BarChart3 className="w-5 h-5 text-indigo-600" />
                <h4 className="text-base font-bold text-slate-900">공정 관리 체계</h4>
              </div>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                공정표는 기상 여건 및 현장 품질 검측 기준에 맞추어 주간 및 월간 단위로 정밀 업데이트되며, 발주처 공사감독관의 최종 검수를 거칩니다.
              </p>

              <div className="space-y-2 text-xs">
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <span className="text-slate-500 block text-[11px]">1단계: 대토공 집중기 (2026.06~10)</span>
                  <span className="font-bold text-slate-800">대학1 흙깎기(15.4만㎥), RB7 덤프운반, 침사지 1단계(8개소) 설치 (누계 45.0%)</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <span className="text-slate-500 block text-[11px]">2단계: 외부토 반입 & 관로공 (2026.11~2027.02)</span>
                  <span className="font-bold text-slate-800">대학1 성토(17.6만㎥), 내포 3-13 우회과로 착수, 침사지 2단계 착수 (누계 72.0%)</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <span className="text-slate-500 block text-[11px]">3단계: 관로 완공 & 본선 아스콘 포장 (2027.03~11)</span>
                  <span className="font-bold text-slate-800">우수·오수·상수도 지중 관로, 침사지 2단계(9개소), 아스콘 및 보도블록 포장 (100.0%)</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-200 text-center">
              <a
                href="#drawings"
                className="text-xs font-semibold text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
              >
                <span>예정공정표 원본 시트 도면뷰어로 보기</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
