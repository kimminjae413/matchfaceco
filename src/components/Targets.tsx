// 타깃 고객 3 + 추진 일정.
// EXPORT SME / OVERSEAS OEM / D2C FOUNDER 같은 영어 대문자 태그를 걷어낸다 —
// 한국 제조기업 담당자에게 영어 코드네임은 정보가 아니라 장식이었다.
// 일정의 번호는 실제 순서를 뜻하므로 남긴다.
import { motion } from 'framer-motion'
import { fade, viewportOnce } from '../lib/motion'
import { targets } from '../content'

export default function Targets() {
  return (
    <section className="bg-ink py-28 text-paper md:py-40">
      <div className="wrap">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={viewportOnce}>
          <div className="label-light">{targets.label}</div>

          <h2 className="mt-10 max-w-3xl text-balance font-display text-[30px] font-extrabold leading-[1.14] tracking-tightest sm:text-[46px]">
            {targets.h2}
          </h2>

          <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
            {targets.items.map((t) => (
              <article key={t.title} className="border-t border-paper/20 pt-6">
                <h3 className="font-display text-[18px] font-bold leading-[1.45] tracking-tight text-paper">
                  {t.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.75] text-paper/55">{t.body}</p>
              </article>
            ))}
          </div>

          {/* 추진 일정 — 순서가 정보인 구간이라 번호를 유지한다 */}
          <div className="mt-28">
            <div className="label-light">{targets.timelineLabel}</div>
            <h3 className="mt-8 font-display text-[24px] font-bold tracking-tightest sm:text-[30px]">
              {targets.timelineH3}
            </h3>

            <dl className="mt-10">
              {targets.timeline.map((t, i) => (
                <div
                  key={t.phase}
                  className="grid gap-2 border-t border-paper/15 py-5 sm:grid-cols-[3rem_7rem_1fr] sm:items-baseline sm:gap-6"
                >
                  <div className="tabular font-display text-[14px] font-bold text-paper/30">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <dt className="font-display text-[15px] font-bold text-paper">{t.phase}</dt>
                  <dd className="flex flex-wrap items-baseline gap-x-4 text-[14px] text-paper/55">
                    <span>{t.body}</span>
                    <span className="tabular text-[13px] text-paper/35">{t.period}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
