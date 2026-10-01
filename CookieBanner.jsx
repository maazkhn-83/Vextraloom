import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const KEY = 'vl-cookie-consent';

export default function CookieBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    try { if (!localStorage.getItem(KEY)) setShow(true); } catch { setShow(true); }
  }, []);
  const accept = () => {
    try { localStorage.setItem(KEY, 'accepted'); } catch { /* storage unavailable */ }
    setShow(false);
  };
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="cookie" role="region" aria-label="Cookie notice"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 30 }} transition={{ duration: 0.5, delay: 1 }}
        >
          <p>We use essential cookies and local storage to keep this site working and to remember your choices.</p>
          <button className="btn btn-primary btn-sm" onClick={accept}><span>Accept</span></button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
