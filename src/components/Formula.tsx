// 방법론 & 표준 섹션 — PCF 산정식, 배출계수 출처, 적용 국제 표준을 투명하게 공개.
// 히어로의 '탄소 원장' 파이프라인과 역할을 분리한다: 히어로=흐름 서사, 여기=산정 근거·표준.
// 탄소 도메인 신뢰(그린워싱 방지)의 핵심은 방법론 투명성이라는 리서치 결론을 반영.
import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

const factors = [
  { k: '전력', v: '국가별 grid 배출계수', tag: 'VN 0.56 / KR' },
  { k: '소재', v: '소재별 탄소계수 DB', tag: 'PP · PE · …' },
  { k: '물류', v: '운송수단별 배출계수', tag: 'Sea · Air · Road' },
]
const principles = ['관련성', '완전성', '일관성', '투명성', '정확성']

export default function Formula() {
  return (
    <section id="how" className="bg-paper py-24 md:py-32">
      <div className="wrap">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* 좌: 공식 + 산정 경계 + 투명성 원칙 */}
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce}>
            <motion.span variants={fadeUp} className="eyebrow">Methodology &amp; Standards · ISO 14067</motion.span>
            <motion.h2 variants={fadeUp} className="mt-4 text-[30px] font-bold leading-[1.2] tracking-tight text-ink sm:text-[38px]">
              추정이 아니라,<br />공개된 표준으로 계산합니다.
            </motion.h2>

            <motion.div variants={fadeUp} className="mt-8 rounded-2xl border border-ink/10 bg-white p-6 shadow-card">
              <div className="font-mono text-[13px] text-cool">Product Carbon Footprint</div>
              <div className="mt-3 whitespace-nowrap font-mono text-[17px] font-bold leading-tight text-ink sm:text-[22px]">
                PCF = <span className="text-signal-dim">Σ</span>(Activity <span className="text-cool">×</span> Factor)
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-lg bg-ink/6 px-3 py-1.5 font-mono text-[12px] text-ink/70">Scope 2 · 제조</span>
                <span className="rounded-lg bg-ink/6 px-3 py-1.5 font-mono text-[12px] text-ink/70">Scope 3 · 물류 일부</span>
              </div>
            </motion.div>

            <motion.p variants={fadeUp} className="mt-6 text-[15px] leading-relaxed text-ink/65">
              모든 산정은 <span className="font-semibold text-ink">공개된 국제 표준과 검증 가능한 배출계수</span>에 근거합니다.
              임의 추정이나 비공개 가중치를 쓰지 않으며, 전주기 중 탄소 비중이 가장 큰 제조·운송 단계에 집중한 경량 PCF 로직입니다.
            </motion.p>
          </motion.div>

          {/* 우: 배출계수 출처 + 적용 표준 */}
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce} className="space-y-4">
            <motion.div variants={fadeUp} className="rounded-2xl border border-ink/8 bg-white p-6 shadow-card">
              <div className="font-mono text-[10px] tracking-widest text-cool">EMISSION FACTORS · 배출계수 출처</div>
              <div className="mt-4 space-y-2.5">
                {factors.map((f) => (
                  <div key={f.k} className="flex items-center justify-between gap-3 rounded-xl border border-ink/8 bg-paper/60 px-4 py-3">
                    <div>
                      <span className="text-[14px] font-semibold text-ink">{f.k}</span>
                      <span className="ml-2 text-[13px] text-ink/60">{f.v}</span>
                    </div>
                    <span className="shrink-0 rounded-full bg-signal/12 px-2.5 py-1 font-mono text-[11px] text-signal-dim">{f.tag}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl border border-ink/8 bg-white p-6 shadow-card">
              <div className="font-mono text-[10px] tracking-widest text-cool">STANDARDS · 적용 표준</div>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="rounded-lg bg-ink px-3 py-1.5 font-mono text-[12px] font-medium text-paper">ISO 14067</span>
                <span className="rounded-lg bg-ink/6 px-3 py-1.5 font-mono text-[12px] text-ink/70">GHG Protocol</span>
                <span className="rounded-lg bg-ink/6 px-3 py-1.5 font-mono text-[12px] text-ink/70">CBAM ready</span>
              </div>
              <div className="mt-5">
                <div className="text-[12px] text-cool">GHG Protocol 5원칙</div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {principles.map((p) => (
                    <span key={p} className="rounded-full border border-ink/10 bg-paper/70 px-2.5 py-1 text-[12px] text-ink/70">{p}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
