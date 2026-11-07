import React, { useState } from 'react';
import { 
  Building, 
  MapPin, 
  Calendar, 
  Banknote, 
  UserCheck, 
  FileText, 
  Mountain, 
  Layers, 
  CloudRain, 
  GitBranch, 
  Droplets, 
  ShieldCheck, 
  Image as ImageIcon,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { PROJECT_DATA, WORK_BREAKDOWNS } from '../data/projectData';

export const OverviewSection: React.FC = () => {
  const [showOriginalBoard, setShowOriginalBoard] = useState(false);

  // Map icon strings to Lucide components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Mountain': return <Mountain className="w-5 h-5 text-amber-700" />;
      case 'Layers': return <Layers className="w-5 h-5 text-indigo-700" />;
      case 'CloudRain': return <CloudRain className="w-5 h-5 text-blue-700" />;
      case 'GitBranch': return <GitBranch className="w-5 h-5 text-teal-700" />;
      case 'Droplets': return <Droplets className="w-5 h-5 text-cyan-700" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-emerald-700" />;
      default: return <Building className="w-5 h-5 text-blue-700" />;
    }
  };

  return (
    <section id="overview" className="py-12 sm:py-16 bg-white border-b border-slate-200/80 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
              <span>법정 공사안내판 규격 및 세부 공종</span>
              <span aria-hidden="true">·</span>
              <span>종합 사업 안내</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              공사 개요 및 주요 공종
            </h2>
            <p className="text-slate-600 text-sm mt-1 max-w-2xl">
              충남도청 내포신도시의 지속 가능한 도시 환경 조성을 위해 추진되는 본 사업의 공식 법정 공사 개요와 세부 공종별 물량 현황입니다.
            </p>
          </div>

          <button
            onClick={() => setShowOriginalBoard(true)}
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition self-start md:self-end"
          >
            <ImageIcon className="w-4 h-4 text-blue-600" />
            <span>원문 현장 공사안내판 보기</span>
          </button>
        </div>

        {/* Primary Project Details Grid (Clean structured cards) */}
        <div className="bg-slate-50/70 rounded-2xl border border-slate-200 p-6 md:p-8 mb-10 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-1">
              <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-blue-600" /> 공사명 (사업명)
              </span>
              <p className="text-sm font-bold text-slate-900">{PROJECT_DATA.name}</p>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-600" /> 공사 위치
              </span>
              <p className="text-sm font-bold text-slate-900">{PROJECT_DATA.location}</p>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-blue-600" /> 공사 기간
              </span>
              <p className="text-sm font-bold text-slate-900 tabular-nums">
                {PROJECT_DATA.startDate} ~ {PROJECT_DATA.endDate} ({PROJECT_DATA.totalDays}일)
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                <UserCheck className="w-3.5 h-3.5 text-blue-600" /> 발주자 및 공사감독자
              </span>
              <p className="text-sm font-bold text-slate-900">{PROJECT_DATA.client} (감독팀)</p>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-blue-600" /> 시공자 및 현장대리인
              </span>
              <p className="text-sm font-bold text-slate-900">
                {PROJECT_DATA.contractor} <span className="text-slate-600 font-normal">({PROJECT_DATA.siteAgent})</span>
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                <Banknote className="w-3.5 h-3.5 text-blue-600" /> 총 공사금액
              </span>
              <p className="text-sm font-bold text-blue-800 font-mono tabular-nums">{PROJECT_DATA.budget}</p>
            </div>

            <div className="space-y-1 md:col-span-2 lg:col-span-3 pt-4 border-t border-slate-200">
              <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-blue-600" /> 설계자
              </span>
              <p className="text-sm text-slate-800">
                {PROJECT_DATA.designers.join(' · ')}
              </p>
            </div>

            <div className="space-y-1 md:col-span-2 lg:col-span-3 pt-2">
              <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> 사업 목적
              </span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-white p-3.5 rounded-xl border border-slate-200/80">
                {PROJECT_DATA.purpose}
              </p>
            </div>
          </div>
        </div>

        {/* Major Work Breakdown Cards (6 공종) */}
        <div className="mb-4">
          <h3 className="text-lg font-bold text-slate-900 mb-1">
            주요 공종별 상세 시공 내역
          </h3>
          <p className="text-xs text-slate-500">
            현장 설계도서에 명시된 6대 주요 공종의 정밀 물량 및 시공 계획입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {WORK_BREAKDOWNS.map((work, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-xl border border-slate-200 p-5 hover:border-blue-300 hover:shadow-md transition duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="p-2 rounded-lg bg-slate-100">
                    {getIcon(work.icon)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{work.category}</h4>
                    <p className="text-[11px] text-slate-500">{work.description}</p>
                  </div>
                </div>

                <div className="space-y-2 mt-4 pt-3 border-t border-slate-100">
                  {work.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-center justify-between text-xs py-1">
                      <span className="text-slate-600 font-medium">{item.label}</span>
                      <span className="font-mono font-bold text-slate-900 tabular-nums">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-2.5 border-t border-slate-100/70 text-[11px] text-slate-500 flex items-center justify-between">
                <span>품질 기준: KS 및 국토부 표준시방서</span>
                <span className="text-blue-600 font-medium">관리 적합</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Original Construction Board Image Modal */}
      {showOriginalBoard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col">
            <div className="p-4 border-b border-slate-200 flex items-center justify-between">
              <div>
                <h4 className="text-base font-bold text-slate-900">현장 설치 법정 공사개요판 원본</h4>
                <p className="text-xs text-slate-500">충청남도개발공사 공사안내 게시물</p>
              </div>
              <button
                onClick={() => setShowOriginalBoard(false)}
                className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 font-bold transition"
              >
                ✕
              </button>
            </div>
            <div className="p-4 overflow-y-auto flex items-center justify-center bg-slate-100">
              <img
                src="/assets/aistudio/_____ad825256.png"
                alt="공사개요 현장 안내판 원본 이미지"
                className="w-full h-auto max-h-[70vh] object-contain rounded-lg shadow-sm"
              />
            </div>
            <div className="p-3 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 flex justify-between items-center">
              <span>내포신도시 신경리 510-74 현장 출입구 설치판</span>
              <button
                onClick={() => setShowOriginalBoard(false)}
                className="px-4 py-1.5 text-xs font-semibold bg-slate-900 text-white rounded-lg hover:bg-slate-800"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
