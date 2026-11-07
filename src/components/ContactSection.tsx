import React, { useState } from 'react';
import { 
  Phone, 
  Building, 
  HardHat, 
  Send, 
  CheckCircle, 
  AlertCircle, 
  MessageSquare, 
  Clock, 
  MapPin, 
  ShieldAlert 
} from 'lucide-react';
import { SITE_CONTACTS, PROJECT_DATA } from '../data/projectData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: 'traffic',
    content: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.content.trim()) {
      setErrorMsg('성함, 연락처 및 건의 내용을 모두 입력해 주세요.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  const resetForm = () => {
    setFormData({ name: '', phone: '', category: 'traffic', content: '' });
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 bg-slate-50/70 border-b border-slate-200/80 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
              <span>상시 소통 및 긴급 재난 안전망</span>
              <span aria-hidden="true">·</span>
              <span>현장 비상 연락 체계</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              비상 연락망 & 주민 소통 창구
            </h2>
            <p className="text-slate-600 text-sm mt-1 max-w-2xl">
              현장 인근 통행 불편, 비산먼지·소음 민원 및 안전 위험 요소를 발견하시면 즉시 현장사무소나 온라인 소통창구로 알려주시기 바랍니다.
            </p>
          </div>

          <div className="text-xs text-slate-500 self-start md:self-end flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200">
            <Clock className="w-3.5 h-3.5 text-blue-600" />
            <span>현장 민원실 운영시간: 평일 08:00 ~ 18:00</span>
          </div>
        </div>

        {/* 4 Emergency Contacts Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {SITE_CONTACTS.map((contact, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:border-blue-300 transition flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold text-blue-700 tracking-wide uppercase block mb-1">
                  {contact.role}
                </span>
                <h4 className="text-base font-bold text-slate-900">{contact.org}</h4>
                <p className="text-xs text-slate-500 mt-0.5">{contact.department}</p>
                <p className="text-xs text-slate-700 font-medium mt-1">{contact.person}</p>
                <p className="text-[11px] text-slate-500 mt-2 bg-slate-50 p-2 rounded-lg leading-relaxed">
                  {contact.workDesc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100">
                <a
                  href={`tel:${contact.phone}`}
                  className="flex items-center justify-center gap-2 w-full py-2 px-3 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold text-xs transition"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span className="font-mono">{contact.phone}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Inquiry & Suggestion Form */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left explanation column (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-bold text-slate-900">주민 불편사항 & 안전 의견 접수</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                시민 여러분께서 남겨주시는 건의사항은 <strong>현장대리인 양기봉 소장</strong>과 <strong>충청남도개발공사 감독관</strong>에게 직통으로 전달되어 24시간 이내에 현장 확인 및 신속한 조치가 이뤄집니다.
              </p>

              <div className="space-y-2.5 pt-2 text-xs text-slate-600">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>현장사무소 위치: 충청남도 홍성군 홍북읍 신경리 510-74 현장 진입로</span>
                </div>
                <div className="flex items-start gap-2">
                  <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>위험물 낙하 또는 도로 파손 등 긴급상황은 전화(041-631-0815)로 즉시 연락 바랍니다.</span>
                </div>
              </div>
            </div>

            {/* Right Form column (7 cols) */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="p-8 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="text-base font-bold text-emerald-900">
                    소중한 의견이 정상 접수되었습니다!
                  </h4>
                  <p className="text-xs text-emerald-700 max-w-md mx-auto leading-relaxed">
                    접수된 내용은 현장 안전관리자가 즉시 확인 후 기재해주신 연락처({formData.phone})로 조치 계획 및 결과를 안내해 드리겠습니다.
                  </p>
                  <button
                    onClick={resetForm}
                    className="mt-2 px-4 py-2 text-xs font-semibold bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg transition"
                  >
                    새로운 의견 추가 작성
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        성함 / 단체명 <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="예: 홍길동"
                        className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        연락처 (휴대전화) <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="예: 010-1234-5678"
                        className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      건의 및 문의 유형 <span className="text-rose-500">*</span>
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 bg-white"
                    >
                      <option value="traffic">도로 우회 및 보행 통행 불편</option>
                      <option value="noise_dust">비산먼지 / 소음 / 살수차 건의</option>
                      <option value="safety">현장 위험요소 및 안전시설 보강 제안</option>
                      <option value="drawings">도면 / 사업 일정 일반 문의</option>
                      <option value="other">기타 주민 의견</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      내용 <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      rows={3}
                      value={formData.content}
                      onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                      placeholder="구체적인 위치와 불편사항 또는 제안 내용을 기재해 주시면 신속한 조치에 큰 도움이 됩니다."
                      className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                      required
                    />
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[11px] text-slate-500">
                      개인정보는 민원 처리 목적 외 사용되지 않습니다.
                    </span>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-5 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition shadow-sm"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>의견 등록하기</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
