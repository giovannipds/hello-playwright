const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  await browser.close();
})();
