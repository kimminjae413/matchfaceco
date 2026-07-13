// 핵심 4기능 — 벤토 그리드를 버린다.
// 기존 구조는 6칸 그리드에 4+2 / 2+2 로 짜여 마지막 두 칸이 빈 채 남는 실제 레이아웃 결함이었다.
// 번호(01–04)는 장식이 아니라 실제 파이프라인 순서를 뜻한다: 매칭 → 산정 → 관리 → 규제.
// 그래서 번호를 쓰되, 아이콘 사각형과 체크 알약 불릿은 걷어낸다.
import { motion } from 'framer-motion'
import { fade, viewportOnce } from '../lib/motion'
import { features } from '../content'

export default function Features() {
  return (
    <section id="features" className="border-t border-ink/10 bg-paper py-28 md:py-40">
      <div className="wrap">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={viewportOnce}>
          <div className="label">핵심 기능</div>

          <h2 className="mt-10 max-w-3xl text-balance font-display text-[30px] font-extrabold leading-[1.14] tracking-tightest text-ink sm:text-[46px]">
            네 가지 기능이 하나의 흐름으로 이어집니다.
          </h2>
          <p className="mt-6 max-w-2xl text-[17px] leading-[1.75] text-ink/55">
            공장을 고르고, 탄소를 계산하고, 생산을 관리하고, 규제에 대응하는 일이 각각의
            도구로 흩어져 있었습니다. matchfac eco는 이 전 과정을 한 데이터 위에 올립니다.
          </p>

          <div className="mt-20">
            {features.map((f, i) => (
              <article
                key={f.id}
                className="grid gap-6 border-t border-ink/12 py-12 md:grid-cols-[5rem_1fr_1fr] md:gap-10 md:py-14"
              >
                <div className="tabular font-display text-[15px] font-bold text-ink/25">
                  {String(i + 1).padStart(2, '0')}
                </div>

                <h3 className="font-display text-[22px] font-bold leading-[1.28] tracking-tightest text-ink md:text-[27px]">
                  {f.title}
                </h3>

                <div>
                  <p className="text-[15px] leading-[1.8] text-ink/60">{f.body}</p>
                  <ul className="mt-6 space-y-2">
                    {f.points.map((p) => (
                      <li key={p} className="flex gap-3 text-[14px] leading-relaxed text-ink/50">
                        <span className="mt-[10px] h-px w-4 shrink-0 bg-signal-dim" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
