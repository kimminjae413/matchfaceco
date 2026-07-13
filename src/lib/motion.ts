// 모션 정책: 절제.
// 기존의 스태거 + y이동 + ease [0.22,1,0.36,1] 조합은 AI 랜딩의 서명 같은 것이었다.
// 스크롤 리빌은 불투명도만 짧게. 시선은 모션이 아니라 조판이 끌고 간다.
import type { Variants } from 'framer-motion'

export const fade: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.45, ease: 'easeOut' } },
}

export const viewportOnce = { once: true, margin: '-15%' } as const
