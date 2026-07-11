// 랜딩 전용 커스텀 라인 아이콘 세트 — 일관 스트로크(1.6) 유지, 이모지 미사용.
import type { SVGProps } from 'react'

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  viewBox: '0 0 24 24',
}

type IconProps = SVGProps<SVGSVGElement>

// 저탄소 공장 매칭 — 노드 연결 그래프
export function IconMatch(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="5" cy="6" r="2.2" />
      <circle cx="5" cy="18" r="2.2" />
      <circle cx="19" cy="12" r="2.4" />
      <path d="M7 7 17 11M7 17 17 13" />
    </svg>
  )
}

// PCF 자동 산정 — 함수/계산 브래킷
export function IconCalc(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M9 4H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h2M15 4h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-2" />
      <path d="M9.5 9.5 14.5 15M14.5 9.5 9.5 15" />
    </svg>
  )
}

// 생산관리 대시보드 — 차트 패널
export function IconDashboard(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <path d="M3 9h18" />
      <path d="M7 16v-3M12 16v-5M17 16v-2" />
    </svg>
  )
}

// 글로벌 규제 대응 — 방패/체크
export function IconShield(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3 5 6v5c0 4.2 2.9 7.8 7 9 4.1-1.2 7-4.8 7-9V6l-7-3Z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  )
}

// 잎 — 친환경 상징
export function IconLeaf(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M4 20C3 12 8 5 20 4c1 10-4 15-12 15-2 0-3-.5-4-1Z" />
      <path d="M4 20C7 14 11 10 16 8" />
    </svg>
  )
}

// 화살표 (CTA)
export function IconArrow(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

// 체크
export function IconCheck(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M4 12.5 9 17.5 20 6.5" />
    </svg>
  )
}

// 엑스 (미지원)
export function IconX(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  )
}

// 메일
export function IconMail(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

// 말풍선 (카카오 채널)
export function IconChat(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 4c4.4 0 8 2.9 8 6.5S16.4 17 12 17c-.9 0-1.8-.1-2.6-.3L5 18l1-3.2C4.7 13.6 4 12.1 4 10.5 4 6.9 7.6 4 12 4Z" />
    </svg>
  )
}
