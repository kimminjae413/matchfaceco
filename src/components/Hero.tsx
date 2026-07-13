// 히어로 — 브랜드 딥 포레스트 지면 위에 헤드라인이 먼저 서고, 그 옆에 제품의 산출물이 놓인다.
// 걷어낸 것: 알약 배지 / 방사형 글로우 blob 2개 / 격자 배경 / 개발자 터미널 / 스태거 등장.
// 다크 면은 근접 블랙(#05100C)이 아니라 BI 딥 포레스트로 올린다 — 근접 블랙 + 네온 조합
// 자체가 지금 가장 흔한 AI 랜딩 룩이기 때문.
import { motion, useReducedMotion } from 'framer-motion'
import { brand, heroStats } from '../content'
import ReportSheet from './ReportSheet'

export default function Hero() {
  const reduce = useReducedMotion()
  const enter = reduce
    ? {}
    : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.5 } }

  return (
    <section id="top" className="bg-ink text-paper">
      <div className="wrap grid items-center gap-14 pb-24 pt-36 md:pb-28 md:pt-40 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
        {/* 좌: 카피 */}
        <motion.div {...enter}>
          <h1 className="text-balance font-display text-[40px] font-extrabold leading-[1.06] tracking-tightest sm:text-[56px] lg:text-[62px]">
            공장을 고르는 순간,<br />탄소가 줄어듭니다.
          </h1>

          <p className="mt-7 max-w-xl text-[16px] leading-[1.7] text-paper/65 sm:text-[17px]">
            베트남 제조사 30곳+의 에너지효율을 데이터로 비교하고, 제품 사양만 입력하면
            ISO 14067 기반 탄소발자국을 즉시 산정합니다. 저탄소 공장 선택부터 CBAM·ESG
            리포트까지, 한 흐름으로.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-7">
            <a
              href="#contact"
              className="rounded-full bg-signal px-6 py-3.5 text-[15px] font-semibold text-ink transition-colors hover:bg-signal-dim"
            >
              베타 신청하기
            </a>
            <a
              href="#how"
              className="text-[15px] font-medium text-paper/70 underline-offset-4 transition-colors hover:text-paper hover:underline"
            >
              어떻게 계산하나요
            </a>
          </div>

          {/* 지표 — 알약 칩이 아니라 괘선 한 줄 위의 조용한 행 */}
          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-paper/15 pt-6">
            {heroStats.map((s) => (
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
          <p className="mt-4 text-center text-[12px] text-paper/40">
            {brand.taglineEn}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
