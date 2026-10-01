import { motion } from 'framer-motion';
import Seo from '../components/Seo.jsx';
import Button from '../components/Button.jsx';
import Icon from '../components/Icons.jsx';
import { Reveal, HeadlineReveal } from '../components/Reveal.jsx';
import { CtaBand } from '../components/ServiceBlocks.jsx';
import { services } from '../data/services.js';

export default function Services() {
  return (
    <div className="page">
      <Seo title="Services" description="Explore all nine VEXTRALOOM services: website development, logo and graphic design, social media, SEO, video, content writing, AI automation, e-commerce and online advertising." />
      <section className="page-top">
        <div className="container">
          <p className="crumb">Services</p>
          <h1 className="display"><HeadlineReveal delay={0.1} parts={[{ t: 'Everything your brand needs to' }, { t: 'grow online.', g: true }]} /></h1>
          <motion.p className="lead" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.7 }}>
            Nine connected services, each with its own page, process and pricing conversation. Start with one or combine several.
          </motion.p>
        </div>
      </section>
      <section className="section tight">
        <div className="container svc-boxes">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.1} className="svc-box" style={{ '--accent': s.accent }}>
              <span className="svc-box-ico"><Icon name={s.icon} size={30} /></span>
              <h2>{s.name}</h2>
              <p>{s.short}</p>
              <ul>
                {s.list.map((l) => (<li key={l}><Icon name="check" size={15} stroke={2.2} />{l}</li>))}
              </ul>
              <Button to={`/${s.slug}`} variant="accent" icon="arrow" aria-label={`Learn more about ${s.name}`}>Learn more</Button>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand title="Not sure which service you need?" text="Tell us about your business and we will suggest where to start." />
    </div>
  );
}
