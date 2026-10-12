export default function NatureSection() {
  return (
    <section id="nature" className="py-24 px-6 bg-gradient-to-b from-[#f0e6d4] to-[#faf6ef]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#5cb85c] text-sm font-semibold tracking-wider uppercase">Harmonie écologique</span>
          <h2 className="font-display text-4xl md:text-5xl text-[#1a1207] mt-3 mb-6">
            Intégration dans la Nature
          </h2>
          <p className="text-[#6b4c2f] text-lg max-w-3xl mx-auto">
            Le bungalow ne se contente pas de s'installer à Tanéné — il fait partie de l'écosystème. 
            Chaque décision architecturale renforce la biodiversité locale.
          </p>
        </div>

        {/* Integration strategies */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#dfc9a8]/30">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🌳</span>
              <h3 className="font-display text-xl text-[#1a1207]">Stratégie Végétale</h3>
            </div>
            <ul className="space-y-4">
              {[
                { title: 'Toiture végétalisée partielle', desc: 'Section de 4m² couverte de plantes rampantes locales, favorisant les insectes pollinisateurs' },
                { title: 'Jardin aromatique périphérique', desc: 'Basilic africain, menthe locale, citronnelle — répulsif naturel contre les moustiques' },
                { title: 'Haie vive comestible', desc: 'Moringa, papayer, bananier en ceinture autour du bungalow — brise-vent et nourriture' },
                { title: 'Pas d\'espèce invasive', desc: 'Uniquement des plantes indigènes de la région de Tanéné, adaptées au climat' },
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#e0f5e0] flex items-center justify-center text-[#5cb85c] text-xs font-bold flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <div>
                    <h4 className="font-medium text-[#1a1207]">{item.title}</h4>
                    <p className="text-sm text-[#6b4c2f]">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#dfc9a8]/30">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🦎</span>
              <h3 className="font-display text-xl text-[#1a1207]">Biodiversité Préservée</h3>
            </div>
            <ul className="space-y-4">
              {[
                { title: 'Pilotis = habitat préservé', desc: 'Le sol sous le bungalow reste un espace de vie pour la faune (reptiles, insectes, petits mammifères)' },
                { title: 'Passages à faune', desc: 'Ouvertures de 15cm dans la haie vive pour permettre le passage de la petite faune' },
                { title: 'Éclairage chaud uniquement', desc: 'LED 2700K max pour ne pas perturber les insectes nocturnes et les chauves-souris' },
                { title: 'Nichoirs intégrés', desc: 'Cavités dans la structure bois pour martinets et chauves-souris (prédateurs de moustiques)' },
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#e0f5e0] flex items-center justify-center text-[#5cb85c] text-xs font-bold flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <div>
                    <h4 className="font-medium text-[#1a1207]">{item.title}</h4>
                    <p className="text-sm text-[#6b4c2f]">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Site integration diagram */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-[#dfc9a8]/30">
          <h3 className="font-display text-xl text-center text-[#1a1207] mb-8">Implantation sur le Site</h3>
          <svg viewBox="0 0 700 450" className="w-full max-w-3xl mx-auto">
            {/* Background terrain */}
            <rect x="0" y="0" width="700" height="450" fill="#e8f5e9" rx="12" />
            
            {/* Terrain contour */}
            <path d="M 0 350 Q 100 320 200 340 Q 350 360 500 330 Q 600 310 700 340 L 700 450 L 0 450 Z" fill="#c8e6c9" />
            <path d="M 0 380 Q 150 360 300 375 Q 500 390 700 370 L 700 450 L 0 450 Z" fill="#a5d6a7" />

            {/* Existing trees */}
            {[
              { x: 80, y: 200, r: 35 },
              { x: 620, y: 180, r: 40 },
              { x: 50, y: 320, r: 25 },
              { x: 650, y: 300, r: 30 },
              { x: 150, y: 100, r: 28 },
              { x: 550, y: 80, r: 32 },
            ].map((tree, i) => (
              <g key={i}>
                <circle cx={tree.x} cy={tree.y} r={tree.r} fill="#2d7a2d" opacity="0.6" />
                <circle cx={tree.x} cy={tree.y} r={tree.r * 0.7} fill="#1e5a1e" opacity="0.5" />
                <circle cx={tree.x - 5} cy={tree.y - 5} r={tree.r * 0.4} fill="#3d9a3d" opacity="0.4" />
              </g>
            ))}

            {/* Bungalow footprint */}
            <rect x="250" y="180" width="200" height="140" fill="#f0e6d4" stroke="#4a3520" strokeWidth="3" rx="4" />
            <text x="350" y="240" textAnchor="middle" fontSize="12" fill="#1a1207" fontWeight="bold">BUNGALOW</text>
            <text x="350" y="260" textAnchor="middle" fontSize="10" fill="#6b4c2f">28 m²</text>
            <text x="350" y="280" textAnchor="middle" fontSize="9" fill="#6b4c2f">sur pilotis</text>

            {/* Garden areas */}
            <ellipse cx="200" cy="250" rx="40" ry="60" fill="#81C784" opacity="0.5" stroke="#388E3C" strokeWidth="1" strokeDasharray="4,2" />
            <text x="200" y="250" textAnchor="middle" fontSize="8" fill="#1B5E20">Jardin</text>
            <text x="200" y="262" textAnchor="middle" fontSize="8" fill="#1B5E20">aromatique</text>

            <ellipse cx="500" cy="250" rx="40" ry="60" fill="#81C784" opacity="0.5" stroke="#388E3C" strokeWidth="1" strokeDasharray="4,2" />
            <text x="500" y="250" textAnchor="middle" fontSize="8" fill="#1B5E20">Haie</text>
            <text x="500" y="262" textAnchor="middle" fontSize="8" fill="#1B5E20">comestible</text>

            {/* Water collection area */}
            <rect x="280" y="340" width="140" height="30" fill="#BBDEFB" rx="4" stroke="#1565C0" strokeWidth="1" />
            <text x="350" y="360" textAnchor="middle" fontSize="9" fill="#0D47A1">Cuve eau de pluie (2000L)</text>

            {/* Compost area */}
            <rect x="460" y="340" width="60" height="30" fill="#8D6E63" rx="4" stroke="#4E342E" strokeWidth="1" />
            <text x="490" y="360" textAnchor="middle" fontSize="8" fill="#F0E6D4">Compost</text>

            {/* Solar panel area */}
            <rect x="280" y="140" width="140" height="25" fill="#1a237e" rx="3" stroke="#0D47A1" strokeWidth="1" />
            <text x="350" y="157" textAnchor="middle" fontSize="9" fill="#BBDEFB">Panneaux solaires (300W)</text>

            {/* Path */}
            <path d="M 350 320 Q 350 380 350 420" fill="none" stroke="#a67c52" strokeWidth="8" strokeLinecap="round" opacity="0.5" />
            <text x="370" y="400" fontSize="8" fill="#6b4c2f">Sentier</text>
            <text x="370" y="412" fontSize="8" fill="#6b4c2f">d'accès</text>

            {/* North arrow */}
            <g transform="translate(650, 40)">
              <circle cx="0" cy="0" r="20" fill="white" stroke="#1a1207" strokeWidth="1.5" />
              <text x="0" y="-5" textAnchor="middle" fontSize="11" fill="#1a1207" fontWeight="bold">N</text>
              <path d="M 0 -16 L 4 -5 L 0 -7 L -4 -5 Z" fill="#c0392b" />
            </g>

            {/* Legend */}
            <g transform="translate(20, 20)">
              <rect x="0" y="0" width="120" height="80" fill="white" rx="6" stroke="#dfc9a8" strokeWidth="1" />
              <text x="10" y="18" fontSize="9" fill="#1a1207" fontWeight="bold">Légende</text>
              <rect x="10" y="25" width="12" height="8" fill="#f0e6d4" stroke="#4a3520" strokeWidth="0.5" />
              <text x="28" y="33" fontSize="8" fill="#6b4c2f">Construction</text>
              <circle cx="16" cy="48" r="5" fill="#2d7a2d" />
              <text x="28" y="51" fontSize="8" fill="#6b4c2f">Arbres existants</text>
              <rect x="10" y="60" width="12" height="8" fill="#81C784" opacity="0.5" />
              <text x="28" y="68" fontSize="8" fill="#6b4c2f">Zones cultivées</text>
            </g>

            {/* Scale */}
            <line x1="550" y1="430" x2="650" y2="430" stroke="#1a1207" strokeWidth="1.5" />
            <line x1="550" y1="425" x2="550" y2="435" stroke="#1a1207" strokeWidth="1.5" />
            <line x1="650" y1="425" x2="650" y2="435" stroke="#1a1207" strokeWidth="1.5" />
            <text x="600" y="445" textAnchor="middle" fontSize="9" fill="#1a1207">10 m</text>
          </svg>
        </div>

        {/* Eco-impact summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          {[
            { value: '0', unit: 'rejet', desc: 'Eaux usées traitées sur site', icon: '💧' },
            { value: '0', unit: 'arbre coupé', desc: 'Aucun arbre existant abattu', icon: '🌳' },
            { value: '+50', unit: 'm² végétalisés', desc: 'Surface végétale augmentée', icon: '🌱' },
            { value: '100%', unit: 'réversible', desc: 'Démontable sans trace', icon: '🔄' },
          ].map((item, i) => (
            <div key={i} className="bg-[#e0f5e0] rounded-xl p-5 text-center border border-[#8fd18f]/30">
              <span className="text-2xl">{item.icon}</span>
              <p className="font-display text-2xl text-[#1e5a1e] mt-2">
                {item.value} <span className="text-sm font-normal">{item.unit}</span>
              </p>
              <p className="text-xs text-[#2d7a2d] mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
