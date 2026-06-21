import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import EstimateForm from '../components/EstimateForm'
import MobileCTA from '../components/MobileCTA'

export default function Home() {
  return (
    <>
      <Head>
        <title>Abalon Foundation Repair — Winnipeg's Trusted Foundation Experts Since 1970</title>
        <meta name="description" content="Western Canada's oldest and largest foundation repair company. Free no-obligation estimates, fully warrantied structural repairs and waterproofing in Winnipeg since 1970." />
        <meta property="og:title" content="Abalon Foundation Repair — Winnipeg Since 1970" />
        <meta property="og:description" content="Cracked foundation? Wet basement? Call Winnipeg's most trusted foundation repair experts. Free estimates, lifetime warranty." />
        <meta property="og:type" content="website" />
      </Head>

      <Header />

      {/* ── 1 · HERO ────────────────────────────────────────── */}
      <section style={{ position: 'relative', background: '#121316', overflow: 'hidden' }}>
        {/* Video background — drop your file into /public/videos/ and name it hero-bg.mp4 */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src="/videos/video-bg.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay so text stays readable over the video */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg,rgba(18,19,22,0.88) 0%,rgba(18,19,22,0.75) 50%,rgba(18,19,22,0.45) 100%)' }} />

        <div className="hero-inner wrap" style={{ position: 'relative', paddingTop: 96, paddingBottom: 0 }}>
          <div style={{ maxWidth: 680 }}>
            <h1 className="hero-h1" style={{
              fontFamily: "'Archivo', sans-serif", fontWeight: 800, fontSize: 56,
              lineHeight: 1.05, letterSpacing: '-0.02em', color: '#fff',
            }}>
              Western Canada&apos;s oldest and largest foundation repair company.
            </h1>
            <p className="hero-sub" style={{
              fontSize: 18, lineHeight: 1.55, color: 'rgba(255,255,255,0.78)',
              marginTop: 22, maxWidth: 560,
            }}>
              Five decades fixing Winnipeg foundations the right way — the first time. Free, no-obligation estimates, fully warrantied work.
            </p>
            <div style={{ display: 'flex', gap: 14, marginTop: 32, flexWrap: 'wrap' }}>
              <a href="#contact" className="btn-primary">Get a Free Estimate</a>
              <a href="tel:+12047832500" className="btn-secondary">Call (204) 783-2500</a>
            </div>
          </div>

          {/* Trust badges */}
          <div className="badges grid-4" style={{ marginTop: 64, paddingBottom: 0, transform: 'translateY(40px)' }}>
            {[
              { stat: '1970', label: 'Serving Winnipeg since' },
              { stat: 'A+',   label: 'BBB accredited rating' },
              { stat: '4×',   label: 'BBB Torch Award winner' },
              { stat: 'Lifetime', label: 'Warranty on repairs' },
            ].map(({ stat, label }) => (
              <div key={stat} className="badge" style={{
                background: '#1C1E22', border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 8, padding: '22px 24px', boxShadow: '0 6px 20px rgba(0,0,0,0.25)',
              }}>
                <div style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 800, fontSize: 30, color: '#fff', lineHeight: 1 }}>{stat}</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', marginTop: 6 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ height: 52 }} />
      </section>

      {/* ── 2 · SERVICES ─────────────────────────────────────── */}
      <section className="section" style={{ background: '#fff', paddingTop: 144 }}>
        <div className="wrap">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            <span className="eyebrow-text">What we do</span>
          </div>
          <h2 className="sec-h2" style={{ maxWidth: 640 }}>
            Two things, done right — structural repairs and waterproofing.
          </h2>
          <div className="grid-2" style={{ marginTop: 48 }}>
            <Link href="/structural-repairs" className="card" style={{ display: 'block', overflow: 'hidden' }}>
              <div className="img-placeholder" style={{ height: 200, borderRadius: 0, border: 'none', borderBottom: '1px solid #E2E4E7' }}>
                {/* Replace with: <Image src="/images/structural-repairs.jpg" alt="Foundation crack repair" fill style={{objectFit:'cover'}} /> */}
                <span style={{ fontSize: 11, color: '#9BA3AB' }}>[ photo: foundation crack repair ]</span>
              </div>
              <div style={{ padding: '30px 32px 34px' }}>
                <h3 style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 24, color: '#1C1E22' }}>
                  Structural Repairs
                </h3>
                <p style={{ fontSize: 16, color: '#6B7078', marginTop: 10, lineHeight: 1.55 }}>
                  Cracks, underpinning, house levelling, telepost adjustments, epoxy injections, and inspections.
                </p>
                <span className="text-link" style={{ marginTop: 18 }}>View structural repairs <span style={{ fontSize: 17 }}>→</span></span>
              </div>
            </Link>

            <Link href="/waterproofing" className="card" style={{ display: 'block', overflow: 'hidden' }}>
              <div className="img-placeholder" style={{ height: 200, borderRadius: 0, border: 'none', borderBottom: '1px solid #E2E4E7' }}>
                {/* Replace with: <Image src="/images/waterproofing.jpg" alt="Dry finished basement" fill style={{objectFit:'cover'}} /> */}
                <span style={{ fontSize: 11, color: '#9BA3AB' }}>[ photo: dry finished basement ]</span>
              </div>
              <div style={{ padding: '30px 32px 34px' }}>
                <h3 style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 24, color: '#1C1E22' }}>
                  Waterproofing
                </h3>
                <p style={{ fontSize: 16, color: '#6B7078', marginTop: 10, lineHeight: 1.55 }}>
                  Basement waterproofing, weeping tile, sump pits &amp; pumps, back-up valves, window wells, and seepage solutions.
                </p>
                <span className="text-link" style={{ marginTop: 18 }}>View waterproofing <span style={{ fontSize: 17 }}>→</span></span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 3 · WHY ABALON ───────────────────────────────────── */}
      <section id="why" className="section-surface">
        <div className="wrap">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            <span className="eyebrow-text">Why Abalon</span>
          </div>
          <h2 className="sec-h2" style={{ maxWidth: 560 }}>
            No pressure. Fully warrantied. Done right the first time.
          </h2>

          <div className="grid-3" style={{ marginTop: 48 }}>
            {[
              { title: 'No-pressure estimates',   body: 'A detailed, written estimate before any work. No pressure, no obligation.' },
              { title: 'Fully warrantied',         body: 'Two industry-best guarantees and a lifetime warranty you can count on.' },
              { title: 'Done right the first time', body: 'Best-equipped crews in Winnipeg, built on founder Leo Mulligan\'s rule.' },
            ].map(({ title, body }) => (
              <div key={title} style={{ background: '#fff', border: '1px solid #E2E4E7', borderRadius: 8, padding: '32px 30px' }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 8, background: '#1C1E22',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18,
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EF1A30" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="4 12 10 18 20 6" />
                  </svg>
                </div>
                <h3 style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 21, color: '#1C1E22' }}>{title}</h3>
                <p style={{ fontSize: 16, color: '#6B7078', marginTop: 8, lineHeight: 1.55 }}>{body}</p>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: 40, display: 'flex', gap: 18, alignItems: 'flex-start',
            background: '#1C1E22', borderRadius: 8, padding: '30px 34px',
          }}>
            <span style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 800, fontSize: 46, color: '#EF1A30', lineHeight: 0.7 }}>&ldquo;</span>
            <p style={{ fontSize: 18, color: '#fff', lineHeight: 1.5, fontWeight: 500 }}>
              Look after your customers.
              <span style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 400 }}>
                {' '}— the rule founder Leo Mulligan built Abalon on in 1970, and the one every crew still works by today.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ── 4 · BEFORE / AFTER ───────────────────────────────── */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="wrap">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            <span className="eyebrow-text">The proof</span>
          </div>
          <h2 className="sec-h2">Before &amp; after, on real Winnipeg homes.</h2>

          <div className="grid-3" style={{ marginTop: 48 }}>
            {[
              'Cracked foundation wall → sealed & reinforced',
              'Wet, leaking basement → dry & finished',
              'Bowing wall → underpinned & levelled',
            ].map((caption, i) => (
              <div key={i}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, borderRadius: 8, overflow: 'hidden', border: '1px solid #E2E4E7' }}>
                  <div className="img-placeholder" style={{ height: 170, borderRadius: 0, border: 'none', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'flex-end', padding: 10 }}>
                    <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', background: '#1C1E22', color: '#fff', padding: '4px 8px', borderRadius: 4 }}>BEFORE</span>
                  </div>
                  <div className="img-placeholder" style={{ height: 170, borderRadius: 0, border: 'none', background: 'repeating-linear-gradient(135deg,#dfe2e6 0 1px,#eef0f2 1px 12px)', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'flex-end', padding: 10 }}>
                    <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', background: '#EF1A30', color: '#fff', padding: '4px 8px', borderRadius: 4 }}>AFTER</span>
                  </div>
                </div>
                <p style={{ fontSize: 15, color: '#6B7078', marginTop: 12 }}>{caption}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 36 }}>
            <a href="#contact" className="text-link">See more projects &amp; reviews <span style={{ fontSize: 17 }}>→</span></a>
          </div>
        </div>
      </section>

      {/* ── 5 · HOW IT WORKS ─────────────────────────────────── */}
      <section className="section-surface">
        <div className="wrap">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            <span className="eyebrow-text">How it works</span>
          </div>
          <h2 className="sec-h2">Three steps, no surprises.</h2>

          <div className="grid-3" style={{ marginTop: 48 }}>
            {[
              { num: '01', title: 'Book a free estimate',       body: 'Online or by phone — whenever it suits you.' },
              { num: '02', title: 'Get an honest, written plan', body: 'A clear scope and price. No pressure, no obligation.' },
              { num: '03', title: 'We do the warrantied repair', body: 'Done right the first time, backed for life.' },
            ].map(({ num, title, body }) => (
              <div key={num} style={{ background: '#fff', border: '1px solid #E2E4E7', borderRadius: 8, padding: '32px 30px' }}>
                <div style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 800, fontSize: 40, color: '#EF1A30', lineHeight: 1 }}>{num}</div>
                <h3 style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 21, color: '#1C1E22', marginTop: 14 }}>{title}</h3>
                <p style={{ fontSize: 16, color: '#6B7078', marginTop: 8, lineHeight: 1.55 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6 · REVIEWS ──────────────────────────────────────── */}
      <section id="reviews" className="section" style={{ background: '#fff' }}>
        <div className="wrap">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            <span className="eyebrow-text">Reviews</span>
          </div>
          <h2 className="sec-h2">Winnipeg homeowners, in their words.</h2>

          <div className="grid-reviews" style={{ marginTop: 48 }}>
            {/* Featured review */}
            <div style={{ background: '#1C1E22', borderRadius: 8, padding: '34px 34px' }}>
              <div style={{ color: '#EF1A30', fontSize: 18, letterSpacing: 2 }}>★★★★★</div>
              <p style={{ fontSize: 21, color: '#fff', lineHeight: 1.45, marginTop: 16, fontWeight: 500 }}>
                &ldquo;Best company in Winnipeg to fix your foundation and water-in-basement issues. Hardest working crew — we are thrilled!&rdquo;
              </p>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', marginTop: 18, fontWeight: 600 }}>Anna Parks</p>
            </div>

            <div style={{ background: '#fff', border: '1px solid #E2E4E7', borderRadius: 8, padding: '30px 30px' }}>
              <div style={{ color: '#EF1A30', fontSize: 16, letterSpacing: 2 }}>★★★★★</div>
              <p style={{ fontSize: 16, color: '#1C1E22', lineHeight: 1.5, marginTop: 14 }}>
                Honest estimate, fair price, and they stood behind the warranty. Wouldn&apos;t call anyone else.
              </p>
              <p style={{ fontSize: 14, color: '#6B7078', marginTop: 16, fontWeight: 600 }}>Verified Google review</p>
            </div>

            <div style={{ background: '#fff', border: '1px solid #E2E4E7', borderRadius: 8, padding: '30px 30px' }}>
              <div style={{ color: '#EF1A30', fontSize: 16, letterSpacing: 2 }}>★★★★★</div>
              <p style={{ fontSize: 16, color: '#1C1E22', lineHeight: 1.5, marginTop: 14 }}>
                Dry basement for the first time in 20 years. Professional from the estimate to clean-up.
              </p>
              <p style={{ fontSize: 14, color: '#6B7078', marginTop: 16, fontWeight: 600 }}>Verified BBB review</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7 · LEAD-CAPTURE BAND ────────────────────────────── */}
      <section id="contact" style={{ background: '#121316', padding: '96px 0' }}>
        <div className="grid-contact wrap">
          <div>
            <div className="eyebrow" style={{ marginBottom: 18 }}>
              <span className="eyebrow-line" />
              <span className="eyebrow-text-red">Free estimate</span>
            </div>
            <h2 className="contact-h2" style={{
              fontFamily: "'Archivo', sans-serif", fontWeight: 800, fontSize: 42,
              lineHeight: 1.08, letterSpacing: '-0.02em', color: '#fff',
            }}>
              Get your free, no-obligation estimate today.
            </h2>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.72)', marginTop: 18, lineHeight: 1.55, maxWidth: 440 }}>
              Tell us what&apos;s going on and we&apos;ll get back to you fast — usually the same day.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 30 }}>
              <a href="tel:+12047832500" style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.5)' }}>OR CALL</span>
                <span style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 24, color: '#fff' }}>(204) 783-2500</span>
              </a>
            </div>
          </div>

          <div style={{ background: '#1C1E22', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, padding: '34px 34px' }}>
            <EstimateForm />
          </div>
        </div>
      </section>

      {/* ── 8 · SERVICE AREA ─────────────────────────────────── */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="grid-area wrap">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" />
              <span className="eyebrow-text">Service area</span>
            </div>
            <h2 className="sec-h2">Proudly serving Winnipeg &amp; surrounding Manitoba.</h2>
            <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 14, fontSize: 16, color: '#1C1E22' }}>
              <div><span style={{ fontWeight: 700 }}>Address</span> · 965 Pacific Ave, Winnipeg, MB R3E 1G3</div>
              <div><span style={{ fontWeight: 700 }}>Phone</span> · <a href="tel:+12047832500" style={{ color: '#1C1E22' }}>(204) 783-2500</a></div>
              <div><span style={{ fontWeight: 700 }}>Email</span> · <a href="mailto:info@abalonwpg.ca" style={{ color: '#1C1E22' }}>info@abalonwpg.ca</a></div>
              <div><span style={{ fontWeight: 700 }}>Hours</span> · Mon–Fri 8:00am – 4:30pm</div>
            </div>
            <a href="#contact" className="btn-primary-dark" style={{ marginTop: 28, display: 'inline-block' }}>Get a Free Estimate</a>
          </div>

          {/* Google Maps embed */}
          <div className="map-placeholder" style={{ height: 360, borderRadius: 8, border: '1px solid #E2E4E7', overflow: 'hidden' }}>
            <iframe
              title="Abalon Foundation Repair location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2571.3942037!2d-97.16817!3d49.89248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ea75a6e3a8d0cf%3A0x9f4c6b7e4b3e7a1!2s965%20Pacific%20Ave%2C%20Winnipeg%2C%20MB%20R3E%201G3!5e0!3m2!1sen!2sca!4v1718000000000"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <Footer />
      <MobileCTA />
    </>
  )
}
