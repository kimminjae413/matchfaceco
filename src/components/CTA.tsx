// 최종 전환 섹션 — 구조화된 문의 폼.
//
// 기존에는 전환 수단이 mailto: 링크 하나뿐이었다. B2B 리드는 회사·담당자·공정·수량이
// 있어야 영업이 가능한데, 빈 메일 창을 열어주면 그 정보는 오지 않는다.
// GitHub Pages(정적 호스팅)라 서버가 없으므로, 입력값을 그대로 메일 본문으로 조립해
// 보내는 방식으로 만든다. 나중에 Formspree/Tally 같은 엔드포인트로 갈아끼우기만 하면 된다.
import { useState } from 'react'
import { motion } from 'framer-motion'
import { fade, viewportOnce } from '../lib/motion'
import { brand } from '../content'

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
      `회사명: ${company}`,
      `담당자: ${name}`,
      `공정·품목: ${process}`,
      `예상 수량: ${volume}`,
      '',
      note,
    ].join('\n')
    window.location.href =
      `mailto:${brand.email}` +
      `?subject=${encodeURIComponent(`[베타 신청] ${company || '문의'}`)}` +
      `&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contact" className="border-t border-ink/10 bg-paper py-28 md:py-40">
      <div className="wrap grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-24">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={viewportOnce}>
          <div className="label">도입 문의</div>

          <h2 className="mt-10 text-balance font-display text-[30px] font-extrabold leading-[1.14] tracking-tightest text-ink sm:text-[46px]">
            저탄소 제조, 데이터로 시작하세요.
          </h2>
          <p className="mt-6 max-w-lg text-[17px] leading-[1.75] text-ink/60">
            지금 베타를 신청하면 파운딩 파트너로서 우선 온보딩과 초기 도입 혜택을 받습니다.
            파트너 제조사 등록도 함께 문의하세요.
          </p>

          <dl className="mt-12 space-y-5 border-t border-ink/12 pt-8 text-[14px]">
            <div className="flex gap-6">
              <dt className="w-20 shrink-0 text-cool">이메일</dt>
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
              <dt className="w-20 shrink-0 text-cool">카카오톡</dt>
              <dd>
                <a
                  href={KAKAO_CHANNEL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink underline-offset-4 hover:underline"
                >
                  matchfac eco 채널
                </a>
              </dd>
            </div>
            <div className="flex gap-6">
              <dt className="w-20 shrink-0 text-cool">베타 오픈</dt>
              <dd className="text-ink/70">2026 Q3 · 파운딩 파트너 모집 중</dd>
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
              <span className="mb-2 block text-[13px] font-medium text-ink/70">회사명</span>
              <input
                className={field}
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="주식회사 예시"
                required
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-[13px] font-medium text-ink/70">담당자</span>
              <input
                className={field}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="홍길동"
                required
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-[13px] font-medium text-ink/70">공정 · 품목</span>
              <input
                className={field}
                value={process}
                onChange={(e) => setProcess(e.target.value)}
                placeholder="사출 · PP 용기"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-[13px] font-medium text-ink/70">예상 수량</span>
              <input
                className={field}
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
                placeholder="120,000 EA"
              />
            </label>
          </div>

          <label className="mt-4 block">
            <span className="mb-2 block text-[13px] font-medium text-ink/70">문의 내용</span>
            <textarea
              className={`${field} min-h-[110px] resize-y`}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="CBAM 대응이 필요한 시점, 현재 생산 국가 등 알려주시면 도움이 됩니다."
            />
          </label>

          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-ink px-6 py-3.5 text-[15px] font-semibold text-paper transition-colors hover:bg-deep"
          >
            베타 신청하기
          </button>

          <p className="mt-4 text-[12px] leading-relaxed text-cool">
            보내기를 누르면 입력하신 내용이 담긴 메일 창이 열립니다. 실제로 메일을 보내신 경우에만
            내용이 전달되며, 도입 상담 목적으로만 사용합니다. 자세한 내용은{' '}
            <a
              href="/legal/privacy/"
              className="text-ink/70 underline underline-offset-2 hover:text-ink"
            >
              개인정보처리방침
            </a>
            을 확인하세요.
          </p>
        </motion.form>
      </div>
    </section>
  )
}
