export default function ConceptSection() {
  return (
    <section id="concept" className="py-24 px-6 bg-[#faf6ef] nature-texture">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-[#5cb85c] text-sm font-semibold tracking-wider uppercase">Philosophie du projet</span>
          <h2 className="font-display text-4xl md:text-5xl text-[#1a1207] mt-3 mb-6">
            Le Concept Architectural
          </h2>
          <p className="text-[#6b4c2f] text-lg max-w-3xl mx-auto">
            Un bungalow qui dialogue avec son environnement, utilisant l'intelligence du lieu 
            pour créer un espace de vie confortable sans perturber l'écosystème.
          </p>
        </div>

        {/* Concept cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-[#dfc9a8]/50 hover:-translate-y-2">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#5cb85c] to-[#1e5a1e] flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
              🏔️
            </div>
            <h3 className="font-display text-xl text-[#1a1207] mb-3">Ancrage au Site</h3>
            <p className="text-[#6b4c2f] leading-relaxed">
              Le bungalow s'implante sur pilotis en bois local, épousant la pente naturelle du terrain 
              à Tanéné. Aucune excavation majeure — le sol reste vivant et perméable.
            </p>
          </div>

          <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-[#dfc9a8]/50 hover:-translate-y-2">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF9800] to-[#E65100] flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
              ☀️
            </div>
            <h3 className="font-display text-xl text-[#1a1207] mb-3">Bioclimatique</h3>
            <p className="text-[#6b4c2f] leading-relaxed">
              Orientation est-ouest optimisée pour capter les brises dominantes. 
              Toiture débordante protégeant des pluies tropicales tout en créant des espaces extérieurs couverts.
            </p>
          </div>

          <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-[#dfc9a8]/50 hover:-translate-y-2">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2196F3] to-[#0D47A1] flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
              🔄
            </div>
            <h3 className="font-display text-xl text-[#1a1207] mb-3">Cycle Vertueux</h3>
            <p className="text-[#6b4c2f] leading-relaxed">
              Chaque ressource est en circuit fermé : eau de pluie collectée, déchets organiques compostés, 
              énergie solaire stockée. Zéro rejet dans l'environnement naturel.
            </p>
          </div>
        </div>

        {/* Vision statement */}
        <div className="bg-gradient-to-r from-[#1a1207] to-[#2d2010] rounded-3xl p-10 md:p-14 text-center">
          <div className="max-w-4xl mx-auto">
            <blockquote className="font-display text-2xl md:text-3xl text-[#f0e6d4] leading-relaxed mb-6">
              "Construire à Tanéné, c'est accepter que la nature est l'architecte principal. 
              Nous ne faisons que dessiner le minimum vital pour habiter en harmonie."
            </blockquote>
            <div className="flex items-center justify-center gap-4 text-[#c4a07a]">
              <div className="h-px w-12 bg-[#6b4c2f]" />
              <span className="text-sm tracking-wider uppercase">Principe fondateur</span>
              <div className="h-px w-12 bg-[#6b4c2f]" />
            </div>
          </div>
        </div>

        {/* Key principles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {[
            { icon: '🌱', title: 'Impact minimal', desc: 'Empreinte au sol réduite à 28m²' },
            { icon: '💨', title: 'Ventilation naturelle', desc: 'Flux d\'air traversant permanent' },
            { icon: '🪵', title: 'Matériaux locaux', desc: '90% de ressources du rayon 5km' },
            { icon: '🔌', title: 'Déconnecté', desc: 'Aucun raccordement au réseau' },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/50 border border-[#dfc9a8]/30">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <h4 className="font-semibold text-[#1a1207]">{item.title}</h4>
                <p className="text-sm text-[#6b4c2f]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
