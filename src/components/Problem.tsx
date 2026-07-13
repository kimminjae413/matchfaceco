// 문제 제기 — 'THE PROBLEM' 영어 대문자 아이브로와 둥근 카드 박스를 걷어내고,
// 큰 숫자 조판과 괘선만으로 세운다.
import { motion } from 'framer-motion'
import { fade, viewportOnce } from '../lib/motion'
import { brand, problem } from '../content'

export default function Problem() {
  return (
    <section id="why" className="bg-paper py-28 md:py-40">
      <div className="wrap">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={viewportOnce}>
          <div className="label">{problem.label}</div>

          <h2 className="mt-10 max-w-4xl text-balance font-display text-[30px] font-extrabold leading-[1.14] tracking-tightest text-ink sm:text-[46px]">
            {problem.h2}
          </h2>
          <p className="mt-6 max-w-xl text-[17px] leading-[1.7] text-ink/55">{problem.sub}</p>

          <div className="mt-20 grid gap-x-10 gap-y-12 border-t border-ink/15 pt-10 sm:grid-cols-3">
            {problem.facts.map((s) => (
              <div key={s.n + s.d.slice(0, 8)}>
                <div className="flex items-baseline gap-1">
                  <span className="tabular font-display text-[52px] font-extrabold leading-[0.9] tracking-tightest text-ink">
                    {s.n}
                  </span>
                  <span className="text-[22px] font-semibold text-ink/40">{s.u}</span>
                </div>
                <p className="mt-5 text-[14px] leading-[1.75] text-ink/55">{s.d}</p>
              </div>
            ))}
          </div>

          <p className="mt-16 max-w-2xl text-[17px] leading-[1.75] text-ink/70">
            <span className="font-semibold text-ink">{brand.name}</span>
            {problem.closing}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
