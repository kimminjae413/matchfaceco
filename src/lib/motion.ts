// framer-motion 공통 애니메이션 variants — 스크롤 리빌·스태거를 한 곳에서 관리한다.
import type { Variants } from 'framer-motion'

// 아래에서 위로 페이드인 (진입: ease-out)
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

// 자식 요소를 순차 등장시키는 컨테이너
export const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
}

// 섹션 진입 공통 뷰포트 옵션
export const viewportOnce = { once: true, margin: '-80px' } as const
