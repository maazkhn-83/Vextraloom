import { Fragment, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// CSS-driven scroll reveal (uses the `translate` property, so hover transforms on the same element still work).
export function Reveal({ children, delay = 0, className = '', as: Tag = 'div', style, ...rest }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (!('IntersectionObserver' in window)) { setSeen(true); return undefined; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, { rootMargin: '0px 0px -50px 0px', threshold: 0.05 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={`rv ${seen ? 'in' : ''} ${className}`.trim()} style={{ '--d': `${delay}s`, ...style }} {...rest}>
      {children}
    </Tag>
  );
}

// Word-by-word headline reveal. parts: [{ t: 'text', g: true }] (g = gradient words)
export function HeadlineReveal({ parts, delay = 0 }) {
  let n = 0;
  return parts.map((p, pi) =>
    p.t.split(' ').filter(Boolean).map((w) => {
      const i = n++;
      return (
        <Fragment key={`${pi}-${i}`}>
          <span className="split-w">
            <motion.span
              className={`split-i ${p.g ? 'grad-text' : ''}`}
              initial={{ y: '115%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.85, delay: delay + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            >
              {w}
            </motion.span>
          </span>{' '}
        </Fragment>
      );
    })
  );
}
