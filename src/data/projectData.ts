export interface ProjectInfo {
  name: string;
  location: string;
  lotArea: string;
  client: string;
  supervisor: string;
  contractor: string;
  siteAgent: string;
  designers: string[];
  purpose: string;
  startDate: string;
  endDate: string;
  totalDays: number;
  budget: string;
  budgetNumeric: number; // 백만원 단위: 5470
}

export interface WorkBreakdown {
  category: string;
  icon: string;
  items: { label: string; value: string; detail?: string }[];
  description: string;
}

export interface DrawingItem {
  id: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  pdfSrc: string;
  description: string;
  highlights: { x: number; y: number; label: string; desc: string }[];
}

export interface SafetyNotice {
  id: string;
  tag: string;
  title: string;
  summary: string;
  content: string[];
  speechBubble: string;
  highlightIcon: 'traffic' | 'helmet' | 'eco' | 'emergency';
}

export interface MonthlyScheduleItem {
  month: string; // e.g. "2026.06"
  phase: string;
  planProgress: number; // cumulative %
  monthlyProgress: number;
  mainWorks: string[];
  safetyFocus: string;
}

export const PROJECT_DATA: ProjectInfo = {
  name: "내포신도시 RB7조성공사 및 대학1 관리공사",
  location: "충청남도 홍성군 홍북읍 신경리 510-74 일원",
  lotArea: "내포신도시 RB7 블록 및 대학1 유치 부지 일원",
  client: "충청남도개발공사",
  supervisor: "충청남도개발공사",
  contractor: "주식회사 동아엔텍",
  siteAgent: "양기봉 (주식회사 동아엔텍)",
  designers: ["(주)케이지엔지니어링 종합건축사 사무소", "드림이앤디"],
  purpose: "충남도청(내포) 신도시 개발사업 개발계획(26차) 및 실시계획(24차) 변경과 관련하여 내포신도시의 체계적인 발전 도모 및 주민의 정주여건 개선을 목적으로 공사를 추진함.",
  startDate: "2026년 06월 15일",
  endDate: "2027년 11월 07일",
  totalDays: 511,
  budget: "5,470 백만원 (약 54억 7,000만원)",
  budgetNumeric: 5470
};

export const WORK_BREAKDOWNS: WorkBreakdown[] = [
  {
    category: "1) 토공사 (Earthwork)",
    icon: "Mountain",
    description: "지형 정지 및 부지 조성 기반 토공사",
    items: [
      { label: "절토 (흙깎기)", value: "90,170 ㎥", detail: "대토공사 및 구획 정지" },
      { label: "성토 (흙쌓기)", value: "43,403 ㎥", detail: "단지 내 균일 다짐 조성" },
      { label: "벌개제근", value: "3,491 ㎡", detail: "수목 및 표토 정리" },
      { label: "수목이식", value: "90 주", detail: "보존 대상 조경수 이식" }
    ]
  },
  {
    category: "2) 포장공 (Pavement)",
    icon: "Layers",
    description: "단지 진출입로 및 보행자 도로 개설",
    items: [
      { label: "표층 (아스콘)", value: "2,844 ㎡", detail: "내구성 아스팔트 콘크리트 포장" },
      { label: "보조기층", value: "3,336 ㎡", detail: "노반 지지력 확보 골재 포설" },
      { label: "보도블록 포장", value: "2,412 ㎡", detail: "투수형 보행자 전용 보도블록" },
      { label: "도로경계석", value: "1,151 m", detail: "화강석 차도/보도 경계석" }
    ]
  },
  {
    category: "3) 우수공 (Stormwater)",
    icon: "CloudRain",
    description: "빗물 집수 및 지표수 배수체계 구축 (내포 3-13 우회과로 포함)",
    items: [
      { label: "U형 측구", value: "657 m", detail: "도로변 지표 배수 집수로" },
      { label: "산마루측구", value: "443 m", detail: "사면 유출수 집수 배수로" },
      { label: "흄관 (본관 배수관)", value: "608 m + 260 m", detail: "RB7 608m + 내포 3-13 우회과로 260m 신설" },
      { label: "PC 맨홀", value: "21 개소", detail: "우수 유지관리 점검 맨홀" }
    ]
  },
  {
    category: "4) 오수공 (Sewer)",
    icon: "GitBranch",
    description: "신도시 위생 배수 인프라 연결",
    items: [
      { label: "PE 다중관", value: "368 m", detail: "고강도 내화학성 오수 주관로" },
      { label: "PVC 이중관", value: "50 m", detail: "인입 오수 연결관" },
      { label: "PC 맨홀", value: "10 개소", detail: "오수 점검 및 역류 방지 맨홀" }
    ]
  },
  {
    category: "5) 상수공 (Water Supply)",
    icon: "Droplets",
    description: "안정적인 맑은 물 공급 및 소방 인프라",
    items: [
      { label: "PE 수도관 (D100mm)", value: "423 m", detail: "상수 공급 주배관망" },
      { label: "지상 소화전", value: "4 개소", detail: "비상 화재 진압용 소방용수" }
    ]
  },
  {
    category: "6) 부대공 (Site Facilities)",
    icon: "ShieldCheck",
    description: "환경 보전 및 현장 안전 방호시설",
    items: [
      { label: "침사지 (변경 1회)", value: "1단계 8개소 + 2단계 9개소 (총 17개소)", detail: "가배수로 및 집중호우 침사지 대폭 보강" },
      { label: "세륜 세차시설", value: "1 식", detail: "공사차량 비산먼지 세척 설비" },
      { label: "가설울타리 (EGI)", value: "276 공판", detail: "보행자 안전 분리 및 소음 차단" },
      { label: "살수차 운영", value: "상시 1대", detail: "주변 도로 비산먼지 억제 살수" }
    ]
  }
];

