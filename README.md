# Abalon Foundation Repair — Website

Next.js static site, ready for Vercel deployment.

## Local development

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Deploy to Vercel

1. Push this repo to GitHub (or GitLab / Bitbucket)
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import the repo
3. Vercel auto-detects Next.js — no extra config needed
4. Click **Deploy**

## Contact form setup (required before launch)

The estimate form uses [Formspree](https://formspree.io) (free tier = 50 submissions/month):

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form → copy the **Form ID** (looks like `xabcdefg`)
3. In Vercel dashboard → your project → **Settings → Environment Variables**
4. Add: `NEXT_PUBLIC_FORMSPREE_ID` = `your_form_id`
5. Redeploy

## Adding real photos (required before launch)

All image placeholders are `<div>` elements with a CSS hatching pattern. To replace them:

1. Add photos to `/public/images/` (jpg or webp recommended)
2. In each page, swap the `<div className="img-placeholder">` for a real image:

```jsx
// In src/pages/index.jsx — services section, around line 78:
// REPLACE:
<div className="img-placeholder" style={{ height: 200, ... }}>
  [ photo: foundation crack repair ]
</div>

// WITH:
<img
  src="/images/structural-repairs.jpg"
  alt="Foundation crack repair"
  style={{ width: '100%', height: 200, objectFit: 'cover' }}
/>
```

Placeholder labels in the code tell you exactly what photo goes where.

## Pages

| Route | File |
|---|---|
| `/` | `src/pages/index.jsx` |
| `/structural-repairs` | `src/pages/structural-repairs.jsx` |
| `/waterproofing` | `src/pages/waterproofing.jsx` |
| `/privacy-policy` | `src/pages/privacy-policy.jsx` |
| `/terms-and-conditions` | `src/pages/terms-and-conditions.jsx` |

## Shared components

| Component | File | Used on |
|---|---|---|
| Header | `src/components/Header.jsx` | All pages |
| Footer | `src/components/Footer.jsx` | All pages |
| EstimateForm | `src/components/EstimateForm.jsx` | Homepage |
| MobileCTA | `src/components/MobileCTA.jsx` | All pages |

## Design tokens (colors)

| Token | Value | Use |
|---|---|---|
| `--ink` | `#1C1E22` | Text, nav, dark sections |
| `--red` | `#EF1A30` | Primary buttons, accents |
| `--red-deep` | `#C81428` | Hover states |
| `--surface` | `#F4F5F6` | Light section backgrounds |
| `--border` | `#E2E4E7` | Card borders, dividers |
| `--text-muted` | `#6B7078` | Secondary text |

Defined in `src/styles/globals.css` as CSS custom properties.

## Before launch checklist

- [ ] Add real before/after photos (highest-conversion upgrade)
- [ ] Add hero background photo
- [ ] Set up Formspree and add env var
- [ ] Verify Google Maps iframe shows correct address
- [ ] Update copyright year if needed
- [ ] Test on iPhone (mobile sticky CTA bar, form, navigation)
- [ ] Set up Google Analytics (GA4)
- [ ] Verify domain / DNS cutover from old abalonwpg.ca
