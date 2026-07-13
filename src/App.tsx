// 랜딩페이지 최상위 조립 — 섹션 순서를 정의한다.
// CinematicBand(이슬 맺힌 나뭇잎·새 영상) 제거: CBAM 규제 대응을 파는 회사가 감성 자연
// 영상을 쓰면 규제 담당자에게 정확히 그린워싱 신호로 읽힌다. 이 페이지의 무기는 데이터다.
import Nav from './components/Nav'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Features from './components/Features'
import Formula from './components/Formula'
import VisualBand from './components/VisualBand'
import Platform from './components/Platform'
import Comparison from './components/Comparison'
import Targets from './components/Targets'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Features />
        <Formula />
        <VisualBand />
        <Platform />
        <Comparison />
        <Targets />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
