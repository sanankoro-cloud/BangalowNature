import { useState } from 'react';

type ViewType = 'plan' | '3d' | 'coupe';

export default function FloorPlanSection() {
  const [activeView, setActiveView] = useState<ViewType>('plan');
  const [hoveredRoom, setHoveredRoom] = useState<string | null>(null);

  const rooms = [
    { id: 'bedroom', name: 'Chambre', size: '12m²', color: '#c4a07a', desc: 'Lit double 160x200, rangements intégrés sous le lit, moustiquaire fixe' },
    { id: 'living', name: 'Salon/Cuisine', size: '9m²', color: '#8fd18f', desc: 'Coin cuisine équipé, espace repas, banquette convertible' },
    { id: 'bathroom', name: 'Salle d\'eau', size: '4m²', color: '#90CAF9', desc: 'Douche solaire, toilettes sèches, lavabo' },
    { id: 'terrace', name: 'Terrasse', size: '8m²', color: '#FFCC80', desc: 'Espace couvert, hamac, vue sur la végétation' },
    { id: 'storage', name: 'Stockage', size: '3m²', color: '#CE93D8', desc: 'Réserves d\'eau, batteries, outils' },
  ];

  return (
    <section id="plan" className="py-24 px-6 bg-[#f0e6d4]/50 blueprint-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#5cb85c] text-sm font-semibold tracking-wider uppercase">Plans architecturaux</span>
          <h2 className="font-display text-4xl md:text-5xl text-[#1a1207] mt-3 mb-6">
            Plan du Bungalow
          </h2>
          <p className="text-[#6b4c2f] text-lg max-w-2xl mx-auto">
            28m² intelligemment organisés pour maximiser le confort dans un espace compact.
          </p>
        </div>

        {/* View toggle */}
        <div className="flex justify-center gap-2 mb-10">
          {[
            { id: 'plan' as ViewType, label: 'Vue de dessus', icon: '📐' },
            { id: '3d' as ViewType, label: 'Vue perspective', icon: '🏗️' },
            { id: 'coupe' as ViewType, label: 'Coupe transversale', icon: '📏' },
          ].map((view) => (
            <button
              key={view.id}
              onClick={() => setActiveView(view.id)}
              className={`px-5 py-3 rounded-xl font-medium transition-all ${
                activeView === view.id
                  ? 'bg-[#1a1207] text-[#f0e6d4] shadow-lg'
                  : 'bg-white text-[#6b4c2f] hover:bg-[#dfc9a8]/50'
              }`}
            >
              <span className="mr-2">{view.icon}</span>
              {view.label}
            </button>
          ))}
        </div>

        {/* Floor plan SVG */}
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-[#dfc9a8]/30">
          {activeView === 'plan' && (
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1">
                <svg viewBox="0 0 600 450" className="w-full h-auto" style={{ maxHeight: '500px' }}>
                  {/* Grid */}
                  <defs>
                    <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#e0e0e0" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="600" height="450" fill="url(#grid)" />

                  {/* Main structure outline */}
                  <rect x="50" y="50" width="500" height="350" fill="none" stroke="#1a1207" strokeWidth="3" rx="8" />

                  {/* Bedroom */}
                  <rect
                    x="50" y="50" width="250" height="200"
                    fill={hoveredRoom === 'bedroom' ? '#c4a07a' : '#f0e6d4'}
                    stroke="#4a3520" strokeWidth="2"
                    rx="4"
                    onMouseEnter={() => setHoveredRoom('bedroom')}
                    onMouseLeave={() => setHoveredRoom(null)}
                    className="cursor-pointer transition-all duration-300"
                  />
                  {/* Bed */}
                  <rect x="80" y="80" width="160" height="120" fill="#8b6340" rx="6" opacity="0.6" />
                  <rect x="85" y="85" width="150" height="110" fill="#c4a07a" rx="4" />
                  <text x="160" y="145" textAnchor="middle" fontSize="11" fill="#1a1207" fontWeight="bold">Lit 160×200</text>
                  {/* Pillows */}
                  <rect x="90" y="90" width="60" height="30" fill="#f0e6d4" rx="8" stroke="#a67c52" strokeWidth="1" />
                  <rect x="160" y="90" width="60" height="30" fill="#f0e6d4" rx="8" stroke="#a67c52" strokeWidth="1" />
                  {/* Wardrobe */}
                  <rect x="250" y="60" width="40" height="180" fill="#6b4c2f" rx="2" opacity="0.5" />
                  <text x="270" y="155" textAnchor="middle" fontSize="8" fill="#f0e6d4" transform="rotate(-90, 270, 155)">Rangement</text>
                  <text x="175" y="230" textAnchor="middle" fontSize="14" fill="#1a1207" fontWeight="bold">CHAMBRE</text>
                  <text x="175" y="248" textAnchor="middle" fontSize="11" fill="#6b4c2f">12 m²</text>

                  {/* Living/Kitchen */}
                  <rect
                    x="300" y="50" width="250" height="200"
                    fill={hoveredRoom === 'living' ? '#8fd18f' : '#e0f5e0'}
                    stroke="#4a3520" strokeWidth="2"
                    rx="4"
                    onMouseEnter={() => setHoveredRoom('living')}
                    onMouseLeave={() => setHoveredRoom(null)}
                    className="cursor-pointer transition-all duration-300"
                  />
                  {/* Kitchen counter */}
                  <rect x="480" y="60" width="60" height="120" fill="#6b4c2f" rx="3" opacity="0.7" />
                  <circle cx="500" cy="85" r="10" fill="#1a1207" opacity="0.3" />
                  <circle cx="500" cy="115" r="10" fill="#1a1207" opacity="0.3" />
                  <circle cx="500" cy="145" r="10" fill="#1a1207" opacity="0.3" />
                  <text x="510" y="175" textAnchor="middle" fontSize="8" fill="#f0e6d4">Cuisine</text>
                  {/* Table */}
                  <rect x="340" y="100" width="80" height="50" fill="#a67c52" rx="4" opacity="0.6" />
                  <text x="380" y="130" textAnchor="middle" fontSize="9" fill="#1a1207">Table</text>
                  {/* Bench */}
                  <rect x="320" y="170" width="120" height="25" fill="#8b6340" rx="4" opacity="0.5" />
                  <text x="380" y="187" textAnchor="middle" fontSize="8" fill="#f0e6d4">Banquette</text>
                  <text x="425" y="230" textAnchor="middle" fontSize="14" fill="#1a1207" fontWeight="bold">SALON / CUISINE</text>
                  <text x="425" y="248" textAnchor="middle" fontSize="11" fill="#6b4c2f">9 m²</text>

                  {/* Bathroom */}
                  <rect
                    x="50" y="250" width="150" height="150"
                    fill={hoveredRoom === 'bathroom' ? '#90CAF9' : '#E3F2FD'}
                    stroke="#4a3520" strokeWidth="2"
                    rx="4"
                    onMouseEnter={() => setHoveredRoom('bathroom')}
                    onMouseLeave={() => setHoveredRoom(null)}
                    className="cursor-pointer transition-all duration-300"
                  />
                  {/* Shower */}
                  <rect x="65" y="265" width="60" height="60" fill="#BBDEFB" rx="4" stroke="#2196F3" strokeWidth="1" />
                  <circle cx="95" cy="295" r="15" fill="none" stroke="#2196F3" strokeWidth="1" strokeDasharray="3,3" />
                  <text x="95" y="340" textAnchor="middle" fontSize="8" fill="#1565C0">Douche</text>
                  {/* Toilet */}
                  <rect x="140" y="270" width="40" height="45" fill="#E8EAF6" rx="4" stroke="#3F51B5" strokeWidth="1" />
                  <text x="160" y="340" textAnchor="middle" fontSize="8" fill="#283593">Toilettes</text>
                  {/* Sink */}
                  <rect x="65" y="355" width="50" height="30" fill="#E1F5FE" rx="4" stroke="#0288D1" strokeWidth="1" />
                  <text x="90" y="375" textAnchor="middle" fontSize="7" fill="#01579B">Lavabo</text>
                  <text x="125" y="395" textAnchor="middle" fontSize="12" fill="#1a1207" fontWeight="bold">SALLE D'EAU</text>
                  <text x="125" y="410" textAnchor="middle" fontSize="10" fill="#6b4c2f">4 m²</text>

                  {/* Storage */}
                  <rect
                    x="200" y="250" width="100" height="150"
                    fill={hoveredRoom === 'storage' ? '#CE93D8' : '#F3E5F5'}
                    stroke="#4a3520" strokeWidth="2"
                    rx="4"
                    onMouseEnter={() => setHoveredRoom('storage')}
                    onMouseLeave={() => setHoveredRoom(null)}
                    className="cursor-pointer transition-all duration-300"
                  />
                  {/* Water tank */}
                  <circle cx="250" cy="300" r="25" fill="#BBDEFB" stroke="#1565C0" strokeWidth="1.5" />
                  <text x="250" y="304" textAnchor="middle" fontSize="8" fill="#0D47A1">Eau</text>
                  {/* Battery */}
                  <rect x="220" y="340" width="60" height="30" fill="#FFF9C4" rx="3" stroke="#F57F17" strokeWidth="1" />
                  <text x="250" y="360" textAnchor="middle" fontSize="8" fill="#E65100">Batterie</text>
                  <text x="250" y="395" textAnchor="middle" fontSize="11" fill="#1a1207" fontWeight="bold">STOCKAGE</text>
                  <text x="250" y="410" textAnchor="middle" fontSize="10" fill="#6b4c2f">3 m²</text>

                  {/* Terrace */}
                  <rect
                    x="300" y="250" width="250" height="150"
                    fill={hoveredRoom === 'terrace' ? '#FFCC80' : '#FFF3E0'}
                    stroke="#4a3520" strokeWidth="2"
                    rx="4"
                    strokeDasharray="8,4"
                    onMouseEnter={() => setHoveredRoom('terrace')}
                    onMouseLeave={() => setHoveredRoom(null)}
                    className="cursor-pointer transition-all duration-300"
                  />
                  {/* Hammock */}
                  <path d="M 350 310 Q 425 350 500 310" fill="none" stroke="#8b6340" strokeWidth="2" />
                  <text x="425" y="340" textAnchor="middle" fontSize="9" fill="#6b4c2f">Hamac</text>
                  {/* Plants */}
                  <circle cx="330" cy="280" r="12" fill="#5cb85c" opacity="0.5" />
                  <circle cx="520" cy="280" r="12" fill="#5cb85c" opacity="0.5" />
                  <text x="425" y="390" textAnchor="middle" fontSize="14" fill="#1a1207" fontWeight="bold">TERRASSE</text>
                  <text x="425" y="408" textAnchor="middle" fontSize="11" fill="#6b4c2f">8 m² — Couverte</text>

                  {/* Door indicators */}
                  <path d="M 295 150 Q 310 150 310 165" fill="none" stroke="#4a3520" strokeWidth="2" />
                  <path d="M 195 248 Q 195 260 210 260" fill="none" stroke="#4a3520" strokeWidth="2" />
                  <path d="M 295 320 Q 310 320 310 335" fill="none" stroke="#4a3520" strokeWidth="2" />

                  {/* Compass */}
                  <g transform="translate(560, 30)">
                    <circle cx="0" cy="0" r="18" fill="white" stroke="#1a1207" strokeWidth="1" />
                    <text x="0" y="-6" textAnchor="middle" fontSize="10" fill="#1a1207" fontWeight="bold">N</text>
                    <path d="M 0 -14 L 3 -4 L 0 -6 L -3 -4 Z" fill="#c0392b" />
                    <path d="M 0 14 L 3 4 L 0 6 L -3 4 Z" fill="#1a1207" />
                  </g>

                  {/* Scale */}
                  <line x1="50" y1="435" x2="170" y2="435" stroke="#1a1207" strokeWidth="2" />
                  <line x1="50" y1="430" x2="50" y2="440" stroke="#1a1207" strokeWidth="2" />
                  <line x1="170" y1="430" x2="170" y2="440" stroke="#1a1207" strokeWidth="2" />
                  <text x="110" y="430" textAnchor="middle" fontSize="10" fill="#1a1207">2 m</text>

                  {/* Dimensions */}
                  <text x="300" y="40" textAnchor="middle" fontSize="11" fill="#6b4c2f">10 m</text>
                  <line x1="50" y1="44" x2="550" y2="44" stroke="#6b4c2f" strokeWidth="0.5" strokeDasharray="4,2" />
                  <text x="40" y="230" textAnchor="middle" fontSize="11" fill="#6b4c2f" transform="rotate(-90, 40, 230)">7 m</text>
                </svg>
              </div>

              {/* Room details panel */}
              <div className="lg:w-72 space-y-3">
                <h3 className="font-display text-lg text-[#1a1207] mb-4">Détail des espaces</h3>
                {rooms.map((room) => (
                  <div
                    key={room.id}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                      hoveredRoom === room.id
                        ? 'border-[#5cb85c] bg-[#e0f5e0] shadow-md'
                        : 'border-[#dfc9a8]/50 bg-white hover:border-[#c4a07a]'
                    }`}
                    onMouseEnter={() => setHoveredRoom(room.id)}
                    onMouseLeave={() => setHoveredRoom(null)}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-semibold text-[#1a1207]">{room.name}</h4>
                      <span className="text-xs font-mono bg-[#f0e6d4] px-2 py-1 rounded-full">{room.size}</span>
                    </div>
                    <p className="text-xs text-[#6b4c2f] leading-relaxed">{room.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeView === '3d' && (
            <div className="flex items-center justify-center py-12">
              <svg viewBox="0 0 700 500" className="w-full max-w-3xl">
                {/* Ground */}
                <ellipse cx="350" cy="450" rx="300" ry="40" fill="#2d5a1e" opacity="0.3" />
                
                {/* Pilotis */}
                {[150, 250, 350, 450, 550].map((x, i) => (
                  <g key={i}>
                    <rect x={x - 5} y={300} width={10} height={130} fill="#6b4c2f" />
                    <rect x={x - 3} y={300} width={6} height={130} fill="#8b6340" />
                  </g>
                ))}

                {/* Floor platform */}
                <polygon points="120,300 580,300 620,280 160,280" fill="#a67c52" stroke="#4a3520" strokeWidth="2" />
                <polygon points="120,300 580,300 580,310 120,310" fill="#8b6340" stroke="#4a3520" strokeWidth="1" />

                {/* Walls */}
                <polygon points="160,280 160,160 580,160 580,280" fill="#f0e6d4" stroke="#4a3520" strokeWidth="2" opacity="0.9" />
                <polygon points="120,300 120,180 160,160 160,280" fill="#dfc9a8" stroke="#4a3520" strokeWidth="2" opacity="0.9" />

                {/* Window */}
                <rect x="250" y="200" width="80" height="60" fill="#87CEEB" stroke="#4a3520" strokeWidth="2" rx="2" />
                <line x1="290" y1="200" x2="290" y2="260" stroke="#4a3520" strokeWidth="1" />
                <line x1="250" y1="230" x2="330" y2="230" stroke="#4a3520" strokeWidth="1" />

                {/* Door */}
                <rect x="400" y="190" width="50" height="90" fill="#6b4c2f" stroke="#4a3520" strokeWidth="2" rx="2" />
                <circle cx="440" cy="240" r="3" fill="#FFD700" />

                {/* Roof */}
                <polygon points="100,160 600,160 620,140 350,80 80,140" fill="#4a3520" stroke="#2d2010" strokeWidth="2" />
                <polygon points="100,160 350,80 350,90 100,170" fill="#6b4c2f" opacity="0.5" />

                {/* Roof overhang vegetation */}
                <circle cx="130" cy="155" r="20" fill="#5cb85c" opacity="0.6" />
                <circle cx="570" cy="155" r="20" fill="#5cb85c" opacity="0.6" />

                {/* Solar panel on roof */}
                <polygon points="250,110 400,110 410,100 260,100" fill="#1a237e" stroke="#0D47A1" strokeWidth="1" />
                <line x1="290" y1="100" x2="280" y2="110" stroke="#42A5F5" strokeWidth="0.5" />
                <line x1="330" y1="100" x2="320" y2="110" stroke="#42A5F5" strokeWidth="0.5" />
                <line x1="370" y1="100" x2="360" y2="110" stroke="#42A5F5" strokeWidth="0.5" />

                {/* Terrace railing */}
                <line x1="120" y1="300" x2="120" y2="260" stroke="#8b6340" strokeWidth="3" />
                <line x1="80" y1="260" x2="120" y2="260" stroke="#8b6340" strokeWidth="3" />

                {/* Surrounding vegetation */}
                <circle cx="50" cy="400" r="40" fill="#1e5a1e" opacity="0.7" />
                <circle cx="650" cy="380" r="50" fill="#2d7a2d" opacity="0.6" />
                <circle cx="680" cy="420" r="30" fill="#1e5a1e" opacity="0.5" />
                <rect x="45" y="400" width="8" height="60" fill="#4a3520" />
                <rect x="645" y="380" width="10" height="80" fill="#4a3520" />

                {/* Labels */}
                <text x="350" y="40" textAnchor="middle" fontSize="16" fill="#1a1207" fontWeight="bold">Vue Perspective Isométrique</text>
                <text x="350" y="480" textAnchor="middle" fontSize="11" fill="#6b4c2f">Structure sur pilotis — Toiture végétalisée possible — Panneaux solaires intégrés</text>
              </svg>
            </div>
          )}

          {activeView === 'coupe' && (
            <div className="flex items-center justify-center py-12">
              <svg viewBox="0 0 700 400" className="w-full max-w-3xl">
                {/* Ground level */}
                <rect x="50" y="320" width="600" height="60" fill="#4a3520" opacity="0.2" rx="4" />
                <text x="350" y="360" textAnchor="middle" fontSize="11" fill="#6b4c2f">Niveau du sol naturel</text>

                {/* Pilotis */}
                <rect x="130" y="240" width="12" height="80" fill="#6b4c2f" />
                <rect x="280" y="240" width="12" height="80" fill="#6b4c2f" />
                <rect x="430" y="240" width="12" height="80" fill="#6b4c2f" />
                <rect x="560" y="240" width="12" height="80" fill="#6b4c2f" />

                {/* Floor */}
                <rect x="100" y="230" width="500" height="15" fill="#a67c52" stroke="#4a3520" strokeWidth="1.5" />

                {/* Walls */}
                <rect x="100" y="120" width="12" height="110" fill="#dfc9a8" stroke="#4a3520" strokeWidth="1" />
                <rect x="588" y="120" width="12" height="110" fill="#dfc9a8" stroke="#4a3520" strokeWidth="1" />

                {/* Interior partition */}
                <rect x="300" y="120" width="8" height="110" fill="#dfc9a8" stroke="#4a3520" strokeWidth="1" />

                {/* Roof */}
                <polygon points="80,120 350,50 620,120" fill="#4a3520" stroke="#2d2010" strokeWidth="2" />
                <polygon points="80,120 350,55 350,65 80,125" fill="#6b4c2f" opacity="0.4" />

                {/* Interior - Bed */}
                <rect x="140" y="190" width="130" height="40" fill="#c4a07a" rx="4" />
                <text x="205" y="215" textAnchor="middle" fontSize="9" fill="#1a1207">Lit double</text>

                {/* Interior - Kitchen */}
                <rect x="450" y="190" width="120" height="40" fill="#8b6340" rx="3" />
                <text x="510" y="215" textAnchor="middle" fontSize="9" fill="#f0e6d4">Cuisine</text>

                {/* Height annotations */}
                <line x1="70" y1="230" x2="70" y2="120" stroke="#c0392b" strokeWidth="1" strokeDasharray="4,2" />
                <line x1="65" y1="230" x2="75" y2="230" stroke="#c0392b" strokeWidth="1.5" />
                <line x1="65" y1="120" x2="75" y2="120" stroke="#c0392b" strokeWidth="1.5" />
                <text x="60" y="175" textAnchor="middle" fontSize="9" fill="#c0392b" transform="rotate(-90, 60, 175)">2.40m</text>

                <line x1="650" y1="320" x2="650" y2="230" stroke="#2196F3" strokeWidth="1" strokeDasharray="4,2" />
                <line x1="645" y1="320" x2="655" y2="320" stroke="#2196F3" strokeWidth="1.5" />
                <line x1="645" y1="230" x2="655" y2="230" stroke="#2196F3" strokeWidth="1.5" />
                <text x="660" y="280" textAnchor="middle" fontSize="9" fill="#2196F3" transform="rotate(-90, 660, 280)">0.80m</text>

                {/* Air flow arrows */}
                <path d="M 130 140 C 200 130, 250 135, 290 140" fill="none" stroke="#5cb85c" strokeWidth="2" markerEnd="url(#arrow)" />
                <path d="M 320 140 C 400 130, 500 135, 570 140" fill="none" stroke="#5cb85c" strokeWidth="2" markerEnd="url(#arrow)" />
                <defs>
                  <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                    <path d="M 0 0 L 8 4 L 0 8 Z" fill="#5cb85c" />
                  </marker>
                </defs>
                <text x="350" y="110" textAnchor="middle" fontSize="10" fill="#5cb85c" fontWeight="bold">↗ Flux d'air naturel ↗</text>

                {/* Roof height */}
                <line x1="350" y1="50" x2="350" y2="30" stroke="#FF9800" strokeWidth="1" strokeDasharray="3,2" />
                <text x="350" y="25" textAnchor="middle" fontSize="9" fill="#FF9800">Hauteur faîtage: 3.80m</text>

                <text x="350" y="395" textAnchor="middle" fontSize="12" fill="#1a1207" fontWeight="bold">Coupe Transversale A-A</text>
              </svg>
            </div>
          )}
        </div>

        {/* Dimensions summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[
            { label: 'Surface totale', value: '28 m²', icon: '📐' },
            { label: 'Emprise au sol', value: '10 × 7 m', icon: '📏' },
            { label: 'Hauteur sous plafond', value: '2.40 m', icon: '📊' },
            { label: 'Hauteur faîtage', value: '3.80 m', icon: '🏔️' },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-4 text-center shadow-sm border border-[#dfc9a8]/30">
              <span className="text-2xl">{item.icon}</span>
              <p className="font-display text-xl text-[#1a1207] mt-2">{item.value}</p>
              <p className="text-xs text-[#6b4c2f]">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
