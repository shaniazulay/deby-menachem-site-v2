// Re-runnable SEO + security pass over index.html (recomputes the CSP hash of the inline head script).
import { readFileSync, writeFileSync } from 'fs';
import { createHash } from 'crypto';
const URL = 'https://shaniazulay.github.io/deby-menachem-site-v2/';
let h = readFileSync('index.html', 'utf8');
const nl = h.includes('\r\n') ? '\r\n' : '\n';
h = h.replace(/\s*<!-- seo:start -->[\s\S]*?<!-- seo:end -->/, '');
h = h.replace(/\s*<meta http-equiv="Content-Security-Policy"[^>]*>/, '');
h = h.replace(/\s*<meta property="og:image" content="[^"]*">/, '');

// alt text for content photos
const alts = {
  'img/hero.webp" alt="" width="1382" height="794" fetchpriority': 'חדר טיפולים רגוע לאור נרות',
  'img/about-round.webp" alt=""': 'דבורה מנחם, מטפלת ברפלקסולוגיה ועיסוי',
  'img/tile-reflexology.webp" alt=""': 'טיפול רפלקסולוגיה בכפות הרגליים',
  'img/tile-combined.webp" alt=""': 'עיסוי משולב לגוף',
  'img/tile-stones.webp" alt=""': 'עיסוי באבנים חמות',
  'img/tile-cupping.webp" alt=""': 'עיסוי בכוסות רוח',
  'img/philosophy.webp" alt=""': 'אווירת טיפול שלווה עם מגבות ונרות',
};
for (const [k, alt] of Object.entries(alts)) h = h.replace(k, k.replace('alt=""', `alt="${alt}"`));

// external links: no referrer leakage
h = h.replace(/target="_blank" rel="noopener"/g, 'target="_blank" rel="noopener noreferrer"');
// form limits
h = h.replace('id="cf-name" name="name" type="text"', 'id="cf-name" name="name" type="text" maxlength="60"');
h = h.replace('id="cf-phone" name="phone" type="tel"', 'id="cf-phone" name="phone" type="tel" maxlength="20" pattern="[0-9+\-\s()]{9,20}"');
h = h.replace('id="cf-email" name="email" type="email"', 'id="cf-email" name="email" type="email" maxlength="100"');

// FAQ → schema
const faq = [...h.matchAll(/id="faq-q\d+">([^<]+)<span[\s\S]*?<p class="w">([^<]+)<\/p>/g)]
  .map(m => ({ '@type': 'Question', name: m[1].trim(), acceptedAnswer: { '@type': 'Answer', text: m[2].trim() } }));
const ld = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': ['HealthAndBeautyBusiness', 'LocalBusiness'], '@id': URL + '#business', name: 'דבורה (דבי) מנחם – רפלקסולוגיה ועיסוי משולב',
      url: URL, image: URL + 'assets/img/og-image.jpg', logo: URL + 'assets/img/logo.webp', telephone: '+972584502900', email: 'deby2900@gmail.com',
      address: { '@type': 'PostalAddress', streetAddress: 'הרב בוסקילה 10', addressLocality: 'מגדל העמק', addressCountry: 'IL' },
      areaServed: 'מגדל העמק והסביבה', priceRange: '₪₪',
      makesOffer: ['רפלקסולוגיה', 'עיסוי משולב', 'עיסוי באבנים חמות', 'עיסוי בכוסות רוח'].map(n => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: n } })) },
    { '@type': 'WebSite', '@id': URL + '#website', url: URL, name: 'דבורה מנחם', inLanguage: 'he-IL', publisher: { '@id': URL + '#business' } },
    { '@type': 'FAQPage', mainEntity: faq },
  ],
};
const head = [
  '<!-- seo:start -->',
  `<link rel="canonical" href="${URL}">`,
  '<meta name="robots" content="index, follow, max-image-preview:large">',
  `<meta property="og:url" content="${URL}">`,
  '<meta property="og:site_name" content="דבורה מנחם">',
  `<meta property="og:image" content="${URL}assets/img/og-image.jpg">`,
  '<meta property="og:image:width" content="1200">',
  '<meta property="og:image:height" content="630">',
  '<meta property="og:image:alt" content="דבורה מנחם – רפלקסולוגיה ועיסוי משולב לנשים, מגדל העמק">',
  '<meta name="twitter:card" content="summary_large_image">',
  '<meta name="twitter:title" content="דבורה מנחם – טיפולי גוף ונפש לנשים">',
  '<meta name="twitter:description" content="רפלקסולוגיה ועיסוי משולב לנשים בלבד, מגדל העמק.">',
  `<meta name="twitter:image" content="${URL}assets/img/og-image.jpg">`,
  '<link rel="apple-touch-icon" href="assets/apple-touch-icon.png">',
  '<script type="application/ld+json">' + JSON.stringify(ld) + '</script>',
  '<!-- seo:end -->',
].map(l => '  ' + l).join(nl);
h = h.replace(/(<link rel="icon"[^>]*>)/, '$1' + nl + head);

// CSP: hash every inline executable script (the head scaler)
const hashes = [...h.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => `'sha256-${createHash('sha256').update(m[1].replace(/\r\n?/g, '\n')).digest('base64')}'`);
const csp = `default-src 'self'; script-src 'self' ${hashes.join(' ')}; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests`;
h = h.replace(/(<meta charset="utf-8">)/, `$1${nl}  <meta http-equiv="Content-Security-Policy" content="${csp}">`);
writeFileSync('index.html', h);
console.log({ faq: faq.length, hashes: hashes.length, alts: Object.values(alts).filter(a => h.includes(`alt="${a}"`)).length });
