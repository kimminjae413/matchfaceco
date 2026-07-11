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
        sans: ['Pretendard', 'Pretendard Variable', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        round: ['Quicksand', 'Pretendard', 'sans-serif'],
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
        card: '0 1px 2px rgba(8,54,48,0.04), 0 12px 32px -12px rgba(8,54,48,0.18)',
        'card-lg': '0 2px 4px rgba(8,54,48,0.05), 0 28px 60px -24px rgba(8,54,48,0.28)',
        glow: '0 0 0 1px rgba(49,236,87,0.25), 0 20px 60px -20px rgba(49,236,87,0.35)',
      },
      keyframes: {
        'blink': { '0%,100%': { opacity: '1' }, '50%': { opacity: '0' } },
        'drift': {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        blink: 'blink 1.1s step-end infinite',
        drift: 'drift 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
