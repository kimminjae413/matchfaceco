// 경쟁 비교표 — matchfac eco 열을 강조한 라이트 톤 매트릭스.
import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'
import { comparison } from '../content'
import { IconCheck, IconX } from './icons'

function Cell({ v, own }: { v: string | boolean; own: boolean }) {
  if (v === true) return <IconCheck className={`mx-auto h-5 w-5 ${own ? 'text-signal' : 'text-ink/40'}`} />
  if (v === false) return <IconX className="mx-auto h-4.5 w-4.5 text-ink/20" />
  return <span className={`text-[13px] ${own ? 'font-semibold text-paper' : 'text-ink/60'}`}>{v}</span>
}

export default function Comparison() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="wrap">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce} className="mb-12 max-w-2xl">
          <motion.span variants={fadeUp} className="eyebrow">Why matchfac eco</motion.span>
          <motion.h2 variants={fadeUp} className="mt-4 text-[30px] font-bold leading-[1.2] tracking-tight text-ink sm:text-[40px]">
            매칭 플랫폼도, ESG SaaS도 하지 못하던 일.
          </motion.h2>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="overflow-x-auto"
        >
          <table className="w-full min-w-[680px] border-separate border-spacing-0">
            <thead>
              <tr>
                <th className="w-[26%] py-4 pr-4 text-left align-bottom text-[13px] font-medium text-cool" />
                {comparison.cols.map((c, i) => {
                  const own = i === 2
                  return (
                    <th
                      key={c}
                      className={`px-4 py-4 text-center align-bottom ${
                        own ? 'rounded-t-2xl bg-deep text-paper' : 'text-ink/70'
                      }`}
                    >
                      <span className={`text-[14px] font-semibold ${own ? 'text-paper' : ''}`}>{c}</span>
                    </th>
                  )
                })}
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((r, ri) => (
                <tr key={r.label}>
                  <td className="border-t border-ink/8 py-4 pr-4 text-[14px] font-medium text-ink">{r.label}</td>
                  <td className="border-t border-ink/8 px-4 py-4 text-center"><Cell v={r.a} own={false} /></td>
                  <td className="border-t border-ink/8 px-4 py-4 text-center"><Cell v={r.b} own={false} /></td>
                  <td
                    className={`bg-deep px-4 py-4 text-center ${
                      ri === comparison.rows.length - 1 ? 'rounded-b-2xl' : ''
                    }`}
                  >
                    <Cell v={r.c} own />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  )
}
