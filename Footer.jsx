import { Link } from 'react-router-dom';
import Icon from './Icons.jsx';
import Logo from './Logo.jsx';
import Button from './Button.jsx';
import { Reveal } from './Reveal.jsx';
import { services } from '../data/services.js';
import { SOCIALS, EMAIL, WHATSAPP_DISPLAY, WHATSAPP_URL } from '../config/site.js';

// Only routes that exist in the app. "Our Work" is the website showcase on the Web Development page.
const QUICK_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/web-development#work', label: 'Our Work' },
  { to: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="foot-mark" aria-hidden="true">VEXTRALOOM</div>
      <div className="container">
        <Reveal className="foot-cta">
          <div className="foot-cta-copy">
            <h2>Let’s work together</h2>
            <p>Have a project in mind? Tell us about it and we will reply with clear next steps.</p>
          </div>
          <div className="foot-cta-actions">
            <Button to="/contact" icon="arrow">Contact us</Button>
            <Button href={WHATSAPP_URL} variant="wa" icon="whatsapp">WhatsApp {WHATSAPP_DISPLAY}</Button>
          </div>
        </Reveal>

        <Reveal className="foot-grid" delay={0.05}>
          <div className="foot-brand">
            <Logo size={44} />
            <p>A digital experience studio. We design, build and market websites, brands and campaigns that earn attention and turn it into customers.</p>
          </div>

          <nav aria-label="Quick links" className="foot-col">
            <h3 className="foot-h">Quick Links</h3>
            <ul>
              {QUICK_LINKS.map((l) => (<li key={l.label}><Link to={l.to}>{l.label}</Link></li>))}
            </ul>
          </nav>

          <nav aria-label="Services" className="foot-col foot-services">
            <h3 className="foot-h">Services</h3>
            <ul>
              {services.map((s) => (<li key={s.slug}><Link to={`/${s.slug}`}>{s.name}</Link></li>))}
            </ul>
          </nav>

          <div className="foot-col foot-connect">
            <h3 className="foot-h">Connect</h3>
            <ul className="social-row" aria-label="Social links">
              {SOCIALS.map((s) => (
                <li key={s.key}>
                  <a
                    className="social-btn" href={s.href} aria-label={s.label} title={s.label}
                    {...(s.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    <Icon name={s.icon} size={20} />
                  </a>
                </li>
              ))}
              <li>
                <Link className="social-btn" to="/" aria-label="VEXTRALOOM website home" title="Website"><Icon name="globe" size={20} /></Link>
              </li>
            </ul>
            <ul className="foot-contact">
              <li><Icon name="whatsapp" size={16} /><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">{WHATSAPP_DISPLAY}</a></li>
              <li><Icon name="mail" size={16} /><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
            </ul>
          </div>
        </Reveal>

        <div className="foot-bottom">
          <small>&copy; {new Date().getFullYear()} VEXTRALOOM. All rights reserved.</small>
          <small>Designed and built by VEXTRALOOM.</small>
        </div>
      </div>
    </footer>
  );
}
