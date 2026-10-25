import { chromium } from 'playwright';
import { readFileSync } from 'fs';
const svg = readFileSync('assets/favicon.svg', 'utf8').replace('<svg', '<svg style="width:120px;height:120px"');
const b = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe' });
const p = await b.newPage({ viewport: { width: 180, height: 180 } });
await p.setContent('<body style="margin:0;background:#f3eee8;display:grid;place-items:center;height:180px">' + svg + '</body>');
await p.screenshot({ path: 'assets/apple-touch-icon.png' });
await b.close();
