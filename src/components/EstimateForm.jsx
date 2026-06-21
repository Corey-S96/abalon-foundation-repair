import { useState } from 'react'

export default function EstimateForm() {
  const [fields, setFields] = useState({ name: '', phone: '', email: '', problem: '' })
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const set = (k) => (e) => setFields((f) => ({ ...f, [k]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')

    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID
    if (!formspreeId) {
      // Fallback: if Formspree not configured, just show success (dev mode)
      setTimeout(() => setStatus('success'), 500)
      return
    }

    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(fields),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div style={{ textAlign: 'center', padding: '30px 10px' }}>
        <div style={{
          width: 54, height: 54, borderRadius: '50%', background: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto',
        }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1C1E22" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="4 12 10 18 20 6" />
          </svg>
        </div>
        <h3 style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 22, color: '#fff', marginTop: 18 }}>
          Thanks — we&apos;ve got it.
        </h3>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', marginTop: 8, lineHeight: 1.5 }}>
          An Abalon estimator will reach out shortly. Need us sooner?{' '}
          <a href="tel:+12047832500" style={{ color: '#EF1A30' }}>Call (204) 783-2500</a>.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        <input
          className="form-input"
          type="text"
          placeholder="Name"
          value={fields.name}
          onChange={set('name')}
          required
        />
        <input
          className="form-input"
          type="tel"
          placeholder="Phone"
          value={fields.phone}
          onChange={set('phone')}
          required
        />
      </div>
      <input
        className="form-input"
        type="email"
        placeholder="Email"
        value={fields.email}
        onChange={set('email')}
        required
      />
      <textarea
        className="form-textarea"
        placeholder="Briefly describe the problem (e.g. crack in foundation, water in basement)"
        rows={3}
        value={fields.problem}
        onChange={set('problem')}
        required
      />
      <button
        type="submit"
        className="btn-full"
        disabled={status === 'submitting'}
        style={{ opacity: status === 'submitting' ? 0.7 : 1 }}
      >
        {status === 'submitting' ? 'Sending…' : 'Send my free estimate request'}
      </button>
      {status === 'error' && (
        <p style={{ fontSize: 13, color: '#EF1A30', textAlign: 'center' }}>
          Something went wrong — please call us at (204) 783-2500.
        </p>
      )}
      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', textAlign: 'center' }}>
        No pressure, no obligation. We&apos;ll never share your details.
      </p>
    </form>
  )
}
