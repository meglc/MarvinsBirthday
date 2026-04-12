import { motion } from 'framer-motion'
import Envelope from '../components/Envelope'

// Deterministic star positions using golden-angle distribution so they
// look natural without needing Math.random() (which would re-seed on every
// render and cause layout thrash in strict mode).
const STARS = Array.from({ length: 40 }, (_, i) => ({
  id:       i,
  left:     `${(i * 16.18) % 100}%`,
  top:      `${(i * 23.61) % 88}%`,
  size:     `${0.2 + (i % 4) * 0.1}rem`,
  char:     i % 7 === 0 ? '✦' : '·',
  delay:    (i * 0.19) % 5,
  duration: 2.4 + (i % 7) * 0.35,
}))

export default function HomePage() {
  return (
    <main className="home-page">

      {/* Ambient twinkling stars scattered behind the envelope */}
      {STARS.map(s => (
        <motion.span
          key={s.id}
          className="star"
          style={{ left: s.left, top: s.top, fontSize: s.size }}
          animate={{ opacity: [0.08, 0.7, 0.08] }}
          transition={{ duration: s.duration, repeat: Infinity, delay: s.delay, ease: 'easeInOut' }}
        >
          {s.char}
        </motion.span>
      ))}

      {/* Envelope — click the heart seal to open the letter */}
      <div className="home-center">
        <Envelope />
      </div>

    </main>
  )
}
