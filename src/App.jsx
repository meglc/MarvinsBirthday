import { useState } from 'react'
import Nav from './components/Nav'
import HomePage from './pages/HomePage'
import MemoriesMatchbox from './pages/MemoriesMatchbox'
import Playlist from './pages/Playlist'
import Constellation from './pages/Constellation'
import ClosingNote from './pages/ClosingNote'

const PAGES = {
  home: HomePage,
  memories: MemoriesMatchbox,
  playlist: Playlist,
  loved: Constellation,
  letter: ClosingNote,
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const Page = PAGES[currentPage]

  return (
    <>
      <Nav currentPage={currentPage} onNavigate={setCurrentPage} />
      <Page />
    </>
  )
}
