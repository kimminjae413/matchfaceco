// 상단 고정 내비게이션 — 최상단(다크 히어로 위)은 라이트, 스크롤 시 페이퍼 배경 + 다크.
import { useEffect, useState } from 'react'
import { LogoLockup } from './Wordmark'
import { brand } from '../content'

const links = [
  { href: '#features', label: '핵심 기능' },
  { href: '#how', label: '방법론' },
  { href: '#platform', label: '플랫폼' },
  { href: '#why', label: '차별점' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-ink/8 bg-paper/85 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <div className="wrap flex h-16 items-center justify-between">
        <a href="#top" aria-label="matchfac eco 홈">
          <LogoLockup dark={!scrolled} />
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-[14px] font-medium transition-colors ${
                scrolled ? 'text-ink/70 hover:text-ink' : 'text-paper/70 hover:text-paper'
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>
        {/* 문의 폼으로 보낸다 — 빈 메일 창을 열어주면 회사·공정·수량이 오지 않는다 */}
        <a
          href="#contact"
          className={`rounded-full px-4 py-2 text-[13px] font-semibold transition-colors ${
            scrolled ? 'bg-ink text-paper hover:bg-deep' : 'bg-signal text-ink hover:bg-signal-dim'
          }`}
        >
          베타 신청
        </a>
      </div>
    </header>
  )
}
