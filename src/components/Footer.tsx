// 푸터 — 브랜드 + 사업자 등록 정보(㈜제로투백) + 연락처 + 법적 고지.
// 영어 대문자 모노 라벨(PRODUCT/COMPANY)은 한국어 사이트에 얹힌 장식이었다. 읽히는 말을 쓴다.
import { LogoLockup } from './Wordmark'
import { brand, company, footer } from '../content'
import { sampleReportHref } from '../lang'

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
            <nav className="flex flex-col gap-2.5 text-[14px]">
              <span className="mb-1 text-[12px] font-semibold text-cool">{footer.productLabel}</span>
              <a href="#features" className="text-ink/60 transition-colors hover:text-ink">{footer.features}</a>
              <a href="#how" className="text-ink/60 transition-colors hover:text-ink">{footer.how}</a>
              <a href={sampleReportHref} className="text-ink/60 transition-colors hover:text-ink">{footer.sample}</a>
              <a href="#platform" className="text-ink/60 transition-colors hover:text-ink">{footer.platform}</a>
              <a href="#team" className="text-ink/60 transition-colors hover:text-ink">{footer.team}</a>
              <a href={`mailto:${brand.email}`} className="text-ink/60 transition-colors hover:text-ink">{footer.contact}</a>
            </nav>
            <div className="flex flex-col gap-2.5 text-[13px] text-ink/60">
              <span className="mb-1 text-[12px] font-semibold text-cool">{footer.companyLabel}</span>
              <span>{company.legal} <span className="text-cool">({company.legalEn})</span></span>
              <span>{footer.ceo} {company.ceo}</span>
              <span className="font-mono text-[12px]">{footer.bizNo} {company.bizNo}</span>
              <span>{company.addr}</span>
              <a href={`mailto:${brand.email}`} className="font-mono text-[12px] text-ink/70 transition-colors hover:text-signal-dim">{brand.email}</a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-ink/8 pt-6 text-[12px] text-cool sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 {company.legal}. All rights reserved.</span>
          <div className="flex items-center gap-5">
            <a href="/legal/privacy/" className="font-medium text-ink/60 transition-colors hover:text-ink">{footer.privacy}</a>
            <a href="/legal/terms/" className="transition-colors hover:text-ink">{footer.terms}</a>
            <span className="font-mono">{brand.domain}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
