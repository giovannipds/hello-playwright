const { firefox } = require('playwright');

(async () => {
  const browser = await firefox.launch({ headless: false, slowMo: 50 });
  const page = await browser.newPage();
  await page.goto('https://www.ebay.com/');
  await browser.close();
})();
