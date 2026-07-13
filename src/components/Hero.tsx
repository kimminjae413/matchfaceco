// 히어로 — Veo 영상(이슬 맺힌 잎·파랑새)을 배경으로 깔고, 그 위에 헤드라인과 산정서를 세운다.
// 다크 면은 근접 블랙(#05100C)이 아니라 BI 딥 포레스트다 — 근접 블랙 + 네온 조합 자체가
// 지금 가장 흔한 AI 랜딩 룩이기 때문.
//
// 영상 위에 흰 글씨를 얹으면 대비가 무너진다. 그래서 딥 포레스트 오버레이를 두 겹 깐다:
//   1) 브랜드 컬러 면(bg-ink/80) — 영상을 브랜드 톤으로 물들이고 명도를 눌러 글씨를 살린다
//   2) 좌→우 그라디언트 — 헤드라인이 앉는 왼쪽을 더 어둡게, 오른쪽은 영상이 숨쉬게
// prefers-reduced-motion 이면 영상을 재생하지 않고 poster 만 쓴다(접근성·데이터 절약).
import { motion, useReducedMotion } from 'framer-motion'
import { brand, hero } from '../content'
import { sampleReportHref } from '../lang'
import ReportSheet from './ReportSheet'

export default function Hero() {
  const reduce = useReducedMotion()
  const enter = reduce
    ? {}
    : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.5 } }

  return (
    <section id="top" className="relative isolate overflow-hidden bg-ink text-paper">
      {/* 배경 영상 — 자동재생·무음·루프. 로드 실패 시 poster 가 그대로 남는다. */}
      {reduce ? (
        <img
          src="/brand/hero-poster.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
      ) : (
        <video
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/brand/hero-poster.jpg"
          aria-hidden="true"
        >
          <source src="/brand/hero-web.mp4" type="video/mp4" />
        </video>
      )}

      {/* 가독성 오버레이 — 영상을 브랜드 톤으로 눌러 글씨를 살린다 */}
      <div className="absolute inset-0 -z-10 bg-ink/80" aria-hidden="true" />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/55"
        aria-hidden="true"
      />

      <div className="wrap grid items-center gap-14 pb-24 pt-36 md:pb-28 md:pt-40 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
        {/* 좌: 카피 */}
        <motion.div {...enter}>
          <h1 className="text-balance font-display text-[40px] font-extrabold leading-[1.06] tracking-tightest sm:text-[56px] lg:text-[62px]">
            {hero.h1a}<br />{hero.h1b}
          </h1>

          <p className="mt-7 max-w-xl text-[16px] leading-[1.7] text-paper/65 sm:text-[17px]">
            {hero.body}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-7">
            <a
              href="#contact"
              className="rounded-full bg-signal px-6 py-3.5 text-[15px] font-semibold text-ink transition-colors hover:bg-signal-dim"
            >
              {hero.cta}
            </a>
            <a
              href="#how"
              className="text-[15px] font-medium text-paper/70 underline-offset-4 transition-colors hover:text-paper hover:underline"
            >
              {hero.how}
            </a>
          </div>

          {/* 지표 — 알약 칩이 아니라 괘선 한 줄 위의 조용한 행 */}
          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-paper/15 pt-6">
            {hero.stats.map((s) => (
              <div key={s.label}>
                <dd className="flex items-baseline gap-0.5">
                  <span className="tabular font-display text-[26px] font-bold tracking-tight text-paper sm:text-[30px]">
                    {s.value}
                  </span>
                  <span className="text-[14px] font-semibold text-paper/50">{s.unit}</span>
                </dd>
                <dt className="mt-1 text-[12px] text-paper/50 sm:text-[13px]">{s.label}</dt>
              </div>
            ))}
          </dl>
        </motion.div>

        {/* 우: 제품이 실제로 발행하는 문서 */}
        <motion.div
          {...(reduce ? {} : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.6, delay: 0.15 } })}
        >
          <ReportSheet />
          {/* 구매자가 진짜 보고 싶은 건 설명이 아니라 산정서 한 장이다 — 바로 열어준다. */}
          <p className="mt-4 text-center text-[12px] text-paper/40">
            <a
              href={sampleReportHref}
              className="font-medium text-paper/60 underline underline-offset-4 transition-colors hover:text-paper"
            >
              {hero.sample}
            </a>
            <span className="mx-2 text-paper/25">·</span>
            {brand.taglineEn}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
