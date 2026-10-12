import { useState, useEffect } from 'react';

interface NavigationProps {
  activeSection: string;
}

const navItems = [
  { id: 'hero', label: 'Accueil', icon: '🏠' },
  { id: 'concept', label: 'Concept', icon: '💡' },
  { id: 'plan', label: 'Plan', icon: '📐' },
  { id: 'autonomy', label: 'Autonomie', icon: '⚡' },
  { id: 'materials', label: 'Matériaux', icon: '🪵' },
  { id: 'nature', label: 'Nature', icon: '🌿' },
  { id: 'technical', label: 'Technique', icon: '🔧' },
  { id: 'budget', label: 'Budget', icon: '💰' },
];

export default function Navigation({ activeSection }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMobileOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#1a1207]/95 backdrop-blur-md shadow-lg py-2'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <button
            onClick={() => scrollTo('hero')}
            className="font-display text-xl text-[#f0e6d4] hover:text-[#c4a07a] transition-colors"
          >
            🏡 Bungalow Tanéné
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-3 py-2 rounded-full text-sm transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-[#4a3520] text-[#f0e6d4]'
                    : 'text-[#c4a07a] hover:text-[#f0e6d4] hover:bg-[#2d2010]/50'
                }`}
              >
                <span className="mr-1">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden text-[#f0e6d4] text-2xl"
          >
            {isMobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#1a1207]/98 backdrop-blur-lg flex flex-col items-center justify-center gap-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`px-6 py-3 rounded-full text-lg transition-all ${
                activeSection === item.id
                  ? 'bg-[#4a3520] text-[#f0e6d4]'
                  : 'text-[#c4a07a] hover:text-[#f0e6d4]'
              }`}
            >
              <span className="mr-2 text-xl">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
