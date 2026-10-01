import { motion } from 'framer-motion';
import Seo from '../components/Seo.jsx';
import Icon from '../components/Icons.jsx';
import Button from '../components/Button.jsx';
import { Reveal, HeadlineReveal } from '../components/Reveal.jsx';
import { SectionHead, CtaBand } from '../components/ServiceBlocks.jsx';
import { services } from '../data/services.js';
import { about, process } from '../data/content.js';

export default function About() {
  return (
    <div className="page">
      <Seo title="About" description="VEXTRALOOM is a digital experience studio that designs, builds and markets websites, brands and campaigns for businesses that want to be remembered." />
      <section className="page-top">
        <div className="container about-hero">
          <div>
            <p className="crumb">About</p>
            <h1 className="display"><HeadlineReveal delay={0.1} parts={[{ t: 'A studio for brands that want to be' }, { t: 'remembered.', g: true }]} /></h1>
          </div>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.7 }}>
            <p className="lead">{about.lead}</p>
            {about.story.map((p) => (<p className="body-text" key={p.slice(0, 20)}>{p}</p>))}
          </motion.div>
        </div>
      </section>

      <section className="section" aria-labelledby="belief-h">
        <div className="container">
          <SectionHead id="belief-h" title="What we believe" />
          <div className="card-grid four">
            {about.beliefs.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.07} className="box slim"><h3>{b.title}</h3><p>{b.text}</p></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt" aria-labelledby="appr-h">
        <div className="container">
          <SectionHead id="appr-h" title="Our approach" />
          <div className="card-grid">
            {about.approach.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.08} className="box"><span className="box-ico"><Icon name="sparkle" size={22} /></span><h3>{b.title}</h3><p>{b.text}</p></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="aproc-h">
        <div className="container">
          <SectionHead id="aproc-h" title="How we work" />
          <ol className="steps six" style={{ '--n': process.length }}>
            {process.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 0.08} className="step"><span className="step-num">{i + 1}</span><h3>{p.title}</h3><p>{p.text}</p></Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section alt" aria-labelledby="awhy-h">
        <div className="container">
          <SectionHead id="awhy-h" title="Why businesses work with us" />
          <div className="card-grid">
            {about.why.map((b, i) => (
              <Reveal key={b.title} delay={(i % 3) * 0.08} className="box slim"><span className="check"><Icon name="check" size={16} stroke={2.2} /></span><h3>{b.title}</h3><p>{b.text}</p></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="asvc-h">
        <div className="container">
          <SectionHead id="asvc-h" title="Our nine services, and why each one is here" intro="Each service stands on its own, and each makes the others stronger." />
          <div className="about-svcs">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={0.04} className="about-svc" style={{ '--accent': s.accent }}>
                <span className="box-ico"><Icon name={s.icon} size={22} /></span>
                <div>
                  <h3>{s.name}</h3>
                  <p>{s.about}</p>
                  <Button to={`/${s.slug}`} variant="text" icon="arrow">Explore {s.name}</Button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title="Let's talk about your brand." />
    </div>
  );
}
