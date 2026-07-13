// 팀 — "누가 만드는가". 초기 B2B에서 이 질문의 답이 없으면 문의가 오지 않는다.
//
// 이 섹션의 모든 문장은 사업계획서·사업자등록증에 있는 사실만 쓴다. 스톡 인물 사진,
// 지어낸 경력, "업계 20년" 같은 문구는 넣지 않는다 — 확인되는 순간 나머지 데이터의
// 신뢰까지 함께 무너진다. 이 회사가 내세울 수 있는 진짜 자산은 하나다:
// 36건의 제조 아웃소싱을 직접 돌려본 사람이 그 현장에서 데이터 공백을 봤다는 것.
import { motion } from 'framer-motion'
import { fade, viewportOnce } from '../lib/motion'
import { company, team } from '../content'

export default function Team() {
  return (
    <section id="team" className="border-t border-ink/10 bg-paper-2/50 py-28 md:py-40">
      <div className="wrap">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={viewportOnce}>
          <div className="label">{team.label}</div>

          <div className="mt-10 grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:gap-24">
            <div>
              <h2 className="max-w-2xl text-balance font-display text-[30px] font-extrabold leading-[1.14] tracking-tightest text-ink sm:text-[44px]">
                {team.h2a}<br />{team.h2b}
              </h2>

              <p className="mt-8 max-w-xl text-[17px] leading-[1.8] text-ink/65">{team.motive}</p>

              {/* 대표·법인 — 검증 가능한 사실만. 사업자등록증 표기 그대로. */}
              <dl className="mt-12 grid max-w-xl gap-x-8 gap-y-5 border-t border-ink/12 pt-8 text-[14px] sm:grid-cols-2">
                <div className="flex gap-5">
                  <dt className="w-16 shrink-0 text-cool">{team.ceoLabel}</dt>
                  <dd className="font-semibold text-ink">{company.ceo}</dd>
                </div>
                <div className="flex gap-5">
                  <dt className="w-16 shrink-0 text-cool">{team.corpLabel}</dt>
                  <dd className="text-ink/75">
                    {company.legal}
                    <span className="ml-1.5 text-cool">
                      ({company.since} {team.founded})
                    </span>
                  </dd>
                </div>
                <div className="flex gap-5">
                  <dt className="w-16 shrink-0 text-cool">{team.baseLabel}</dt>
                  <dd className="text-ink/75">{team.base}</dd>
                </div>
                <div className="flex gap-5">
                  <dt className="w-16 shrink-0 text-cool">{team.stageLabel}</dt>
                  <dd className="text-ink/75">{team.stage}</dd>
                </div>
              </dl>
            </div>

            {/* 보유 역량 — 알약 카드가 아니라 괘선 위의 조용한 목록.
                위에 브랜드 사이니지를 얹는다. 이건 BI 목업이라 없는 사실을 주장하지 않는다 —
                "회사가 실재한다"는 것 외에 아무 말도 하지 않는 그림이라 이 자리에 맞다. */}
            <div>
              <img
                src="/brand/glass-sign.webp"
                alt="matchfac eco 브랜드 사이니지"
                loading="lazy"
                className="mb-10 aspect-[16/10] w-full rounded-xl object-cover shadow-card ring-1 ring-ink/10"
              />
              <dl>
                {team.credentials.map((c) => (
                  <div key={c.k} className="border-t border-ink/12 py-6 first:border-t-0 first:pt-0">
                    <dt className="text-[13px] text-cool">{c.k}</dt>
                    <dd className="mt-1.5">
                      <div className="tabular font-display text-[26px] font-bold tracking-tightest text-ink">
                        {c.v}
                      </div>
                      <div className="mt-1 text-[14px] leading-relaxed text-ink/60">{c.note}</div>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