export const DRAWINGS: DrawingItem[] = [
  {
    id: "rb7-plan",
    title: "RB7 블록 단지조성 평면도",
    subtitle: "주거용지 RB7-1, RB7-2 구획 및 내부 도로망 계획",
    imageSrc: "/assets/drawings/rb7_plan.png",
    pdfSrc: "/assets/aistudio/RB7___f7b97a33.pdf",
    description: "내포신도시 서측 구릉지와 연접한 RB7-1 및 RB7-2 블록의 정지계획, 블록 사이 중심 도로인 중로 3-42호선, 사면 안정 옹벽 및 배수 측구 배치도입니다.",
    highlights: [
      { x: 42, y: 50, label: "RB7-1 블록", desc: "주거 전용 단지 용지 (서측 구획 및 계획고 정지)" },
      { x: 50, y: 37, label: "중로 3-42호선", desc: "RB7-1블록과 RB7-2블록 사이 단지 중심 관통 도로" },
      { x: 55, y: 53, label: "RB7-2 블록", desc: "단지 동측 주거 구획 및 진출입로" }
    ]
  },
  {
    id: "univ1-plan",
    title: "대학1 관리공사 평면도",
    subtitle: "대학 유치 예정 부지 토공 및 지형 보전 정지 계획",
    imageSrc: "/assets/drawings/univ1_plan.png",
    pdfSrc: "/assets/aistudio/__1___07486039.pdf",
    description: "대학1 부지의 원활한 관리와 주변 도로망 형성을 위한 절·성토 레벨(FH: 43.59~60.69m), 경계 산마루 측구 및 임시 침사지 배치를 포함한 평면도입니다.",
    highlights: [
      { x: 25, y: 50, label: "서측 정지 구역", desc: "FH 58.00~60.69m 고지대 노반 정지 구획" },
      { x: 50, y: 55, label: "중앙 관리 부지", desc: "평탄화 조성 완료 구역" },
      { x: 70, y: 52, label: "동측 접속 도로", desc: "완만한 곡선형 도로 선형 연결부 (FH 43.59m)" }
    ]
  },
  {
    id: "schedule-plan",
    title: "공사예정공정표 [변경 1회]",
    subtitle: "2026.06.15 ~ 2027.11.07 변경 1회 승인본 (누계 100%)",
    imageSrc: "/assets/drawings/schedule_table_rev1.png",
    pdfSrc: "/assets/aistudio/__________427bb8aa.pdf",
    description: "2026년 6월 15일 착공부터 2027년 11월 7일 준공까지의 공사예정공정표 [변경 1회] 승인본입니다. 대학1 대토공(10억원, 32.5%), RB7 토공 및 포장, 내포 3-13 우회과로 우수공(260m 신설), 침사지 17개소(1단계 8개소, 2단계 9개소) 등 최신 변경 공종과 월별 S-Curve가 정밀 반영되어 있습니다.",
    highlights: [
      { x: 30, y: 22, label: "대학1 토공 (1,000백만)", desc: "흙깎기 154,037㎥, 흙쌓기 202,608㎥ 및 외부토 반입" },
      { x: 42, y: 70, label: "내포 3-13 우회과로 (신규)", desc: "우수본관 흄관 260m (75,475천원) 우회 배수체계 신설" },
      { x: 62, y: 78, label: "침사지 17개소 가동", desc: "1단계 8개소 + 2단계 9개소 및 가배수로 설치 (261백만원)" },
      { x: 80, y: 88, label: "S-Curve 100% 준공", desc: "2027년 10~11월 최종 준공 및 도로 시설물 인수인계" }
    ]
  }
];

