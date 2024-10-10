import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import HookSection from './components/HookSection'
import WorkflowSection from './components/WorkflowSection'
import ImpactSection from './components/ImpactSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-maturian-cream">
      <Header />
      <Hero />
      <HookSection />
      <WorkflowSection />
      <ImpactSection />
      <Footer />
    </div>
  )
}

export default App