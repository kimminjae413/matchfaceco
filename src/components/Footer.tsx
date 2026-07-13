// 푸터 — 브랜드 + 사업자 등록 정보(㈜제로투백) + 연락처.
import { LogoLockup } from './Wordmark'
import { brand, company } from '../content'

export default function Footer() {
  return (
    <footer className="border-t border-ink/8 bg-paper py-14">
      <div className="wrap">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <LogoLockup />
            <p className="mt-4 text-[14px] leading-relaxed text-ink/60">
              {brand.taglineKo}<br />
              <span className="font-mono text-[12px] text-cool">{brand.taglineEn}</span>
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {/* 영어 대문자 모노 라벨(PRODUCT/COMPANY)은 한국어 사이트에 얹힌 장식이었다.
                구매·ESG 담당자가 읽는 문서에는 읽히는 말을 쓴다. */}
            <nav className="flex flex-col gap-2.5 text-[14px]">
              <span className="mb-1 text-[12px] font-semibold text-cool">서비스</span>
              <a href="#features" className="text-ink/60 transition-colors hover:text-ink">핵심 기능</a>
              <a href="#how" className="text-ink/60 transition-colors hover:text-ink">작동 방식</a>
              <a href="/sample-report/" className="text-ink/60 transition-colors hover:text-ink">예시 산정서</a>
              <a href="#platform" className="text-ink/60 transition-colors hover:text-ink">플랫폼</a>
              <a href={`mailto:${brand.email}`} className="text-ink/60 transition-colors hover:text-ink">도입 문의</a>
            </nav>
            <div className="flex flex-col gap-2.5 text-[13px] text-ink/60">
              <span className="mb-1 text-[12px] font-semibold text-cool">회사</span>
              <span>{company.legal} <span className="text-cool">({company.legalEn})</span></span>
              <span>대표 {company.ceo}</span>
              <span className="font-mono text-[12px]">사업자등록번호 {company.bizNo}</span>
              <span>{company.addr}</span>
              <a href={`mailto:${brand.email}`} className="font-mono text-[12px] text-ink/70 transition-colors hover:text-signal-dim">{brand.email}</a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-ink/8 pt-6 text-[12px] text-cool sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 {company.legal}. All rights reserved.</span>
          <div className="flex items-center gap-5">
            <a href="/legal/privacy/" className="font-medium text-ink/60 transition-colors hover:text-ink">개인정보처리방침</a>
            <a href="/legal/terms/" className="transition-colors hover:text-ink">이용약관</a>
            <span className="font-mono">{brand.domain}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