export const SAFETY_NOTICES: SafetyNotice[] = [
  {
    id: "traffic",
    tag: "교통·도로 우회",
    title: "공사차량 진출입로 주의 및 보행로 우회 안내",
    summary: "중로 1-6호선과 중로 3-40호선 접속부에 덤프·레미콘 차량 출입이 빈번하오니 신호수의 유도에 따라 지정 우회 보행로를 이용해 주시기 바랍니다.",
    speechBubble: "이웃 주민 여러분, 안녕하세요! 공사차량이 진출입하는 교차로 구간에서는 잠시 멈추시고 신호수 안내에 따라 안전 펜스 안쪽 보행로로 이동해 주세요!",
    highlightIcon: "traffic",
    content: [
      "진출입로 위치: 중로 1-6호선 접도 구역 (신경리 510-74 인근)",
      "신호수 상시 2인 배치: 덤프 트럭 회전 시 보행자 우선 정지 수신호 실시",
      "출퇴근 집중 시간 (07:30~09:00 / 17:30~19:00): 대형 중장비 외부 반입 통제 및 시속 20km 이하 서행 운행",
      "임시 보행 통로: 가설 EGI 펜스 바깥쪽 안전 난간 설치 보행로 이용 필수"
    ]
  },
  {
    id: "site-access",
    tag: "현장 안전 수칙",
    title: "공사구역 무단 출입 엄격 통제 및 안전거리 유지",
    summary: "굴착 및 성토가 진행 중인 현장 부지는 지반 침하 및 낙석 위험이 있으므로 관계자 외 출입을 금지합니다.",
    speechBubble: "현장 내부는 굴삭기와 덤프트럭이 활발히 움직이고 있어요! 안전모를 쓰지 않은 일반 시민분들의 출입은 절대 금지되니 양해 부탁드립니다!",
    highlightIcon: "helmet",
    content: [
      "공사 현장 경계 전 구간 가설울타리(EGI 펜스) 및 안전망 설치 완료",
      "울타리에 기대거나 틈새로 내부를 들여다보는 행위 금지",
      "어린이 및 반려동물 동반 산책 시 현장 경계로부터 최소 5m 이상 안전거리 확보",
      "중장비 작업 반경(20m 이내) 접근 시 경고 부저 및 방송 송출"
    ]
  },
  {
    id: "eco-dust",
    tag: "환경·소음 저감",
    title: "비산먼지 억제 및 주민 생활소음 최소화 대책",
    summary: "인근 아파트 및 상가 주민들의 쾌적한 일상을 위해 자동 세륜기 1식, 살수차 1일 4회 이상 운행, 가설 방음벽을 설치·운영합니다.",
    speechBubble: "먼지와 소음을 줄이기 위해 현장을 나가는 모든 덤프트럭은 바퀴를 깨끗이 씻고, 살수차로 도로를 촉촉하게 청소하고 있답니다!",
    highlightIcon: "eco",
    content: [
      "현장 출입구 전자동 세륜·측면 살수기 설치로 토사 도로 유출 원천 차단",
      "고압 살수차 1대 상시 배치: 공사 차량 이동로 및 주변 도로 주기적 살수",
      "토사 야적 구간 친환경 방진 덮개(차광막) 100% 밀폐 포설",
      "주말·공휴일 및 아침 08:00 이전에는 소음이 큰 브레이커·항타 작업 전면 제한"
    ]
  },
  {
    id: "water-safety",
    tag: "재해 예방",
    title: "우기 집중호우 대비 침사지(대학1: 5개소, RB7: 4개소) 및 배수로 관리",
    summary: "여름철 집중호우에 대비하여 단지 내 임시 침사지 총 9개소(대학1: 5개소, RB7: 4개소)를 가동하고 산마루측구를 사전에 정비하여 토사 유출을 방지합니다.",
    speechBubble: "비가 많이 와도 안심하세요! 빗물과 흙탕물을 정화하는 침사지(대학1: 5개소, RB7: 4개소)가 인근 하천과 도로를 든든하게 지켜주고 있습니다!",
    highlightIcon: "emergency",
    content: [
      "현장 내 임시 침사지 총 9개소 조성 완료 (대학1 구역 5개소, RB7 구역 4개소)",
      "사면 산마루 측구(443m) 선행 시공으로 우수 범람 예방",
      "풍수해 대비 비상 양수기 및 모래주머니 300포 상시 비축",
      "기상특보(호우·태풍·대설) 발효 시 즉시 작업 중단 및 현장 순찰반 24시간 가동"
    ]
  }
];

