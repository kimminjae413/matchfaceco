// 핵심 4기능 — 동일 카드 반복 대신 비대칭 bento + 기능별 고유 비주얼.
import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'
import { features } from '../content'
import { IconMatch, IconCalc, IconDashboard, IconShield, IconCheck } from './icons'

const icons = { match: IconMatch, pcf: IconCalc, dashboard: IconDashboard, compliance: IconShield }

export default function Features() {
  return (
    <section id="features" className="bg-ink py-24 text-paper md:py-32">
      <div className="wrap">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce} className="max-w-2xl">
          <motion.span variants={fadeUp} className="eyebrow-light">Core Capabilities</motion.span>
          <motion.h2 variants={fadeUp} className="mt-4 text-[30px] font-bold leading-[1.2] tracking-tight sm:text-[40px]">
            네 가지 기능이 하나의 흐름으로 이어집니다.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-[16px] leading-relaxed text-paper/60">
            공장을 고르고, 탄소를 계산하고, 생산을 관리하고, 규제에 대응하는 일이 각각의 도구로 흩어져 있었습니다.
            matchfac eco는 이 전 과정을 한 데이터 위에 올립니다.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-4 md:grid-cols-6"
        >
          {features.map((f, i) => {
            const Icon = icons[f.id as keyof typeof icons]
            // 01, 04 는 넓게 (3col), 02, 03 은 (3col) — 2x2 이지만 첫 카드 강조
            const wide = i === 0
            return (
              <motion.article
                key={f.id}
                variants={fadeUp}
                className={`group relative overflow-hidden rounded-2xl border border-paper/10 bg-white/[0.03] p-7 transition-colors hover:border-signal/30 hover:bg-white/[0.05] ${
                  wide ? 'md:col-span-6 lg:col-span-4' : 'md:col-span-3 lg:col-span-2'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-signal/12 text-signal">
                    <Icon className="h-5.5 w-5.5" />
                  </div>
                  <span className="font-mono text-[11px] tracking-widest text-paper/30">{f.kicker}</span>
                </div>

                <h3 className="mt-5 text-[19px] font-bold text-paper">{f.title}</h3>
                <p className={`mt-2.5 text-[14px] leading-relaxed text-paper/55 ${wide ? 'max-w-lg' : ''}`}>{f.body}</p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {f.points.map((p) => (
                    <li key={p} className="inline-flex items-center gap-1.5 rounded-full bg-signal/8 px-2.5 py-1 text-[12px] text-paper/70">
                      <IconCheck className="h-3.5 w-3.5 text-signal" />
                      {p}
                    </li>
                  ))}
                </ul>

                {/* 넓은 카드에는 은은한 그린 데코 */}
                {wide && (
                  <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-signal/10 blur-3xl transition-opacity group-hover:opacity-150" />
                )}
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
