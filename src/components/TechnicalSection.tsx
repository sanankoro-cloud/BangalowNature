export default function TechnicalSection() {
  return (
    <section id="technical" className="py-24 px-6 bg-[#faf6ef]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#6b4c2f] text-sm font-semibold tracking-wider uppercase">Fiche technique</span>
          <h2 className="font-display text-4xl md:text-5xl text-[#1a1207] mt-3 mb-6">
            Détails Techniques
          </h2>
          <p className="text-[#6b4c2f] text-lg max-w-3xl mx-auto">
            Spécifications complètes pour la construction du bungalow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Structure */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#dfc9a8]/30">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 rounded-xl bg-[#8b6340]/10 flex items-center justify-center text-xl">🏗️</span>
              <h3 className="font-display text-xl text-[#1a1207]">Structure</h3>
            </div>
            <div className="space-y-3">
              {[
                ['Fondations', 'Pilotis bois Iroko Ø15cm, profondeur 80cm, sur semelles pierre latéritique'],
                ['Ossature', 'Poteaux-poutres bois 10×10cm, assemblages traditionnels (tenon-mortaise)'],
                ['Plancher', 'Lambourdes bois 5×10cm, platelage bois 2cm, isolation raphia 5cm'],
                ['Murs', 'Panneaux bois-bambou, remplissage terre-paille (torchis)'],
                ['Charpente', 'Ferme traditionnelle, pente 25°, bois Iroko'],
                ['Couverture', 'Tôle ondulée sur liteaux, isolant raphia 10cm sous-face'],
              ].map(([label, desc], i) => (
                <div key={i} className="flex gap-3 py-2 border-b border-[#f0e6d4] last:border-0">
                  <span className="w-24 text-xs font-semibold text-[#6b4c2f] uppercase flex-shrink-0">{label}</span>
                  <span className="text-sm text-[#4a3520]">{desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interior */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#dfc9a8]/30">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 rounded-xl bg-[#c4a07a]/10 flex items-center justify-center text-xl">🛏️</span>
              <h3 className="font-display text-xl text-[#1a1207]">Aménagement Intérieur</h3>
            </div>
            <div className="space-y-3">
              {[
                ['Lit double', '160×200cm, sommier bois, rangement tiroirs sous lit (60cm hauteur)'],
                ['Moustiquaire', 'Fixe, intégrée au cadre de lit, maille fine imprégnée'],
                ['Rangement', 'Penderie 120cm + étagères, tête de lit avec niches de lecture'],
                ['Cuisine', 'Comptoir pierre latéritique, évier inox, étagères bambou, réchaud gaz'],
                ['Sanitaires', 'Douche 80×80cm, toilettes sèches séparatives, lavabo céramique'],
                ['Éclairage', '6 points LED 5W, liseuses 3W, détecteur crépusculaire extérieur'],
              ].map(([label, desc], i) => (
                <div key={i} className="flex gap-3 py-2 border-b border-[#f0e6d4] last:border-0">
                  <span className="w-24 text-xs font-semibold text-[#6b4c2f] uppercase flex-shrink-0">{label}</span>
                  <span className="text-sm text-[#4a3520]">{desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Climate */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#dfc9a8]/30">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 rounded-xl bg-[#5cb85c]/10 flex items-center justify-center text-xl">🌡️</span>
              <h3 className="font-display text-xl text-[#1a1207]">Confort Climatique</h3>
            </div>
            <div className="space-y-3">
              {[
                ['Ventilation', 'Ouvertures traversantes : 2 baies Est (1m²) + 2 baies Ouest (1m²)'],
                ['Protection pluie', 'Débords de toiture 1.5m tous côtés + auvent terrasse 2m'],
                ['Isolation', 'Toiture : raphia 10cm + lame d\'air 5cm ventilée | Murs : terre-paille 15cm'],
                ['Protection solaire', 'Claustra bambou orientables sur façades Est/Ouest'],
                ['Température visée', '24-28°C intérieur (différence de 7-10°C avec extérieur)'],
                ['Hygrométrie', 'Régulée par la terre crue (inertie) + ventilation traversante'],
              ].map(([label, desc], i) => (
                <div key={i} className="flex gap-3 py-2 border-b border-[#f0e6d4] last:border-0">
                  <span className="w-24 text-xs font-semibold text-[#6b4c2f] uppercase flex-shrink-0">{label}</span>
                  <span className="text-sm text-[#4a3520]">{desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Construction phases */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#dfc9a8]/30">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 rounded-xl bg-[#FF9800]/10 flex items-center justify-center text-xl">📅</span>
              <h3 className="font-display text-xl text-[#1a1207]">Phases de Construction</h3>
            </div>
            <div className="space-y-4">
              {[
                { phase: 'Phase 1', duration: '2 semaines', desc: 'Préparation site, excavation pilotis, coulée semelles', color: '#8b6340' },
                { phase: 'Phase 2', duration: '3 semaines', desc: 'Pilotis, plateforme, ossature bois, charpente', color: '#a67c52' },
                { phase: 'Phase 3', duration: '2 semaines', desc: 'Couverture, murs (terre-paille), menuiseries', color: '#c4a07a' },
                { phase: 'Phase 4', duration: '2 semaines', desc: 'Aménagements intérieurs, installations techniques', color: '#5cb85c' },
                { phase: 'Phase 5', duration: '1 semaine', desc: 'Finitions, végétalisation, tests systèmes autonomes', color: '#2196F3' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: item.color }}>
                      {i + 1}
                    </div>
                    {i < 4 && <div className="w-0.5 h-6 bg-[#dfc9a8]" />}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-[#1a1207]">{item.phase}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-[#f0e6d4] text-[#6b4c2f]">{item.duration}</span>
                    </div>
                    <p className="text-sm text-[#6b4c2f]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 rounded-lg bg-[#f0e6d4] text-center">
              <span className="font-semibold text-[#1a1207]">Durée totale : 10 semaines</span>
              <span className="text-sm text-[#6b4c2f] block">Idéalement en saison sèche (novembre - mars)</span>
            </div>
          </div>
        </div>

        {/* Climate data */}
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-sm border border-[#dfc9a8]/30">
          <h3 className="font-display text-xl text-center text-[#1a1207] mb-6">Données Climatiques — Tanéné, Guinée</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Température moyenne', value: '27°C', sub: 'Max: 35°C / Min: 22°C' },
              { label: 'Pluviométrie annuelle', value: '1 800 mm', sub: 'Saison pluie: Juin-Oct' },
              { label: 'Ensoleillement', value: '2 400 h/an', sub: '≈ 6.5 kWh/m²/jour' },
              { label: 'Humidité relative', value: '75-85%', sub: 'Saison sèche: 40-50%' },
            ].map((item, i) => (
              <div key={i} className="text-center p-4 rounded-xl bg-[#faf6ef]">
                <p className="font-display text-2xl text-[#1a1207]">{item.value}</p>
                <p className="text-sm font-medium text-[#4a3520] mt-1">{item.label}</p>
                <p className="text-xs text-[#6b4c2f] mt-1">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
