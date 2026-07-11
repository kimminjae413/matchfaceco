// 현장 비주얼 밴드 — 실제 브랜드 공장 이미지로 텍스트 흐름을 부드럽게 끊는 섹션.
import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'
import { IconLeaf } from './icons'

const bandStats = [
  { value: '30곳+', label: '베트남 파트너 제조사' },
  { value: '0.56', label: 'kgCO₂e/kWh · VN 전력계수' },
  { value: '36건', label: '제조 아웃소싱 운영 경험' },
]

export default function VisualBand() {
  return (
    <section className="relative overflow-hidden bg-deep py-20 text-paper md:py-28">
      <div className="carbon-grid absolute inset-0 opacity-30" />
      <div className="pointer-events-none absolute -right-20 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-signal/10 blur-[120px]" />

      <div className="wrap relative grid items-center gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
        {/* 좌: 카피 + 지표 */}
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce}>
          <motion.div variants={fadeUp} className="mb-5 inline-flex items-center gap-2 rounded-full border border-signal/25 bg-signal/8 px-3 py-1.5">
            <IconLeaf className="h-3.5 w-3.5 text-signal" />
            <span className="font-mono text-[11px] tracking-[0.14em] text-signal">On the ground · Vietnam</span>
          </motion.div>

          <motion.h2 variants={fadeUp} className="text-balance text-[28px] font-bold leading-[1.22] tracking-tight sm:text-[38px]">
            데이터는 책상이 아니라,<br />
            <span className="text-signal">공장 바닥</span>에서 만들어집니다.
          </motion.h2>

          <motion.p variants={fadeUp} className="mt-5 max-w-xl text-[15px] leading-relaxed text-paper/65 sm:text-[16px]">
            현지 제조사와 직접 맺은 네트워크를 바탕으로, 공정별 전력 사용량·설비 효율·재생에너지 비율을
            표준화했습니다. 실측 활동 자료가 그대로 탄소 지표가 됩니다.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 grid grid-cols-3 gap-4 border-t border-paper/10 pt-6">
            {bandStats.map((s) => (
              <div key={s.label}>
                <div className="tabular font-mono text-[22px] font-bold text-paper sm:text-[26px]">{s.value}</div>
                <div className="mt-1 text-[11px] leading-snug text-paper/50 sm:text-[12px]">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* 우: 공장 작업자 이미지 */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[24px] border border-paper/10 shadow-card-lg">
            <img
              src="/brand/factory-worker.webp"
              alt="matchfac eco 브랜드 유니폼을 착용한 제조 현장 작업자"
              width={1086}
              height={1448}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
            {/* 이미지 위 라이브 칩 */}
            <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-ink/70 px-3 py-1.5 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-signal" />
              <span className="font-mono text-[11px] text-paper/85">low-carbon manufacturing</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
