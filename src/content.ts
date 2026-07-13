// 랜딩페이지의 모든 카피·수치·데이터를 모은 단일 소스. 한국어 / 영어.
//
// 영문은 한국어의 직역이 아니다. 읽는 사람이 다르다 —
//   한국어: CBAM·ESG가 발등의 불인 국내 수출 중소기업의 구매·ESG 담당자
//   영어  : 파트너로 모집할 베트남 제조사, 그리고 해외 바이어·소싱 담당자
// 그래서 영문은 "우리 공장이 여기 실리면 무엇이 좋은가"가 읽히도록 쓰되,
// 사실관계(30곳+, 18.6%, ISO 14067, 0.6592 계수)는 한 글자도 다르지 않게 유지한다.
// 수치가 언어마다 다르면 그 순간 둘 다 거짓이 된다.
import { pick } from './lang'

const ko = {
  brand: {
    name: 'matchfac eco',
    taglineEn: 'Your cost. Our carbon mission.',
    taglineKo: '데이터 기반 친환경 제조 매칭 플랫폼',
    domain: 'matchfaceco.com',
    email: 'zeroto100.kr@gmail.com',
  },

  company: {
    legal: '주식회사 제로투백',
    legalEn: 'Zeroto100 INC.',
    ceo: '정희진',
    bizNo: '142-88-03653',
    corpNo: '160111-0073236',
    // 사업자등록증(2026.06.01 발급) 표기 그대로
    addr: '대전광역시 서구 정림동로7번길 28-12, 3층 (정림동, 수밋들어울림플랫폼)',
    since: '2025.11.10',
  },

  nav: {
    home: 'matchfac eco 홈',
    links: [
      { href: '#features', label: '핵심 기능' },
      { href: '#how', label: '방법론' },
      { href: '#platform', label: '플랫폼' },
      { href: '#why', label: '차별점' },
    ],
    cta: '베타 신청',
  },

  hero: {
    h1a: '공장을 고르는 순간,',
    h1b: '탄소가 줄어듭니다.',
    body: '베트남 제조사 30곳+의 에너지효율을 데이터로 비교하고, 제품 사양만 입력하면 ISO 14067 기반 탄소발자국을 즉시 산정합니다. 저탄소 공장 선택부터 CBAM·ESG 리포트까지, 한 흐름으로.',
    cta: '베타 신청하기',
    how: '어떻게 계산하나요',
    sample: '예시 산정서 전체 보기',
    stats: [
      { label: '베트남 제조사 DB', value: '30', unit: '곳+' },
      { label: '평균 탄소 저감', value: '18.6', unit: '%' },
      { label: '적용 표준', value: 'ISO', unit: '14067' },
    ],
  },

  // 히어로 산출물 — 이 제품이 실제로 발행하는 PCF 산정서의 서식 예시.
  // 제조사명·수치는 가상이며, 문서 안에 '예시'임을 명시한다.
  report: {
    title: '제품탄소발자국 산정서',
    sampleTag: '예시',
    standard: 'ISO 14067 · Scope 2 + Scope 3(물류 일부)',
    issuer: '발행 matchfac eco',
    notReal: '서식 예시 · 실제 발행본 아님',
    scanned: '제조사 · 베트남 30곳+ 스캔',
    colKwh: 'kWh/1k',
    colRe: '재생E',
    colPcf: 'kgCO₂e/EA',
    picked: '선정',
    vsAvg: '동일 공정 업계 평균 대비',
    factorNote: '전력 배출계수 — 정부 공표 국가 계수 적용',
    complianceNote: 'CBAM · ESG 공시 제출 가능',
    docNo: 'PCF-2026-0413',
    spec: [
      { k: '공정', v: '사출' },
      { k: '소재', v: 'PP' },
      { k: '수량', v: '120,000 EA' },
    ],
    factories: [
      { name: 'GreenFactory Bình Dương', kwh: '412', re: '38%', pcf: '0.42', pick: true },
      { name: 'Long An Precision', kwh: '486', re: '12%', pcf: '0.49' },
      { name: 'Đồng Nai Molding', kwh: '523', re: '0%', pcf: '0.56' },
      { name: 'Hải Phòng Industrial', kwh: '571', re: '5%', pcf: '0.62' },
    ],
    cut: '18.6',
  },

  problem: {
    label: '문제',
    h2: '같은 제품이라도, 어느 공장에서 만드느냐에 따라 탄소가 달라집니다.',
    sub: '그런데 그걸 판단할 데이터가 없었습니다.',
    facts: [
      { n: '30', u: '%+', d: '설비 노후도에 따라 벌어지는 동일 공정의 에너지 소모량 차이. 지금은 눈에 보이지 않습니다.' },
      { n: '2028', u: '', d: '국내 ESG 공시 의무화. EU CBAM·CSRD까지 겹치며 협력사 배출량(Scope 3) 증빙이 수출의 전제가 됩니다.' },
      { n: '0', u: '건', d: '단가·납기 중심 관행 속에서, 공정별 탄소·에너지 데이터로 공장을 고른 의사결정 사례.' },
    ],
    closing: '는 이 공백을 메웁니다. 제조 현장의 전력·설비·물류 데이터를 표준화해, 비용을 줄이려는 선택이 곧 탄소를 줄이는 선택이 되게 합니다.',
  },

  features: {
    label: '핵심 기능',
    h2: '네 가지 기능이 하나의 흐름으로 이어집니다.',
    sub: '공장을 고르고, 탄소를 계산하고, 생산을 관리하고, 규제에 대응하는 일이 각각의 도구로 흩어져 있었습니다. matchfac eco는 이 전 과정을 한 데이터 위에 올립니다.',
    items: [
      {
        id: 'match',
        title: '저탄소 제조공정 AI 매칭',
        body: '금형·사출·봉제 등 공정 카테고리별로 베트남 제조사 30곳+의 전력 사용량·설비 효율·재생에너지 비율을 DB화했습니다. 견적이 아니라, 공장을 고르는 바로 그 순간에 탄소를 줄이는 추천 알고리즘입니다.',
        points: ['공정별 kWh·설비효율·재생에너지 비율', '베트남 30곳+ 에너지효율 실측 DB', '최적 저탄소 공장 자동 추천'],
      },
      {
        id: 'pcf',
        title: '경량 PCF 자동 산정',
        body: 'ISO 14067 기반 제품탄소발자국을 제조(Scope 2) + 물류 일부(Scope 3)까지 자동 계산합니다. 수개월짜리 전주기 평가 없이, 제품 사양만 입력하면 즉시 탄소 지표가 나옵니다.',
        points: ['제품 사양·생산 조건 입력만으로 산출', '국가별 배출계수 사전 적용'],
      },
      {
        id: 'dashboard',
        title: '생산관리 통합 대시보드',
        body: '시제품 → 양산 → 검수 → 물류 전 과정을 한 화면에서 실시간 관리합니다. 별도 측정 장비 없이 공장 설비 DB와 생산 조건을 매핑해 탄소·에너지 지표를 제공합니다.',
        points: ['전 과정 실시간 추적', '탄소 리포트 자동 생성·다운로드'],
      },
      {
        id: 'compliance',
        title: '글로벌 규제 대응 가이드',
        body: 'CBAM·ESG 공시·CSRD 등 규제 현황을 대시보드로 제공하고, 규제별 필요 데이터를 자동 연동해 보고서 초안까지 만듭니다. 중소기업도 과도한 비용 없이 대응할 수 있습니다.',
        points: ['규제별 필요 데이터 자동 연동', '공시용 보고서 초안 생성', 'CBAM·CSRD·ESG 동시 커버'],
      },
    ],
  },

  formula: {
    label: '방법론 · ISO 14067',
    h2: '추정이 아니라, 공개된 표준으로 계산합니다.',
    formulaLabel: '제품탄소발자국',
    boundary: '산정 경계 — 제조 Scope 2 + 물류 일부 Scope 3',
    bodyA: '모든 산정은 ',
    bodyStrong: '공개된 국제 표준과 검증 가능한 배출계수',
    bodyB: '에 근거합니다. 임의 추정이나 비공개 가중치를 쓰지 않으며, 전주기 중 탄소 비중이 가장 큰 제조·운송 단계에 집중한 경량 PCF 로직입니다.',
    origin:
      '36건의 제조 아웃소싱 프로젝트를 직접 운영하며 마주친 데이터 공백에서 출발했습니다. ' +
      '단가와 납기만 보고 공장을 고르는 관행 아래에서는 탄소를 셀 수 없습니다.',
    factorsLabel: '배출계수 출처',
    standardsLabel: '적용 표준',
    sampleLink: '예시 산정서 한 장 보기',
    factors: [
      {
        k: '전력',
        v: '국가별 grid 배출계수',
        src: '베트남 — 천연자원환경부 기후변화국 공표 국가계수 (2023년 확정 0.6592 tCO₂/MWh) · 한국 — 정부 공표 국가계수',
      },
      { k: '소재', v: '소재별 탄소계수 DB', src: 'PP · PE · ABS …' },
      { k: '물류', v: '운송수단별 배출계수', src: '해상 · 항공 · 육상' },
    ],
    standards: [
      { k: 'ISO 14067', v: '제품단위 탄소배출량 산정 기준' },
      { k: 'GHG Protocol', v: '관련성 · 완전성 · 일관성 · 투명성 · 정확성' },
      { k: 'CBAM', v: '탄소국경조정제도 제출 형식 대응' },
    ],
  },

  network: {
    label: '현지 네트워크 · 베트남',
    h2: '데이터는 책상이 아니라, 공장 바닥에서 만들어집니다.',
    body: '현지 제조사와 직접 맺은 네트워크를 바탕으로, 공정별 전력 사용량·설비 효율·재생에너지 비율을 표준화했습니다. 실측 활동 자료가 그대로 탄소 지표가 됩니다.',
    facts: [
      { k: '파트너 제조사', v: '베트남 30곳+', d: '공정 카테고리별 에너지효율 실측 DB' },
      { k: '수집 항목', v: '전력 · 설비 · 재생에너지', d: '공정별 kWh, 설비 효율, 재생에너지 비율' },
      { k: '표준화', v: '활동 자료 → 탄소 지표', d: '실측 자료가 그대로 산정 입력값이 됩니다' },
    ],
  },

  platform: {
    label: '플랫폼',
    h2: '시제품부터 물류까지, 한 화면에서.',
    body: '공장별 설비 효율 DB와 생산 조건을 자동 매핑해, 별도 측정 장비 없이 탄소·에너지 지표를 제공합니다. 시제품부터 물류·PCF·리포트까지 제조 전 과정을 한 화면에서 관리합니다.',
    mockTag: '예시 화면',
    outcome: '네 단계가 한 데이터 위에서 돌아가고, 마지막에 제출 가능한 산정서 한 장이 나옵니다.',
    // 누적 실적 카운트를 쓰지 않는다 — 베타 오픈 전에 "산정 완료 156건"은 성립할 수 없는 숫자다.
    stages: [
      { label: '매칭', body: '공정·수량 입력 → 저탄소 공장 추천', tag: '에너지효율 DB', hero: true },
      { label: '생산', body: '시제품 → 양산 → 검수 진행 추적', tag: '실시간' },
      { label: '산정', body: '제품탄소발자국 자동 계산', tag: 'ISO 14067' },
      { label: '리포트', body: '공시용 산정서 생성·다운로드', tag: 'CBAM' },
    ],
  },

  comparison: {
    label: '차별점',
    h2: '매칭 플랫폼도, ESG SaaS도 하지 못하던 일.',
    yes: '지원',
    no: '없음',
    cols: ['기존 제조 매칭', 'ESG 탄소관리 SaaS', 'matchfac eco'],
    rows: [
      { label: '서비스 목적', a: '제조 의뢰·견적', b: '기업 단위 배출 산정', c: '저탄소 공정 선택 + 생산관리' },
      { label: '공정 에너지 DB', a: false, b: false, c: '전력·설비·재생에너지 DB화' },
      { label: '저탄소 공정 추천', a: false, b: false, c: '에너지효율 기반 알고리즘' },
      { label: '생산 프로세스 관리', a: '일부/없음', b: '공장 내부만', c: '시제품→양산→물류 전체' },
      { label: '탄소정보 반영', a: false, b: false, c: 'Scope 2 경량 로직' },
      { label: '사용 고객층', a: '의뢰자·공장', b: '대기업·기관', c: '제조기업·스타트업 모두' },
    ],
  },

  targets: {
    label: '누구를 위한 것인가',
    h2: '규제가 발등의 불이 된 팀을 위해.',
    timelineLabel: '추진 일정 · 2026',
    timelineH3: '기획에서 상용화까지, 7개월.',
    items: [
      {
        title: '수출 지향형 스타트업·중소 제조기업',
        body: 'CBAM·ESG 공시 대응이 발등의 불인 기업. 협력사 배출량(Scope 3) 증빙이 수출의 전제 조건이 되었습니다.',
      },
      {
        title: '베트남 위탁 생산 활용 기업',
        body: '해외 현지 공장의 탄소 데이터를 확보하기 어려운 기업. 국가 간 정보 격차를 데이터로 메웁니다.',
      },
      {
        title: '제조 경험 없는 초기 창업자·D2C 브랜드',
        body: '저탄소 공장을 고르는 기준 자체가 없던 팀. 전문 인력 없이도 데이터로 의사결정합니다.',
      },
    ],
    timeline: [
      { phase: '기획', body: '저탄소 공정 데이터 구조 설계', period: '2026.04' },
      { phase: 'DB 구축', body: '베트남 현지 공장 에너지효율 데이터 수집·표준화', period: '2026.05–06' },
      { phase: '개발', body: 'AI 기반 저탄소 공정 추천 알고리즘 1.0', period: '2026.06–08' },
      { phase: '베타', body: '플랫폼 베타 테스트 · PCF 로직 정확도 검증', period: '2026.08–09' },
      { phase: '고도화', body: '피드백 반영 UI/UX 개선 · 문서 자동화', period: '2026.09–10' },
    ],
  },

  // 팀 — 전부 사업계획서(_biz_plan.txt)·사업자등록증에 근거한 사실이다.
  // "36건" 은 사업계획서 '보유 역량'·'개발 동기'에 명시돼 있다. 확인되지 않은 경력은 쓰지 않는다.
  cta: {
    label: '도입 문의',
    h2: '저탄소 제조, 데이터로 시작하세요.',
    body: '지금 베타를 신청하면 파운딩 파트너로서 우선 온보딩과 초기 도입 혜택을 받습니다. 파트너 제조사 등록도 함께 문의하세요.',
    emailLabel: '이메일',
    kakaoLabel: '카카오톡',
    kakaoValue: 'matchfac eco 채널',
    betaLabel: '베타 오픈',
    betaValue: '2026 Q3 · 파운딩 파트너 모집 중',
    fCompany: '회사명',
    fCompanyPh: '주식회사 예시',
    fName: '담당자',
    fNamePh: '홍길동',
    fProcess: '공정 · 품목',
    fProcessPh: '사출 · PP 용기',
    fVolume: '예상 수량',
    fVolumePh: '120,000 EA',
    fNote: '문의 내용',
    fNotePh: 'CBAM 대응이 필요한 시점, 현재 생산 국가 등 알려주시면 도움이 됩니다.',
    submit: '베타 신청하기',
    noticeA: '보내기를 누르면 입력하신 내용이 담긴 메일 창이 열립니다. 실제로 메일을 보내신 경우에만 내용이 전달되며, 도입 상담 목적으로만 사용합니다. 자세한 내용은 ',
    noticeLink: '개인정보처리방침',
    noticeB: '을 확인하세요.',
    mailSubject: '[베타 신청]',
    mailFallback: '문의',
    mailCompany: '회사명',
    mailName: '담당자',
    mailProcess: '공정·품목',
    mailVolume: '예상 수량',
  },

  footer: {
    productLabel: '서비스',
    companyLabel: '회사',
    features: '핵심 기능',
    how: '작동 방식',
    sample: '예시 산정서',
    platform: '플랫폼',
    contact: '도입 문의',
    ceo: '대표',
    bizNo: '사업자등록번호',
    privacy: '개인정보처리방침',
    terms: '이용약관',
  },
}

