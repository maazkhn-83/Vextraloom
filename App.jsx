import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx';
import CookieBanner from './components/CookieBanner.jsx';
import { GradientDefs } from './components/Icons.jsx';
import { services } from './data/services.js';

const Home = lazy(() => import('./pages/Home.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Services = lazy(() => import('./pages/Services.jsx'));
const ServicePage = lazy(() => import('./pages/ServicePage.jsx'));
const WebDevelopment = lazy(() => import('./pages/WebDevelopment.jsx'));
const LogoDesign = lazy(() => import('./pages/LogoDesign.jsx'));
const SocialMedia = lazy(() => import('./pages/SocialMedia.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

const custom = { 'web-development': WebDevelopment, 'logo-design': LogoDesign, 'social-media-management': SocialMedia };

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) { window.scrollTo(0, 0); return undefined; }
    let tries = 0;
    const t = setInterval(() => {
      const el = document.getElementById(hash.slice(1));
      if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); clearInterval(t); }
      else if (++tries > 30) clearInterval(t);
    }, 100);
    return () => clearInterval(t);
  }, [pathname, hash]);
  return null;
}

const Loader = () => (
  <div className="loader" role="status" aria-label="Loading">
    <img src="/logo-transparent.png" width="72" height="72" alt="" />
  </div>
);

export default function App() {
  const location = useLocation();
  return (
    <MotionConfig reducedMotion="user">
      <GradientDefs />
      <a className="skip" href="#main">Skip to content</a>
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          id="main" key={location.pathname}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.28 }}
        >
          <Suspense fallback={<Loader />}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              {services.map((s) => {
                const Custom = custom[s.slug];
                return <Route key={s.slug} path={`/${s.slug}`} element={Custom ? <Custom /> : <ServicePage service={s} />} />;
              })}
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </motion.main>
      </AnimatePresence>
      <Footer />
      <FloatingWhatsApp />
      <CookieBanner />
    </MotionConfig>
  );
}
