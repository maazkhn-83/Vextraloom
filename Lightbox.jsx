import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Icon from './Icons.jsx';

export default function Lightbox({ open, onClose, onPrev, onNext, label, children }) {
  const closeRef = useRef(null);
  useEffect(() => {
    if (!open) return undefined;
    const prev = document.activeElement;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext) onNext();
    };
    document.addEventListener('keydown', onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
      prev?.focus?.();
    };
  }, [open, onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="lb" role="dialog" aria-modal="true" aria-label={label}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <button ref={closeRef} className="lb-btn lb-close" onClick={onClose} aria-label="Close preview"><Icon name="close" /></button>
          {onPrev && <button className="lb-btn lb-prev" onClick={(e) => { e.stopPropagation(); onPrev(); }} aria-label="Previous"><Icon name="chevronLeft" /></button>}
          {onNext && <button className="lb-btn lb-next" onClick={(e) => { e.stopPropagation(); onNext(); }} aria-label="Next"><Icon name="chevronRight" /></button>}
          <motion.div
            className="lb-body" initial={{ scale: 0.96, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.98, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
