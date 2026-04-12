/*
  ┌──────────────────────────────────────────────────���───────────────┐
  │  HOW TO CUSTOMIZE                                                │
  │                                                                  │
  │  names  → replace 'Name One' etc. with real names               │
  │  x / y  → position in the sky (0–100). x=0 is left, y=0 is top  │
  │           adjust to spread names naturally across the screen     │
  │                                                                  │
  │  lines  → connect names by id to draw constellation lines        │
  │           add or remove connections freely                       │
  │                                                                  │
  │  title / subtitle → edit the footer text                        │
  └──────────────────────────────────────────────────────────────────┘
*/

export const constellationMeta = {
  title: 'no matter the distance',
  subtitle: 'these people, and many more, will always be there for you',
}

export const names = [
  { id: 1,  name: 'Mother',     x: 14, y: 24 },
  { id: 2,  name: 'Father',     x: 25, y: 15 },
  { id: 3,  name: 'Sister',   x: 20, y: 38 },
  { id: 4,  name: 'Ken',    x: 44, y: 18 },
  { id: 5,  name: 'Jay',    x: 57, y: 12 },
  { id: 6,  name: 'Sage',     x: 52, y: 30 },
  { id: 7,  name: 'John',   x: 72, y: 22 },
  { id: 8,  name: 'Your John',   x: 84, y: 15 },
  { id: 9,  name: 'Christian',    x: 80, y: 35 },
  { id: 10, name: 'Meg',     x: 89, y: 46 },
  { id: 11, name: 'Grandmother',  x: 35, y: 55 },
  { id: 12, name: 'Lloyd',  x: 63, y: 58 },
]

export const lines = [
  // Left cluster
  { from: 1, to: 2 },
  { from: 2, to: 3 },
  { from: 1, to: 3 },
  // Upper-center cluster
  { from: 4, to: 5 },
  { from: 5, to: 6 },
  { from: 4, to: 6 },
  // Right cluster
  { from: 7, to: 8 },
  { from: 8, to: 9 },
  { from: 7, to: 9 },
  // Connections across the sky
  { from: 6, to: 7  },
  { from: 3, to: 11 },
  { from: 11, to: 12 },
]
