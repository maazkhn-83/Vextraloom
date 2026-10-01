import { useCallback, useState } from 'react';
import Seo from '../components/Seo.jsx';
import Icon from '../components/Icons.jsx';
import SmartImage from '../components/SmartImage.jsx';
import Lightbox from '../components/Lightbox.jsx';
import { Reveal } from '../components/Reveal.jsx';
import {
  ServicePageShell, ServiceHero, SectionHead, OfferGrid, ProcessSteps, BenefitGrid, ToolsRow, FAQ, CtaBand,
} from '../components/ServiceBlocks.jsx';
import { serviceBySlug } from '../data/services.js';
import { socialAds } from '../data/social.js';

const service = serviceBySlug['social-media-management'];

function Phone({ ad }) {
  return (
    <div className="phone">
      <div className="phone-notch" aria-hidden="true" />
      <div className="ig">
        <div className="ig-head">
          <img src="/logo-transparent.png" alt="" width="32" height="32" className="ig-avatar" />
          <div><strong>{ad.brand}</strong><small>Sponsored</small></div>
        </div>
        <SmartImage src={ad.image} alt={`${ad.brand} social media ad: ${ad.label}`} width={ad.width} height={ad.height} label={ad.brand} className="ig-img" />
        <div className="ig-actions" aria-hidden="true">
          <Icon name="heart" size={22} /><Icon name="comment" size={22} /><Icon name="arrowUpRight" size={22} />
        </div>
        <p className="ig-cap"><strong>{ad.brand}</strong> {ad.label}</p>
      </div>
    </div>
  );
}

export default function SocialMedia() {
  const [idx, setIdx] = useState(null);
  const close = useCallback(() => setIdx(null), []);
  const prev = useCallback(() => setIdx((i) => (i + socialAds.length - 1) % socialAds.length), []);
  const next = useCallback(() => setIdx((i) => (i + 1) % socialAds.length), []);
  const a = idx != null ? socialAds[idx] : null;

  return (
    <ServicePageShell service={service}>
      <Seo title="Social Media Management" description={service.metaDesc} />
      <ServiceHero service={service} />

      <section className="section" id="work" aria-labelledby="ads-h">
        <div className="container">
          <SectionHead id="ads-h" title="Social media ad creatives" intro="Ad and post designs shown in a feed-style frame. Select one to view it larger." align="center" />
          <ul className="phone-grid">
            {socialAds.map((ad, i) => (
              <Reveal as="li" key={ad.id} delay={(i % 3) * 0.1}>
                <div
                  className="phone-btn" role="button" tabIndex={0} aria-label={`View ${ad.brand} ad larger`}
                  onClick={() => setIdx(i)} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setIdx(i); } }}
                >
                  <Phone ad={ad} />
                </div>
                <p className="phone-note">{ad.caption}</p>
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
      <CtaBand title="Ready for a social presence that stays active?" />

      <Lightbox open={!!a} onClose={close} onPrev={prev} onNext={next} label={a ? `${a.brand} ad` : 'Ad preview'}>
        {a && (
          <figure className="lb-fig">
            <SmartImage src={a.image} alt={`${a.brand} social media ad: ${a.label}`} width={a.width} height={a.height} label={a.brand} className="lb-img" eager />
            <figcaption><strong>{a.brand}</strong><span>{a.label}</span></figcaption>
          </figure>
        )}
      </Lightbox>
    </ServicePageShell>
  );
}
