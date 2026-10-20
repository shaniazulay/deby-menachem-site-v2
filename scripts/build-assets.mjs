// One-off: converts the raw Figma exports (design-src/raw) into optimized web assets.
import sharp from 'sharp';
import fs from 'node:fs';
const R = 'design-src/raw/', O = 'assets/img/';
const jobs = [
  ['d-imgHero-1e9ab.png', 'hero.webp', 1382, 80],
  ['d-imgAboutImage-7711b.png', 'about.webp', null, 90],
  ['d-imgAboutRoundImage-ede04.png', 'about-round.webp', null, 85],
  ['d-imgTile-bff79.png', 'tile-reflexology.webp', null, 82],
  ['d-imgTile1-e04dd.png', 'tile-combined.webp', 800, 80],
  ['d-imgTile2-807a3.png', 'tile-stones.webp', 1500, 80],
  ['d-imgTile3-65ef3.png', 'tile-cupping.webp', 1600, 80],
  ['d-imgPhilosophy-17a0b.png', 'philosophy.webp', 1800, 78],
  ['d-imgForWhomImage-6a4aa.png', 'for-whom.webp', 840, 80],
  ['d-imgGiftImage-7aa64.png', 'gift.webp', 1120, 82],
  ['d-imgLogo-086e4.png', 'logo.webp', 600, 90],
];
for (const [src, out, w, q] of jobs) {
  let img = sharp(R + src);
  if (w) img = img.resize({ width: w, withoutEnlargement: true });
  await img.webp({ quality: q, alphaQuality: 100 }).toFile(O + out);
  console.log(out, fs.statSync(O + out).size);
}
fs.copyFileSync(R + 'd-imgOrnamentRing-7f63f.png', O + 'ring.png');
fs.copyFileSync(R + 'd-imgColor-31138.png', O + 'logo-mask.png');
