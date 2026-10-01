import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Seo from '../components/Seo.jsx';
import Watermark from '../components/Watermark.jsx';
import Marquee from '../components/Marquee.jsx';
import Magnetic from '../components/Magnetic.jsx';
import Button from '../components/Button.jsx';
import Icon from '../components/Icons.jsx';
import AutoMockup from '../components/AutoMockup.jsx';
import { Reveal, HeadlineReveal } from '../components/Reveal.jsx';
import { SectionHead, CtaBand } from '../components/ServiceBlocks.jsx';
import { services } from '../data/services.js';
import { webProjects } from '../data/web.js';
import { whyChoose, process } from '../data/content.js';
import { WHATSAPP_URL } from '../config/site.js';

export default function Home() {
  const names = services.map((s) => s.name);
  return (
    <div className="page page-home">
      <Seo
        title="VEXTRALOOM | Digital Experience Studio"
        description="VEXTRALOOM designs and builds websites, brands, social media, SEO, video, content, AI automation, e-commerce and advertising for businesses that want to be impossible to ignore."
      />
      <Watermark />

      <section className="hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <motion.p className="eyebrow" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              DIGITAL EXPERIENCE STUDIO
            </motion.p>
            <h1 className="display xl">
              <HeadlineReveal delay={0.2} parts={[{ t: 'Digital experiences built to make brands' }, { t: 'impossible to ignore.', g: true }]} />
            </h1>
            <motion.p className="lead" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.7 }}>
              Vextraloom is a full-service creative and technology studio. We design websites, brands, content and campaigns that earn attention and turn it into customers.
            </motion.p>
            <motion.div className="hero-ctas" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.05, duration: 0.7 }}>
              <Magnetic><Button to="/web-development#work" icon="arrow">Explore our work</Button></Magnetic>
              <Magnetic><Button to="/contact" variant="ghost">Start a project</Button></Magnetic>
              <Button href={WHATSAPP_URL} variant="wa" icon="whatsapp">WhatsApp</Button>
            </motion.div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <span className="glow-orb o1" /><span className="glow-orb o2" />
            <span className="halo h1" /><span className="halo h2" />
            <img className="hero-logo" src="/logo-transparent.png" width="460" height="460" alt="" />
          </div>
        </div>
      </section>

      <section className="marquees" aria-label="Our services">
        <Marquee items={names} />
        <Marquee items={names} reverse outline speed={46} />
      </section>

      <section className="section" aria-labelledby="svc-h">
        <div className="container">
          <SectionHead id="svc-h" title="Nine services, one studio" intro="Everything your business needs to be found, trusted and chosen online, delivered by one team with one standard of quality." />
          <div className="svc-cards">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.08}>
                <Link to={`/${s.slug}`} className="svc-card" style={{ '--accent': s.accent }}>
                  <span className="box-ico"><Icon name={s.icon} size={24} /></span>
                  <h3>{s.name}</h3>
                  <p>{s.short}</p>
                  <span className="more">Learn more <Icon name="arrowUpRight" size={16} /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="web-h">
        <div className="container web-hl">
          <Reveal className="web-hl-copy">
            <p className="eyebrow">Website Development</p>
            <h2 id="web-h">Sites that feel as good as they look.</h2>
            <p>Every website is custom designed and built in React, with smooth motion, fast loading and a clear route from first look to first enquiry.</p>
            <ul className="ticks">
              <li><Icon name="check" size={16} stroke={2.2} />Responsive on every screen</li>
              <li><Icon name="check" size={16} stroke={2.2} />Built for search visibility</li>
              <li><Icon name="check" size={16} stroke={2.2} />Forms, WhatsApp and booking built in</li>
            </ul>
            <Button to="/web-development" icon="arrow">See website designs</Button>
          </Reveal>
          <Reveal className="web-hl-shots" delay={0.1}>
            <AutoMockup project={webProjects[0]} />
            <AutoMockup project={webProjects[2]} reverse delay={-3} />
          </Reveal>
        </div>
      </section>

      <section className="section" aria-labelledby="why-h">
        <div className="container">
          <SectionHead id="why-h" title="Why businesses choose Vextraloom" />
          <div className="card-grid">
            {whyChoose.map((w, i) => (
              <Reveal key={w.title} delay={(i % 3) * 0.08} className="box">
                <span className="box-ico"><Icon name={w.icon} size={22} /></span>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="proc-h">
        <div className="container">
          <SectionHead id="proc-h" title="How we work" intro="A simple, transparent process from first conversation to long-term growth." />
          <div className="steps-wrap">
            <motion.span
              className="steps-line" aria-hidden="true"
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 1.4, ease: 'easeOut' }}
            />
            <ol className="steps six" style={{ '--n': process.length }}>
              {process.map((p, i) => (
                <Reveal as="li" key={p.title} delay={i * 0.1} className="step">
                  <span className="step-num">{i + 1}</span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="about-h">
        <div className="container about-teaser">
          <Reveal>
            <h2 id="about-h">A studio for brands that want to be remembered.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p>Most businesses end up with a website from one person, a logo from another and social posts from a third. We bring it together: one team, one voice and one standard of craft across everything your customers see.</p>
            <Button to="/about" variant="ghost" icon="arrow">About Vextraloom</Button>
          </Reveal>
        </div>
      </section>

      <CtaBand title="Let's build something people remember." text="Message us on WhatsApp for a quick conversation, or send the details through the contact form." />
    </div>
  );
}
