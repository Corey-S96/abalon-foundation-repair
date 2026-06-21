import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>Terms &amp; Conditions — Abalon Foundation Repair</title>
        <meta name="description" content="Terms and Conditions for Abalon Foundation Repair, Winnipeg, Manitoba." />
      </Head>

      <Header />

      <main style={{ maxWidth: 860, margin: '0 auto', padding: '64px 32px 96px' }}>
        <h1 className="legal-h1">Terms and Conditions</h1>
        <p style={{ fontSize: 15, color: '#888', marginBottom: 40 }}>Last updated: June 2026</p>

        <div className="legal-section">
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing and using the Abalon Foundation Repair website, you accept and agree to be bound by the terms
            and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
          </p>
        </div>

        <div className="legal-section">
          <h2>2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) on
            Abalon Foundation Repair&apos;s website for personal, non-commercial transitory viewing only. Under this
            license you may not:
          </p>
          <ul>
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose or for any public display</li>
            <li>Attempt to decompile or reverse engineer any software contained on the website</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
            <li>Transfer the materials to another person or &ldquo;mirror&rdquo; the materials on any other server</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>3. Disclaimer</h2>
          <p>
            The materials on Abalon Foundation Repair&apos;s website are provided &ldquo;as is&rdquo;. Abalon makes no warranties,
            expressed or implied, and hereby disclaims and negates all other warranties including, without limitation,
            implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement
            of intellectual property or other violation of rights.
          </p>
        </div>

        <div className="legal-section">
          <h2>4. Limitations</h2>
          <p>
            In no event shall Abalon Foundation Repair or its suppliers be liable for any damages (including, without
            limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or
            inability to use the materials on Abalon Foundation Repair&apos;s website.
          </p>
        </div>

        <div className="legal-section">
          <h2>5. Accuracy of Materials</h2>
          <p>
            The materials appearing on Abalon Foundation Repair&apos;s website could include technical, typographical, or
            photographic errors. Abalon does not warrant that any of the materials on its website are accurate,
            complete, or current. Abalon may make changes to the materials at any time without notice.
          </p>
        </div>

        <div className="legal-section">
          <h2>6. Links</h2>
          <p>
            Abalon Foundation Repair has not reviewed all of the sites linked to its website and is not responsible for
            the contents of any such linked site. Use of any such linked website is at the user&apos;s own risk.
          </p>
        </div>

        <div className="legal-section">
          <h2>7. Modifications</h2>
          <p>
            Abalon Foundation Repair may revise these terms of service for its website at any time without notice. By
            using this website, you are agreeing to be bound by the then current version of these terms of service.
          </p>
        </div>

        <div className="legal-section">
          <h2>8. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of Manitoba, Canada,
            and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </p>
        </div>

        <div className="legal-section">
          <h2>9. Contact Us</h2>
          <p>If you have questions about these Terms and Conditions, please contact us:</p>
          <p><strong>Abalon Foundation Repairs</strong></p>
          <p>965 Pacific Ave, Winnipeg, MB R3E 1G3</p>
          <p>Tel: <a href="tel:+12047832500" style={{ color: '#C81428' }}>(204) 783-2500</a></p>
          <p>Email: <a href="mailto:info@abalonwpg.ca" style={{ color: '#C81428' }}>info@abalonwpg.ca</a></p>
        </div>

        <div style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid #E2E4E7' }}>
          <Link href="/" style={{ color: '#C81428', fontWeight: 600 }}>← Back to home</Link>
        </div>
      </main>

      <Footer />
    </>
  )
}
