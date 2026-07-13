// 문제 제기 — 'THE PROBLEM' 영어 대문자 아이브로와 둥근 카드 박스를 걷어내고,
// 큰 숫자 조판과 괘선만으로 세운다.
import { motion } from 'framer-motion'
import { fade, viewportOnce } from '../lib/motion'

const facts = [
  { n: '30', u: '%+', d: '설비 노후도에 따라 벌어지는 동일 공정의 에너지 소모량 차이. 지금은 눈에 보이지 않습니다.' },
  { n: '2028', u: '', d: '국내 ESG 공시 의무화. EU CBAM·CSRD까지 겹치며 협력사 배출량(Scope 3) 증빙이 수출의 전제가 됩니다.' },
  { n: '0', u: '건', d: '단가·납기 중심 관행 속에서, 공정별 탄소·에너지 데이터로 공장을 고른 의사결정 사례.' },
]

export default function Problem() {
  return (
    <section id="why" className="bg-paper py-28 md:py-40">
      <div className="wrap">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={viewportOnce}>
          <div className="label">문제</div>

          <h2 className="mt-10 max-w-4xl text-balance font-display text-[30px] font-extrabold leading-[1.14] tracking-tightest text-ink sm:text-[46px]">
            같은 제품이라도, 어느 공장에서 만드느냐에 따라 탄소가 달라집니다.
          </h2>
          <p className="mt-6 max-w-xl text-[17px] leading-[1.7] text-ink/55">
            그런데 그걸 판단할 데이터가 없었습니다.
          </p>

          <div className="mt-20 grid gap-x-10 gap-y-12 border-t border-ink/15 pt-10 sm:grid-cols-3">
            {facts.map((s) => (
              <div key={s.n}>
                <div className="flex items-baseline gap-1">
                  <span className="tabular font-display text-[52px] font-extrabold leading-[0.9] tracking-tightest text-ink">
                    {s.n}
                  </span>
                  <span className="text-[22px] font-semibold text-ink/40">{s.u}</span>
                </div>
                <p className="mt-5 text-[14px] leading-[1.75] text-ink/55">{s.d}</p>
              </div>
            ))}
          </div>

          <p className="mt-16 max-w-2xl text-[17px] leading-[1.75] text-ink/70">
            <span className="font-semibold text-ink">matchfac eco</span>는 이 공백을 메웁니다.
            제조 현장의 전력·설비·물류 데이터를 표준화해, 비용을 줄이려는 선택이 곧 탄소를
            줄이는 선택이 되게 합니다.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
