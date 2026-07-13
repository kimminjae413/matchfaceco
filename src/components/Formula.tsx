// 방법론 & 표준 — 탄소 도메인에서 신뢰는 '산정 근거를 다 까놓는 것'에서 나온다.
// 알약 태그와 모노 배지를 걷어내고, 실제 산정 명세서처럼 정의목록(dl)과 괘선으로 조판한다.
//
// 배출계수: 기존의 "VN 0.56" 은 베트남 정부 공표 문서 어디에도 없는 값이었다(IFI 프로젝트
// 파이낸싱용 참고 데이터셋 추정치로 보이며, 공식 계수보다 15~20% 낮아 배출량을 축소 표시한다).
// 실제 공식 계수는 천연자원환경부 기후변화국(Cục Biến đổi khí hậu)이 매년 공문으로 공표하고,
// 최신 확정치는 공문 1726/BĐKH-PTCBT(2024 발표)의 2023년 값 0.6592 tCO₂/MWh 다.
import { motion } from 'framer-motion'
import { fade, viewportOnce } from '../lib/motion'

const factors = [
  {
    k: '전력',
    v: '국가별 grid 배출계수',
    src: '베트남 — 천연자원환경부 기후변화국 공표 국가계수 (2023년 확정 0.6592 tCO₂/MWh) · 한국 — 정부 공표 국가계수',
  },
  { k: '소재', v: '소재별 탄소계수 DB', src: 'PP · PE · ABS …' },
  { k: '물류', v: '운송수단별 배출계수', src: '해상 · 항공 · 육상' },
]

const standards = [
  { k: 'ISO 14067', v: '제품단위 탄소배출량 산정 기준' },
  { k: 'GHG Protocol', v: '관련성 · 완전성 · 일관성 · 투명성 · 정확성' },
  { k: 'CBAM', v: '탄소국경조정제도 제출 형식 대응' },
]

export default function Formula() {
  return (
    <section id="how" className="border-t border-ink/10 bg-paper py-28 md:py-40">
      <div className="wrap">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={viewportOnce}>
          <div className="label">방법론 · ISO 14067</div>

          <h2 className="mt-10 max-w-3xl text-balance font-display text-[30px] font-extrabold leading-[1.14] tracking-tightest text-ink sm:text-[46px]">
            추정이 아니라, 공개된 표준으로 계산합니다.
          </h2>

          {/* 산정식 — 이 페이지의 유일한 수식. 크게, 조용하게. */}
          <div className="mt-16 border-y border-ink/15 py-12">
            <div className="text-[13px] text-cool">제품탄소발자국</div>
            <div className="mt-4 font-display text-[24px] font-extrabold tracking-tightest text-ink sm:text-[38px]">
              PCF = Σ (Activity Data × Emission Factor)
            </div>
            <div className="mt-5 text-[14px] text-ink/50">
              산정 경계 — 제조 Scope 2 + 물류 일부 Scope 3
            </div>
          </div>

          <p className="mt-12 max-w-2xl text-[17px] leading-[1.8] text-ink/65">
            모든 산정은{' '}
            <span className="font-semibold text-ink">공개된 국제 표준과 검증 가능한 배출계수</span>에
            근거합니다. 임의 추정이나 비공개 가중치를 쓰지 않으며, 전주기 중 탄소 비중이 가장
            큰 제조·운송 단계에 집중한 경량 PCF 로직입니다.
          </p>

          {/* 배출계수 출처 + 적용 표준 */}
          <div className="mt-20 grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <div className="label">배출계수 출처</div>
              <dl className="mt-8">
                {factors.map((f) => (
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
              <div className="label">적용 표준</div>
              <dl className="mt-8">
                {standards.map((s) => (
                  <div key={s.k} className="grid grid-cols-[8rem_1fr] gap-4 border-t border-ink/12 py-5">
                    <dt className="text-[14px] font-semibold text-ink">{s.k}</dt>
                    <dd className="text-[14px] leading-relaxed text-ink/70">{s.v}</dd>
                  </div>
                ))}
              </dl>

              {/* 설명을 열 줄 읽는 것보다 산정서 한 장을 보는 게 빠르다 */}
              <a
                href="/sample-report/"
                className="mt-10 inline-flex items-center gap-2 text-[15px] font-semibold text-ink underline decoration-ink/25 underline-offset-4 transition-colors hover:decoration-ink"
              >
                예시 산정서 한 장 보기
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
