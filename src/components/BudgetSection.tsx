export default function BudgetSection() {
  const budgetItems = [
    { category: 'Structure bois', items: [
      { name: 'Pilotis Iroko (8 pièces)', cost: 400 },
      { name: 'Ossature poteaux-poutres', cost: 600 },
      { name: 'Plancher bois', cost: 350 },
      { name: 'Charpente', cost: 500 },
    ]},
    { category: 'Couverture & Murs', items: [
      { name: 'Tôle ondulée (70m²)', cost: 300 },
      { name: 'Remplissage terre-paille', cost: 100 },
      { name: 'Isolation raphia', cost: 80 },
      { name: 'Menuiseries (portes/fenêtres)', cost: 250 },
    ]},
    { category: 'Systèmes autonomes', items: [
      { name: 'Panneaux solaires 300W + régulateur', cost: 450 },
      { name: 'Batterie LiFePO4 200Ah', cost: 350 },
      { name: 'Cuve eau 2000L + filtration', cost: 300 },
      { name: 'Chauffe-eau solaire 60L', cost: 200 },
      { name: 'Toilettes sèches', cost: 100 },
    ]},
    { category: 'Aménagements', items: [
      { name: 'Lit double + rangement', cost: 200 },
      { name: 'Cuisine (comptoir, évier)', cost: 150 },
      { name: 'Salle d\'eau (douche, lavabo)', cost: 120 },
      { name: 'Éclairage LED complet', cost: 80 },
      { name: 'Terrasse + hamac', cost: 100 },
    ]},
    { category: 'Finitions & Divers', items: [
      { name: 'Enduits terre décoratifs', cost: 50 },
      { name: 'Moustiquaires fixes', cost: 60 },
      { name: 'Quincaillerie, visserie', cost: 100 },
      { name: 'Végétalisation périphérique', cost: 50 },
    ]},
  ];

  const totalCost = budgetItems.reduce((sum, cat) => 
    sum + cat.items.reduce((s, item) => s + item.cost, 0), 0
  );

  return (
    <section id="budget" className="py-24 px-6 bg-gradient-to-b from-[#faf6ef] to-[#f0e6d4]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#FF9800] text-sm font-semibold tracking-wider uppercase">Estimation budgétaire</span>
          <h2 className="font-display text-4xl md:text-5xl text-[#1a1207] mt-3 mb-6">
            Budget Estimatif
          </h2>
          <p className="text-[#6b4c2f] text-lg max-w-3xl mx-auto">
            Estimation basée sur les prix locaux en Guinée (en USD). 
            Main d'œuvre communautaire non incluse (participative).
          </p>
        </div>

        {/* Total banner */}
        <div className="bg-gradient-to-r from-[#1a1207] to-[#2d2010] rounded-2xl p-8 text-center mb-12">
          <p className="text-[#c4a07a] text-sm uppercase tracking-wider mb-2">Coût total estimé</p>
          <p className="font-display text-5xl md:text-6xl text-[#f0e6d4]">
            {totalCost.toLocaleString()} <span className="text-2xl text-[#c4a07a]">USD</span>
          </p>
          <p className="text-[#a67c52] text-sm mt-3">
            Soit environ {(totalCost / 28).toFixed(0)} USD/m² — Construction éco-responsable
          </p>
          <div className="flex justify-center gap-6 mt-6">
            <div className="text-center">
              <p className="text-[#5cb85c] text-xl font-bold">~10 sem</p>
              <p className="text-[#a67c52] text-xs">Durée travaux</p>
            </div>
            <div className="text-center">
              <p className="text-[#FF9800] text-xl font-bold">2-3 pers.</p>
              <p className="text-[#a67c52] text-xs">Équipe min.</p>
            </div>
            <div className="text-center">
              <p className="text-[#2196F3] text-xl font-bold">90%</p>
              <p className="text-[#a67c52] text-xs">Matériaux locaux</p>
            </div>
          </div>
        </div>

        {/* Budget breakdown */}
        <div className="grid md:grid-cols-2 gap-6">
          {budgetItems.map((category, i) => {
            const catTotal = category.items.reduce((s, item) => s + item.cost, 0);
            return (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-[#dfc9a8]/30">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-display text-lg text-[#1a1207]">{category.category}</h3>
                  <span className="px-3 py-1 rounded-full bg-[#f0e6d4] text-sm font-mono text-[#4a3520]">
                    {catTotal} USD
                  </span>
                </div>
                <div className="space-y-2">
                  {category.items.map((item, j) => (
                    <div key={j} className="flex justify-between items-center py-1.5 border-b border-[#f0e6d4] last:border-0">
                      <span className="text-sm text-[#4a3520]">{item.name}</span>
                      <span className="text-sm font-mono text-[#6b4c2f]">{item.cost} $</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual breakdown */}
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-sm border border-[#dfc9a8]/30">
          <h3 className="font-display text-xl text-center text-[#1a1207] mb-8">Répartition Visuelle</h3>
          <div className="flex rounded-full overflow-hidden h-10 mb-4">
            {budgetItems.map((cat, i) => {
              const catTotal = cat.items.reduce((s, item) => s + item.cost, 0);
              const percent = (catTotal / totalCost) * 100;
              const colors = ['#8b6340', '#a67c52', '#FF9800', '#5cb85c', '#c4a07a'];
              return (
                <div
                  key={i}
                  className="relative group"
                  style={{ width: `${percent}%`, backgroundColor: colors[i] }}
                  title={`${cat.category}: ${catTotal} USD (${percent.toFixed(0)}%)`}
                >
                  <div className="absolute inset-0 flex items-center justify-center text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    {percent.toFixed(0)}%
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {budgetItems.map((cat, i) => {
              const catTotal = cat.items.reduce((s, item) => s + item.cost, 0);
              const percent = (catTotal / totalCost) * 100;
              const colors = ['#8b6340', '#a67c52', '#FF9800', '#5cb85c', '#c4a07a'];
              return (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colors[i] }} />
                  <span className="text-xs text-[#6b4c2f]">{cat.category} ({percent.toFixed(0)}%)</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Notes */}
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="p-5 rounded-xl bg-[#e0f5e0] border border-[#8fd18f]/30">
            <span className="text-2xl">💡</span>
            <h4 className="font-semibold text-[#1e5a1e] mt-2">Économies possibles</h4>
            <p className="text-sm text-[#2d7a2d] mt-1">
              Récupération de tôle, bois de récupération, et travail participatif communautaire peuvent réduire le budget de 30-40%.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-[#FFF3E0] border border-[#FFCC80]/30">
            <span className="text-2xl">⚠️</span>
            <h4 className="font-semibold text-[#E65100] mt-2">Points d'attention</h4>
            <p className="text-sm text-[#BF360C] mt-1">
              Les systèmes autonomes (solaire, filtration) représentent un investissement initial mais s'amortissent en 2-3 ans.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-[#E3F2FD] border border-[#90CAF9]/30">
            <span className="text-2xl">🤝</span>
            <h4 className="font-semibold text-[#0D47A1] mt-2">Approche locale</h4>
            <p className="text-sm text-[#1565C0] mt-1">
              Privilégier les artisans de Tanéné et environs. Transmission de savoir-faire et économie circulaire locale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
