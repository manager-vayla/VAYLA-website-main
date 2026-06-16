import { motion } from 'framer-motion';

const BLOBS = [
  { c: '#3FE0BC', size: 520, x: '8%',  y: '12%', d: 0,  o: 0.55 },
  { c: '#1FB89A', size: 620, x: '78%', y: '18%', d: 1.2, o: 0.45 },
  { c: '#9CFBE4', size: 380, x: '46%', y: '70%', d: 0.6, o: 0.42 },
  { c: '#70F3D8', size: 340, x: '15%', y: '78%', d: 1.8, o: 0.30 },
  { c: '#147A66', size: 700, x: '85%', y: '85%', d: 2.4, o: 0.55 },
];

export function BlobBg({ intensity = 1 }: { intensity?: number }) {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(31,184,154,0.10), transparent 60%)' }} />
      {BLOBS.map((b, i) => (
        <motion.span
          key={i}
          className="blob"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{
            opacity: b.o * intensity,
            scale: [0.95, 1.08, 0.95],
            x: [0, 28, 0, -22, 0],
            y: [0, -18, 14, 0, 0],
          }}
          transition={{
            duration: 18 + i * 2,
            repeat: Infinity,
            delay: b.d,
            ease: 'easeInOut',
          }}
          style={{
            width: b.size, height: b.size,
            left: b.x, top: b.y,
            background: b.c,
          }}
        />
      ))}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(7,12,10,0.55) 80%, #070C0A 100%)',
      }} />
    </div>
  );
}
