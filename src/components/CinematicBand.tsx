// 시네마틱 영상 밴드 — 실제 숲 잎사귀 + 새(Veo 생성) 배경 위에 또렷한 폰트로 슬로건.
// 저탄소 = 자연 보호. 잎 로고 브랜드 정체성을 감성적으로 전달하는 풀블리드 구간.
import { motion, useReducedMotion } from 'framer-motion'
import { brand } from '../content'
import { IconLeaf } from './icons'

export default function CinematicBand() {
  const reduce = useReducedMotion()
  const reveal = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-80px' },
        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
      }

  return (
    <section
      aria-label={brand.taglineEn}
      className="relative flex min-h-[540px] items-center justify-center overflow-hidden bg-ink text-paper md:min-h-[640px]"
    >
      {/* 배경 영상 (자동재생·무음·루프, poster 폴백) */}
      <video
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/brand/hero-poster.jpg"
        aria-hidden="true"
      >
        <source src="/brand/hero-web.mp4" type="video/mp4" />
      </video>

      {/* 가독성용 오버레이 — 어두운 그라디언트 + 좌우 비네트 */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink/80" />
      <div className="pointer-events-none absolute inset-0 bg-ink/25" />

      {/* 콘텐츠 */}
      <motion.div {...reveal} className="wrap relative z-10 flex flex-col items-center text-center">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-signal/40 bg-ink/40 px-4 py-1.5 backdrop-blur">
          <IconLeaf className="h-4 w-4 text-signal" />
          <span className="font-mono text-[11px] tracking-[0.16em] text-signal">LOW-CARBON · BY NATURE</span>
        </span>

        <h2 className="text-balance font-round text-[40px] font-bold leading-[1.06] tracking-tightest drop-shadow-[0_2px_20px_rgba(5,16,12,0.6)] sm:text-[64px] lg:text-[80px]">
          Your cost.<br />
          <span className="text-signal">Our carbon mission.</span>
        </h2>

        <p className="mt-7 max-w-md text-[15px] leading-relaxed text-paper/85 drop-shadow-[0_1px_12px_rgba(5,16,12,0.7)] sm:text-[17px]">
          탄소를 줄이는 일은 결국, 자연을 지키는 일입니다.<br className="hidden sm:block" />
          데이터로 더 푸른 제조를 설계합니다.
        </p>
      </motion.div>
    </section>
  )
}