export const MONTHLY_SCHEDULE: MonthlyScheduleItem[] = [
  {
    month: "2026.06",
    phase: "착공 및 현장 가설 · 대학1 벌개제근",
    planProgress: 2.20,
    monthlyProgress: 2.20,
    mainWorks: [
      "공사 착공 및 현장사무소 축조 (1.00%)",
      "대학1구역 벌개제근 및 지장물 정리 (1.20%)",
      "가설울타리(EGI 276공판) 및 안전표지판 설치",
      "침사지 1단계(8개소) 터파기 착수"
    ],
    safetyFocus: "현장 경계 구획 및 주민 통행로 안전 난간 확보"
  },
  {
    month: "2026.07",
    phase: "대학1 토공 및 RB7 벌목 착수",
    planProgress: 12.70,
    monthlyProgress: 10.50,
    mainWorks: [
      "대학1-1구간 흙깎기(81,483㎥) 및 흙쌓기(26,184㎥) (4.00%)",
      "RB7 구역 벌개제근·벌목(54,280㎡), 수목이식 84주 (4.00%)",
      "침사지 1단계 및 가배수로 설치 집중 (2.50%)"
    ],
    safetyFocus: "토사 반출 덤프트럭 운행 개시, 진출입로 신호수 2인 상시 배치"
  },
  {
    month: "2026.08",
    phase: "대토공 확장 및 RB7 성토",
    planProgress: 22.74,
    monthlyProgress: 10.04,
    mainWorks: [
      "대학1 토공 지속 (4.50%)",
      "RB7-2 흙쌓기(바디짐 42,254㎥) 및 흙깎기 (2.74%)",
      "침사지 1단계 및 가배수로 설치 완료 (2.80%)"
    ],
    safetyFocus: "폭염기 온열질환 예방 휴게시간 준수 및 비산먼지 고압 살수차 1일 4회 가동"
  },
  {
    month: "2026.09",
    phase: "대학1 1-2구간 절토 & 우수관 터파기",
    planProgress: 34.84,
    monthlyProgress: 12.10,
    mainWorks: [
      "대학1-2구간 흙깎기(75,168㎥) (5.00%)",
      "RB7 흙깎기 및 지장물 철거(611㎡) (2.80%)",
      "RB7 우수본관(흄관) 중(국)3-42선 터파기 (0.50%)",
      "가배수로 유지관리 및 세륜기 1식 가동 (3.80%)"
    ],
    safetyFocus: "가을철 태풍 및 집중호우 대비 침사지 및 단지 외곽 배수로 사전 점검"
  },
  {
    month: "2026.10",
    phase: "덤프운반 집중 & 내포 3-13 우회과로 착수",
    planProgress: 44.99,
    monthlyProgress: 10.15,
    mainWorks: [
      "대학1 토공 추진 (5.00%)",
      "RB7 덤프운반(45,722㎥) 및 도로부 노체 성토 (3.40%)",
      "RB7 우수본관 흄관 및 산마루측구(L=218m) (1.30%)",
      "내포 3-13 우회과로 우수관로 UA1-6-1 착수 (0.20%)"
    ],
    safetyFocus: "깊은 터파기 구간 흙막이 안전점검 및 중장비 회전 반경 통제"
  },
  {
    month: "2026.11",
    phase: "외부토 반입 & 오수·우수 관로 부설",
    planProgress: 56.67,
    monthlyProgress: 11.68,
    mainWorks: [
      "대학1-2구간 흙쌓기(176,423㎥) 및 외부토 반입 (4.00%)",
      "RB7 노상 성토 및 중(국)3-41 포장철거 (4.03%)",
      "RB7 산마루측구, 도수로 및 집수정 설치 (3.00%)",
      "오수공 PE백관(L=128m) 매설 (0.65%)"
    ],
    safetyFocus: "동절기 전 관로 되메우기 조속 완료 및 임시 포장면 평탄화"
  },
  {
    month: "2026.12",
    phase: "동절기 토공 보양 & 우수관로 연결",
    planProgress: 66.42,
    monthlyProgress: 9.75,
    mainWorks: [
      "대학1 토공사 (3.10%)",
      "RB7 토공사 (1.90%)",
      "RB7 우수본관 흄관 및 집수정 시공 (3.50%)",
      "내포 3-13 우회과로 우수관로 (0.60%)",
      "동절기 현장 품질 보양 및 월동 자재 점검 (0.65%)"
    ],
    safetyFocus: "결빙 및 미끄럼 주의, 한랭질환 예방 및 결빙 도로 제설"
  },
  {
    month: "2027.01",
    phase: "혹한기 품질 관리 및 안전 순찰",
    planProgress: 66.67,
    monthlyProgress: 0.25,
    mainWorks: [
      "콘크리트 한중 타설 제한에 따른 자재 정비 (0.25%)",
      "현장 사면 결빙 점검 및 해빙기 대비 안전 순찰",
      "가설 시설물 동파 방지 조치"
    ],
    safetyFocus: "사면 동결 융해 점검 및 제설 장비 상시 대기"
  },
  {
    month: "2027.02",
    phase: "해빙기 공사 재개 & 2단계 침사지 착수",
    planProgress: 71.97,
    monthlyProgress: 5.30,
    mainWorks: [
      "대학1 토공사 재개 (2.00%)",
      "RB7 중(국)1-6 포장철거 및 암옹벽 철거 (0.10%)",
      "우수본관 흄관 및 산마루측구 터파기 (1.60%)",
      "오수공 PE백관 매설 (0.55%)",
      "내포 3-13 우회과로 우수관 UA1-6-1~2 (0.80%)",
      "침사지 2단계(9개소) 설치 착수 (0.25%)"
    ],
    safetyFocus: "해빙기 사면 붕괴 예방 순찰 및 토사 굴착 안전 확보"
  },
  {
    month: "2027.03",
    phase: "보조기층 포설 & 침사지 2단계(9개소) 시공",
    planProgress: 81.37,
    monthlyProgress: 9.40,
    mainWorks: [
      "대학1 토공 (2.00%)",
      "RB7 동방층 및 도로 보조기층 설치 (0.30%)",
      "우수공 U형측구(L=597m) 및 산마루측구 (3.00%)",
      "오수 PE백관(L=260m) 매설 완료 (1.00%)",
      "상수도 PE관로(L=423m) 부설 착수 (0.90%)",
      "내포 3-13 우회과로 관로 연결 (0.85%)",
      "침사지 2단계(9개소) 설치 및 배수로 (1.25%)"
    ],
    safetyFocus: "관로 매설 구간 도로 횡단 시 차량 서행 및 보행로 분리"
  },
  {
    month: "2027.04",
    phase: "경계석 설치 & 상수도 소화전",
    planProgress: 87.93,
    monthlyProgress: 6.56,
    mainWorks: [
      "대학1 토공 F/L 정지 (1.00%)",
      "보조기층 및 보차도경계석 설치 (1.20%)",
      "우수받이 및 집수체계 연계 (2.20%)",
      "상수도관 부설 및 소화전 4EA 설치 (0.86%)",
      "침사지 2단계 및 가배수로 완공 (1.30%)"
    ],
    safetyFocus: "노반 골재 운반 덤프차량 속도 제한 및 보행로 펜스 유지"
  },
  {
    month: "2027.05",
    phase: "본선 아스콘 기층 포장 & 암옹벽",
    planProgress: 92.34,
    monthlyProgress: 4.41,
    mainWorks: [
      "RB7 암옹벽 설치 (1.40%)",
      "본선 아스팔트 기층 포설 (1.30%)",
      "우수공 잔여 관로 시공 (0.51%)",
      "교통통제 및 안전시설 유지 (1.20%)"
    ],
    safetyFocus: "고온 아스팔트 포설 장비 주변 통제선 설정"
  },
  {
    month: "2027.06",
    phase: "아스콘 표층 & 보도블록 시공",
    planProgress: 95.43,
    monthlyProgress: 3.09,
    mainWorks: [
      "본선 아스콘 표층 포설 및 보도블록 포장 (1.34%)",
      "RB7 절토 사면 잔여 정지 (0.35%)",
      "부대공 및 환경정비 (1.40%)"
    ],
    safetyFocus: "보도블록 시공 구간 임시 보행 데크 유도"
  },
  {
    month: "2027.07",
    phase: "보도블록 완료 & 하절기 침사지 관리",
    planProgress: 97.58,
    monthlyProgress: 2.15,
    mainWorks: [
      "대학1 잔토처리 외 (0.35%)",
      "보도블록 포장 마무리 (1.40%)",
      "단지 내 환경 정리 및 가로 정비 (0.40%)"
    ],
    safetyFocus: "하절기 집중호우 대비 2단계 침사지(9개소) 준설 및 유로 확보"
  },
  {
    month: "2027.08",
    phase: "차선도색 · 미끄럼방지포장 · 가로등",
    planProgress: 98.99,
    monthlyProgress: 1.41,
    mainWorks: [
      "대학1 잔토정리 (0.32%)",
      "차선 도색 및 도로교통안전시설 설치 (0.70%)",
      "관급 미끄럼방지포장 시공",
      "현장사무소 주변 환경 정리 (0.39%)"
    ],
    safetyFocus: "차선도색 작업 시 편도 차단 및 신호수 배치"
  },
  {
    month: "2027.09",
    phase: "수목 본이식 & 세륜기 철거",
    planProgress: 99.99,
    monthlyProgress: 1.00,
    mainWorks: [
      "수목 본이식(37주) 및 단지 조경 복구 (0.40%)",
      "세륜 세차시설 철거 및 원상 복구 (0.60%)"
    ],
    safetyFocus: "중장비 및 세륜기 반출 시 진출입로 안전 통제"
  },
  {
    month: "2027.10 ~ 11",
    phase: "준공 검사 및 인수인계",
    planProgress: 100.0,
    monthlyProgress: 0.01,
    mainWorks: [
      "가설울타리(EGI) 철거 및 현장사무소 철거 (0.40%)",
      "발주처 준공 예비점검 및 본점검 검수 (100.0%)",
      "홍성군 도로 및 기반시설물 최종 인수인계"
    ],
    safetyFocus: "가설물 최종 해체 시 보행자 안전 통행로 확보"
  }
];

export const SITE_CONTACTS = [
  {
    role: "발주처 / 감독부서",
    org: "충청남도개발공사",
    department: "신도시사업처 단지조성팀",
    person: "공사감독관",
    phone: "041-630-4400",
    workDesc: "공사 전반 감독 및 인허가 총괄"
  },
  {
    role: "시공사 현장사무소",
    org: "주식회사 동아엔텍",
    department: "내포신도시 현장사업소",
    person: "현장대리인 양기봉 소장",
    phone: "041-631-0815",
    workDesc: "현장 직접 시공, 안전관리 및 민원 신속 대응"
  },
  {
    role: "설계 및 감리사",
    org: "(주)케이지엔지니어링 / 드림이앤디",
    department: "설계감리사업본부",
    person: "책임설계사",
    phone: "02-2182-3000",
    workDesc: "도면 설계 및 구조적 기술 지원"
  },
  {
    role: "비상 관할 기관",
    org: "홍성소방서 / 홍성경찰서",
    department: "긴급재난상황실",
    person: "119 / 112 종합상황실",
    phone: "119 / 112",
    workDesc: "현장 재난 및 긴급 구호 핫라인"
  }
];
