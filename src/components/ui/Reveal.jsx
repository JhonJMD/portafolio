import { m, useReducedMotion } from 'motion/react';

// Uses the lightweight `m` component; <LazyMotion> in App.jsx supplies the animation features.
export default function Reveal({ children, delay = 0, className = '' }) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return <div className={className}>{children}</div>;

  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </m.div>
  );
}
