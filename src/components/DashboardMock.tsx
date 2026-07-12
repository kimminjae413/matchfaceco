// BI 자료(page11)의 제조·탄소 대시보드를 재현한 라이트 톤 목업 — 카운터·막대·게이지 애니메이션.
import { motion, useInView, useReducedMotion, animate } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { dashboardMetrics, emissionBars } from '../content'
import { Wordmark } from './Wordmark'

// 숫자 카운트업 훅
function useCountUp(target: number, run: boolean, decimals = 0) {
  const [val, setVal] = useState(0)
  const reduce = useReducedMotion()
  useEffect(() => {
    if (!run) return
    if (reduce) { setVal(target); return }
    const controls = animate(0, target, {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setVal(v),
    })
    return () => controls.stop()
  }, [run, target, reduce])
  return decimals ? val.toFixed(decimals) : Math.round(val).toLocaleString('ko-KR')
}

function MetricCard({ m, run }: { m: typeof dashboardMetrics[number]; run: boolean }) {
  const decimals = Number.isInteger(m.value) ? 0 : 1
  const num = useCountUp(m.value, run, decimals)
  return (
    <div
      className={`rounded-2xl border p-4 ${
        m.hero
          ? 'border-transparent bg-deep text-paper'
          : 'border-ink/8 bg-white text-ink'
      }`}
    >
      <div className="flex items-center justify-between">
        <span className={`text-[12px] ${m.hero ? 'text-paper/70' : 'text-cool'}`}>{m.label}</span>
        <span
          className={`rounded-full px-1.5 py-0.5 font-mono text-[10px] ${
            m.hero ? 'bg-signal/25 text-signal' : 'bg-signal/12 text-signal-dim'
          }`}
        >
          {m.delta}
        </span>
      </div>
      <div className="mt-3 flex items-baseline gap-1">
        <span className="tabular font-mono text-[26px] font-bold leading-none">{num}</span>
        <span className={`text-[13px] ${m.hero ? 'text-paper/60' : 'text-cool'}`}>{m.suffix}</span>
      </div>
    </div>
  )
}

export default function DashboardMock() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const gauge = useCountUp(70.8, inView, 1)

  return (
    <div
      ref={ref}
      className="overflow-hidden rounded-[22px] border border-ink/10 bg-paper-2/60 shadow-card-lg backdrop-blur"
    >
      {/* 목업 상단바 */}
      <div className="flex items-center justify-between border-b border-ink/8 bg-white/80 px-5 py-3">
        <div className="flex items-center gap-3">
          <Wordmark className="h-[15px] w-auto" />
          <span className="hidden font-mono text-[11px] text-cool sm:inline">/ dashboard</span>
        </div>
        <nav className="hidden items-center gap-4 text-[12px] text-cool md:flex">
          <span className="font-medium text-ink">개요</span>
          <span>매칭</span>
          <span>제조사</span>
          <span>리포트</span>
        </nav>
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-signal" />
          <span className="font-mono text-[11px] text-cool">live</span>
        </div>
      </div>

      <div className="space-y-4 p-4 sm:p-5">
        <div>
          <h3 className="text-[15px] font-bold text-ink">제조 현황 개요</h3>
          <p className="text-[12px] text-cool">우리 제조 네트워크의 실시간 인사이트</p>
        </div>

        {/* KPI 4 */}
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {dashboardMetrics.map((m) => (
            <MetricCard key={m.label} m={m} run={inView} />
          ))}
        </div>

        <div className="grid gap-3 lg:grid-cols-5">
          {/* 배출/저감 막대 */}
          <div className="rounded-2xl border border-ink/8 bg-white p-4 lg:col-span-3">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[13px] font-semibold text-ink">탄소 배출 &amp; 저감</span>
              <span className="font-mono text-[10px] text-cool">tCO₂e / 월</span>
            </div>
            <div className="flex h-32 gap-1.5">
              {emissionBars.map((b, i) => (
                <div key={b.m} className="flex h-full flex-1 flex-col items-center gap-1.5">
                  <div className="flex w-full flex-1 items-end">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={inView ? { height: `${b.v}%` } : {}}
                      transition={{ duration: 0.7, delay: 0.15 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                      className={`w-full rounded-t ${b.peak ? 'bg-signal' : 'bg-ink/20'}`}
                    />
                  </div>
                  <span className="font-mono text-[8px] text-cool">{b.m}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 지속가능성 게이지 */}
          <div className="flex flex-col items-center justify-center rounded-2xl border border-ink/8 bg-white p-4 lg:col-span-2">
            <span className="mb-2 self-start text-[13px] font-semibold text-ink">지속가능성 목표</span>
            <div className="relative h-24 w-44">
              <svg viewBox="0 0 200 110" className="h-full w-full">
                <path d="M12 100 A88 88 0 0 1 188 100" fill="none" stroke="#0836301a" strokeWidth="14" strokeLinecap="round" />
                <motion.path
                  d="M12 100 A88 88 0 0 1 188 100"
                  fill="none"
                  stroke="#31EC57"
                  strokeWidth="14"
                  strokeLinecap="round"
                  pathLength={1}
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 0.708 } : {}}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                />
              </svg>
              <div className="absolute inset-x-0 bottom-1 text-center">
                <span className="tabular font-mono text-[24px] font-bold text-ink">{gauge}</span>
                <span className="text-[13px] text-cool">%</span>
              </div>
            </div>
            <p className="mt-1 text-[11px] text-cool">월간 목표 달성률</p>
          </div>
        </div>

        {/* Recent Matches */}
        <div className="rounded-2xl border border-ink/8 bg-white p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[13px] font-semibold text-ink">최근 매칭</span>
            <span className="font-mono text-[10px] text-cool">Recent Matches</span>
          </div>
          <div className="overflow-hidden">
            <RecentRow project="Eco Packaging RFQ" product="EPP-1024" qty="120,000 EA" factory="GreenFactory" cut="18.6%" done />
            <RecentRow project="Injection Mold B" product="PP-3391" qty="48,000 EA" factory="Hanoi Precision" cut="12.4%" />
            <RecentRow project="Textile Line 2" product="TX-0072" qty="9,500 M" factory="Da Nang Weave" cut="21.0%" done />
          </div>
        </div>
      </div>
    </div>
  )
}

function RecentRow({
  project, product, qty, factory, cut, done = false,
}: { project: string; product: string; qty: string; factory: string; cut: string; done?: boolean }) {
  return (
    <div className="flex items-center gap-3 border-t border-ink/6 py-2.5 first:border-t-0 text-[12px]">
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-signal/12">
        <span className="h-2 w-2 rounded-sm bg-signal-dim" />
      </div>
      <span className="w-32 shrink-0 truncate font-medium text-ink">{project}</span>
      <span className="hidden w-20 shrink-0 font-mono text-cool sm:inline">{product}</span>
      <span className="hidden flex-1 font-mono text-cool md:inline">{qty}</span>
      <span className="hidden shrink-0 text-ink sm:inline">{factory}</span>
      <span className="ml-auto shrink-0 font-mono font-semibold text-signal-dim">−{cut}</span>
      <span
        className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium ${
          done ? 'bg-signal/15 text-signal-dim' : 'bg-cool/12 text-cool'
        }`}
      >
        {done ? '매칭완료' : '진행중'}
      </span>
    </div>
  )
}
