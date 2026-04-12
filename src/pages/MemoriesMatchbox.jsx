import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { memories } from '../data/memories'
import MemoryModal from '../components/MemoryModal'

const TILTS = [-3, 2, -1.5, 3.5, -2.5, 1]

export default function MemoriesMatchbox() {
  const [selected, setSelected]     = useState(null)
  const [strikingId, setStrikingId] = useState(null)

  const handleClick = (memory) => {
    if (strikingId) return
    setStrikingId(memory.id)
    setTimeout(() => {
      setStrikingId(null)
      setSelected(memory)
    }, 380)
  }

  return (
    <main className="memories-matchbox-page">
      <div className="memories-header">
        <h1 className="memories-page-title">our memories</h1>
        <div className="memories-page-divider" />
        <p className="memories-page-sub">strike a match</p>
      </div>

      <div className="matchbox-grid">
        {memories.map((memory, i) => {
          const { icon, accent, bgImage } = memory.cover

          return (
            <motion.button
              key={memory.id}
              className="matchbox"
              style={{ '--mb-accent': accent }}
              animate={{ rotate: TILTS[i] }}
              whileHover={{
                rotate: 0,
                y: -10,
                transition: { type: 'spring', stiffness: 320, damping: 22 },
              }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleClick(memory)}
            >

              {/* Dark interior — revealed when tray slides up */}
              <div className="matchbox-interior" />

              {/* Sliding tray — photo + cover + match icon */}
              <div className="matchbox-tray">
                {bgImage && (
                  <div
                    className="matchbox-photo"
                    style={{ backgroundImage: `url(${import.meta.env.BASE_URL}${bgImage})` }}
                  />
                )}

                {/* Match stick */}
                <div className="match-icon">
                  <div className="match-head" style={{ background: accent, boxShadow: `0 0 6px ${accent}99` }} />
                  <div className="match-stick" />
                </div>

                {/* Cover face */}
                <div className="matchbox-cover">
                  <span className="matchbox-cover-icon" style={{ color: accent }}>
                    {icon}
                  </span>
                  <span className="matchbox-label">{memory.label}</span>
                </div>
              </div>

              {/* Strike flash — always on top */}
              <AnimatePresence>
                {strikingId === memory.id && (
                  <motion.div
                    className="match-flash"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0.5, 0] }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.38 }}
                  />
                )}
              </AnimatePresence>

              {/* Strike strip — fixed to outer shell */}
              <div className="matchbox-strip" />
            </motion.button>
          )
        })}
      </div>

      <AnimatePresence>
        {selected && <MemoryModal memory={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </main>
  )
}
