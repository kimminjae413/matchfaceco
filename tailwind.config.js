/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // 실제 BI 브랜드 팔레트 (Matchfac eco BI.pdf)
        ink: '#083630',        // Forest Ink — 가장 어두운 배경
        deep: '#084E3A',       // Deep Green — 다크 서피스
        signal: '#31EC57',     // Signature Green — 단 하나의 강조색
        'signal-dim': '#22B845',
        cool: '#767C86',       // Cool Gray
        navy: '#001B3E',       // Deep Navy
        carbon: '#05100C',     // 히어로용 초저명도 그린블랙
        paper: '#F6F8F4',      // 라이트 섹션 배경
        'paper-2': '#ECF1EA',
      },
      fontFamily: {
        // 헤드라인 전용 얼굴. Pretendard 기본값만 쓰던 조판이 'AI가 만든 티'의 큰 축이었다.
        display: ['"Wanted Sans Variable"', 'Pretendard', 'system-ui', 'sans-serif'],
        sans: ['Pretendard', 'Pretendard Variable', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      maxWidth: {
        wrap: '1200px',
      },
      spacing: {
        '4.5': '1.125rem',
        '5.5': '1.375rem',
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      boxShadow: {
        // 컬러 글로우(glow)는 제거. 문서가 지면 위에 놓인 느낌만 남긴다.
        card: '0 1px 2px rgba(8,54,48,0.04), 0 12px 32px -12px rgba(8,54,48,0.18)',
        'card-lg': '0 2px 4px rgba(8,54,48,0.05), 0 28px 60px -24px rgba(8,54,48,0.28)',
      },
    },
  },
  plugins: [],
}
