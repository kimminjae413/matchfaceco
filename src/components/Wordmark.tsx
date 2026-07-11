// matchfac eco 브랜드 워드마크와 잎사귀 로고마크를 SVG/텍스트로 재현한 컴포넌트.

type MarkProps = { className?: string }

// 앱 아이콘의 잎사귀 심볼 — 둥근 컨테이너 + 흰 잎
export function Logomark({ className = 'h-9 w-9' }: MarkProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} role="img" aria-label="matchfac eco 심볼">
      <defs>
        <linearGradient id="mf-leaf" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#31EC57" />
          <stop offset="1" stopColor="#22B845" />
        </linearGradient>
      </defs>
      {/* 뒤쪽 딥그린 라운드 블롭 (m의 잔상) */}
      <rect x="4" y="7" width="26" height="34" rx="13" fill="#084E3A" />
      {/* 앞쪽 시그니처 그린 라운드 블롭 (a) */}
      <rect x="16" y="7" width="28" height="34" rx="14" fill="url(#mf-leaf)" />
      {/* 흰 잎 */}
      <path
        d="M30 15c-6 1.6-10 6.2-10 12 0 3 1.1 5.3 2.7 6.9C24 30.5 27.5 26 33 23.2 28.8 26.8 26.4 31 25.4 34.6c1 .3 2.1.4 3.1.3 5.7-.6 9.5-5.4 9.5-11.4 0-4.2-1.9-7.3-3-8.6-2-.2-5-.6-8-0z"
        fill="#F6F8F4"
      />
      {/* 잎맥 */}
      <path d="M31.5 18.5C27 22 24.5 26.5 23.8 31.8" stroke="#22B845" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.55" />
    </svg>
  )
}

// 워드마크: matchfac(다크) + eco(시그니처 그린), 라운드 지오메트릭
export function Wordmark({
  className = '',
  dark = false,
}: { className?: string; dark?: boolean }) {
  return (
    <span
      className={`font-round font-bold tracking-tight leading-none ${className}`}
      aria-label="matchfac eco"
    >
      <span className={dark ? 'text-paper' : 'text-ink'}>matchfac</span>
      <span className="text-signal">eco</span>
    </span>
  )
}

// 로고마크 + 워드마크 잠금 조합 (네비/푸터용)
export function LogoLockup({ dark = false, className = '' }: { dark?: boolean; className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <Logomark className="h-8 w-8" />
      <Wordmark className="text-[22px]" dark={dark} />
    </div>
  )
}
