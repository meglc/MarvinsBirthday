import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
  center:        { x: 0, opacity: 1 },
  exit:  (dir) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
}

export default function MemoryModal({ memory, onClose }) {
  const photos = memory?.photos ?? []
  const [index, setIndex] = useState(0)
  const [dir, setDir]     = useState(1)

  if (!memory) return null

  const go = (d) => {
    setDir(d)
    setIndex(i => (i + d + photos.length) % photos.length)
  }

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <motion.article
        className="memory-modal"
        initial={{ y: 28, scale: 0.93, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: 16, scale: 0.96, opacity: 0 }}
        transition={{ type: 'spring', damping: 28, stiffness: 280, delay: 0.04 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>

        <div className="memory-paper">
          <h2 className="memory-modal-label">{memory.label}</h2>
          <div className="memory-modal-divider" />
          <p className="memory-modal-description">{memory.description}</p>

          <div className="memory-photo-slot">
            {photos.length > 0 ? (
              <div className="photo-slideshow">
                <AnimatePresence initial={false} custom={dir} mode="wait">
                  <motion.img
                    key={index}
                    src={`${import.meta.env.BASE_URL}${photos[index]}`}
                    alt={`${memory.label} ${index + 1}`}
                    className="memory-photo-img"
                    custom={dir}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  />
                </AnimatePresence>

                {photos.length > 1 && (
                  <>
                    <button className="photo-nav-btn photo-nav-prev" onClick={() => go(-1)}>‹</button>
                    <button className="photo-nav-btn photo-nav-next" onClick={() => go(1)}>›</button>
                    <div className="photo-counter">{index + 1} / {photos.length}</div>
                  </>
                )}
              </div>
            ) : (
              <div className="memory-photo-empty">
                <span className="photo-empty-icon">✦</span>
                <span className="photo-empty-label">photo coming soon</span>
              </div>
            )}
          </div>
        </div>
      </motion.article>
    </motion.div>
  )
}
