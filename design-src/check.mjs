import { chromium } from 'playwright';
const base = process.argv[2] || 'http://localhost:3011/';
const b = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe' });
for (const w of [1366, 390]) {
  const p = await b.newPage({ viewport: { width: w, height: w > 1000 ? 768 : 844 } });
  const errs = [];
  p.on('console', m => m.type() === 'error' && errs.push(m.text()));
  p.on('pageerror', e => errs.push(e.message));
  await p.goto(base, { waitUntil: 'networkidle' });
  await p.waitForTimeout(6000);
  await p.mouse.wheel(0, 3000); await p.waitForTimeout(1500);
  const r = await p.evaluate(() => ({ gsap: !!window.gsap, anim: document.documentElement.classList.contains('anim'), sprigs: document.querySelectorAll('.sprig-live').length,
    canon: document.querySelector('link[rel=canonical]')?.href, ld: JSON.parse(document.querySelector('script[type="application/ld+json"]').textContent)['@graph'].length,
    loader: !!document.querySelector('.preloader') && getComputedStyle(document.querySelector('.preloader')).display }));
  console.log(w, JSON.stringify(r), errs.length ? errs : 'no errors');
  await p.screenshot({ path: `design-src/check-${w}.png` });
}
await b.close();
