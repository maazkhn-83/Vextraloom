import { useCallback, useState } from 'react';
import Seo from '../components/Seo.jsx';
import SmartImage from '../components/SmartImage.jsx';
import Lightbox from '../components/Lightbox.jsx';
import { Reveal } from '../components/Reveal.jsx';
import {
  ServicePageShell, ServiceHero, SectionHead, OfferGrid, ProcessSteps, BenefitGrid, ToolsRow, FAQ, CtaBand,
} from '../components/ServiceBlocks.jsx';
import { serviceBySlug } from '../data/services.js';
import { logos } from '../data/logos.js';

const service = serviceBySlug['logo-design'];

export default function LogoDesign() {
  const [idx, setIdx] = useState(null);
  const close = useCallback(() => setIdx(null), []);
  const prev = useCallback(() => setIdx((i) => (i + logos.length - 1) % logos.length), []);
  const next = useCallback(() => setIdx((i) => (i + 1) % logos.length), []);
  const l = idx != null ? logos[idx] : null;

  return (
    <ServicePageShell service={service}>
      <Seo title="Logo & Graphic Design" description={service.metaDesc} />
      <ServiceHero service={service} />

      <section className="section" id="work" aria-labelledby="logo-h">
        <div className="container">
          <SectionHead id="logo-h" title="Logo and brand work" intro="A selection of identities we have designed. Select any logo to view it larger." align="center" />
          <ul className="orb-grid">
            {logos.map((lg, i) => (
              <Reveal as="li" key={lg.id} delay={(i % 4) * 0.08}>
                <button className="orb-btn" onClick={() => setIdx(i)} aria-label={`View ${lg.name} logo`}>
                  <span className="orb"><SmartImage src={lg.image} alt={`${lg.name} logo design`} width={640} height={640} label={lg.name} /></span>
                  <span className="orb-name">{lg.name}</span>
                  <span className="orb-cat">{lg.category}</span>
                </button>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <OfferGrid service={service} />
      <ProcessSteps service={service} />
      <BenefitGrid service={service} />
      <ToolsRow service={service} />
      <FAQ items={service.faqs} />
      <CtaBand title="Ready for an identity that stands out?" />

      <Lightbox open={!!l} onClose={close} onPrev={prev} onNext={next} label={l ? `${l.name} logo` : 'Logo preview'}>
        {l && (
          <figure className="lb-fig">
            <span className="orb big"><SmartImage src={l.image} alt={`${l.name} logo design`} width={640} height={640} label={l.name} eager /></span>
            <figcaption><strong>{l.name}</strong><span>{l.category}</span><p>{l.note}</p></figcaption>
          </figure>
        )}
      </Lightbox>
    </ServicePageShell>
  );
}
