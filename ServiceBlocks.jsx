import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Button from './Button.jsx';
import Icon from './Icons.jsx';
import { Reveal, HeadlineReveal } from './Reveal.jsx';
import { WHATSAPP_URL } from '../config/site.js';

export function SectionHead({ title, intro, id, align = 'left' }) {
  return (
    <Reveal className={`sec-head ${align === 'center' ? 'center' : ''}`}>
      <h2 id={id}>{title}</h2>
      {intro && <p>{intro}</p>}
    </Reveal>
  );
}

export function ServiceHero({ service, index }) {
  return (
    <section className="svc-hero">
      <div className="svc-hero-glow" aria-hidden="true" />
      <div className="container svc-hero-grid">
        <div>
          <motion.p className="crumb" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            Services / {service.name}
          </motion.p>
          <h1 className="display">
            <HeadlineReveal parts={[{ t: service.headline }]} delay={0.15} />
          </h1>
          <motion.p className="lead" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.7 }}>
            {service.intro}
          </motion.p>
          <motion.div className="hero-ctas" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75, duration: 0.7 }}>
            <Button to="/contact" icon="arrow">Start a project</Button>
            <Button href={WHATSAPP_URL} variant="wa" icon="whatsapp">WhatsApp us</Button>
          </motion.div>
        </div>
        <div className="svc-visual" aria-hidden="true">
          <span className="svc-ring r1" /><span className="svc-ring r2" /><span className="svc-ring r3" />
          <span className="svc-core"><Icon name={service.icon} size={84} stroke={1.2} /></span>
          <span className="svc-dot d1" /><span className="svc-dot d2" /><span className="svc-dot d3" />
        </div>
      </div>
    </section>
  );
}

export function OfferGrid({ service, title }) {
  return (
    <section className="section" aria-labelledby="offers-h">
      <div className="container">
        <SectionHead id="offers-h" title={title || service.offersTitle || 'What we do'} />
        <div className="card-grid">
          {service.offers.map((o, i) => (
            <Reveal key={o.title} delay={(i % 3) * 0.08} className="box">
              <span className="box-ico"><Icon name={service.icon} size={22} /></span>
              <h3>{o.title}</h3>
              <p>{o.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSteps({ service }) {
  return (
    <section className="section alt" aria-labelledby="proc-h">
      <div className="container">
        <SectionHead id="proc-h" title={service.processTitle || 'Our process'} />
        <ol className="steps" style={{ '--n': service.process.length }}>
          {service.process.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 0.08} className="step">
              <span className="step-num">{i + 1}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function BenefitGrid({ service }) {
  return (
    <section className="section" aria-labelledby="ben-h">
      <div className="container">
        <SectionHead id="ben-h" title="Why it matters for your business" />
        <div className="card-grid four">
          {service.benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.07} className="box slim">
              <span className="check"><Icon name="check" size={16} stroke={2.2} /></span>
              <h3>{b.title}</h3>
              <p>{b.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ToolsRow({ service }) {
  return (
    <section className="section tight" aria-labelledby="tools-h">
      <div className="container">
        <SectionHead id="tools-h" title={service.toolsTitle || 'Tools and platforms'} />
        <Reveal as="ul" className="chips">
          {service.tools.map((t) => (<li key={t}>{t}</li>))}
        </Reveal>
      </div>
    </section>
  );
}

export function FAQ({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <section className="section" aria-labelledby="faq-h">
      <div className="container narrow">
        <SectionHead id="faq-h" title="Frequently asked questions" />
        <div className="faq">
          {items.map((f, i) => {
            const isOpen = open === i;
            return (
              <div className={`faq-item ${isOpen ? 'open' : ''}`} key={f.q}>
                <h3>
                  <button aria-expanded={isOpen} aria-controls={`faq-${i}`} id={`faq-b-${i}`} onClick={() => setOpen(isOpen ? -1 : i)}>
                    <span>{f.q}</span>
                    <Icon name="plus" size={20} className="faq-plus" />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-${i}`} role="region" aria-labelledby={`faq-b-${i}`}
                      initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }} style={{ overflow: 'hidden' }}
                    >
                      <p>{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function CtaBand({ title = 'Ready to start your project?', text = 'Tell us what you are building. We will reply with clear next steps.' }) {
  return (
    <section className="section" aria-label="Get in touch">
      <div className="container">
        <Reveal className="cta">
          <div className="cta-glow" aria-hidden="true" />
          <h2>{title}</h2>
          <p>{text}</p>
          <div className="hero-ctas center">
            <Button href={WHATSAPP_URL} variant="wa" icon="whatsapp">Chat on WhatsApp</Button>
            <Button to="/contact" variant="ghost" icon="arrow">Contact us</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ServicePageShell({ service, children }) {
  return <div className="page svc" style={{ '--accent': service.accent }}>{children}</div>;
}
