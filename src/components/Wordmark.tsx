// matchfac eco 브랜드 로고 — 고객사 제공 BI(Matchfac eco BI.pdf)의 공식 벡터 아트워크를
// 그대로 추출한 이미지 에셋을 사용합니다. (심볼 + 워드마크 라이트/다크 2종)
import symbolSrc from '../assets/brand/symbol.png'
import wordmarkDarkSrc from '../assets/brand/wordmark-dark.png'   // 딥그린 글자 — 라이트 배경용
import wordmarkWhiteSrc from '../assets/brand/wordmark-white.png' // 흰 글자 — 다크 배경용

type MarkProps = { className?: string }

// 심볼(로고마크): 겹친 잎사귀 두 개가 'm'을 이루고 교집합에 흰 잎 — 어느 배경에서나 사용 가능
export function Logomark({ className = 'h-8 w-auto' }: MarkProps) {
  return <img src={symbolSrc} alt="matchfac eco 심볼" className={className} draggable={false} />
}

// 워드마크: 커스텀 M + atchfac + eco. dark=true → 다크 배경용(흰 글자)
export function Wordmark({
  className = 'h-[18px] w-auto',
  dark = false,
}: { className?: string; dark?: boolean }) {
  return (
    <img
      src={dark ? wordmarkWhiteSrc : wordmarkDarkSrc}
      alt="matchfac eco"
      className={className}
      draggable={false}
    />
  )
}

// 로고마크 + 워드마크 잠금 조합 (네비/푸터용)
export function LogoLockup({ dark = false, className = '' }: { dark?: boolean; className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <Logomark className="h-8 w-auto" />
      <Wordmark className="h-[18px] w-auto" dark={dark} />
    </div>
  )
}
