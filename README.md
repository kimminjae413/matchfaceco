# matchfac eco — 랜딩페이지

㈜제로투백(Zeroto100 INC.)의 **matchfac eco** — 데이터 기반 친환경 제조 매칭 플랫폼 — B2B 인바운드 랜딩페이지.

- **도메인**: matchfaceco.com
- **문의**: zeroto100.kr@gmail.com
- **스택**: Vite + React 18 + TypeScript + Tailwind CSS v3 + framer-motion
- **언어**: 한국어 메인 (영문 태그라인 병기)

## 개발

```bash
npm install
npm run dev      # http://localhost:5178
npm run build    # dist/ 생성
npm run preview
```

## 구조

- `src/content.ts` — 모든 카피·수치·데이터의 단일 소스 (자료 3종 기반)
- `src/components/` — 섹션별 컴포넌트 (Nav, Hero, Problem, Features, Formula, Platform, Comparison, Targets, CTA, Footer)
- `src/components/DashboardMock.tsx` — BI 자료 재현 대시보드 (카운터·막대·게이지 애니메이션)
- `src/components/Wordmark.tsx` — 브랜드 워드마크·잎사귀 로고마크 (SVG)
- `src/lib/motion.ts` — framer-motion 공통 variants
- `tailwind.config.js` — 실제 BI 브랜드 팔레트 토큰

## 디자인 근거

- 컬러: Forest Ink `#083630` · Deep Green `#084E3A` · Signature Green `#31EC57`(단일 강조색) · Cool Gray `#767C86` · Deep Navy `#001B3E`
- 폰트: Pretendard(본문·헤딩) · JetBrains Mono(데이터) · Quicksand(워드마크)
- 시그니처: 히어로의 "탄소 원장" 터미널 — `PCF = Σ(Activity × EF)` 실시간 산정

## 배포

`npm run build` 후 `dist/`를 정적 호스팅(Netlify/Vercel/GitHub Pages 등)에 올리고
matchfaceco.com 도메인을 연결한다. 순수 정적 SPA라 서버가 필요 없다.
