import FeatureReveal from './FeatureReveal';

const features = [
  {
    tag: 'Kopfbedeckung',
    title: 'Der Helm',
    desc: 'Detailgetreue Nachbildung eines mittelalterlichen Ritterhelms aus hochwertigem Kunststoff. Abnehmbar, aufklappbares Visier, eingravierte Burglöwen-Insignie.',
    accent: '#1E4ED8',
    img: '/helm.png',
  },
  {
    tag: 'Rüstung',
    title: 'Die Rüstung',
    desc: 'Vollständige Plattenrüstung in zeitloser Silberoptik mit goldenen Verzierungen. Jedes Teil einzeln abnehmbar — originalgetreue Konstruktion.',
    accent: '#F5B700',
    img: '/ruestung.jpg',
  },
  {
    tag: 'Zubehör',
    title: 'Schwert & Schild',
    desc: 'Königliches Zubehör-Set: Zweihänder-Schwert mit Kreuzgard und Wappenschild mit dem Motiv des Hauses Willhelm — in Gold und Blau.',
    accent: '#1E4ED8',
    img: '/schwert.png',
  },
] as const;

export default function FeaturesSection() {
  return (
    <section className="bg-bg-white py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <FeatureReveal>
          <p className="text-text-gray text-xs uppercase tracking-[0.25em] mb-2">Ausstattung</p>
          <h2
            className="text-text-dark font-black tracking-tight leading-none mb-16"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Jedes Detail<br />erzählt Geschichte.
          </h2>
        </FeatureReveal>

        <div className="flex flex-col gap-20">
          {features.map((feature, i) => (
            <FeatureReveal key={feature.title} delay={0.08}>
              <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center ${
                  i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
                }`}
              >
                <div
                  className="rounded-3xl overflow-hidden"
                  style={{ aspectRatio: '4/3', border: `1px solid ${feature.accent}25` }}
                >
                  <img
                    src={feature.img}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p
                    style={{ color: feature.accent }}
                    className="text-xs uppercase tracking-[0.25em] font-semibold mb-3"
                  >
                    {feature.tag}
                  </p>
                  <h3
                    className="text-text-dark font-black tracking-tight leading-none mb-4"
                    style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)' }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-text-gray leading-relaxed max-w-[48ch]">{feature.desc}</p>
                </div>
              </div>
            </FeatureReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