const en: typeof ko = {
  brand: {
    name: 'matchfac eco',
    taglineEn: 'Your cost. Our carbon mission.',
    taglineKo: 'Data-driven low-carbon manufacturing platform',
    domain: 'matchfaceco.com',
    email: 'zeroto100.kr@gmail.com',
  },

  company: {
    legal: 'Zeroto100 INC.',
    legalEn: '주식회사 제로투백',
    ceo: 'Heejin Jung',
    bizNo: '142-88-03653',
    corpNo: '160111-0073236',
    addr: '3F, 28-12 Jeongnimdong-ro 7beon-gil, Seo-gu, Daejeon, Republic of Korea',
    since: 'Nov 2025',
  },

  nav: {
    home: 'matchfac eco home',
    links: [
      { href: '#features', label: 'Product' },
      { href: '#how', label: 'Methodology' },
      { href: '#platform', label: 'Platform' },
      { href: '#why', label: 'Why us' },
    ],
    cta: 'Join beta',
  },

  hero: {
    h1a: 'Choose the factory,',
    h1b: 'and the carbon falls.',
    body: 'Compare 30+ Vietnamese manufacturers on measured energy efficiency, then get an ISO 14067 product carbon footprint from a product spec alone — from picking a low-carbon plant to filing a CBAM or ESG report, in one flow.',
    cta: 'Join the beta',
    how: 'How we calculate',
    sample: 'See the full sample report',
    stats: [
      { label: 'Vietnamese manufacturers', value: '30', unit: '+' },
      { label: 'Average carbon cut', value: '18.6', unit: '%' },
      { label: 'Standard applied', value: 'ISO', unit: '14067' },
    ],
  },

  report: {
    title: 'Product Carbon Footprint Report',
    sampleTag: 'Sample',
    standard: 'ISO 14067 · Scope 2 + partial Scope 3 (logistics)',
    issuer: 'Issued by matchfac eco',
    notReal: 'Format sample · not an issued report',
    scanned: 'Manufacturer · scanned across 30+ in Vietnam',
    colKwh: 'kWh/1k',
    colRe: 'Renew.',
    colPcf: 'kgCO₂e/EA',
    picked: 'selected',
    vsAvg: 'vs. industry average, same process',
    factorNote: 'Grid factor — government-published national value',
    complianceNote: 'Ready for CBAM · ESG filing',
    docNo: 'PCF-2026-0413',
    spec: [
      { k: 'Process', v: 'Injection molding' },
      { k: 'Material', v: 'PP' },
      { k: 'Volume', v: '120,000 EA' },
    ],
    factories: [
      { name: 'GreenFactory Bình Dương', kwh: '412', re: '38%', pcf: '0.42', pick: true },
      { name: 'Long An Precision', kwh: '486', re: '12%', pcf: '0.49' },
      { name: 'Đồng Nai Molding', kwh: '523', re: '0%', pcf: '0.56' },
      { name: 'Hải Phòng Industrial', kwh: '571', re: '5%', pcf: '0.62' },
    ],
    cut: '18.6',
  },

  problem: {
    label: 'The gap',
    h2: 'The same product carries a different carbon load depending on which factory builds it.',
    sub: 'And nobody had the data to tell the difference.',
    facts: [
      { n: '30', u: '%+', d: 'The spread in energy use between plants running the same process on older or newer equipment. Today it is invisible at the point of decision.' },
      { n: '2028', u: '', d: 'Korean ESG disclosure becomes mandatory. With EU CBAM and CSRD landing alongside it, supplier emissions (Scope 3) become a precondition for exporting.' },
      { n: '0', u: '', d: 'Sourcing decisions actually made on process-level carbon and energy data. Price and lead time still decide everything.' },
    ],
    closing: ' closes that gap. We standardize power, equipment and logistics data from the factory floor, so that the choice that lowers your cost is the same choice that lowers your carbon.',
  },

  features: {
    label: 'Product',
    h2: 'Four capabilities, one continuous flow.',
    sub: 'Choosing a factory, calculating carbon, running production and answering regulators used to live in four separate tools. matchfac eco puts all of it on one dataset.',
    items: [
      {
        id: 'match',
        title: 'AI matching for low-carbon processes',
        body: 'For each process category — tooling, injection molding, sewing — we have built a database of power consumption, equipment efficiency and renewable share across 30+ Vietnamese manufacturers. Not another quote engine: an algorithm that cuts carbon at the moment you pick the plant.',
        points: ['kWh, equipment efficiency and renewable share by process', 'Measured energy-efficiency database, 30+ plants in Vietnam', 'Automatic recommendation of the lowest-carbon plant'],
      },
      {
        id: 'pcf',
        title: 'Lightweight PCF, calculated automatically',
        body: 'An ISO 14067 product carbon footprint covering manufacturing (Scope 2) and part of logistics (Scope 3). No multi-month life-cycle assessment — enter the product spec and the number comes back immediately.',
        points: ['Calculated from product spec and production conditions alone', 'National emission factors applied by country'],
      },
      {
        id: 'dashboard',
        title: 'One dashboard for the whole build',
        body: 'Prototype → mass production → inspection → shipping, tracked live on one screen. No metering hardware: we map your production conditions onto the plant equipment database to derive carbon and energy figures.',
        points: ['Live tracking across every stage', 'Carbon reports generated and downloadable'],
      },
      {
        id: 'compliance',
        title: 'A guide through global regulation',
        body: 'CBAM, ESG disclosure and CSRD status in one dashboard, with the data each regime demands wired in automatically — down to a first draft of the report. Compliance without an enterprise budget.',
        points: ['Required data wired in per regulation', 'First-draft disclosure reports', 'CBAM, CSRD and ESG covered together'],
      },
    ],
  },

  formula: {
    label: 'Methodology · ISO 14067',
    h2: 'Not an estimate. A calculation, on published standards.',
    formulaLabel: 'Product Carbon Footprint',
    boundary: 'Boundary — manufacturing Scope 2 + partial logistics Scope 3',
    bodyA: 'Every calculation rests on ',
    bodyStrong: 'published international standards and verifiable emission factors',
    bodyB: '. No arbitrary estimates, no undisclosed weightings — a lightweight PCF focused on the manufacturing and transport stages, where the carbon actually sits.',
    origin:
      'This started from the data gap we kept hitting across 36 manufacturing outsourcing projects we ran ourselves. ' +
      'Under a sourcing culture that looks only at price and lead time, carbon simply cannot be counted.',
    factorsLabel: 'Emission factor sources',
    standardsLabel: 'Standards applied',
    sampleLink: 'See a sample report',
    factors: [
      {
        k: 'Electricity',
        v: 'National grid emission factor',
        src: 'Vietnam — national grid factor published by the Department of Climate Change, MONRE (0.6592 tCO₂/MWh, confirmed for 2023) · Korea — government-published national factor',
      },
      { k: 'Materials', v: 'Material carbon factor database', src: 'PP · PE · ABS …' },
      { k: 'Logistics', v: 'Emission factors by transport mode', src: 'Sea · air · road' },
    ],
    standards: [
      { k: 'ISO 14067', v: 'Product-level carbon footprint quantification' },
      { k: 'GHG Protocol', v: 'Relevance · completeness · consistency · transparency · accuracy' },
      { k: 'CBAM', v: 'Reporting format for the EU carbon border mechanism' },
    ],
  },

  network: {
    label: 'On the ground · Vietnam',
    h2: 'Data is not made at a desk. It is made on the factory floor.',
    body: 'Working directly with local manufacturers, we standardized power consumption, equipment efficiency and renewable share for each process. The measured activity data becomes the carbon figure — nothing is inferred in between.',
    facts: [
      { k: 'Partner plants', v: '30+ in Vietnam', d: 'Measured energy-efficiency database by process category' },
      { k: 'What we collect', v: 'Power · equipment · renewables', d: 'kWh per process, equipment efficiency, renewable share' },
      { k: 'Standardization', v: 'Activity data → carbon figure', d: 'Measured data goes straight in as calculation input' },
    ],
  },

  platform: {
    label: 'Platform',
    h2: 'From prototype to shipping, on one screen.',
    body: 'We map plant equipment efficiency against your production conditions, so carbon and energy figures come out without a single meter installed. Prototype, mass production, logistics, PCF and the final report — all in one place.',
    mockTag: 'Sample screen',
    outcome: 'Four stages running on one dataset, ending in a single report you can actually file.',
    stages: [
      { label: 'Match', body: 'Enter process and volume → get a low-carbon plant', tag: 'Efficiency DB', hero: true },
      { label: 'Produce', body: 'Prototype → mass production → inspection', tag: 'Live' },
      { label: 'Calculate', body: 'Product carbon footprint, computed', tag: 'ISO 14067' },
      { label: 'Report', body: 'Generate and download the filing document', tag: 'CBAM' },
    ],
  },

  comparison: {
    label: 'Why us',
    h2: 'What neither a sourcing platform nor an ESG SaaS could do.',
    yes: 'Yes',
    no: 'No',
    cols: ['Sourcing platforms', 'ESG carbon SaaS', 'matchfac eco'],
    rows: [
      { label: 'Purpose', a: 'Requests and quotes', b: 'Company-level accounting', c: 'Low-carbon sourcing + production' },
      { label: 'Process energy DB', a: false, b: false, c: 'Power, equipment, renewables' },
      { label: 'Low-carbon recommendation', a: false, b: false, c: 'Efficiency-based algorithm' },
      { label: 'Production management', a: 'Partial / none', b: 'Inside the plant only', c: 'Prototype → shipping, end to end' },
      { label: 'Carbon in the decision', a: false, b: false, c: 'Lightweight Scope 2 logic' },
      { label: 'Who uses it', a: 'Buyers and plants', b: 'Enterprises and institutions', c: 'Manufacturers and startups alike' },
    ],
  },

  targets: {
    label: 'Who this is for',
    h2: 'For teams where regulation just became urgent.',
    timelineLabel: 'Roadmap · 2026',
    timelineH3: 'Seven months from design to launch.',
    items: [
      {
        title: 'Export-driven startups and SME manufacturers',
        body: 'Companies facing CBAM and ESG disclosure now. Evidence of supplier emissions (Scope 3) has become a condition of shipping abroad.',
      },
      {
        title: 'Companies producing in Vietnam',
        body: 'Teams that cannot get carbon data out of an overseas plant. We close the cross-border information gap with data.',
      },
      {
        title: 'First-time founders and D2C brands',
        body: 'Teams with no criteria for choosing a low-carbon plant at all. Decide on data, without hiring a specialist.',
      },
    ],
    timeline: [
      { phase: 'Design', body: 'Data architecture for low-carbon process comparison', period: 'Apr 2026' },
      { phase: 'Database', body: 'Collect and standardize plant energy data in Vietnam', period: 'May–Jun 2026' },
      { phase: 'Build', body: 'Low-carbon process recommendation algorithm 1.0', period: 'Jun–Aug 2026' },
      { phase: 'Beta', body: 'Platform beta and PCF accuracy validation', period: 'Aug–Sep 2026' },
      { phase: 'Refine', body: 'UX improvements and report automation', period: 'Sep–Oct 2026' },
    ],
  },

  cta: {
    label: 'Get in touch',
    h2: 'Start low-carbon manufacturing with data.',
    body: 'Join the beta now and come in as a founding partner — priority onboarding and early-adopter terms. Manufacturers looking to join the partner network can reach us here too.',
    emailLabel: 'Email',
    kakaoLabel: 'KakaoTalk',
    kakaoValue: 'matchfac eco channel',
    betaLabel: 'Beta opens',
    betaValue: 'Q3 2026 · recruiting founding partners',
    fCompany: 'Company',
    fCompanyPh: 'Acme Inc.',
    fName: 'Your name',
    fNamePh: 'Jane Doe',
    fProcess: 'Process · product',
    fProcessPh: 'Injection molding · PP container',
    fVolume: 'Expected volume',
    fVolumePh: '120,000 EA',
    fNote: 'Message',
    fNotePh: 'Tell us when you need CBAM compliance, where you currently produce, and anything else that helps.',
    submit: 'Join the beta',
    noticeA: 'Pressing send opens your mail client with the details filled in. Nothing reaches us unless you actually send the mail, and we use it only to answer your enquiry. See our ',
    noticeLink: 'Privacy Policy',
    noticeB: ' for details. (Korean)',
    mailSubject: '[Beta] ',
    mailFallback: 'Enquiry',
    mailCompany: 'Company',
    mailName: 'Contact',
    mailProcess: 'Process/product',
    mailVolume: 'Expected volume',
  },

  footer: {
    productLabel: 'Product',
    companyLabel: 'Company',
    features: 'Features',
    how: 'How it works',
    sample: 'Sample report',
    platform: 'Platform',
    contact: 'Contact',
    ceo: 'Founder',
    bizNo: 'Business reg. no.',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
  },
}

const t = pick(ko, en)

export const brand = t.brand
export const company = t.company
export const nav = t.nav
export const hero = t.hero
export const report = t.report
export const problem = t.problem
export const features = t.features
export const formula = t.formula
export const network = t.network
export const platform = t.platform
export const comparison = t.comparison
export const targets = t.targets
export const cta = t.cta
export const footer = t.footer
