// 대시보드 목업 — 제품이 관리하는 4단계를 보여준다.
//
// 기존에는 "진행 중 매칭 24건 / 검수 통과 42건 / PCF 산정 완료 156건 / 리포트 발행 89건" 을
// 카운터 애니메이션까지 붙여 보여줬다. 그런데 같은 페이지가 '2026 Q3 베타 오픈'이라고 말한다.
// 베타 전에 156건을 산정했다는 건 성립하지 않는 숫자이고, 탄소 데이터 제품에서 이런 허수는
// 신뢰를 정면으로 깎는다. 실적 카운트를 전부 걷어내고 기능 상태 표기로 바꾼다.
// 이 목업이 예시 화면이라는 사실도 화면에 명시한다.
import { platform } from '../content'
import { Wordmark } from './Wordmark'

export default function DashboardMock() {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-card-lg ring-1 ring-ink/8">
      {/* 창 머리말 */}
      <div className="flex items-center justify-between gap-4 border-b border-ink/8 px-6 py-4">
        <Wordmark className="h-[15px] w-auto" />
        <span className="rounded-full bg-ink/6 px-2.5 py-1 text-[11px] font-medium text-ink/50">
          {platform.mockTag}
        </span>
      </div>

      {/* 파이프라인 4단계 */}
      <div className="grid gap-px bg-ink/8 md:grid-cols-4">
        {platform.stages.map((s) => (
          <div key={s.label} className={`p-6 ${s.hero ? 'bg-deep text-paper' : 'bg-white'}`}>
            <div className={`text-[12px] ${s.hero ? 'text-paper/50' : 'text-cool'}`}>{s.tag}</div>
            <div
              className={`mt-2 font-display text-[19px] font-bold tracking-tight ${
                s.hero ? 'text-paper' : 'text-ink'
              }`}
            >
              {s.label}
            </div>
            <p
              className={`mt-2 text-[13px] leading-relaxed ${
                s.hero ? 'text-paper/60' : 'text-ink/55'
              }`}
            >
              {s.body}
            </p>
          </div>
        ))}
      </div>

      {/* 산출물 안내 — 이 화면의 끝에 무엇이 나오는지 */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-ink/8 px-6 py-5">
        <p className="text-[13px] text-ink/60">{platform.outcome}</p>
        <span className="text-[12px] font-medium text-signal-dim">ISO 14067 · CBAM</span>
      </div>
    </div>
  )
}
