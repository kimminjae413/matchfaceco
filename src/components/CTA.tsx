// 최종 전환 섹션 — 구조화된 문의 폼.
//
// 기존에는 전환 수단이 mailto: 링크 하나뿐이었다. B2B 리드는 회사·담당자·공정·수량이
// 있어야 영업이 가능한데, 빈 메일 창을 열어주면 그 정보는 오지 않는다.
// GitHub Pages(정적 호스팅)라 서버가 없으므로, 입력값을 그대로 메일 본문으로 조립해
// 보내는 방식으로 만든다. 나중에 Formspree/Tally 같은 엔드포인트로 갈아끼우기만 하면 된다.
// (엔드포인트로 바꾸면 개인정보처리방침의 수집·위탁 항목도 같이 고쳐야 한다.)
import { useState } from 'react'
import { motion } from 'framer-motion'
import { fade, viewportOnce } from '../lib/motion'
import { brand, cta } from '../content'

const KAKAO_CHANNEL = 'http://pf.kakao.com/_hRxisX'

const field =
  'w-full rounded-lg border border-ink/15 bg-white px-4 py-3 text-[14px] text-ink ' +
  'placeholder:text-ink/30 focus:border-ink/40 focus:outline-none focus:ring-2 focus:ring-ink/10'

export default function CTA() {
  const [company, setCompany] = useState('')
  const [name, setName] = useState('')
  const [process, setProcess] = useState('')
  const [volume, setVolume] = useState('')
  const [note, setNote] = useState('')

  function send(e: React.FormEvent) {
    e.preventDefault()
    const body = [
      `${cta.mailCompany}: ${company}`,
      `${cta.mailName}: ${name}`,
      `${cta.mailProcess}: ${process}`,
      `${cta.mailVolume}: ${volume}`,
      '',
      note,
    ].join('\n')
    window.location.href =
      `mailto:${brand.email}` +
      `?subject=${encodeURIComponent(`${cta.mailSubject} ${company || cta.mailFallback}`)}` +
      `&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contact" className="border-t border-ink/10 bg-paper py-28 md:py-40">
      <div className="wrap grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-24">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={viewportOnce}>
          <div className="label">{cta.label}</div>

          <h2 className="mt-10 text-balance font-display text-[30px] font-extrabold leading-[1.14] tracking-tightest text-ink sm:text-[46px]">
            {cta.h2}
          </h2>
          <p className="mt-6 max-w-lg text-[17px] leading-[1.75] text-ink/60">{cta.body}</p>

          <dl className="mt-12 space-y-5 border-t border-ink/12 pt-8 text-[14px]">
            <div className="flex gap-6">
              <dt className="w-24 shrink-0 text-cool">{cta.emailLabel}</dt>
              <dd>
                <a
                  href={`mailto:${brand.email}`}
                  className="text-ink underline-offset-4 hover:underline"
                >
                  {brand.email}
                </a>
              </dd>
            </div>
            <div className="flex gap-6">
              <dt className="w-24 shrink-0 text-cool">{cta.kakaoLabel}</dt>
              <dd>
                <a
                  href={KAKAO_CHANNEL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink underline-offset-4 hover:underline"
                >
                  {cta.kakaoValue}
                </a>
              </dd>
            </div>
            <div className="flex gap-6">
              <dt className="w-24 shrink-0 text-cool">{cta.betaLabel}</dt>
              <dd className="text-ink/70">{cta.betaValue}</dd>
            </div>
          </dl>
        </motion.div>

        {/* 폼 */}
        <motion.form
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          onSubmit={send}
          className="rounded-2xl border border-ink/10 bg-paper-2/60 p-7 md:p-9"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-[13px] font-medium text-ink/70">{cta.fCompany}</span>
              <input
                className={field}
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder={cta.fCompanyPh}
                required
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-[13px] font-medium text-ink/70">{cta.fName}</span>
              <input
                className={field}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={cta.fNamePh}
                required
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-[13px] font-medium text-ink/70">{cta.fProcess}</span>
              <input
                className={field}
                value={process}
                onChange={(e) => setProcess(e.target.value)}
                placeholder={cta.fProcessPh}
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-[13px] font-medium text-ink/70">{cta.fVolume}</span>
              <input
                className={field}
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
                placeholder={cta.fVolumePh}
              />
            </label>
          </div>

          <label className="mt-4 block">
            <span className="mb-2 block text-[13px] font-medium text-ink/70">{cta.fNote}</span>
            <textarea
              className={`${field} min-h-[110px] resize-y`}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder={cta.fNotePh}
            />
          </label>

          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-ink px-6 py-3.5 text-[15px] font-semibold text-paper transition-colors hover:bg-deep"
          >
            {cta.submit}
          </button>

          <p className="mt-4 text-[12px] leading-relaxed text-cool">
            {cta.noticeA}
            <a
              href="/legal/privacy/"
              className="text-ink/70 underline underline-offset-2 hover:text-ink"
            >
              {cta.noticeLink}
            </a>
            {cta.noticeB}
          </p>
        </motion.form>
      </div>
    </section>
  )
}
