// 타깃 고객 3 + 추진 일정 — 누구를 위한 것인지와 로드맵을 함께 보여준다.
import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'
import { targets, timeline } from '../content'

export default function Targets() {
  return (
    <section className="bg-ink py-24 text-paper md:py-32">
      <div className="wrap">
        {/* 타깃 */}
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce} className="max-w-2xl">
          <motion.span variants={fadeUp} className="eyebrow-light">Who it's for</motion.span>
          <motion.h2 variants={fadeUp} className="mt-4 text-[30px] font-bold leading-[1.2] tracking-tight sm:text-[38px]">
            규제가 발등의 불이 된 팀을 위해.
          </motion.h2>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce} className="mt-12 grid gap-4 md:grid-cols-3">
          {targets.map((t) => (
            <motion.div key={t.tag} variants={fadeUp} className="rounded-2xl border border-paper/10 bg-white/[0.03] p-6">
              <span className="inline-block rounded-md bg-signal/12 px-2 py-1 font-mono text-[11px] tracking-wider text-signal">{t.tag}</span>
              <h3 className="mt-4 text-[17px] font-bold leading-snug text-paper">{t.title}</h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-paper/55">{t.body}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* 추진 일정 */}
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce} className="mt-20">
          <motion.span variants={fadeUp} className="eyebrow-light">Roadmap · 2026</motion.span>
          <motion.h3 variants={fadeUp} className="mt-3 text-[22px] font-bold sm:text-[26px]">기획에서 상용화까지, 7개월.</motion.h3>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {timeline.map((t, i) => (
              <motion.div
                key={t.phase}
                variants={fadeUp}
                className="relative rounded-2xl border border-paper/10 bg-white/[0.02] p-5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[12px] font-bold text-signal">{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-mono text-[10px] text-paper/40">{t.period}</span>
                </div>
                <h4 className="mt-3 text-[15px] font-bold text-paper">{t.phase}</h4>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-paper/50">{t.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
