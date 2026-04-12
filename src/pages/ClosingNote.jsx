import { motion } from 'framer-motion'

export default function ClosingNote() {
  return (
    <main className="closing-note-page">
      <motion.article
        className="closing-note-paper"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* ── Edit everything below this line ── */}

        <p className="letter-dateline">April 12, 2026</p>

        <p className="letter-salutation">Marvin,</p>

        <p className="letter-body">
          {/* Write your closing note here */}
          I hope that by the time you reach this page, you have felt just how 
          special you are, and that you truly deserve to be celebrated. I feel 
          lucky that I get to be one of the many people in your life that gets 
          to celebrate you. I wish I could be there in person with you to shower 
          you with love on your special day, but I hope that this might convey 
          even just a small little fraction of the love you deserve today. 
        </p>

        <p className="letter-body">
          {/* Add more paragraphs as needed */}
          I know that you will never stop being true to yourself as you grow into 
          the person you are meant to be. I hope that you will take the time to  
          feel proud of yourself, and recognize the yourself to the fullest extent. 
          Recognize your accomplishments, your growth, your kindness, and the incredible 
          impact you have on the people lucky enough to be in your life. You are so loved, 
          and worthy of love. Outside of societal expectations, outside of job titles, outside
          of accomplishments, you bring so much value to the world just by being yourself.  
        </p>

                <p className="letter-body">
          {/* Add more paragraphs as needed */}
          Originally, this had started as a virtual birthday card. I was thinking about how this next 
          year is going to be for you. While we are individuals who experience this world very 
          differently, I was thinking that this might serve as a reminder that you are never alone,
          even once you are no longer as close geographically to the people who love you.
        </p>
        
                <p className="letter-body">
          {/* Add more paragraphs as needed */}
          While you navigate life in Austin and maybe feel lost at points, I hope you can look back at this 
          and remember that you have an entire community rooting for you from afar. Remember that your worth 
          is not based on anything except your heart, your mind, and who you are. Maybe the move will be 
          easy for you, maybe you will adjust and love Austin right away, and it will feel like you are 
          exactly where you are meant to be. I hope this is the case truly, but if it is not, try to 
          remember these things. You are so loved and even if things are not perfect at first, you will 
          figure them out. You always do. I'm sorry if I'm missing the mark and these things don't resonate 
          with you, maybe I am just rambling on and saying things I wish I could of heard in my experience. 
          Just know that everything always works out exactly the way it is meant to.
        </p>

        <div className="letter-closing">
          <p className="closing-line">Wishing for you the happiest year yet,</p>
          <p className="closing-signature">— Meg</p>
        </div>
      </motion.article>
    </main>
  )
}
