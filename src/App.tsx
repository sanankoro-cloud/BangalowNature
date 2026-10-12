import { useState, useEffect, useRef } from 'react';
import HeroSection from './components/HeroSection';
import ConceptSection from './components/ConceptSection';
import FloorPlanSection from './components/FloorPlanSection';
import AutonomySection from './components/AutonomySection';
import MaterialsSection from './components/MaterialsSection';
import NatureSection from './components/NatureSection';
import TechnicalSection from './components/TechnicalSection';
import BudgetSection from './components/BudgetSection';
import Navigation from './components/Navigation';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#faf6ef]">
      <Navigation activeSection={activeSection} />
      <HeroSection />
      <ConceptSection />
      <FloorPlanSection />
      <AutonomySection />
      <MaterialsSection />
      <NatureSection />
      <TechnicalSection />
      <BudgetSection />
      
      {/* Footer */}
      <footer className="bg-[#1a1207] text-[#f0e6d4] py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="font-display text-2xl mb-4">Bungalow Tanéné</h3>
          <p className="text-[#c4a07a] mb-6">Architecture bioclimatique • Autonomie totale • Intégration naturelle</p>
          <div className="flex justify-center gap-8 text-sm text-[#a67c52]">
            <span>Tanéné, Guinée</span>
            <span>•</span>
            <span>Climat tropical humide</span>
            <span>•</span>
            <span>Surface: 28m²</span>
          </div>
          <div className="mt-8 pt-8 border-t border-[#4a3520]">
            <p className="text-xs text-[#6b4c2f]">
              Plan architectural conceptuel — Conçu pour s'harmoniser avec l'écosystème de Tanéné
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
