// 현지 네트워크 밴드 — 다크 면 하나로 흐름을 끊는다.
//
// 제거한 것:
//  - 공장 작업자 사진: 브랜드 로고가 박힌 헬멧·작업복을 입은 AI 생성 목업이었다.
//    실사인 척하는 자리에 AI 렌더를 두면, 실제 현장 데이터를 판다는 주장 자체가 흔들린다.
//    실사가 확보되면 그때 넣는다.
//  - "36건 제조 아웃소싱 운영 경험": 사업계획서·서비스소개·사업자등록증 어디에도 근거가
//    없는 수치라 삭제했다. 근거가 확인되면 되살린다.
//  - 알약 배지 / 방사형 글로우 / 격자 배경.
import { motion } from 'framer-motion'
import { fade, viewportOnce } from '../lib/motion'

const facts = [
  { k: '파트너 제조사', v: '베트남 30곳+', d: '공정 카테고리별 에너지효율 실측 DB' },
  { k: '수집 항목', v: '전력 · 설비 · 재생에너지', d: '공정별 kWh, 설비 효율, 재생에너지 비율' },
  { k: '표준화', v: '활동 자료 → 탄소 지표', d: '실측 자료가 그대로 산정 입력값이 됩니다' },
]

export default function VisualBand() {
  return (
    <section className="bg-deep py-24 text-paper md:py-32">
      <div className="wrap">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={viewportOnce}>
          <div className="label-light">현지 네트워크 · 베트남</div>

          <h2 className="mt-10 max-w-3xl text-balance font-display text-[28px] font-extrabold leading-[1.16] tracking-tightest sm:text-[42px]">
            데이터는 책상이 아니라, 공장 바닥에서 만들어집니다.
          </h2>
          <p className="mt-6 max-w-2xl text-[16px] leading-[1.75] text-paper/60 sm:text-[17px]">
            현지 제조사와 직접 맺은 네트워크를 바탕으로, 공정별 전력 사용량·설비 효율·재생에너지
            비율을 표준화했습니다. 실측 활동 자료가 그대로 탄소 지표가 됩니다.
          </p>

          <dl className="mt-16 grid gap-x-10 gap-y-10 border-t border-paper/15 pt-10 md:grid-cols-3">
            {facts.map((f) => (
              <div key={f.k}>
                <dt className="text-[12px] text-paper/45">{f.k}</dt>
                <dd className="mt-2 font-display text-[20px] font-bold tracking-tight text-paper">
                  {f.v}
                </dd>
                <p className="mt-2.5 text-[13px] leading-relaxed text-paper/50">{f.d}</p>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  )
}
