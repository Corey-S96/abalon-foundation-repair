import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

const SERVICES = [
  {
    id: 'basement',
    num: '01',
    title: 'Basement waterproofing',
    body: 'Whether the water comes through the walls, the floor joint, or below grade, we build a complete system to keep your basement dry — interior, exterior, or both.',
    bullets: ['Interior & exterior systems', 'Diagnose the real source, not the symptom'],
    img: '[ photo: waterproofed basement wall ]',
  },
  {
    id: 'weeping',
    num: '02',
    title: 'Weeping tile',
    body: 'Clogged or failed weeping tile is behind most chronically wet basements. We replace and upgrade the drainage that carries groundwater away from your foundation.',
    bullets: ['Replacement & upgrades', 'Carries groundwater away from the footing'],
    img: '[ photo: weeping tile install ]',
    imgLeft: true,
  },
  {
    id: 'sump',
    num: '03',
    title: 'Sump pits & pumps',
    body: 'A properly sized sump pit and reliable pump are your basement\'s last line of defence. We install, replace, and add battery back-ups so it keeps working in a storm.',
    bullets: ['Install & replacement', 'Battery back-up options'],
    img: '[ photo: sump pump system ]',
  },
  {
    id: 'backup',
    num: '04',
    title: 'Back-up valves',
    body: 'A backwater valve stops city sewer back-ups from flooding your basement — and may qualify you for a municipal subsidy. We size and install them to code.',
    bullets: ['Stops sewer back-up flooding', 'May qualify for a city subsidy'],
    img: '[ photo: back-up valve install ]',
    imgLeft: true,
  },
  {
    id: 'windowwells',
    num: '05',
    title: 'Window wells',
    body: 'Poorly drained window wells funnel water straight to your foundation. We rebuild them with proper drainage and covers so basement windows stay dry.',
    bullets: ['Rebuild with proper drainage', 'Covers to keep wells clear'],
    img: '[ photo: window well ]',
  },
  {
    id: 'chimney',
    num: '06',
    title: 'Chimney leaks',
    body: 'Water tracking down a chimney chase often ends up in the basement. We trace and seal the leak at its source — from flashing to footing.',
    bullets: ['Trace the leak to its source', 'Seal from flashing to footing'],
    img: '[ photo: chimney base / flashing ]',
    imgLeft: true,
  },
  {
    id: 'seepage',
    num: '07',
    title: 'Seepage solutions',
    body: 'Damp spots, efflorescence, and slow seepage are early warnings. We pinpoint where water is getting in and stop it before it becomes a flooded basement.',
    bullets: ['Pinpoint the entry point', 'Stop it before it becomes a flood'],
    img: '[ photo: damp wall / seepage ]',
  },
]

export default function Waterproofing() {
  return (
    <>
      <Head>
        <title>Waterproofing — Abalon Foundation Repair Winnipeg</title>
        <meta name="description" content="Basement waterproofing, weeping tile, sump pits & pumps, back-up valves, window wells, and seepage solutions in Winnipeg. Free estimates, lifetime warranty." />
      </Head>

      <Header />

      {/* Page Hero */}
      <section style={{ position: 'relative', background: '#121316', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(125deg,#1C1E22 0 1px,#15171b 1px 13px)' }} />
        <div className="page-hero-inner wrap" style={{ position: 'relative' }}>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', fontWeight: 500, marginBottom: 20 }}>
            <Link href="/" style={{ transition: 'color 150ms' }}>Home</Link>
            &nbsp;/&nbsp; Waterproofing
          </div>
          <div className="eyebrow" style={{ marginBottom: 18 }}>
            <span className="eyebrow-line" />
            <span className="eyebrow-text-red">Waterproofing</span>
          </div>
          <h1 className="page-hero-h1" style={{
            fontFamily: "'Archivo', sans-serif", fontWeight: 800, fontSize: 52,
            lineHeight: 1.05, letterSpacing: '-0.02em', color: '#fff', maxWidth: 760,
          }}>
            Water in your basement? We find the source and keep it dry — for good.
          </h1>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.76)', marginTop: 20, maxWidth: 620, lineHeight: 1.55 }}>
            Seepage, weeping tile, sump systems, back-up valves and more. Abalon waterproofs Winnipeg basements with a written estimate first and a lifetime warranty after.
          </p>
          <Link href="/#contact" className="btn-primary" style={{ display: 'inline-block', marginTop: 30 }}>Get a Free Estimate</Link>
        </div>
      </section>

      {/* Sticky anchor nav */}
      <div className="sticky-anchor-nav">
        <div className="sticky-anchor-nav-inner wrap">
          {SERVICES.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="anchor-nav-link">{s.title}</a>
          ))}
        </div>
      </div>

      {/* Service sections */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="service-list wrap">
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
      <section className="section-cta">
        <div className="cta-band-inner wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 40, flexWrap: 'wrap' }}>
          <div>
            <h2 style={{
              fontFamily: "'Archivo', sans-serif", fontWeight: 800, fontSize: 34,
              color: '#fff', lineHeight: 1.1, letterSpacing: '-0.01em', maxWidth: 560,
            }}>
              Water where it shouldn&apos;t be? Book a free estimate today.
            </h2>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.7)', marginTop: 12 }}>
              A detailed, written plan before any work — no pressure, no obligation.
            </p>
          </div>
          <Link href="/#contact" className="btn-primary" style={{ padding: '17px 30px' }}>Get a Free Estimate</Link>
        </div>
      </section>

      <Footer />
    </>
  )
}

function ServiceContent({ service }) {
  return (
    <div>
      <div style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 800, fontSize: 14, color: '#EF1A30', letterSpacing: '0.04em' }}>
        {service.num}
      </div>
      <h2 className="service-h2">
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
