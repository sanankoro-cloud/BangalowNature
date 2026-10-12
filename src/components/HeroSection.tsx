import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1207] via-[#2d2010] to-[#0a1f0a]" />
      
      {/* Animated forest pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          {/* Trees */}
          {[...Array(20)].map((_, i) => (
            <g key={i} opacity={0.3 + Math.random() * 0.4}>
              <line
                x1={60 + i * 60}
                y1={800}
                x2={60 + i * 60}
                y2={400 + Math.random() * 200}
                stroke="#3d9a3d"
                strokeWidth="3"
              />
              <circle
                cx={60 + i * 60}
                cy={350 + Math.random() * 200}
                r={30 + Math.random() * 40}
                fill="#1e5a1e"
                opacity="0.6"
              />
            </g>
          ))}
          {/* Ground vegetation */}
          <ellipse cx="600" cy="780" rx="700" ry="60" fill="#143a14" opacity="0.5" />
        </svg>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#5cb85c] rounded-full opacity-30 animate-float"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className={`relative z-10 text-center px-6 max-w-5xl transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-6">
          <span className="inline-block px-4 py-2 rounded-full bg-[#4a3520]/50 border border-[#6b4c2f] text-[#c4a07a] text-sm tracking-wider uppercase">
            🌍 Tanéné, Guinée — Architecture Bioclimatique
          </span>
        </div>
        
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-[#f0e6d4] mb-6 leading-tight">
          Le Bungalow
          <span className="block text-[#5cb85c] mt-2">de Tanéné</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-[#c4a07a] mb-8 max-w-3xl mx-auto leading-relaxed">
          Un habitat autonome de 28m², conçu pour s'effacer devant la nature 
          tout en offrant le confort d'un lit double et toutes les fonctionnalités essentielles.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="glass rounded-xl px-5 py-3 text-[#f0e6d4]">
            <span className="text-2xl mr-2">🛏️</span>
            <span className="text-sm">Lit 2 places</span>
          </div>
          <div className="glass rounded-xl px-5 py-3 text-[#f0e6d4]">
            <span className="text-2xl mr-2">⚡</span>
            <span className="text-sm">100% Autonome</span>
          </div>
          <div className="glass rounded-xl px-5 py-3 text-[#f0e6d4]">
            <span className="text-2xl mr-2">🌿</span>
            <span className="text-sm">Éco-intégré</span>
          </div>
          <div className="glass rounded-xl px-5 py-3 text-[#f0e6d4]">
            <span className="text-2xl mr-2">📐</span>
            <span className="text-sm">28m² optimisés</span>
          </div>
        </div>

        <button
          onClick={() => document.getElementById('concept')?.scrollIntoView({ behavior: 'smooth' })}
          className="group inline-flex items-center gap-3 bg-[#5cb85c] hover:bg-[#3d9a3d] text-[#0a1f0a] font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-[#5cb85c]/20"
        >
          Découvrir le projet
          <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#faf6ef] to-transparent" />
    </section>
  );
}
