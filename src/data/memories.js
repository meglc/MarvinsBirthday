/*
  ┌─────────────────────────────────────────────────────────────────┐
  │  HOW TO CUSTOMIZE EACH MATCHBOX COVER                           │
  │                                                                  │
  │  Each memory has a `cover` object with three fields:            │
  │                                                                  │
  │  icon     → any emoji or unicode symbol shown on the front       │
  │             e.g. '🎸' '⛺' '🌙' '♪' '✦' '△' '❋'              │
  │                                                                  │
  │  accent   → hex color used for the icon, match head, and glow   │
  │             e.g. '#e07a3a'  '#7ab87a'  '#c49a3a'                │
  │                                                                  │
  │  bgImage  → optional photo path for a faint background image    │
  │             leave null until ready, then set e.g. '/photos/1.jpg'│
  └─────────────────────────────────────────────────────────────────┘
*/

export const memories = [
  {
    id: 1,
    label: 'Endless first date',
    description: `I am not sure that there is anything we can ever do to top this week.
    I had always wanted to try camping, but you made it such a magical experience. So
    much preparation went into it, and I remember being so impressed. There's not a single
    thing I would have changed about this night. \n
    The next morning, I was so ecstatic to stop in Mount Dora on the way home. I wanted to
    stall as long as possible, and I'm glad I wasn't the only one. When I realized you were
    also stalling, my heart skipped a beat. We had already walked around for hours, and then
    you asked if I wanted to stop at another plant shop. That's when I knew. Coming home,
    stalling longer in the backyard, sitting on your lap. After we decided on dinner, I think
    we both gave up on stalling and just accepted we both wanted to spend as much time together
    as possible before you went home for winter break. This will always be one of my fondest
    memories of us, no matter how many more we create. `,
    photos: ['photos/image10.jpeg'],
    cover: {
      accent: '#e07a3a',
      bgImage: 'photos/junipersprings.jpeg',
    },
  },
  {
    id: 2,
    label: 'Graduation day',
    description: `How special that we met only 8 months prior, then got to walk across the stage
    together on graduation day. It was so sweet to get to share the day with you, and I loved 
    getting to meet more of your family that day. My favorite part had to be after all the 
    festivities. Seeing you from across the street, still in your formalwear. I felt my heart
    flutter. I loved that we got to celebrate with our families, but then come together to have
    a celebration all our own. So intimate, so sweet, and just us. You picked the perfect place, 
    and I can't think of a better way to have ended our graduation day.`,
    photos: [
      'photos/image3.jpeg',
      'photos/image2.jpeg',
      // add more: 'photos/anotherphoto.jpeg',
    ],
    cover: {
      accent: '#7ab87a',
      bgImage: 'photos/ucf.jpeg',
    },
  },
  {
    id: 3,
    label: 'New Orleans',
    description: `What a romantic city, although I'm not so sure I would think this if I hadn't visited 
    with you. I know it was a group trip, but my favorite moments were the ones we spent alone. On the 
    cruise, watching the sunset, feeling the breeze and just soaking up the feeling I get when I am in 
    your presence. What a sweet feeling. The swan boats were a close second highlight to the night. It 
    was so fun just paddling around in circles with you, laughing over the silliest of things. So care free.
    
    I think the last day has to have been my favorite. Trying and spilling the beignets and irish coffees, 
    strolling along the beautiful streets, trying so many foods at brunch. I loved the slowness I felt in 
    such a lively city with you. Enjoying the moments as they were, with no agenda and nothing to worry 
    about. I hope to make it back to New Orleans with you, but if we don't then I will cherish these 
    moments fondly`,
    photos: ['photos/image4.jpeg'],
    cover: {
      accent: '#7a9ab8',
      bgImage: 'photos/neworleans.jpg',
    },
  },
  {
    id: 4,
    label: 'Summer Spent Together',
    description: `How sweet it was to get to pretend to live together for a summer. Waking up together, 
    lazy mornings. Lots of cuddling. I think on these days fondly, and let myself daydream about when 
    it might happen again. My favorite time we spend together are the simple times like these. Just 
    getting to be in the same space as you has always felt so special.`,
    photos: ['photos/image5.jpeg',
      'photos/image6.jpeg'
    ],
    cover: {
      accent: '#c49a3a',
      bgImage: 'photos/image6.jpeg',
    },
  },
  {
    id: 5,
    label: 'Road trip to NYC',
    description: `What an unexpectedly fun adventure. I felt lucky to have you by my side through this, but 
    had no idea it was going to be so much fun. I loved getting to spend so much simple time with you, singing 
    in the car, making fun little pitstops, and of course everything else. I wish we had the chance to go on a 
    real roadtrip together, one without responsibility tied to it, but somehow I feel like we were able to 
    forget about why we were driving, we just knew that we were together on the road, and that was more than enough.`,
    photos: ['photos/image7.jpeg',
      'photos/image8.jpeg'
    ],
    cover: {
      accent: '#a87ab8',
      bgImage: 'photos/image9.jpeg',
    },
  },
  {
    id: 6,
    label: 'My Last Visit to Jupiter',
    description: `It felt so special to get to celebrate your grandmother alongside you and your family. 
    To see the way her face lit up when she saw everyone, and how every had the biggest smiles on their 
    faces the entire afternoon. Your family is so full of love for one another and I felt lucky to see 
    it first hand at your side. I loved going to the market with you before hand, then getting ready 
    at the same time as the women in your family. One of my faovrite moments was getting to do your cousin's 
    hair. I felt so honored to have been asked, and loved seeing the smile on her face. 
    I was so happy to spend time with my grandma with you the next day. My heart was so full that weekend, 
    being surrounded by so much love. `,
    photos: ['photos/image11.jpeg'],
    cover: {
      accent: '#8ab87a',
      bgImage: 'photos/jupiter.jpeg',
    },
  },
]
