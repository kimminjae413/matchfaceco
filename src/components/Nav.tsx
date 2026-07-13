// 상단 고정 내비게이션 — 최상단(다크 히어로 위)은 라이트, 스크롤 시 페이퍼 배경 + 다크.
// 언어 토글(KO/EN)은 링크로 페이지를 다시 연다 — 상태 관리도, 라우터도 필요 없다.
import { useEffect, useState } from 'react'
import { LogoLockup } from './Wordmark'
import { nav } from '../content'
import { otherLangHref, otherLangLabel } from '../lang'

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
      <div className="wrap flex h-16 items-center justify-between gap-4">
        <a href="#top" aria-label={nav.home}>
          <LogoLockup dark={!scrolled} />
        </a>
        <nav className="hidden items-center gap-7 lg:flex">
          {nav.links.map((l) => (
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

        <div className="flex items-center gap-3">
          <a
            href={otherLangHref}
            className={`rounded-full border px-2.5 py-1 text-[12px] font-semibold tracking-wide transition-colors ${
              scrolled
                ? 'border-ink/20 text-ink/60 hover:border-ink/40 hover:text-ink'
                : 'border-paper/25 text-paper/70 hover:border-paper/60 hover:text-paper'
            }`}
          >
            {otherLangLabel}
          </a>
          {/* 문의 폼으로 보낸다 — 빈 메일 창을 열어주면 회사·공정·수량이 오지 않는다 */}
          <a
            href="#contact"
            className={`rounded-full px-4 py-2 text-[13px] font-semibold transition-colors ${
              scrolled ? 'bg-ink text-paper hover:bg-deep' : 'bg-signal text-ink hover:bg-signal-dim'
            }`}
          >
            {nav.cta}
          </a>
        </div>
      </div>
    </header>
  )
}
