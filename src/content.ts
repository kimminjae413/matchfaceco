// 랜딩페이지에 쓰이는 모든 카피·수치·데이터 (자료 3종 기반) 를 모은 단일 소스.

export const brand = {
  name: 'matchfac eco',
  taglineEn: 'Your cost. Our carbon mission.',
  taglineKo: '데이터 기반 친환경 제조 매칭 플랫폼',
  domain: 'matchfaceco.com',
  email: 'zeroto100.kr@gmail.com',
}

export const company = {
  legal: '주식회사 제로투백',
  legalEn: 'Zeroto100 INC.',
  ceo: '정희진',
  bizNo: '142-88-03653',
  corpNo: '160111-0073236',
  addr: '대전광역시 서구 정림동로7번길 28-12, 3층',
  since: '2025.11.10',
}

// 히어로 옆 "탄소 원장" 터미널에 타이핑될 라인들
export const ledgerLines = [
  { t: 'match', k: '공정: 사출 · 소재: PP · 수량: 120,000 EA', v: '' },
  { t: 'scan', k: '베트남 제조사 32곳 에너지효율 스캔', v: '32 factories' },
  { t: 'pick', k: '최적 저탄소 공장 선정 → GreenFactory', v: '−18.6% CO₂' },
  { t: 'calc', k: 'PCF = Σ(Activity Data × Emission Factor)', v: 'ISO 14067' },
  { t: 'ef', k: '전력 배출계수 매핑 (VN grid)', v: '0.56 kgCO₂e/kWh' },
  { t: 'done', k: '탄소 리포트 자동 생성', v: 'CBAM ready' },
]

// 히어로 우측 상단 지표 칩
export const heroStats = [
  { label: '베트남 제조사 DB', value: '32', unit: '곳+' },
  { label: '평균 탄소 저감', value: '18.6', unit: '%' },
  { label: '적용 표준', value: 'ISO', unit: '14067' },
]

export const features = [
  {
    id: 'match',
    kicker: '01 — 매칭',
    title: '저탄소 제조공정 AI 매칭',
    body: '금형·사출·봉제 등 공정 카테고리별 베트남 제조사 30곳+의 전력 사용량·설비 효율·재생에너지 비율을 DB화했습니다. 공장 선택 단계부터 탄소를 줄이는, 국내 유일의 추천 알고리즘.',
    points: ['공정별 kWh·설비효율·재생에너지 비율', '최적 저탄소 공장 자동 추천'],
  },
  {
    id: 'pcf',
    kicker: '02 — 산정',
    title: '경량 PCF 자동 산정',
    body: 'ISO 14067 기반 제품탄소발자국을 제조(Scope 2) + 물류 일부(Scope 3)까지 자동 계산합니다. 수개월짜리 전주기 평가 없이, 제품 사양만 입력하면 즉시 탄소 지표가 나옵니다.',
    points: ['제품 사양·생산 조건 입력만으로 산출', '국가별 배출계수 사전 적용'],
  },
  {
    id: 'dashboard',
    kicker: '03 — 관리',
    title: '생산관리 통합 대시보드',
    body: '시제품 → 양산 → 검수 → 물류 전 과정을 한 화면에서 실시간 관리합니다. 별도 측정 장비 없이 공장 설비 DB와 생산 조건을 매핑해 탄소·에너지 지표를 제공합니다.',
    points: ['전 과정 실시간 추적', '탄소 리포트 자동 생성·다운로드'],
  },
  {
    id: 'compliance',
    kicker: '04 — 규제',
    title: '글로벌 규제 대응 가이드',
    body: 'CBAM·ESG 공시·CSRD 등 규제 현황을 대시보드로 제공하고, 규제별 필요 데이터를 자동 연동해 보고서 초안까지 만듭니다. 중소기업도 과도한 비용 없이 대응할 수 있습니다.',
    points: ['규제별 필요 데이터 자동 연동', '공시용 보고서 초안 생성'],
  },
]

// 대시보드 쇼케이스 지표 (BI page11 재현)
export const dashboardMetrics = [
  { label: '진행 중 매칭', value: 128, suffix: '', delta: '+12.5%', hero: true },
  { label: '네트워크 제조사', value: 110, suffix: '곳', delta: '+7.2%' },
  { label: '평균 탄소 저감', value: 18.6, suffix: '%', delta: '+2.3%' },
  { label: '누적 매칭 금액', value: 1240, suffix: '억', delta: '+8.1%' },
]

export const emissionBars = [
  { m: '1월', v: 42 }, { m: '2월', v: 55 }, { m: '3월', v: 48 },
  { m: '4월', v: 61 }, { m: '5월', v: 100, peak: true }, { m: '6월', v: 72 },
  { m: '7월', v: 58 }, { m: '8월', v: 66 }, { m: '9월', v: 51 },
]

// 경쟁 비교표
export const comparison = {
  cols: ['기존 제조 매칭', 'ESG 탄소관리 SaaS', 'matchfac eco'],
  rows: [
    { label: '서비스 목적', a: '제조 의뢰·견적', b: '기업 단위 배출 산정', c: '저탄소 공정 선택 + 생산관리' },
    { label: '공정 에너지 DB', a: false, b: false, c: '전력·설비·재생에너지 DB화' },
    { label: '저탄소 공정 추천', a: false, b: false, c: '에너지효율 기반 알고리즘' },
    { label: '생산 프로세스 관리', a: '일부/없음', b: '공장 내부만', c: '시제품→양산→물류 전체' },
    { label: '탄소정보 반영', a: false, b: false, c: 'Scope 2 경량 로직' },
    { label: '사용 고객층', a: '의뢰자·공장', b: '대기업·기관', c: '제조기업·스타트업 모두' },
  ],
}

export const targets = [
  {
    tag: 'EXPORT SME',
    title: '수출 지향형 스타트업·중소 제조기업',
    body: 'CBAM·ESG 공시 대응이 발등의 불인 기업. 협력사 배출량(Scope 3) 증빙이 수출의 전제 조건이 되었습니다.',
  },
  {
    tag: 'OVERSEAS OEM',
    title: '베트남 위탁 생산 활용 기업',
    body: '해외 현지 공장의 탄소 데이터를 확보하기 어려운 기업. 국가 간 정보 격차를 데이터로 메웁니다.',
  },
  {
    tag: 'D2C FOUNDER',
    title: '제조 경험 없는 초기 창업자·D2C 브랜드',
    body: '저탄소 공장을 고르는 기준 자체가 없던 팀. 전문 인력 없이도 데이터로 의사결정합니다.',
  },
]

export const timeline = [
  { phase: '기획', body: '저탄소 공정 데이터 구조 설계', period: "2026.04" },
  { phase: 'DB 구축', body: '베트남 현지 공장 에너지효율 데이터 수집·표준화', period: '2026.05–06' },
  { phase: '개발', body: 'AI 기반 저탄소 공정 추천 알고리즘 1.0', period: '2026.06–08' },
  { phase: '베타', body: '플랫폼 베타 테스트 · PCF 로직 정확도 검증', period: '2026.08–09' },
  { phase: '고도화', body: '피드백 반영 UI/UX 개선 · 문서 자동화', period: '2026.09–10' },
]
