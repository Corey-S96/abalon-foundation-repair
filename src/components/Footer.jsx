import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#121316', paddingTop: 72 }}>
      <div className="foot-grid wrap">
        {/* Brand */}
        <div>
          <span style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 800, fontSize: 24, color: '#fff' }}>
            ABALON<span style={{ color: '#EF1A30' }}>.</span>
          </span>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', marginTop: 14, lineHeight: 1.6, maxWidth: 260 }}>
            Western Canada's oldest and largest foundation repair company. Fixing Winnipeg foundations since 1970.
          </p>
          <div style={{ display: 'flex', gap: 10, marginTop: 20, flexWrap: 'wrap' }}>
            <span style={badgeStyle}>BBB A+ RATED</span>
            <span style={badgeStyle}>LIFETIME WARRANTY</span>
          </div>
        </div>

        {/* Services */}
        <div>
          <div style={colHeadStyle}>Services</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
            <Link href="/structural-repairs" className="foot-link">Structural Repairs</Link>
            <Link href="/waterproofing" className="foot-link">Waterproofing</Link>
            <Link href="/#why" className="foot-link">Why Abalon</Link>
            <Link href="/#reviews" className="foot-link">Reviews &amp; Projects</Link>
          </div>
        </div>

        {/* Resources */}
        <div>
          <div style={colHeadStyle}>Resources</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
            <Link href="/#contact" className="foot-link">FAQ</Link>
            <Link href="/#contact" className="foot-link">Homeowner&apos;s Guide</Link>
            <Link href="/#contact" className="foot-link">Our Guarantee</Link>
            <Link href="/#contact" className="foot-link">Service Area</Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <div style={colHeadStyle}>Contact</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
            <a href="tel:+12047832500" className="foot-link">(204) 783-2500</a>
            <a href="mailto:info@abalonwpg.ca" className="foot-link">info@abalonwpg.ca</a>
            <span style={{ fontSize: 15, color: 'rgba(255,255,255,0.78)' }}>
              965 Pacific Ave<br />Winnipeg, MB R3E 1G3
            </span>
            <span style={{ fontSize: 15, color: 'rgba(255,255,255,0.78)' }}>Mon–Fri 8:00am – 4:30pm</span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: 56 }}>
        <div
          className="foot-bottom wrap"
          style={{
            padding: '22px 32px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 14,
          }}
        >
          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>
            &copy; {new Date().getFullYear()} Abalon Foundation Repairs. All rights reserved.
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <Link href="/privacy-policy" className="foot-bottom-link">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="foot-bottom-link">Terms &amp; Conditions</Link>
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>Winnipeg, Manitoba</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

const colHeadStyle = {
  fontSize: 12, fontWeight: 700, letterSpacing: '0.1em',
  color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', marginBottom: 16,
}

const badgeStyle = {
  fontSize: 11, fontWeight: 700, letterSpacing: '0.06em',
  border: '1px solid rgba(255,255,255,0.2)',
  color: 'rgba(255,255,255,0.7)',
  padding: '7px 11px', borderRadius: 4,
}
