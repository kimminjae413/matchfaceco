// 방법론 & 표준 — 탄소 도메인에서 신뢰는 '산정 근거를 다 까놓는 것'에서 나온다.
// 알약 태그와 모노 배지를 걷어내고, 실제 산정 명세서처럼 정의목록(dl)과 괘선으로 조판한다.
//
// 배출계수: 기존의 "VN 0.56" 은 베트남 정부 공표 문서 어디에도 없는 값이었다(IFI 프로젝트
// 파이낸싱용 참고 데이터셋 추정치로 보이며, 공식 계수보다 15~20% 낮아 배출량을 축소 표시한다).
// 실제 공식 계수는 천연자원환경부 기후변화국(Cục Biến đổi khí hậu)이 매년 공문으로 공표하고,
// 최신 확정치는 공문 1726/BĐKH-PTCBT(2024 발표)의 2023년 값 0.6592 tCO₂/MWh 다.
import { motion } from 'framer-motion'
import { fade, viewportOnce } from '../lib/motion'
import { formula } from '../content'
import { sampleReportHref } from '../lang'

export default function Formula() {
  return (
    <section id="how" className="border-t border-ink/10 bg-paper py-28 md:py-40">
      <div className="wrap">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={viewportOnce}>
          <div className="label">{formula.label}</div>

          <h2 className="mt-10 max-w-3xl text-balance font-display text-[30px] font-extrabold leading-[1.14] tracking-tightest text-ink sm:text-[46px]">
            {formula.h2}
          </h2>

          {/* 산정식 — 이 페이지의 유일한 수식. 크게, 조용하게. */}
          <div className="mt-16 border-y border-ink/15 py-12">
            <div className="text-[13px] text-cool">{formula.formulaLabel}</div>
            <div className="mt-4 font-display text-[24px] font-extrabold tracking-tightest text-ink sm:text-[38px]">
              PCF = Σ (Activity Data × Emission Factor)
            </div>
            <div className="mt-5 text-[14px] text-ink/50">{formula.boundary}</div>
          </div>

          <p className="mt-12 max-w-2xl text-[17px] leading-[1.8] text-ink/65">
            {formula.bodyA}
            <span className="font-semibold text-ink">{formula.bodyStrong}</span>
            {formula.bodyB}
          </p>

          {/* 배출계수 출처 + 적용 표준 */}
          <div className="mt-20 grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <div className="label">{formula.factorsLabel}</div>
              <dl className="mt-8">
                {formula.factors.map((f) => (
                  <div key={f.k} className="grid grid-cols-[4rem_1fr] gap-4 border-t border-ink/12 py-5">
                    <dt className="text-[14px] font-semibold text-ink">{f.k}</dt>
                    <dd>
                      <div className="text-[14px] text-ink/70">{f.v}</div>
                      <div className="mt-1 text-[13px] text-cool">{f.src}</div>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <div className="label">{formula.standardsLabel}</div>
              <dl className="mt-8">
                {formula.standards.map((s) => (
                  <div key={s.k} className="grid grid-cols-[8rem_1fr] gap-4 border-t border-ink/12 py-5">
                    <dt className="text-[14px] font-semibold text-ink">{s.k}</dt>
                    <dd className="text-[14px] leading-relaxed text-ink/70">{s.v}</dd>
                  </div>
                ))}
              </dl>

              {/* 설명을 열 줄 읽는 것보다 산정서 한 장을 보는 게 빠르다 */}
              <a
                href={sampleReportHref}
                className="mt-10 inline-flex items-center gap-2 text-[15px] font-semibold text-ink underline decoration-ink/25 underline-offset-4 transition-colors hover:decoration-ink"
              >
                {formula.sampleLink}
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
