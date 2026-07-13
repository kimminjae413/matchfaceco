// 현지 네트워크 밴드 — 다크 면 하나로 흐름을 끊는다.
//
// 제거한 것:
//  - 공장 작업자 사진: 브랜드 로고가 박힌 헬멧·작업복을 입은 AI 생성 목업이었다.
//    실사인 척하는 자리에 AI 렌더를 두면, 실제 현장 데이터를 판다는 주장 자체가 흔들린다.
//    실사가 확보되면 그때 넣는다.
//  - 알약 배지 / 방사형 글로우 / 격자 배경.
//
// (2026-07-13) "36건 제조 아웃소싱 경험"을 근거 없다며 지웠던 건 오판이었다 —
// 사업계획서에 명시돼 있고, 지금은 Team 섹션에서 제대로 쓴다.
import { motion } from 'framer-motion'
import { fade, viewportOnce } from '../lib/motion'
import { network } from '../content'

export default function VisualBand() {
  return (
    <section className="bg-deep py-24 text-paper md:py-32">
      <div className="wrap">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={viewportOnce}>
          <div className="label-light">{network.label}</div>

          <h2 className="mt-10 max-w-3xl text-balance font-display text-[28px] font-extrabold leading-[1.16] tracking-tightest sm:text-[42px]">
            {network.h2}
          </h2>
          <p className="mt-6 max-w-2xl text-[16px] leading-[1.75] text-paper/60 sm:text-[17px]">
            {network.body}
          </p>

          <dl className="mt-16 grid gap-x-10 gap-y-10 border-t border-paper/15 pt-10 md:grid-cols-3">
            {network.facts.map((f) => (
              <div key={f.k}>
                <dt className="text-[12px] text-paper/45">{f.k}</dt>
                <dd className="mt-2 font-display text-[20px] font-bold tracking-tight text-paper">
                  {f.v}
                </dd>
                <p className="mt-2.5 text-[13px] leading-relaxed text-paper/50">{f.d}</p>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  )
}
