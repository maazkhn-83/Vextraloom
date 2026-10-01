import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Icon from './Icons.jsx';
import Logo from './Logo.jsx';
import { services } from '../data/services.js';
import { NAV_LINKS, WHATSAPP_URL } from '../config/site.js';

export default function Navbar() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mega, setMega] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMega(false); setOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => { if (e.key === 'Escape') { setOpen(false); setMega(false); } };
    document.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = ''; document.removeEventListener('keydown', onKey); };
  }, [open]);

  const isActive = (l) => {
    if (l.to === '/') return pathname === '/';
    if (l.mega) return pathname === '/services' || services.some((s) => pathname === `/${s.slug}`);
    return pathname.startsWith(l.to);
  };

  return (
    <>
    <header className={`nav ${scrolled || open ? 'scrolled' : ''}`}>
      <div className="nav-pill">
        <Logo size={36} onClick={() => setOpen(false)} />

        <nav aria-label="Main navigation" className="nav-desktop">
          <ul className="nav-links">
            {NAV_LINKS.map((l) => {
              const active = isActive(l);
              if (!l.mega) {
                return (
                  <li key={l.to}>
                    <Link to={l.to} className={`nav-link ${active ? 'active' : ''}`} aria-current={active ? 'page' : undefined}>
                      {l.label}
                      {active && <motion.span layoutId="nav-ind" className="nav-ind" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />}
                    </Link>
                  </li>
                );
              }
              return (
                <li
                  key={l.to} className="has-mega"
                  onMouseEnter={() => setMega(true)} onMouseLeave={() => setMega(false)}
                  onFocus={() => setMega(true)}
                  onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setMega(false); }}
                >
                  <Link to={l.to} className={`nav-link ${active ? 'active' : ''}`} aria-haspopup="true" aria-expanded={mega} aria-current={active ? 'page' : undefined}>
                    {l.label}
                    <Icon name="chevron" size={14} className={`caret ${mega ? 'up' : ''}`} />
                    {active && <motion.span layoutId="nav-ind" className="nav-ind" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />}
                  </Link>
                  <AnimatePresence>
                    {mega && (
                      <motion.div className="mega" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                        <motion.div
                          className="mega-panel"
                          initial={{ y: 10 }} animate={{ y: 0 }} transition={{ duration: 0.22 }}
                        >
                          <ul className="mega-grid">
                            {services.map((s) => (
                              <li key={s.slug}>
                                <Link to={`/${s.slug}`} className="mega-item" style={{ '--accent': s.accent }}>
                                  <span className="mega-ico"><Icon name={s.icon} size={20} /></span>
                                  <span>
                                    <strong>{s.name}</strong>
                                    <small>{s.short}</small>
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                          <Link to="/services" className="mega-all">View all services <Icon name="arrow" size={16} /></Link>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="nav-right">
          <a className="nav-btn nav-btn-wa" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
            <Icon name="whatsapp" size={18} /><span className="nav-btn-text">WhatsApp</span>
          </a>
          <Link to="/contact" className="nav-btn nav-btn-contact"><span>Contact Us</span></Link>
          <button className="burger" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'}>
            <Icon name={open ? 'close' : 'menu'} size={22} />
          </button>
        </div>
      </div>

    </header>
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu" className="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
          onClick={() => setOpen(false)}
        >
          <nav aria-label="Mobile navigation" className="mm-scroll" onClick={(e) => e.stopPropagation()}>
            <ul className="mm-list">
              {[{ to: '/', label: 'Home' }, { to: '/about', label: 'About' }, { to: '/services', label: 'Services' }].map((l, i) => (
                <motion.li key={l.to} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 + i * 0.06 }}>
                  <Link to={l.to} className={`mm-link ${pathname === l.to ? 'active' : ''}`}>{l.label}</Link>
                  {l.to === '/services' && (
                    <ul className="mm-sub">
                      {services.map((s) => (
                        <li key={s.slug}>
                          <Link to={`/${s.slug}`} style={{ '--accent': s.accent }} className={pathname === `/${s.slug}` ? 'active' : ''}>
                            <Icon name={s.icon} size={18} />{s.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.li>
              ))}
              <motion.li initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <Link to="/contact" className={`mm-link ${pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
              </motion.li>
            </ul>
            <a className="btn btn-wa mm-wa" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Icon name="whatsapp" size={20} /><span>Chat on WhatsApp</span>
            </a>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}
