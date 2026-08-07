const BASE_URL = 'https://vayla.io';
const DESKTOP = { width: 1440, height: 1000 };
const MOBILE = { width: 390, height: 844 };
const ROUTES = [
  '/', '/vaults', '/arena', '/dashboard', '/ai', '/marketplace', '/chart',
  '/whitepaper', '/doc', '/creator', '/onboarding', '/start', '/legal',
  '/legal/risk', '/legal/refunds', '/token', '/tokenutility', '/calculator',
];
const VISIBLE_GLYPHS = /[—–·↗→←›✦…✨⭐🔥🚀💡🎯]/u;
const WALLET_COPY = /connect\s+(a\s+)?wallet|sign\s+in|my\s+account/i;
const results = [];
const failures = [];

function pass(message) {
  results.push(`PASS ${message}`);
}

function fail(message) {
  failures.push(message);
  results.push(`FAIL ${message}`);
}

function expectedUrl(route) {
  return `${BASE_URL}${route === '/' ? '/' : `${route}/`}`;
}

async function inspect(route, viewport) {
  const page = await browser.newPage();
  const expected = expectedUrl(route);
  const consoleErrors = [];
  const pageErrors = [];
  const failedRequests = [];

  page.on('console', message => {
    if (message.type() === 'error') consoleErrors.push(message.text());
  });
  page.on('pageerror', error => pageErrors.push(error.message));
  page.on('requestfailed', request => failedRequests.push(`${request.method()} ${request.url()}`));

  try {
    await page.setViewportSize(viewport);
    const response = await page.goto(`${BASE_URL}${route}`, { waitUntil: 'domcontentloaded', timeout: 45000 });
    await new Promise(resolve => setTimeout(resolve, 900));

    const status = response ? response.status() : 0;
    if (status === 200) pass(`${route} ${viewport.width}px HTTP 200`);
    else fail(`${route} ${viewport.width}px HTTP ${status}`);
    if (page.url().split('?')[0] !== expected) fail(`${route} redirected to ${page.url()}, expected ${expected}`);

    const state = await page.evaluate(expectedCanonical => {
    const visible = element => {
      const style = window.getComputedStyle(element);
      const rect = element.getBoundingClientRect();
      return style.display !== 'none' && style.visibility !== 'hidden' && rect.width > 0 && rect.height > 0;
    };
    const bodyText = document.body?.innerText || '';
    const buttons = [...document.querySelectorAll('button')].filter(visible).map(button => ({
      text: (button.innerText || '').trim(),
      aria: button.getAttribute('aria-label') || '',
    }));
    const links = [...document.querySelectorAll('a')].filter(visible).map(link => ({
      text: (link.innerText || '').trim(),
      aria: link.getAttribute('aria-label') || '',
      href: link.href,
    }));
    return {
      title: document.title,
      h1Count: document.querySelectorAll('h1').length,
      canonical: document.querySelector('link[rel="canonical"]')?.href || '',
      bodyText,
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      buttons,
      links,
      canonicalMatches: document.querySelector('link[rel="canonical"]')?.href === expectedCanonical,
    };
    }, expected);

    if (!state.title) fail(`${route} ${viewport.width}px missing title`);
    if (state.h1Count !== 1) fail(`${route} ${viewport.width}px has ${state.h1Count} H1 elements`);
    if (!state.canonicalMatches) fail(`${route} ${viewport.width}px canonical mismatch: ${state.canonical || 'missing'}`);
    if (state.scrollWidth > state.clientWidth + 1) fail(`${route} ${viewport.width}px horizontal overflow ${state.scrollWidth}/${state.clientWidth}`);
    if (VISIBLE_GLYPHS.test(state.bodyText)) fail(`${route} ${viewport.width}px contains a targeted decorative glyph`);
    if (['/', '/dashboard', '/start', '/token'].includes(route) && WALLET_COPY.test(state.bodyText)) {
      fail(`${route} ${viewport.width}px contains wallet/login copy`);
    }
    for (const button of state.buttons) {
      if (!button.text && !button.aria) fail(`${route} ${viewport.width}px has an unlabeled button`);
    }
    for (const link of state.links) {
      if (!link.href || (!link.text && !link.aria)) fail(`${route} ${viewport.width}px has an unlabeled link`);
    }
    const meaningfulConsoleErrors = consoleErrors.filter(error => !error.startsWith('Failed to load resource:'));
    const criticalFailedRequests = failedRequests.filter(request => {
      const [method, url] = request.split(' ', 2);
      return method !== 'HEAD'
        && !url.includes('__next.')
        && !url.includes('google-analytics.com')
        && !url.includes('clarity.ms');
    });
    if (meaningfulConsoleErrors.length) fail(`${route} ${viewport.width}px console errors: ${meaningfulConsoleErrors.join(' | ')}`);
    if (criticalFailedRequests.length) fail(`${route} ${viewport.width}px failed requests: ${criticalFailedRequests.join(' | ')}`);
    if (pageErrors.length) fail(`${route} ${viewport.width}px page errors: ${pageErrors.join(' | ')}`);
    if (failedRequests.length) results.push(`WARN ${route} ${viewport.width}px ignored/non-critical failed requests: ${failedRequests.join(' | ')}`);
  } finally {
    await page.close();
  }
}

async function checkAsset(page, path, prefix) {
  const response = await page.goto(`${BASE_URL}${path}`, { waitUntil: 'domcontentloaded', timeout: 45000 });
  const body = response ? await response.text().catch(() => '') : '';
  if (!response || response.status() !== 200) fail(`${path} HTTP ${response ? response.status() : 0}`);
  else pass(`${path} HTTP 200`);
  if (prefix && !body.includes(prefix)) fail(`${path} content does not contain ${prefix}`);
}

const page = await browser.getPage('vayla-production-check');

try {
  for (const route of ROUTES) {
    await inspect(route, DESKTOP);
    if (['/', '/whitepaper', '/creator', '/dashboard'].includes(route)) await inspect(route, MOBILE);
  }

  await checkAsset(page, '/llms.txt', '# VAYLA');
  await checkAsset(page, '/robots.txt', 'User-agent:');
  await checkAsset(page, '/sitemap.xml', '<?xml');

  await page.setViewportSize(MOBILE);
  await page.goto(`${BASE_URL}/`, { waitUntil: 'domcontentloaded', timeout: 45000 });
  console.log(`MOBILE_SCREENSHOT ${await saveScreenshot(await page.screenshot({ fullPage: true }), 'vayla-home-mobile.png')}`);
  await page.setViewportSize(DESKTOP);
  await page.goto(`${BASE_URL}/`, { waitUntil: 'domcontentloaded', timeout: 45000 });
  console.log(`DESKTOP_SCREENSHOT ${await saveScreenshot(await page.screenshot({ fullPage: true }), 'vayla-home-desktop.png')}`);
} catch (error) {
  fail(`unexpected checker error: ${error.message}`);
}

console.log(results.join('\n'));
console.log(`\n${failures.length ? `FAILED: ${failures.length} issue(s)` : 'PASSED: production smoke check'} | ${BASE_URL}`);
if (failures.length) throw new Error(failures.join('\n'));
