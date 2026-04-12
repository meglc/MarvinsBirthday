import { motion } from 'framer-motion'

export default function LetterModal({ onClose }) {
  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      <motion.article
        className="letter-modal"
        initial={{ y: 32, scale: 0.94, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: 16, scale: 0.96, opacity: 0 }}
        transition={{ type: 'spring', damping: 28, stiffness: 280, delay: 0.05 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close letter">
          ✕
        </button>

        <div className="letter-paper">
          <p className="letter-dateline">April 12, 2026</p>

          {/* ✏️ Write your message below — edit salutation, paragraphs, and signature */}
          <p className="letter-salutation">Dear Marvin,</p>

          <p className="letter-body">
            How lucky the world was 24 years ago that such a wonderful boy was born. 
            You have become such a hard working, thoughtful and caring boy and I know 
            your parents are so proud of the person you are becoming. I have felt so lucky
            to have gotten to meet you, and now grow alongside side you this past year. 
            There are so many qualities that I admire about you, qualities I hope to 
            develop within myself. I am so excited for this next stage of your life, 
            and to hear about the amazing experiences you will have, and the 
            incredible things you will accomplish. Nobody deserves this more than you, 
            and I hope you take the time to celebrate yourself and all the hard work
            you have put in. 
            <br/>
            As you begin to build your life in this next chapter, I hope you continue to 
            believe in yourself just as strongly as you have this past year. I hope you 
            never forget that you are so capable and deserving of all things good, and that 
            you are so special. I cannot wait to see what else life has in store for you. 
          </p>

          <p className="letter-body">
            I have a good feeling about this year for you, Marv. Happiest of birthdays. 
          </p>

          <div className="letter-closing">
            <p className="closing-line">With love,</p>
            <p className="closing-signature">— Meg</p>
          </div>
        </div>
      </motion.article>
    </motion.div>
  )
}
