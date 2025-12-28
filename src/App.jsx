import { ArrowUpRight } from 'lucide-react'
import './App.css'

const socials = [
  { label: 'youtube', href: 'https://www.youtube.com/@kartybutthahaha', tone: 'youtube' },
  { label: 'tiktok', href: 'https://www.tiktok.com/@kartybutthahaha', tone: 'tiktok' },
  { label: 'instagram', href: 'https://www.instagram.com/kikikakalalalulu', tone: 'instagram' },
  { label: 'sociabuzz', href: 'https://sociabuzz.com/kartynakmakan/tribe', tone: 'sociabuzz' },
]

const icons = {
  youtube: '/images/youtube-white.png',
  tiktok: '/images/tiktok-white.png',
  instagram: '/images/instagram-white.png',
  sociabuzz: '/images/sosiabuzz-white.png',
}

function App() {
  return (
    <div className="page">
      <div className="card reflective-card">
        <div className="card-logo">
          <img src="/images/logo-cartiii.png" alt="Cartiii" />
        </div>
        <div className="link-stack">
          {socials.map((item) => (
            <a
              key={item.label}
              className={`link-chip ${item.tone}`}
              href={item.href}
              target="_blank"
              rel="noreferrer"
            >
              <div className="link-chip__left">
                <img
                  className="link-chip__icon"
                  src={icons[item.label]}
                  alt={`${item.label} logo`}
                />
                <span>{item.label}</span>
              </div>
              <ArrowUpRight size={18} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
