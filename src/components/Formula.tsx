// PCF 산정 로직 섹션 — 실제 공식과 활동자료·배출계수를 기술적으로 조판.
import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

const flow = [
  { step: 'INPUT', k: '제품 사양·수량·소재·생산 위치', v: '사용자 입력' },
  { step: 'ACTIVITY', k: '전력(kWh) · 원재료(kg) · 운송거리(km)', v: '자동 수집' },
  { step: 'FACTOR', k: '국가별 전력·소재·물류 배출계수', v: '표준 DB 매핑' },
  { step: 'OUTPUT', k: '저탄소 공장 추천 + 탄소 리포트', v: '즉시 산출' },
]

export default function Formula() {
  return (
    <section id="how" className="bg-paper py-24 md:py-32">
      <div className="wrap">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* 좌: 공식 */}
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce}>
            <motion.span variants={fadeUp} className="eyebrow">How it works · ISO 14067</motion.span>
            <motion.h2 variants={fadeUp} className="mt-4 text-[30px] font-bold leading-[1.2] tracking-tight text-ink sm:text-[38px]">
              수개월짜리 전주기 평가 대신,<br />하나의 공식으로.
            </motion.h2>

            <motion.div variants={fadeUp} className="mt-8 rounded-2xl border border-ink/10 bg-white p-6 shadow-card">
              <div className="font-mono text-[13px] text-cool">Product Carbon Footprint</div>
              <div className="mt-3 whitespace-nowrap font-mono text-[17px] font-bold leading-tight text-ink sm:text-[22px]">
                PCF = <span className="text-signal-dim">Σ</span>(Activity <span className="text-cool">×</span> Factor)
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-lg bg-signal/12 px-3 py-1.5 font-mono text-[12px] text-signal-dim">VN grid · 0.56 kgCO₂e/kWh</span>
                <span className="rounded-lg bg-ink/6 px-3 py-1.5 font-mono text-[12px] text-ink/70">Scope 2 · 제조</span>
                <span className="rounded-lg bg-ink/6 px-3 py-1.5 font-mono text-[12px] text-ink/70">Scope 3 · 물류 일부</span>
              </div>
            </motion.div>

            <motion.p variants={fadeUp} className="mt-6 text-[15px] leading-relaxed text-ink/65">
              전체 생애주기 중 탄소 비중이 가장 높은 제조·운송 단계에 집중한 <span className="font-semibold text-ink">경량 PCF 로직</span>.
              전문가·고가 컨설팅 없이도 신뢰도 높은 배출량 추정치를 즉시 얻습니다.
            </motion.p>
          </motion.div>

          {/* 우: 데이터 플로우 */}
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce} className="relative">
            <div className="absolute left-[27px] top-6 bottom-6 w-px bg-ink/10 md:left-[31px]" />
            <div className="space-y-3">
              {flow.map((f, i) => (
                <motion.div key={f.step} variants={fadeUp} className="relative flex items-center gap-5">
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-ink/10 bg-white shadow-card md:h-16 md:w-16">
                    <span className="font-mono text-[11px] font-bold text-signal-dim">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="flex flex-1 flex-wrap items-center justify-between gap-2 rounded-xl border border-ink/8 bg-white/60 px-4 py-3">
                    <div>
                      <div className="font-mono text-[10px] tracking-widest text-cool">{f.step}</div>
                      <div className="mt-0.5 text-[14px] font-medium text-ink">{f.k}</div>
                    </div>
                    <span className="rounded-full bg-ink/5 px-2.5 py-1 text-[11px] font-medium text-ink/60">{f.v}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
