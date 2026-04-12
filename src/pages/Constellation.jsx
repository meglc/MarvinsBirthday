import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { names, lines, constellationMeta } from '../data/constellation'

// Ambient background stars (separate from constellation names)
const AMBIENT = Array.from({ length: 35 }, (_, i) => ({
  id: i,
  left: `${(i * 16.18) % 100}%`,
  top:  `${(i * 23.61) % 95}%`,
  size: `${0.18 + (i % 4) * 0.1}rem`,
  char: i % 7 === 0 ? '✦' : '·',
  delay:    (i * 0.19) % 5,
  duration: 2.8 + (i % 6) * 0.4,
}))

// Map id → star for quick lookup
const nameMap = Object.fromEntries(names.map(n => [n.id, n]))

export default function Constellation() {
  const [hoveredId, setHoveredId] = useState(null)

  // IDs directly connected to the hovered star
  const connectedIds = useMemo(() => {
    if (!hoveredId) return new Set()
    const set = new Set()
    lines.forEach(l => {
      if (l.from === hoveredId) set.add(l.to)
      if (l.to   === hoveredId) set.add(l.from)
    })
    return set
  }, [hoveredId])

  const isAnyHovered = hoveredId !== null

  return (
    <main className="constellation-page">

      {/* Ambient twinkling stars */}
      {AMBIENT.map(s => (
        <motion.span
          key={s.id}
          className="star"
          style={{ left: s.left, top: s.top, fontSize: s.size }}
          animate={{ opacity: [0.06, 0.7, 0.06] }}
          transition={{ duration: s.duration, repeat: Infinity, delay: s.delay }}
        >
          {s.char}
        </motion.span>
      ))}

      {/* Campfire warmth from below — you're looking up at the sky */}
      <motion.div
        className="constellation-fire"
        animate={{ opacity: [0.4, 0.75, 0.45, 0.8, 0.4] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* SVG layer: constellation lines + star dots */}
      <svg
        className="constellation-svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <filter id="dot-glow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="0.6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Constellation lines */}
        {lines.map((line, i) => {
          const a = nameMap[line.from]
          const b = nameMap[line.to]
          if (!a || !b) return null
          const isLit = isAnyHovered && (line.from === hoveredId || line.to === hoveredId)
          return (
            <motion.path
              key={`${line.from}-${line.to}`}
              d={`M${a.x},${a.y} L${b.x},${b.y}`}
              stroke="rgba(255,248,220,1)"
              fill="none"
              initial={{ pathLength: 0, opacity: 0, strokeWidth: 0.3 }}
              animate={{
                pathLength: 1,
                opacity:     isLit ? 0.5 : isAnyHovered ? 0.04 : 0.13,
                strokeWidth: isLit ? 0.55 : 0.3,
              }}
              transition={{
                pathLength:  { duration: 1.6, delay: 0.4 + i * 0.18, ease: 'easeInOut' },
                opacity:     { duration: isAnyHovered ? 0.2 : 1.6, delay: isAnyHovered ? 0 : 0.4 + i * 0.18 },
                strokeWidth: { duration: 0.2 },
              }}
            />
          )
        })}

        {/* Star dots at each name */}
        {names.map((star, i) => {
          const isHovered   = hoveredId === star.id
          const isConnected = connectedIds.has(star.id)
          return (
            <motion.circle
              key={star.id}
              cx={star.x}
              cy={star.y}
              fill="rgba(255,248,220,1)"
              filter="url(#dot-glow)"
              initial={{ r: 0, opacity: 0 }}
              animate={{
                r:       isHovered ? 1.05 : 0.6,
                opacity: isHovered ? 1 : isAnyHovered && !isConnected ? 0.25 : 0.82,
              }}
              transition={{
                r:       { duration: 0.2 },
                opacity: { duration: isAnyHovered ? 0.2 : 1.2, delay: isAnyHovered ? 0 : 0.9 + i * 0.13 },
              }}
            />
          )
        })}
      </svg>

      {/* HTML label layer: name buttons */}
      <div className="constellation-labels" aria-label="People who love you">
        {names.map((star, i) => {
          const isHovered   = hoveredId === star.id
          const isConnected = connectedIds.has(star.id)
          return (
            <motion.span
              key={star.id}
              className="constellation-name"
              style={{ left: `${star.x}%`, top: `${star.y}%` }}
              onMouseEnter={() => setHoveredId(star.id)}
              onMouseLeave={() => setHoveredId(null)}
              initial={{ opacity: 0 }}
              animate={{
                opacity: isHovered ? 1 : isAnyHovered && !isConnected ? 0.18 : 0.6,
                color:   isHovered ? 'rgba(255,248,220,1)' : 'rgba(240,237,230,0.6)',
              }}
              transition={{
                opacity: { duration: isAnyHovered ? 0.2 : 1.2, delay: isAnyHovered ? 0 : 1.1 + i * 0.13 },
                color:   { duration: 0.2 },
              }}
            >
              {star.name}
            </motion.span>
          )
        })}
      </div>

      {/* Footer */}
      <motion.footer
        className="constellation-footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2, duration: 1.5 }}
      >
        <h1 className="constellation-title">{constellationMeta.title}</h1>
        <p  className="constellation-subtitle">{constellationMeta.subtitle}</p>
      </motion.footer>

    </main>
  )
}
