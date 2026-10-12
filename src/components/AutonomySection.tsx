import { useState } from 'react';

export default function AutonomySection() {
  const [activeSystem, setActiveSystem] = useState('solar');

  const systems = {
    solar: {
      title: 'Énergie Solaire',
      icon: '☀️',
      color: '#FF9800',
      description: 'Système photovoltaïque autonome pour alimenter éclairage, ventilation et petits appareils.',
      specs: [
        { label: 'Panneaux', value: '2 × 150W monocristallin' },
        { label: 'Batterie', value: 'Lithium LiFePO4 200Ah (12V)' },
        { label: 'Régulateur', value: 'MPPT 30A' },
        { label: 'Onduleur', value: '300W pur sinus' },
        { label: 'Autonomie', value: '3 jours sans soleil' },
        { label: 'Production/jour', value: '~1.2 kWh (moyenne)' },
      ],
      details: 'Les panneaux sont intégrés à la toiture avec une inclinaison de 15° optimisée pour la latitude de Tanéné (≈10°N). La batterie est stockée dans le local technique, protégée de l\'humidité.',
    },
    water: {
      title: 'Gestion de l\'Eau',
      icon: '💧',
      color: '#2196F3',
      description: 'Collecte des eaux de pluie, filtration et stockage pour une consommation responsable.',
      specs: [
        { label: 'Collecte', value: 'Toiture 70m² → filtre premier flux' },
        { label: 'Stockage', value: 'Cuve 2000L (enterrée sous pilotis)' },
        { label: 'Filtration', value: 'Charbon actif + UV (potabilisation)' },
        { label: 'Consommation', value: '~40L/jour (2 personnes)' },
        { label: 'Autonomie', value: '50 jours (saison sèche)' },
        { label: 'Eau chaude', value: 'Chauffe-eau solaire 60L' },
      ],
      details: 'La toiture en tôle ondulée récupère la quasi-totalité des eaux de pluie. Un système de premier flux écarte les premières eaux chargées de poussières. L\'eau est ensuite filtrée par charbon actif et stérilisée par lampe UV alimentée par le solaire.',
    },
    waste: {
      title: 'Gestion des Déchets',
      icon: '♻️',
      color: '#5cb85c',
      description: 'Toilettes sèches à compostage et traitement des eaux grises par phytoépuration.',
      specs: [
        { label: 'Toilettes', value: 'Sèches à séparation (urine/fèces)' },
        { label: 'Compostage', value: 'Composteur 200L sous la structure' },
        { label: 'Eaux grises', value: 'Filtre planté de roseaux (2m²)' },
        { label: 'Déchets organiques', value: 'Compost pour jardin aromatique' },
        { label: 'Urine', value: 'Diluée → engrais pour bananiers' },
        { label: 'Recyclage', value: 'Tri sélectif, réduction à la source' },
      ],
      details: 'Les toilettes sèches à séparation éliminent les odeurs et transforment les déchets en compost riche. Les eaux de douche et de vaisselle sont traitées par un petit filtre planté de roseaux qui purifie l\'eau avant infiltration naturelle dans le sol.',
    },
    ventilation: {
      title: 'Ventilation & Confort',
      icon: '💨',
      color: '#78909C',
      description: 'Conception bioclimatique pour un confort thermique sans climatisation.',
      specs: [
        { label: 'Ventilation', value: 'Traversante est-ouest (brises dominantes)' },
        { label: 'Protection solaire', value: 'Débords de toiture 1.5m' },
        { label: 'Isolation toiture', value: 'Fibre de raphia + lame d\'air ventilée' },
        { label: 'Surélévation', value: '0.80m (air frais sous le plancher)' },
        { label: 'Moustiquaires', value: 'Fixes sur toutes les ouvertures' },
        { label: 'Température', value: '24-28°C intérieur (vs 35°C+ extérieur)' },
      ],
      details: 'La surélévation sur pilotis permet à l\'air frais de circuler sous le plancher, refroidissant naturellement la structure. Les ouvertures sont positionnées pour capter les brises dominantes de mousson. La toiture double-peau avec lame d\'air ventilée réduit considérablement l\'apport thermique.',
    },
  };

  const currentSystem = systems[activeSystem as keyof typeof systems];

  return (
    <section id="autonomy" className="py-24 px-6 bg-gradient-to-b from-[#faf6ef] to-[#f0e6d4]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#FF9800] text-sm font-semibold tracking-wider uppercase">Systèmes autonomes</span>
          <h2 className="font-display text-4xl md:text-5xl text-[#1a1207] mt-3 mb-6">
            Autonomie Totale
          </h2>
          <p className="text-[#6b4c2f] text-lg max-w-3xl mx-auto">
            Tanéné est éloigné de tout réseau. Le bungalow produit sa propre énergie, 
            collecte son eau et gère ses déchets en circuit fermé.
          </p>
        </div>

        {/* System selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {Object.entries(systems).map(([key, system]) => (
            <button
              key={key}
              onClick={() => setActiveSystem(key)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeSystem === key
                  ? 'text-white shadow-lg scale-105'
                  : 'bg-white text-[#6b4c2f] hover:bg-[#dfc9a8]/50 border border-[#dfc9a8]/50'
              }`}
              style={activeSystem === key ? { backgroundColor: system.color } : {}}
            >
              <span className="text-xl">{system.icon}</span>
              {system.title}
            </button>
          ))}
        </div>

        {/* System detail */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-[#dfc9a8]/30">
          <div className="p-8 md:p-12" style={{ borderTopColor: currentSystem.color, borderTopWidth: '4px' }}>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl">{currentSystem.icon}</span>
              <div>
                <h3 className="font-display text-2xl text-[#1a1207]">{currentSystem.title}</h3>
                <p className="text-[#6b4c2f]">{currentSystem.description}</p>
              </div>
            </div>

            {/* Specs grid */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {currentSystem.specs.map((spec, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-[#faf6ef] border border-[#dfc9a8]/30">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: currentSystem.color }} />
                  <div>
                    <span className="text-xs text-[#6b4c2f] uppercase tracking-wider">{spec.label}</span>
                    <p className="font-medium text-[#1a1207]">{spec.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Details */}
            <div className="p-6 rounded-xl bg-[#f0e6d4]/50 border-l-4" style={{ borderColor: currentSystem.color }}>
              <p className="text-[#4a3520] leading-relaxed">{currentSystem.details}</p>
            </div>
          </div>
        </div>

        {/* Autonomy diagram */}
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-sm border border-[#dfc9a8]/30">
          <h3 className="font-display text-xl text-center text-[#1a1207] mb-8">Schéma du Cycle Autonome</h3>
          <svg viewBox="0 0 600 300" className="w-full max-w-2xl mx-auto">
            {/* Central node */}
            <circle cx="300" cy="150" r="50" fill="#1a1207" />
            <text x="300" y="145" textAnchor="middle" fontSize="10" fill="#f0e6d4" fontWeight="bold">BUNGALOW</text>
            <text x="300" y="160" textAnchor="middle" fontSize="9" fill="#c4a07a">28 m²</text>

            {/* Solar */}
            <circle cx="150" cy="60" r="35" fill="#FF9800" opacity="0.9" />
            <text x="150" y="55" textAnchor="middle" fontSize="18">☀️</text>
            <text x="150" y="75" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">SOLAIRE</text>
            <path d="M 185 80 Q 230 110 260 130" fill="none" stroke="#FF9800" strokeWidth="2" strokeDasharray="5,3" />

            {/* Water */}
            <circle cx="450" cy="60" r="35" fill="#2196F3" opacity="0.9" />
            <text x="450" y="55" textAnchor="middle" fontSize="18">💧</text>
            <text x="450" y="75" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">EAU</text>
            <path d="M 415 80 Q 370 110 340 130" fill="none" stroke="#2196F3" strokeWidth="2" strokeDasharray="5,3" />

            {/* Compost */}
            <circle cx="150" cy="240" r="35" fill="#5cb85c" opacity="0.9" />
            <text x="150" y="235" textAnchor="middle" fontSize="18">♻️</text>
            <text x="150" y="255" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">COMPOST</text>
            <path d="M 185 220 Q 230 190 260 170" fill="none" stroke="#5cb85c" strokeWidth="2" strokeDasharray="5,3" />

            {/* Air */}
            <circle cx="450" cy="240" r="35" fill="#78909C" opacity="0.9" />
            <text x="450" y="235" textAnchor="middle" fontSize="18">💨</text>
            <text x="450" y="255" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">AIR</text>
            <path d="M 415 220 Q 370 190 340 170" fill="none" stroke="#78909C" strokeWidth="2" strokeDasharray="5,3" />

            {/* Return arrows */}
            <path d="M 150 95 Q 100 150 150 205" fill="none" stroke="#5cb85c" strokeWidth="1.5" opacity="0.5" />
            <path d="M 450 95 Q 500 150 450 205" fill="none" stroke="#2196F3" strokeWidth="1.5" opacity="0.5" />
          </svg>
        </div>
      </div>
    </section>
  );
}
