export default function MaterialsSection() {
  const materials = [
    {
      name: 'Bois local (Iroko, Padouk)',
      origin: 'Forêts environnantes (5km)',
      usage: 'Structure, pilotis, charpente, menuiserie',
      icon: '🪵',
      color: '#8b6340',
      benefits: ['Très résistant à l\'humidité', 'Disponible localement', 'Renouvelable si gestion durable'],
    },
    {
      name: 'Bambou',
      origin: 'Berges du fleuve nearby',
      usage: 'Claustra, mobilier, décoration, renforts',
      icon: '🎋',
      color: '#5cb85c',
      benefits: ['Croissance rapide (3 ans)', 'Léger et résistant', 'Esthétique naturelle'],
    },
    {
      name: 'Terre crue (Banque)',
      origin: 'Terrain même (excavation pilotis)',
      usage: 'Murs de remplissage, enduits, isolation thermique',
      icon: '🧱',
      color: '#a67c52',
      benefits: ['Inertie thermique', 'Régulation hygrométrique', 'Zéro transport'],
    },
    {
      name: 'Tôle ondulée recyclée',
      origin: 'Récupération / marché local',
      usage: 'Toiture (sous isolant végétal)',
      icon: '🏗️',
      color: '#78909C',
      benefits: ['Étanchéité parfaite', 'Durée de vie 30+ ans', 'Collecte eau de pluie'],
    },
    {
      name: 'Raphia & Palmes',
      origin: 'Palmiers locaux',
      usage: 'Isolation toiture, tressage, brise-vue',
      icon: '🌴',
      color: '#4a3520',
      benefits: ['Isolant naturel', 'Tradition locale', 'Biodégradable'],
    },
    {
      name: 'Pierre latéritique',
      origin: 'Carrière locale (3km)',
      usage: 'Fondations pilotis, dallage douche, comptoir',
      icon: '🪨',
      color: '#c0392b',
      benefits: ['Très durable', 'Esthétique rouge typique', 'Inertie thermique'],
    },
  ];

  return (
    <section id="materials" className="py-24 px-6 bg-[#1a1207] nature-texture">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#c4a07a] text-sm font-semibold tracking-wider uppercase">Ressources locales</span>
          <h2 className="font-display text-4xl md:text-5xl text-[#f0e6d4] mt-3 mb-6">
            Matériaux de Construction
          </h2>
          <p className="text-[#c4a07a] text-lg max-w-3xl mx-auto">
            90% des matériaux proviennent d'un rayon de 5 km. 
            Chaque ressource est choisie pour sa durabilité, son impact environnemental 
            et son intégration dans les savoir-faire locaux.
          </p>
        </div>

        {/* Materials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {materials.map((material, i) => (
            <div
              key={i}
              className="group bg-[#2d2010] rounded-2xl p-6 border border-[#4a3520] hover:border-[#6b4c2f] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl group-hover:scale-110 transition-transform">{material.icon}</span>
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: material.color }}
                />
              </div>
              <h3 className="font-display text-lg text-[#f0e6d4] mb-1">{material.name}</h3>
              <p className="text-xs text-[#a67c52] mb-3">📍 {material.origin}</p>
              <p className="text-sm text-[#c4a07a] mb-4">
                <span className="font-medium">Usage :</span> {material.usage}
              </p>
              <div className="space-y-2">
                {material.benefits.map((benefit, j) => (
                  <div key={j} className="flex items-center gap-2 text-xs text-[#8fd18f]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5cb85c]" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Material ratio */}
        <div className="mt-16 bg-[#2d2010] rounded-2xl p-8 border border-[#4a3520]">
          <h3 className="font-display text-xl text-[#f0e6d4] mb-6 text-center">Répartition des Matériaux</h3>
          <div className="space-y-4">
            {[
              { name: 'Bois local', percent: 35, color: '#8b6340' },
              { name: 'Terre crue', percent: 25, color: '#a67c52' },
              { name: 'Bambou', percent: 15, color: '#5cb85c' },
              { name: 'Tôle recyclée', percent: 10, color: '#78909C' },
              { name: 'Pierre latéritique', percent: 8, color: '#c0392b' },
              { name: 'Raphia / Palmes', percent: 5, color: '#4a3520' },
              { name: 'Autres (quincaillerie, etc.)', percent: 2, color: '#c4a07a' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="w-32 text-sm text-[#c4a07a] text-right">{item.name}</span>
                <div className="flex-1 h-6 bg-[#1a1207] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{ width: `${item.percent}%`, backgroundColor: item.color }}
                  />
                </div>
                <span className="w-10 text-sm text-[#f0e6d4] font-mono">{item.percent}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sustainability note */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#5cb85c]/10 border border-[#5cb85c]/30">
            <span className="text-xl">🌍</span>
            <span className="text-[#8fd18f] text-sm font-medium">
              Bilan carbone estimé : 95% inférieur à une construction conventionnelle
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
