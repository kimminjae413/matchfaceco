// 플랫폼 쇼케이스 — 대시보드 목업(DashboardMock)을 감싸는 섹션.
import { motion } from 'framer-motion'
import { fade, viewportOnce } from '../lib/motion'
import DashboardMock from './DashboardMock'

export default function Platform() {
  return (
    <section id="platform" className="border-t border-ink/10 bg-paper py-28 md:py-40">
      <div className="wrap">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={viewportOnce}>
          <div className="label">플랫폼</div>

          <h2 className="mt-10 max-w-3xl text-balance font-display text-[30px] font-extrabold leading-[1.14] tracking-tightest text-ink sm:text-[46px]">
            시제품부터 물류까지, 한 화면에서.
          </h2>
          <p className="mt-6 max-w-2xl text-[17px] leading-[1.75] text-ink/55">
            공장별 설비 효율 DB와 생산 조건을 자동 매핑해, 별도 측정 장비 없이 탄소·에너지 지표를
            제공합니다. 시제품부터 물류·PCF·리포트까지 제조 전 과정을 한 화면에서 관리합니다.
          </p>

          <div className="mt-14">
            <DashboardMock />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
