// 히어로 — 다크 포레스트 배경 + 시그니처 "탄소 원장" 터미널(타이핑) + 지표 칩.
import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { brand, heroStats, ledgerLines } from '../content'
import { IconArrow, IconLeaf } from './icons'

// 탄소 원장 라인이 순차적으로 나타나는 터미널
function CarbonLedger() {
  const reduce = useReducedMotion()
  const [count, setCount] = useState(reduce ? ledgerLines.length : 0)
  useEffect(() => {
    if (reduce) return
    let i = 0
    const id = setInterval(() => {
      i += 1
      setCount(i)
      if (i >= ledgerLines.length) clearInterval(id)
    }, 700)
    return () => clearInterval(id)
  }, [reduce])

  return (
    <div className="rounded-2xl border border-signal/15 bg-carbon/80 p-1 shadow-glow backdrop-blur">
      <div className="flex items-center gap-2 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-signal/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-paper/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-paper/20" />
        <span className="ml-2 font-mono text-[11px] text-paper/40">matchfac-engine — carbon ledger</span>
      </div>
      <div className="min-h-[248px] rounded-xl bg-black/30 p-4 font-mono text-[12.5px] leading-relaxed sm:text-[13px]">
        {ledgerLines.slice(0, count).map((l, i) => (
          <motion.div
            key={l.t}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35 }}
            className="flex flex-wrap items-baseline gap-x-2 py-[3px]"
          >
            <span className="text-signal">▸ {l.t}</span>
            <span className="text-paper/70">{l.k}</span>
            {l.v && (
              <span className="ml-auto rounded bg-signal/12 px-1.5 py-0.5 text-signal">{l.v}</span>
            )}
            {i === count - 1 && count < ledgerLines.length && (
              <span className="ml-0.5 inline-block h-3.5 w-1.5 animate-blink bg-signal align-middle" />
            )}
          </motion.div>
        ))}
        {count >= ledgerLines.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-2 flex items-center gap-1.5 border-t border-signal/10 pt-2 text-signal"
          >
            <IconLeaf className="h-3.5 w-3.5" />
            <span>리포트 준비 완료 · CBAM/ESG 제출 가능</span>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default function Hero() {
  const reduce = useReducedMotion()
  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
        }

  return (
    <section id="top" className="relative overflow-hidden bg-ink text-paper">
      {/* 브랜드 잎-회로 비주얼 (우측 배경, 다크로 블렌딩) */}
      <img
        src="/brand/leaf-circuit.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-full w-[70%] object-cover opacity-40 [mask-image:linear-gradient(to_left,black,transparent_75%)] [-webkit-mask-image:linear-gradient(to_left,black,transparent_75%)]"
      />
      <div className="carbon-grid absolute inset-0 opacity-60" />
      {/* 좌하단 은은한 그린 글로우 */}
      <div className="pointer-events-none absolute -bottom-40 right-0 h-[520px] w-[520px] rounded-full bg-signal/10 blur-[120px]" />
      <div className="pointer-events-none absolute -left-20 top-10 h-[360px] w-[360px] rounded-full bg-deep/60 blur-[120px]" />

      <div className="wrap relative grid items-center gap-12 pb-20 pt-28 md:pb-28 md:pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        {/* 좌: 카피 */}
        <div>
          <motion.div {...rise(0)} className="mb-5 inline-flex items-center gap-2 rounded-full border border-signal/25 bg-signal/8 px-3 py-1.5">
            <IconLeaf className="h-3.5 w-3.5 text-signal" />
            <span className="font-mono text-[11px] tracking-[0.14em] text-signal">{brand.taglineKo}</span>
          </motion.div>

          <motion.h1 {...rise(0.08)} className="text-balance text-[38px] font-bold leading-[1.08] tracking-tightest sm:text-[52px] lg:text-[58px]">
            공장을 고르는 순간,<br />
            <span className="text-signal">탄소가 줄어듭니다.</span>
          </motion.h1>

          <motion.p {...rise(0.16)} className="mt-6 max-w-xl text-[16px] leading-relaxed text-paper/70 sm:text-[17px]">
            베트남 제조사 30곳+의 에너지효율을 데이터로 비교하고, 제품 사양만 입력하면
            ISO 14067 기반 탄소발자국을 즉시 산정합니다. 저탄소 공장 선택부터 CBAM·ESG 리포트까지, 한 흐름으로.
          </motion.p>

          <motion.div {...rise(0.24)} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${brand.email}?subject=matchfac eco 베타 신청`}
              className="group inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3.5 text-[15px] font-semibold text-ink transition-transform hover:scale-[1.02]"
            >
              베타 신청하기
              <IconArrow className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 rounded-full border border-paper/20 px-6 py-3.5 text-[15px] font-semibold text-paper transition-colors hover:border-paper/40"
            >
              어떻게 계산하나요
            </a>
          </motion.div>

          <motion.p {...rise(0.28)} className="mt-4 font-mono text-[12px] text-paper/45">
            2026 Q3 베타 오픈 · 파운딩 파트너 모집 중
          </motion.p>

          {/* 지표 칩 */}
          <motion.div {...rise(0.32)} className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-paper/10 pt-6">
            {heroStats.map((s) => (
              <div key={s.label}>
                <div className="flex items-baseline gap-0.5">
                  <span className="tabular font-mono text-[24px] font-bold text-paper">{s.value}</span>
                  <span className="text-[14px] font-medium text-signal">{s.unit}</span>
                </div>
                <div className="mt-0.5 text-[12px] text-paper/50">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* 우: 탄소 원장 */}
        <motion.div
          {...(reduce ? {} : { initial: { opacity: 0, y: 24, scale: 0.98 }, animate: { opacity: 1, y: 0, scale: 1 }, transition: { duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] } })}
        >
          <CarbonLedger />
          <p className="mt-3 text-center font-mono text-[11px] text-paper/35">Your cost. Our carbon mission.</p>
        </motion.div>
      </div>
    </section>
  )
}
