// 문제 제기 섹션 — 30% 에너지 편차·2028 규제를 큰 숫자 조판으로 강조.
import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

export default function Problem() {
  return (
    <section id="why" className="relative bg-paper py-24 md:py-32">
      <div className="wrap">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce} className="max-w-3xl">
          <motion.span variants={fadeUp} className="eyebrow">The Problem</motion.span>
          <motion.h2 variants={fadeUp} className="mt-4 text-balance text-[30px] font-bold leading-[1.18] tracking-tight text-ink sm:text-[40px]">
            같은 제품이라도, 어느 공장에서 만드느냐에 따라
            탄소가 달라집니다. 그런데 그걸 판단할 데이터가 없었죠.
          </motion.h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-ink/8 bg-ink/8 sm:grid-cols-3"
        >
          {[
            { n: '30', u: '%+', d: '설비 노후도에 따라 벌어지는 동일 공정의 에너지 소모량 차이. 지금은 눈에 보이지 않습니다.' },
            { n: '2028', u: '', d: '국내 ESG 공시 의무화. EU CBAM·CSRD까지 겹치며 협력사 배출량(Scope 3) 증빙이 수출의 전제가 됩니다.' },
            { n: '0', u: '건', d: '단가·납기 중심 관행 속에서, 공정별 탄소·에너지 데이터로 공장을 고른 의사결정 사례.' },
          ].map((s) => (
            <motion.div key={s.n} variants={fadeUp} className="bg-paper p-7">
              <div className="flex items-baseline gap-1">
                <span className="tabular font-mono text-[46px] font-bold leading-none text-ink">{s.n}</span>
                <span className="text-[20px] font-semibold text-signal-dim">{s.u}</span>
              </div>
              <p className="mt-4 text-[14px] leading-relaxed text-ink/60">{s.d}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-10 max-w-2xl text-[16px] leading-relaxed text-ink/70"
        >
          <span className="font-semibold text-ink">matchfac eco</span>는 이 공백을 메웁니다.
          제조 현장의 전력·설비·물류 데이터를 표준화해, 비용을 줄이려는 선택이 곧 탄소를 줄이는 선택이 되게 합니다.
        </motion.p>
      </div>
    </section>
  )
}
