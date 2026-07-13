// 플랫폼 쇼케이스 — 대시보드 목업(DashboardMock)을 감싸는 섹션.
import { motion } from 'framer-motion'
import { fade, viewportOnce } from '../lib/motion'
import DashboardMock from './DashboardMock'
import { platform } from '../content'

export default function Platform() {
  return (
    <section id="platform" className="border-t border-ink/10 bg-paper py-28 md:py-40">
      <div className="wrap">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={viewportOnce}>
          <div className="label">{platform.label}</div>

          <h2 className="mt-10 max-w-3xl text-balance font-display text-[30px] font-extrabold leading-[1.14] tracking-tightest text-ink sm:text-[46px]">
            {platform.h2}
          </h2>
          <p className="mt-6 max-w-2xl text-[17px] leading-[1.75] text-ink/55">{platform.body}</p>

          <div className="mt-14">
            <DashboardMock />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
