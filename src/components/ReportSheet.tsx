// 탄소 리포트 산정서 — 히어로의 주인공.
// 기존 개발자 터미널(신호등 점 3개 + 타이핑)을 대체한다. 이 제품을 사는 사람은
// 구매·소싱·ESG 담당자이지 개발자가 아니고, 그들이 사려는 물건은 '이 문서 한 장'이다.
//
// 표기 원칙: 여기 실린 제조사명·수치는 산정서 서식을 보여주기 위한 가상의 예시다.
// 문서번호까지 붙어 있어 실제 발행본으로 읽힐 수 있으므로, 예시임을 화면에 명시한다.
// (대시보드 허수 실적을 걷어낸 것과 같은 이유 — 탄소 데이터 제품에서 실물처럼 보이는
// 가짜는 신뢰를 정면으로 깎는다.)
import { report } from '../content'

export default function ReportSheet() {
  const { docNo, spec, factories, cut } = report

  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-card-lg ring-1 ring-ink/10">
      {/* 문서 머리말 */}
      <div className="flex items-start justify-between gap-4 border-b border-ink/10 px-6 py-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-display text-[15px] font-bold tracking-tight text-ink">
              {report.title}
            </span>
            <span className="rounded-full bg-ink/5 px-2 py-0.5 text-[10px] font-medium text-ink/50">
              {report.sampleTag}
            </span>
          </div>
          <div className="mt-1 text-[12px] text-cool">{report.standard}</div>
        </div>
        <div className="shrink-0 text-right text-[11px] leading-relaxed text-cool">
          <div className="tabular">{docNo}</div>
          <div>{report.issuer}</div>
          <div>{report.notReal}</div>
        </div>
      </div>

      {/* 산정 대상 */}
      <dl className="grid grid-cols-3 border-b border-ink/10">
        {spec.map((f) => (
          <div key={f.k} className="border-r border-ink/10 px-6 py-3.5 last:border-r-0">
            <dt className="text-[11px] text-cool">{f.k}</dt>
            <dd className="tabular mt-0.5 text-[14px] font-semibold text-ink">{f.v}</dd>
          </div>
        ))}
      </dl>

      {/* 공장별 비교 — 이 제품의 핵심 주장이 표 하나에 다 들어간다 */}
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-ink/10 text-[11px] text-cool">
            <th className="px-6 py-2.5 text-left font-medium">{report.scanned}</th>
            <th className="py-2.5 text-right font-medium">{report.colKwh}</th>
            <th className="py-2.5 text-right font-medium">{report.colRe}</th>
            <th className="px-6 py-2.5 text-right font-medium">{report.colPcf}</th>
          </tr>
        </thead>
        <tbody>
          {factories.map((r) => (
            <tr
              key={r.name}
              className={`border-b border-ink/[0.06] text-[13px] last:border-b-0 ${
                r.pick ? 'bg-signal/[0.09]' : ''
              }`}
            >
              <td className="px-6 py-3">
                <span className={r.pick ? 'font-semibold text-ink' : 'text-ink/70'}>{r.name}</span>
                {r.pick && (
                  <span className="ml-2 align-middle text-[10px] font-semibold text-signal-dim">
                    {report.picked}
                  </span>
                )}
              </td>
              <td className="tabular py-3 text-right text-ink/70">{r.kwh}</td>
              <td className="tabular py-3 text-right text-ink/70">{r.re}</td>
              <td
                className={`tabular px-6 py-3 text-right ${
                  r.pick ? 'font-bold text-ink' : 'text-ink/70'
                }`}
              >
                {r.pcf}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 결론 — 저감률이 이 문서의 결론이자 제품의 약속 */}
      <div className="flex items-end justify-between gap-4 border-t border-ink/10 px-6 py-5">
        <div>
          <div className="text-[11px] text-cool">{report.vsAvg}</div>
          <div className="mt-1 flex items-baseline gap-1">
            <span className="tabular font-display text-[36px] font-bold leading-none tracking-tightest text-ink">
              −{cut}
            </span>
            <span className="text-[17px] font-semibold text-signal-dim">%</span>
          </div>
        </div>
        <div className="shrink-0 text-right text-[11px] leading-relaxed text-cool">
          <div>{report.factorNote}</div>
          <div className="font-medium text-ink/70">{report.complianceNote}</div>
        </div>
      </div>
    </div>
  )
}
