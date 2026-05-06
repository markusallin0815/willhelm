import FeatureReveal from './FeatureReveal';

const features = [
  {
    tag: 'Die Figur',
    title: 'Georg Friedrich Händel',
    desc: 'Vor dem Händel-Haus in Halle (Saale) — dem Geburtshaus des großen Komponisten. Die Playmobil-Figur in barockem Kostüm: Dreispitz, Perücke, Gehrock mit Goldverzierungen.',
    accent: '#7A4A10',
    img: '/haendel-haus.jpg',
    objectPosition: 'center center',
    aspectRatio: '16/9',
  },
  {
    tag: 'Zubehör',
    title: 'Federkiel & Podest',
    desc: 'Mit großem Federkiel, signierter Partitur-Urkunde und weißem Marmor-Podest mit eingravierten goldenen Lettern — HAENDEL. Jedes Detail originalgetreu nachgebildet.',
    accent: '#C8831A',
    img: '/haendel-haus.jpg',
    objectPosition: 'center center',
    aspectRatio: '16/9',
  },
  {
    tag: 'Verpackung',
    title: 'Sonderedition Händel-Haus',
    desc: 'Exklusiv gestaltet in Kooperation mit dem Händel-Haus Halle (Saale). Die Verpackung zeigt das historische Geburtshaus des Komponisten — ein Sammlerstück für sich.',
    accent: '#7A4A10',
    img: '/haendel-haus.jpg',
    objectPosition: 'center center',
    aspectRatio: '16/9',
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
            Jedes Detail<br />trägt Geschichte.
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
                  className="rounded-3xl overflow-hidden group"
                  style={{ aspectRatio: feature.aspectRatio, border: `1px solid ${feature.accent}25` }}
                >
                  <img
                    src={feature.img}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    style={{ objectPosition: feature.objectPosition }}
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
