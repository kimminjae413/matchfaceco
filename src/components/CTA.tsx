// 최종 전환 섹션 — 문의 이메일로 유도하는 그린 밴드.
import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'
import { brand } from '../content'
import { IconArrow, IconMail, IconLeaf } from './icons'

export default function CTA() {
  return (
    <section id="contact" className="bg-paper pb-24 pt-8 md:pb-32">
      <div className="wrap">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative overflow-hidden rounded-[28px] bg-deep px-8 py-14 text-paper md:px-14 md:py-20"
        >
          <div className="carbon-grid absolute inset-0 opacity-40" />
          {/* 우측 유리 사인 브랜드 이미지 (데스크톱) */}
          <img
            src="/brand/glass-sign.webp"
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="pointer-events-none absolute inset-y-0 right-0 hidden h-full w-1/2 object-cover opacity-45 [mask-image:linear-gradient(to_left,black_30%,transparent)] [-webkit-mask-image:linear-gradient(to_left,black_30%,transparent)] lg:block"
          />
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-signal/15 blur-3xl" />

          <div className="relative max-w-2xl">
            <motion.div variants={fadeUp} className="mb-5 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-signal/25 bg-signal/8 px-3 py-1.5">
                <IconLeaf className="h-3.5 w-3.5 text-signal" />
                <span className="font-mono text-[11px] tracking-wider text-signal">Your cost. Our carbon mission.</span>
              </span>
              <span className="rounded-full bg-signal px-3 py-1.5 font-mono text-[11px] font-semibold tracking-wider text-ink">
                2026 Q3 베타 오픈
              </span>
            </motion.div>

            <motion.h2 variants={fadeUp} className="text-balance text-[32px] font-bold leading-[1.15] tracking-tight sm:text-[44px]">
              저탄소 제조, 데이터로 시작하세요.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-[16px] leading-relaxed text-paper/70">
              지금 베타를 신청하면 <span className="font-semibold text-paper">파운딩 파트너</span>로서 우선 온보딩과 초기 도입 혜택을 받습니다.
              파트너 제조사 등록도 함께 문의하세요.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${brand.email}?subject=matchfac eco 베타 신청`}
                className="group inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3.5 text-[15px] font-semibold text-ink transition-transform hover:scale-[1.02]"
              >
                <IconMail className="h-4.5 w-4.5" />
                베타 신청하기
                <IconArrow className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={`mailto:${brand.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-paper/25 px-6 py-3.5 font-mono text-[14px] font-medium text-paper/85 transition-colors hover:border-paper/50"
              >
                <IconMail className="h-4.5 w-4.5" />
                {brand.email}
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
