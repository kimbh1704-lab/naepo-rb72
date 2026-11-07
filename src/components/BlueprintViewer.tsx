import React, { useState, useRef, useEffect } from 'react';
import { 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Maximize2, 
  Minimize2, 
  Download, 
  FileText, 
  Info, 
  MapPin, 
  Compass, 
  Move
} from 'lucide-react';
import { DRAWINGS, DrawingItem } from '../data/projectData';

interface BlueprintViewerProps {
  initialDrawingId?: string;
}

export const BlueprintViewer: React.FC<BlueprintViewerProps> = ({ initialDrawingId }) => {
  const [selectedId, setSelectedId] = useState<string>(initialDrawingId || DRAWINGS[0].id);
  const [scale, setScale] = useState<number>(1);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showHotspots, setShowHotspots] = useState<boolean>(true);
  const [activeHighlight, setActiveHighlight] = useState<{ label: string; desc: string } | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const currentDrawing: DrawingItem = DRAWINGS.find((d) => d.id === selectedId) || DRAWINGS[0];

  const resetView = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
    setActiveHighlight(null);
  };

  useEffect(() => {
    resetView();
  }, [selectedId]);

  const handleZoom = (delta: number) => {
    setScale((prev) => Math.min(Math.max(0.5, prev + delta), 4.0));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  return (
    <div id="drawings" className="scroll-mt-20">
      {/* Section Header */}
      <div className="mb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
            <span>현장 도면 및 공정표 실시간 뷰어</span>
            <span aria-hidden="true">·</span>
            <span>고해상도 인터랙티브 뷰</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            현장 도면 & 공정표 뷰어
          </h2>
          <p className="text-slate-600 text-sm mt-1 max-w-2xl">
            내포신도시 RB7 블록 및 대학1 관리공사의 세부 평면 배치도와 착공~준공 전체 예정공정표를 확대·축소 및 이동하며 정밀하게 확인하실 수 있습니다.
          </p>
        </div>

        {/* Blueprint Selector Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl overflow-x-auto">
          {DRAWINGS.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-all duration-150 ${
                selectedId === item.id
                  ? 'bg-white text-blue-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>

      {/* Main Viewer Card */}
      <div
        ref={containerRef}
        className={`relative bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-xl transition-all ${
          isFullscreen ? 'fixed inset-0 z-50 rounded-none border-none' : 'h-[620px] w-full'
        }`}
      >
        {/* Top Control Bar inside viewer */}
        <div className="absolute top-0 inset-x-0 z-20 flex items-center justify-between px-4 py-3 bg-gradient-to-b from-slate-950/90 via-slate-950/70 to-transparent backdrop-blur-sm text-white">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <div>
              <h3 className="text-sm font-semibold text-white tracking-tight flex items-center gap-2">
                {currentDrawing.title}
              </h3>
              <p className="text-xs text-slate-400 hidden sm:block">
                {currentDrawing.subtitle}
              </p>
            </div>
          </div>

          {/* Viewer Tools */}
          <div className="flex items-center gap-1 sm:gap-2 bg-slate-900/80 border border-slate-700/60 rounded-xl p-1 backdrop-blur">
            <button
              onClick={() => handleZoom(0.25)}
              className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition"
              title="확대 (Zoom In)"
              aria-label="확대"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleZoom(-0.25)}
              className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition"
              title="축소 (Zoom Out)"
              aria-label="축소"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono text-slate-300 px-2 min-w-[50px] text-center tabular-nums">
              {Math.round(scale * 100)}%
            </span>
            <button
              onClick={resetView}
              className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition"
              title="원래 크기 리셋"
              aria-label="초기화"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <div className="w-[1px] h-4 bg-slate-700 mx-1" />
            <button
              onClick={() => setShowHotspots(!showHotspots)}
              className={`px-2.5 py-1 text-xs rounded-lg transition font-medium flex items-center gap-1.5 ${
                showHotspots
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
              title="주요 지점 핀 토글"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">구역 핀</span>
            </button>
            <button
              onClick={toggleFullscreen}
              className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition"
              title={isFullscreen ? '전체화면 종료' : '전체화면'}
              aria-label="전체화면"
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Blueprint Canvas / Pan-Zoom Area */}
        <div
          className={`w-full h-full flex items-center justify-center select-none overflow-hidden ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div
            className="relative transition-transform duration-75 origin-center"
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
              transformOrigin: 'center center'
            }}
          >
            {/* Blueprint Image */}
            <img
              src={currentDrawing.imageSrc}
              alt={currentDrawing.title}
              className="max-w-none w-[1100px] h-auto object-contain rounded bg-white shadow-2xl pointer-events-none"
              draggable={false}
            />

            {/* Interactive Pins / Highlights */}
            {showHotspots &&
              currentDrawing.highlights.map((pin, idx) => (
                <div
                  key={idx}
                  style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-auto"
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveHighlight({ label: pin.label, desc: pin.desc });
                    }}
                    className="group relative flex items-center justify-center"
                  >
                    <span className="absolute w-6 h-6 rounded-full bg-blue-500/40 animate-ping"></span>
                    <span className="relative flex items-center gap-1.5 px-2.5 py-1 bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-bold rounded-full shadow-lg border border-white/60 transition-transform group-hover:scale-110 whitespace-nowrap shrink-0">
                      <MapPin className="w-3 h-3 text-amber-300 shrink-0" />
                      <span className="whitespace-nowrap">{pin.label}</span>
                    </span>
                  </button>
                </div>
              ))}
          </div>
        </div>

        {/* Floating Controls / Instruction Hint bottom left */}
        <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 bg-slate-900/90 border border-slate-800 text-slate-300 text-xs px-3 py-2 rounded-xl backdrop-blur pointer-events-none shadow-lg">
          <Move className="w-3.5 h-3.5 text-blue-400" />
          <span>마우스 드래그로 이동 · 휠 및 버튼으로 확대</span>
        </div>

        {/* Quick PDF Direct Link bottom right */}
        <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2">
          <a
            href={currentDrawing.pdfSrc}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold rounded-xl backdrop-blur transition shadow-lg"
          >
            <FileText className="w-3.5 h-3.5 text-blue-400" />
            <span>원본 PDF 열기</span>
          </a>
          <a
            href={currentDrawing.imageSrc}
            download={`${currentDrawing.id}.png`}
            className="flex items-center gap-1.5 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl transition shadow-lg"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">도면 다운로드</span>
          </a>
        </div>

        {/* Active Pin Info Popover */}
        {activeHighlight && (
          <div className="absolute top-16 right-4 z-30 max-w-xs bg-slate-900/95 border border-slate-700 text-white p-4 rounded-xl shadow-2xl backdrop-blur">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-amber-400" />
                <h4 className="text-sm font-bold text-white">{activeHighlight.label}</h4>
              </div>
              <button
                onClick={() => setActiveHighlight(null)}
                className="text-slate-400 hover:text-white text-xs p-1"
              >
                ✕
              </button>
            </div>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              {activeHighlight.desc}
            </p>
          </div>
        )}
      </div>

      {/* Blueprint Notes & Explanation below viewer */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-700">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-1">
            <Info className="w-4 h-4 text-blue-600" />
            <span>도면 개요</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            {currentDrawing.description}
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-700">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-1">
            <MapPin className="w-4 h-4 text-emerald-600" />
            <span>주요 확인 지점</span>
          </div>
          <ul className="text-xs text-slate-600 space-y-1">
            {currentDrawing.highlights.map((h, i) => (
              <li key={i} className="flex items-center justify-between">
                <span className="font-medium text-slate-800">{h.label}</span>
                <span className="text-slate-500 truncate max-w-[150px]">{h.desc}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 text-slate-700">
          <div className="flex items-center gap-2 text-xs font-bold text-blue-900 mb-1">
            <FileText className="w-4 h-4 text-blue-600" />
            <span>도면 관리 정보</span>
          </div>
          <div className="text-xs text-slate-600 space-y-1">
            <div className="flex justify-between">
              <span>작성/설계:</span>
              <span className="font-medium text-slate-800">㈜케이지엔지니어링 / 드림이앤디</span>
            </div>
            <div className="flex justify-between">
              <span>승인/발주:</span>
              <span className="font-medium text-slate-800">충청남도개발공사</span>
            </div>
            <div className="flex justify-between">
              <span>시공 관리:</span>
              <span className="font-medium text-slate-800">주식회사 동아엔텍</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
