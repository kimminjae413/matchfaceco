// 플랫폼 쇼케이스 — 실제 대시보드 목업(DashboardMock)을 감싸는 섹션.
import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'
import DashboardMock from './DashboardMock'

export default function Platform() {
  return (
    <section id="platform" className="relative overflow-hidden bg-paper-2/50 py-24 md:py-32">
      <div className="wrap">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce} className="mb-12 max-w-2xl">
          <motion.span variants={fadeUp} className="eyebrow">The Platform</motion.span>
          <motion.h2 variants={fadeUp} className="mt-4 text-[30px] font-bold leading-[1.2] tracking-tight text-ink sm:text-[40px]">
            시제품부터 물류까지, 한 화면에서.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-[16px] leading-relaxed text-ink/65">
            공장별 설비 효율 DB와 생산 조건을 자동 매핑해, 별도 측정 장비 없이 탄소·에너지 지표를 실시간으로 제공합니다.
            아래는 제품 대시보드 미리보기입니다. <span className="text-cool">(예시 데이터)</span>
          </motion.p>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}>
          <DashboardMock />
        </motion.div>
      </div>
    </section>
  )
}
