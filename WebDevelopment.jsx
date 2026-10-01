import { useCallback, useEffect, useRef, useState } from 'react';
import Seo from '../components/Seo.jsx';
import Icon from '../components/Icons.jsx';
import SmartImage from '../components/SmartImage.jsx';
import Lightbox from '../components/Lightbox.jsx';
import { Reveal } from '../components/Reveal.jsx';
import {
  ServicePageShell, ServiceHero, SectionHead, OfferGrid, ProcessSteps, ToolsRow, FAQ, CtaBand,
} from '../components/ServiceBlocks.jsx';
import { serviceBySlug } from '../data/services.js';
import { webProjects, whyWebsite } from '../data/web.js';

const service = serviceBySlug['web-development'];

function MockupCard({ project, index, onOpen }) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  // Touch devices have no hover: scroll the page while the card is in view.
  useEffect(() => {
    if (!window.matchMedia('(hover: none)').matches || !('IntersectionObserver' in window)) return undefined;
    const io = new IntersectionObserver(([e]) => setActive(e.isIntersecting && e.intersectionRatio > 0.6), { threshold: [0, 0.6, 1] });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const ratio = project.height / project.width;
  const dur = Math.min(40, Math.max(7, ratio * 7)); // duration proportional to page height
  const open = () => onOpen(index);

  return (
    <Reveal delay={(index % 2) * 0.08} as="article" className="mock">
      <div
        ref={ref} className={`browser hoverable ${active ? 'is-active' : ''}`} style={{ '--dur': `${dur}s` }}
        role="button" tabIndex={0} aria-label={`Open full-page preview of ${project.name}`}
        onClick={open} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } }}
      >
        <div className="browser-bar"><i /><i /><i /><span className="url">{project.name}</span><Icon name="arrowUpRight" size={14} className="bar-ico" /></div>
        <div className="browser-view">
          <div className="scroller">
            <SmartImage src={project.image} alt={`${project.name}: ${project.industry} website design`} width={project.width} height={project.height} label={project.name} />
          </div>
        </div>
      </div>
      <div className="mock-info">
        <span className="tag">{project.industry}</span>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </div>
    </Reveal>
  );
}

export default function WebDevelopment() {
  const [openIdx, setOpenIdx] = useState(null);
  const close = useCallback(() => setOpenIdx(null), []);
  const prev = useCallback(() => setOpenIdx((i) => (i + webProjects.length - 1) % webProjects.length), []);
  const next = useCallback(() => setOpenIdx((i) => (i + 1) % webProjects.length), []);
  const p = openIdx != null ? webProjects[openIdx] : null;

  return (
    <ServicePageShell service={service}>
      <Seo title="Website Development" description={service.metaDesc} />
      <ServiceHero service={service} />

      <section className="section" id="work" aria-labelledby="work-h">
        <div className="container">
          <SectionHead id="work-h" title="Website designs" intro="Hover over a website to watch the full page scroll. Select one to open the complete page." />
          <div className="mock-grid">
            {webProjects.map((pr, i) => (<MockupCard key={pr.id} project={pr} index={i} onOpen={setOpenIdx} />))}
          </div>
        </div>
      </section>

      <section className="section alt" aria-labelledby="why-web-h">
        <div className="container">
          <SectionHead id="why-web-h" title="Why a website is important for every business" intro={whyWebsite.intro} />
          <div className="card-grid four">
            {whyWebsite.items.map((it, i) => (
              <Reveal key={it.title} delay={(i % 4) * 0.07} className="box">
                <span className="box-ico"><Icon name={it.icon} size={22} /></span>
                <h3>{it.title}</h3>
                <p>{it.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <OfferGrid service={service} title="Development capabilities" />
      <ToolsRow service={service} />
      <ProcessSteps service={service} />
      <FAQ items={service.faqs} />
      <CtaBand title="Ready for a website that works as hard as you do?" text="Tell us about your business and what you need. We will respond with next steps." />

      <Lightbox open={!!p} onClose={close} onPrev={prev} onNext={next} label={p ? `${p.name} full page preview` : 'Preview'}>
        {p && (
          <div className="lb-web">
            <div className="lb-web-head"><strong>{p.name}</strong><span>{p.industry}</span></div>
            <div className="lb-scroll">
              <SmartImage src={p.image} alt={`${p.name} full website page`} width={p.width} height={p.height} label={p.name} eager />
            </div>
          </div>
        )}
      </Lightbox>
    </ServicePageShell>
  );
}
