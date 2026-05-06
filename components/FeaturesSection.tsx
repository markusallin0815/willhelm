'use client';

import FeatureReveal from './FeatureReveal';
import { useLanguage } from '@/context/LanguageContext';

const featureAccents = ['#7A4A10', '#C8831A', '#7A4A10'] as const;
const featureImgs = ['/haendel-haus.jpg', '/haendel-haus.jpg', '/haendel-haus.jpg'] as const;

export default function FeaturesSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-bg-white py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <FeatureReveal>
          <p className="text-text-gray text-xs uppercase tracking-[0.25em] mb-2">{t.features.badge}</p>
          <h2
            className="text-text-dark font-black tracking-tight leading-none mb-16"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', whiteSpace: 'pre-line' }}
          >
            {t.features.headline}
          </h2>
        </FeatureReveal>

        <div className="flex flex-col gap-20">
          {t.features.items.map((feature, i) => (
            <FeatureReveal key={i} delay={0.08}>
              <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center ${
                  i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
                }`}
              >
                <div
                  className="rounded-3xl overflow-hidden group"
                  style={{ aspectRatio: '16/9', border: `1px solid ${featureAccents[i]}25` }}
                >
                  <img
                    src={featureImgs[i]}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    style={{ objectPosition: 'center center' }}
                  />
                </div>
                <div>
                  <p
                    style={{ color: featureAccents[i] }}
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
