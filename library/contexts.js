const { chromium, devices } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    ...devices['Pixel 2'],
    permissions: ['geolocation'],
    geolocation: { longitude: -122.4786, latitude: 37.8202 },
  });
  const page = await context.newPage();
  await page.goto('https://openstreetmap.org');
  await page.click('.control-locate');
  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: 'osm.png' });
  await browser.close();
})();
