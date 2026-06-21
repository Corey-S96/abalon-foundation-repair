import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

const NAV = [
  { label: 'Home',              href: '/' },
  { label: 'Structural Repairs', href: '/structural-repairs' },
  { label: 'Waterproofing',     href: '/waterproofing' },
  { label: 'Why Abalon',        href: '/#why' },
  { label: 'Reviews',           href: '/#reviews' },
  { label: 'Contact',           href: '/#contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useRouter()

  const isActive = (href) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href.split('#')[0]) && href.split('#')[0] !== '/'
  }

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: '#fff',
      borderBottom: '1px solid #E2E4E7',
      boxShadow: '0 1px 3px rgba(28,30,34,0.06)',
    }}>
      <div className="hdr-inner wrap">
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <Image src="/images/Logo.webp" alt="Abalon Foundation Repair" width={160} height={50} style={{ objectFit: 'contain' }} priority />
        </Link>

        {/* Desktop nav */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 19 }}>
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link ${isActive(item.href) ? 'nav-link-active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <a href="tel:+12047832500" className="hdr-call">
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: '#6B7078' }}>CALL US</span>
            <span style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 17, color: '#1C1E22' }}>
              (204) 783-2500
            </span>
          </a>
          <Link href="/#contact" className="btn-primary-sm hdr-cta">Get a Free Estimate</Link>

          {/* Hamburger */}
          <button
            className="burger-btn"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1C1E22" strokeWidth="2.2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1C1E22" strokeWidth="2.2" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ borderTop: '1px solid #E2E4E7', background: '#fff', boxShadow: '0 8px 20px rgba(28,30,34,0.08)' }}>
          <nav style={{ maxWidth: 1200, margin: '0 auto', padding: '8px 18px 18px', display: 'flex', flexDirection: 'column' }}>
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`mobile-nav-link ${isActive(item.href) ? 'mobile-nav-link-active' : ''}`}
              >
                {item.label}
              </Link>
            ))}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 14 }}>
              <Link
                href="/#contact"
                onClick={() => setMenuOpen(false)}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: '#EF1A30', color: '#fff', fontWeight: 700,
                  padding: 13, borderRadius: 6, fontSize: 16,
                }}
              >
                Get a Free Estimate
              </Link>
              <a
                href="tel:+12047832500"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  gap: 8,
                  background: '#F4F5F6', color: '#1C1E22', fontWeight: 700,
                  border: '1px solid #E2E4E7',
                  padding: 13, borderRadius: 6, fontSize: 16,
                }}
              >
                Call (204) 783-2500
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
