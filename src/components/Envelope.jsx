import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LetterModal from './LetterModal'

export default function Envelope() {
  const [phase, setPhase] = useState('sealed') // sealed | opening | open | modal

  const isOpen = phase !== 'sealed'
  const showLetterPeek = phase === 'opening' || phase === 'open' || phase === 'modal'

  const handleSealClick = () => {
    setPhase('opening')
    setTimeout(() => setPhase('modal'), 1500)
  }

  return (
    <>
      <div className="envelope-scene">

        {/* Letter peek — slides up from inside envelope when open */}
        <motion.div
          className="letter-peek"
          animate={{ height: showLetterPeek ? 96 : 0 }}
          transition={{
            duration: 0.55,
            delay: phase === 'opening' ? 0.85 : 0,
            ease: 'easeOut',
          }}
          onClick={phase === 'open' ? () => setPhase('modal') : undefined}
          style={{ cursor: phase === 'open' ? 'pointer' : 'default' }}
        >
          <div className="peek-lines">
            <span /><span /><span /><span />
          </div>
          <AnimatePresence>
            {phase === 'open' && (
              <motion.span
                className="reread-hint"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.3 }}
              >
                read again
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Envelope body */}
        <div className="envelope">
          {/* Decorative inside fold lines */}
          <div className="fold-left" />
          <div className="fold-right" />
          <div className="fold-bottom" />

          {/* Flap with 3D perspective */}
          <div className="flap-perspective">
            <motion.div
              className="envelope-flap"
              animate={{ rotateX: isOpen ? -165 : 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Heart seal */}
              <AnimatePresence>
                {!isOpen && (
                  <motion.button
                    key="seal"
                    className="seal"
                    initial={{ scale: 0.85, opacity: 0 }}
                    animate={{ scale: [1, 1.07, 1], opacity: 1 }}
                    exit={{ scale: 0, opacity: 0, transition: { duration: 0.2 } }}
                    transition={{ scale: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' }, opacity: { duration: 0.4 } }}
                    whileHover={{ scale: 1.18 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleSealClick}
                    aria-label="Open letter"
                  >
                    ♥
                  </motion.button>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* Hint below envelope */}
        <AnimatePresence>
          {phase === 'sealed' && (
            <motion.p
              key="hint"
              className="envelope-hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              click the seal to open
            </motion.p>
          )}
        </AnimatePresence>

      </div>

      {/* Letter modal */}
      <AnimatePresence>
        {phase === 'modal' && (
          <LetterModal onClose={() => setPhase('open')} />
        )}
      </AnimatePresence>
    </>
  )
}
