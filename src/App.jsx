import React from 'react'
import HeroSection from './components/HeroSection'
import CharacterShowcase from './components/CharacterShowcase'
import ShadowMonarchSection from './components/ShadowMonarchSection'
import FamilyBackgroundSection from './components/FamilyBackgroundSection'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <CharacterShowcase />
      <ShadowMonarchSection />
      <FamilyBackgroundSection />

      <footer className="bg-black text-zinc-500 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm">
          <p>
            Fan-made informational site inspired by Solo Leveling. Images are thematic stock photography.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App