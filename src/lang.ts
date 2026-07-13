// 언어 선택 — 한국어(기본) / 영어.
//
// 왜 URL 쿼리(`?lang=en`)인가: GitHub Pages 정적 호스팅이라 서버 사이드 협상이 없고,
// 라우터도 없다. 쿼리 하나면 링크로 공유·북마크가 되고(베트남 제조사에 링크를 보낼 때
// 이게 전부다), 빌드는 하나로 유지된다. 브라우저 언어 자동 감지는 하지 않는다 —
// 한국 담당자가 영문 페이지를 보게 되는 사고가 더 나쁘다.
//
// 언어는 페이지 로드 시점에 고정된다. 토글은 링크로 다시 로드시킨다(상태 관리 불필요).
export type Lang = 'ko' | 'en'

export const lang: Lang =
  typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('lang') === 'en'
    ? 'en'
    : 'ko'

/** 같은 자리의 한/영 값을 고른다. 데이터 구조가 같으므로 컴포넌트는 언어를 몰라도 된다. */
export function pick<T>(ko: T, en: T): T {
  return lang === 'en' ? en : ko
}

/** 현재 언어를 유지한 채 사이트 내부 경로로 이동하는 href (정적 페이지용). */
export function withLang(path: string): string {
  return lang === 'en' ? `${path}?lang=en` : path
}

/**
 * 예시 산정서 — 정적 HTML이라 쿼리로는 언어가 바뀌지 않는다. 영문판은 별도 경로다.
 * 법적 고지(개인정보처리방침·이용약관)는 한국어만 있다. 국내 법령 문서라 원문이 기준이고,
 * 영문 페이지에서는 안내문에 (Korean)이라고 밝혀 둔다.
 */
export const sampleReportHref = lang === 'en' ? '/sample-report/en/' : '/sample-report/'

/** 반대 언어로 가는 href — 현재 스크롤 위치(해시)는 버린다. */
export const otherLangHref = lang === 'en' ? '/' : '/?lang=en'
export const otherLangLabel = lang === 'en' ? 'KO' : 'EN'

if (typeof document !== 'undefined') {
  document.documentElement.lang = lang
}
