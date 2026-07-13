// 랜딩페이지 최상위 조립 — 섹션 순서를 정의한다.
//
// CinematicBand(이슬 맺힌 나뭇잎·새 영상)는 히어로 바로 다음, 자기 섹션으로 둔다.
// 이걸 "감성 자연영상 = 그린워싱 신호"라며 삭제했던 적이 있는데 그 판단은 틀렸다.
// 그린워싱은 실체 없는 주장을 자연 이미지로 덮을 때 문제가 된다. 이 페이지는 산정식·
// 정부 공표 배출계수·예시 산정서를 다 까놓았고, 그 위에서 "탄소를 줄이는 일은 결국
// 자연을 지키는 일"이라 말하는 건 브랜드가 왜 존재하는지를 말하는 것이다. 잎사귀 로고를
// 쓰는 회사가 그걸 말 못 할 이유가 없다. 배경으로 깔아 묻어버리지도 말 것 — 자기 자리에 둔다.
import Nav from './components/Nav'
import Hero from './components/Hero'
import CinematicBand from './components/CinematicBand'
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
        <CinematicBand />
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
