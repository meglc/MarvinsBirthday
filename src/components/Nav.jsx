export default function Nav({ currentPage, onNavigate }) {
  return (
    <nav className="site-nav">
      <button className="nav-brand" onClick={() => onNavigate('home')}>
        for marvin <span className="nav-star">✦</span>
      </button>
      <div className="nav-links">
        <button
          className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
          onClick={() => onNavigate('home')}
        >
          home
        </button>
        <button
          className={`nav-link ${currentPage === 'memories' ? 'active' : ''}`}
          onClick={() => onNavigate('memories')}
        >
          memories
        </button>
        <button
          className={`nav-link ${currentPage === 'playlist' ? 'active' : ''}`}
          onClick={() => onNavigate('playlist')}
        >
          playlist
        </button>
        <button
          className={`nav-link ${currentPage === 'loved' ? 'active' : ''}`}
          onClick={() => onNavigate('loved')}
        >
          loved
        </button>
        <button
          className={`nav-link ${currentPage === 'letter' ? 'active' : ''}`}
          onClick={() => onNavigate('letter')}
        >
          letter
        </button>
      </div>
    </nav>
  )
}
