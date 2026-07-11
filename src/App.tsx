// 랜딩페이지 최상위 조립 — 섹션 순서를 정의한다.
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
