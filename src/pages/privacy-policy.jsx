import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy — Abalon Foundation Repair</title>
        <meta name="description" content="Privacy Policy for Abalon Foundation Repair, Winnipeg, Manitoba." />
      </Head>

      <Header />

      <main style={{ maxWidth: 860, margin: '0 auto', padding: '64px 32px 96px' }}>
        <h1 className="legal-h1">Privacy Policy</h1>
        <p style={{ fontSize: 15, color: '#888', marginBottom: 40 }}>Last updated: June 2026</p>

        <div className="legal-section">
          <h2>1. Introduction</h2>
          <p>
            Abalon Construction (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our,&rdquo; or &ldquo;Company&rdquo;) is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our
            website and use our services.
          </p>
        </div>

        <div className="legal-section">
          <h2>2. Information We Collect</h2>
          <p>
            <strong>Personal Information:</strong> When you contact us or submit a form, we may collect your name,
            email address, phone number, and project details.
          </p>
          <p>
            <strong>Website Usage Data:</strong> We may collect information about how you interact with our website,
            including pages visited, time spent, and referral sources.
          </p>
        </div>

        <div className="legal-section">
          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your inquiries and provide customer service</li>
            <li>Process requests for quotes and project estimates</li>
            <li>Improve our website and services</li>
            <li>Send promotional communications (with your consent)</li>
            <li>Comply with legal obligations</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>4. Data Protection</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information against
            unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the
            internet is 100% secure.
          </p>
        </div>

        <div className="legal-section">
          <h2>5. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the privacy practices of
            these external sites. We encourage you to review their privacy policies before providing any information.
          </p>
        </div>

        <div className="legal-section">
          <h2>6. Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal information. To exercise these rights,
            please contact us at <a href="mailto:info@abalonwpg.ca" style={{ color: '#C81428' }}>info@abalonwpg.ca</a>.
          </p>
        </div>

        <div className="legal-section">
          <h2>7. Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us:</p>
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
