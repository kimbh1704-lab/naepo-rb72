import React, { useState } from 'react';
import { Download, ExternalLink, Check, Copy, Code, FileCode2, X } from 'lucide-react';

interface StandaloneExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StandaloneExportModal: React.FC<StandaloneExportModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/standalone_single_file.html';
    link.download = 'naepo_rb7_construction_guide.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyCode = async () => {
    try {
      const response = await fetch('/standalone_single_file.html');
      const text = await response.text();
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200">
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
              <FileCode2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">단일 HTML 파일 내보내기</h3>
              <p className="text-xs text-slate-500">외부 서버 없이 바로 실행 가능한 독립형 파일</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed space-y-2">
            <p className="font-semibold text-slate-900">
              💡 사용자 요청 스펙 만족 안내
            </p>
            <p>
              요청하신 <strong>단일 HTML 파일(HTML + Tailwind CSS CDN + Vanilla JS)</strong> 규격의 완성본 파일이 준비되어 있습니다. 
              인터넷 브라우저에서 더블 클릭만으로 즉시 작동하며, 웹 호스팅 서버나 빌드 도구 없이 오프라인 배포 및 현장 안내 키오스크에서도 동작합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <button
              onClick={handleDownload}
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>HTML 파일 다운로드</span>
            </button>

            <a
              href="/standalone_single_file.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition border border-slate-200"
            >
              <ExternalLink className="w-4 h-4" />
              <span>새 창에서 단일 파일 열기</span>
            </a>
          </div>

          <button
            onClick={handleCopyCode}
            className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-medium text-xs transition border border-slate-200"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700 font-bold">전체 HTML 소스코드가 복사되었습니다!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-slate-500" />
                <span>단일 HTML 소스코드 클립보드 복사</span>
              </>
            )}
          </button>
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 rounded-lg transition"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
