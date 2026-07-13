// 경쟁 비교표.
// 기존에는 matchfac eco 열 전체에 진한 bg-deep 을 깔고 헤더 셀을 rounded-t 로 띄워서,
// 스크롤 중 고정 내비 아래로 파고들며 열 머리가 잘려 보이는 결함이 있었다.
// 배경을 아주 옅은 면으로 낮추고 강조는 글자 굵기와 색으로만 준다.
// ✓/✗ 아이콘도 '지원 / 없음' 이라는 말로 바꾼다 — 표는 읽는 것이지 해독하는 게 아니다.
import { motion } from 'framer-motion'
import { fade, viewportOnce } from '../lib/motion'
import { comparison } from '../content'

function Cell({ v, own }: { v: string | boolean; own: boolean }) {
  if (v === true) return <span className={own ? 'font-semibold text-ink' : 'text-ink/50'}>지원</span>
  if (v === false) return <span className="text-ink/25">없음</span>
  return <span className={own ? 'font-semibold text-ink' : 'text-ink/55'}>{v}</span>
}

export default function Comparison() {
  return (
    <section className="border-t border-ink/10 bg-paper py-28 md:py-40">
      <div className="wrap">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={viewportOnce}>
          <div className="label">차별점</div>

          <h2 className="mt-10 max-w-3xl text-balance font-display text-[30px] font-extrabold leading-[1.14] tracking-tightest text-ink sm:text-[46px]">
            매칭 플랫폼도, ESG SaaS도 하지 못하던 일.
          </h2>

          <div className="mt-14 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse">
              <thead>
                <tr className="border-b border-ink/15">
                  <th className="w-[22%] py-5 pr-4 text-left" />
                  {comparison.cols.map((c, i) => {
                    const own = i === 2
                    return (
                      <th
                        key={c}
                        className={`px-4 py-5 text-left text-[13px] font-semibold ${
                          own ? 'bg-ink/[0.04] text-ink' : 'text-cool'
                        }`}
                      >
                        {c}
                      </th>
                    )
                  })}
                </tr>
              </thead>
              <tbody>
                {comparison.rows.map((r) => (
                  <tr key={r.label} className="border-b border-ink/10">
                    <td className="py-5 pr-4 align-top text-[14px] font-semibold text-ink">
                      {r.label}
                    </td>
                    <td className="px-4 py-5 align-top text-[14px] leading-relaxed">
                      <Cell v={r.a} own={false} />
                    </td>
                    <td className="px-4 py-5 align-top text-[14px] leading-relaxed">
                      <Cell v={r.b} own={false} />
                    </td>
                    <td className="bg-ink/[0.04] px-4 py-5 align-top text-[14px] leading-relaxed">
                      <Cell v={r.c} own />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
