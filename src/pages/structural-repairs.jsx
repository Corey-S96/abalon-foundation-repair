import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MobileCTA from '../components/MobileCTA'

const SERVICES = [
  {
    id: 'cracks',
    num: '01',
    title: 'Crack repairs',
    body: 'Cracks are the most common — and most worrying — sign homeowners see. We diagnose whether it\'s cosmetic or structural, then seal and reinforce it permanently.',
    bullets: ['Interior & exterior crack injection', 'Permanent, fully warrantied seal'],
    img: '[ photo: foundation crack repair ]',
  },
  {
    id: 'underpinning',
    num: '02',
    title: 'Underpinning',
    body: 'When a footing has settled, underpinning rebuilds the support beneath your home — stabilizing the structure and stopping further movement for good.',
    bullets: ['Footing reinforcement & rebuild', 'Best-equipped excavation crews in Winnipeg'],
    img: '[ photo: underpinning / excavation ]',
    imgLeft: true,
  },
  {
    id: 'levelling',
    num: '03',
    title: 'House levelling',
    body: 'Sloping floors and sticking doors mean your home has settled unevenly. We lift and level it back to true, then secure it so it stays put.',
    bullets: ['Precision lifting & re-levelling', 'Restores doors, floors & window alignment'],
    img: '[ photo: house levelling ]',
  },
  {
    id: 'floors',
    num: '04',
    title: 'Basement floors',
    body: 'Heaved, cracked, or sinking basement floors get removed and re-poured level — often the finishing step after drainage or structural work.',
    bullets: ['Removal & level re-pour', 'Coordinated with drainage upgrades'],
    img: '[ photo: new basement floor ]',
    imgLeft: true,
  },
  {
    id: 'teleposts',
    num: '05',
    title: 'Telepost adjustments',
    body: 'Adjustable steel posts carry the load of your main beam. We inspect, adjust, or replace teleposts to keep your floors supported and level.',
    bullets: ['Inspection, adjustment & replacement', 'Keeps main-beam load properly carried'],
    img: '[ photo: telepost / steel support ]',
  },
  {
    id: 'epoxy',
    num: '06',
    title: 'Epoxy injections',
    body: 'For structural cracks in poured concrete, high-strength epoxy bonds the wall back together — restoring its original load-bearing strength.',
    bullets: ['Structural-grade bonding', 'Restores original wall strength'],
    img: '[ photo: epoxy injection ]',
    imgLeft: true,
  },
  {
    id: 'inspections',
    num: '07',
    title: 'Inspections',
    body: 'Buying, selling, or just unsure? A thorough Abalon inspection tells you exactly what\'s going on below — with an honest, written assessment and no pressure to proceed.',
    bullets: ['Honest, written assessment', 'Ideal for buying or selling a home'],
    img: '[ photo: estimator inspecting foundation ]',
  },
]

export default function StructuralRepairs() {
  return (
    <>
      <Head>
        <title>Structural Repairs — Abalon Foundation Repair Winnipeg</title>
        <meta name="description" content="Foundation crack repairs, underpinning, house levelling, telepost adjustments, epoxy injections, and inspections in Winnipeg. Free estimates, lifetime warranty." />
      </Head>

      <Header />

      {/* Page Hero */}
      <section style={{ position: 'relative', background: '#121316', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(125deg,#1C1E22 0 1px,#15171b 1px 13px)' }} />
        <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '80px 32px' }}>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', fontWeight: 500, marginBottom: 20 }}>
            <Link href="/" style={{ transition: 'color 150ms' }}>Home</Link>
            &nbsp;/&nbsp; Structural Repairs
          </div>
          <div className="eyebrow" style={{ marginBottom: 18 }}>
            <span className="eyebrow-line" />
            <span className="eyebrow-text-red">Structural Repairs</span>
          </div>
          <h1 style={{
            fontFamily: "'Archivo', sans-serif", fontWeight: 800, fontSize: 52,
            lineHeight: 1.05, letterSpacing: '-0.02em', color: '#fff', maxWidth: 760,
          }}>
            If your foundation is cracking, settling, or shifting — we make it solid again.
          </h1>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.76)', marginTop: 20, maxWidth: 620, lineHeight: 1.55 }}>
            From hairline cracks to full underpinning, Abalon&apos;s crews have stabilized Winnipeg foundations since 1970 — with a written estimate first and a lifetime warranty after.
          </p>
          <Link href="/#contact" className="btn-primary" style={{ display: 'inline-block', marginTop: 30 }}>Get a Free Estimate</Link>
        </div>
      </section>

      {/* Sticky anchor nav */}
      <div style={{ position: 'sticky', top: 76, zIndex: 40, background: '#1C1E22', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', display: 'flex', gap: 26, overflowX: 'auto', height: 54, alignItems: 'center' }}>
          {SERVICES.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="anchor-nav-link">{s.title}</a>
          ))}
        </div>
      </div>

      {/* Service sections */}
      <section style={{ background: '#fff', padding: '96px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', display: 'flex', flexDirection: 'column', gap: 88 }}>
          {SERVICES.map((s) => (
            <div key={s.id} id={s.id} className="service-row" style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 56,
              alignItems: 'center',
            }}>
              {s.imgLeft ? (
                <>
                  <div className="img-placeholder" style={{ height: 300 }}>{s.img}</div>
                  <ServiceContent service={s} />
                </>
              ) : (
                <>
                  <ServiceContent service={s} />
                  <div className="img-placeholder" style={{ height: 300 }}>{s.img}</div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section style={{ background: '#121316', padding: '80px 0' }}>
        <div className="cta-band-inner wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 40, flexWrap: 'wrap' }}>
          <div>
            <h2 style={{
              fontFamily: "'Archivo', sans-serif", fontWeight: 800, fontSize: 34,
              color: '#fff', lineHeight: 1.1, letterSpacing: '-0.01em', maxWidth: 560,
            }}>
              Not sure which repair you need? That&apos;s what the free estimate is for.
            </h2>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.7)', marginTop: 12 }}>
              A detailed, written plan before any work — no pressure, no obligation.
            </p>
          </div>
          <Link href="/#contact" className="btn-primary" style={{ padding: '17px 30px' }}>Get a Free Estimate</Link>
        </div>
      </section>

      <Footer />
      <MobileCTA />
    </>
  )
}

function ServiceContent({ service }) {
  return (
    <div>
      <div style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 800, fontSize: 14, color: '#EF1A30', letterSpacing: '0.04em' }}>
        {service.num}
      </div>
      <h2 style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 32, color: '#1C1E22', marginTop: 8, lineHeight: 1.12 }}>
        {service.title}
      </h2>
      <p style={{ fontSize: 17, color: '#6B7078', marginTop: 14, lineHeight: 1.6 }}>{service.body}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 20 }}>
        {service.bullets.map((b) => (
          <div key={b} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 16, color: '#1C1E22' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EF1A30" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: 3, flexShrink: 0 }}>
              <polyline points="4 12 10 18 20 6" />
            </svg>
            {b}
          </div>
        ))}
      </div>
    </div>
  )
}
