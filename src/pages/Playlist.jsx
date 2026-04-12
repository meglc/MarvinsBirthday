import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { playlist, playlistMeta } from '../data/playlist'

// ── Playlist hero ─────────────────────────────────────────────────

function PlaylistHero() {
  return (
    <div className="pl-hero">
      <div className="pl-hero-inner">
        <div className="pl-cover">
          {playlistMeta.coverImage
            ? <img src={playlistMeta.coverImage} alt="Playlist cover" />
            : <div className="pl-cover-placeholder">♪</div>
          }
        </div>
        <div className="pl-meta">
          <span className="pl-type">playlist</span>
          <h1 className="pl-title">{playlistMeta.title}</h1>
          {playlistMeta.description && (
            <p className="pl-desc">{playlistMeta.description}</p>
          )}
          <span className="pl-count">{playlist.length} {playlist.length === 1 ? 'song' : 'songs'}</span>
        </div>
      </div>
      <div className="pl-hero-fade" />
    </div>
  )
}

// ── Track row ─────────────────────────────────────────────────────

function TrackRow({ track, index, isExpanded, isPlaying, onToggle, onPlay }) {
  return (
    <div className={`pl-track-row ${isExpanded ? 'is-expanded' : ''} ${isPlaying ? 'is-playing' : ''}`}>
      <div className="pl-track-main">

        {/* Play / stop button */}
        {track.previewUrl ? (
          <button
            className="pl-track-num pl-track-play"
            onClick={onPlay}
            aria-label={isPlaying ? `Stop ${track.title}` : `Play ${track.title}`}
          >
            <span className="pl-num-label">{String(index + 1).padStart(2, '0')}</span>
            <span className="pl-play-icon">{isPlaying ? '■' : '▶'}</span>
          </button>
        ) : (
          <span className="pl-track-num">{String(index + 1).padStart(2, '0')}</span>
        )}

        {/* Album art */}
        <div className="pl-track-art">
          {track.coverImage
            ? <img src={track.coverImage} alt={`${track.title} cover`} />
            : <div className="pl-track-art-placeholder">♪</div>
          }
        </div>

        {/* Title + artist */}
        <button className="pl-track-info-btn" onClick={onToggle} aria-expanded={isExpanded}>
          <span className="pl-track-title">{track.title}</span>
          <span className="pl-track-artist">{track.artist}</span>
        </button>

        {/* Expand toggle */}
        <button className="pl-track-toggle-btn" onClick={onToggle} aria-hidden="true">
          {isExpanded ? '−' : '+'}
        </button>
      </div>

      {/* Expanded note */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            className="pl-track-expand"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div className="pl-track-expand-inner">
              <p className="pl-track-note">{track.note}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────

export default function Playlist() {
  const [expandedId, setExpandedId] = useState(null)
  const [playingId,  setPlayingId]  = useState(null)
  const audioRef = useRef(null)

  // Clean up audio on unmount
  useEffect(() => {
    return () => {
      audioRef.current?.pause()
    }
  }, [])

  const play = (track) => {
    // Stop whatever is currently playing
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current = null
    }

    if (playingId === track.id) {
      // Clicking the playing track stops it
      setPlayingId(null)
      return
    }

    // Start new track and expand its note
    const audio = new Audio(track.previewUrl)
    audio.play()
    audio.onended = () => setPlayingId(null)
    audioRef.current = audio
    setPlayingId(track.id)
    setExpandedId(track.id)
  }

  const toggle = (id) => {
    setExpandedId(prev => prev === id ? null : id)
  }

  return (
    <main className="playlist-page">
      <PlaylistHero />

      <div className="pl-tracklist-wrap">
        <div className="pl-col-header">
          <span className="pl-col-num">#</span>
          <span />
          <span className="pl-col-title">title</span>
        </div>
        <div className="pl-col-divider" />

        {playlist.map((track, i) => (
          <TrackRow
            key={track.id}
            track={track}
            index={i}
            isExpanded={expandedId === track.id}
            isPlaying={playingId === track.id}
            onToggle={() => toggle(track.id)}
            onPlay={() => play(track)}
          />
        ))}
      </div>
    </main>
  )
}
