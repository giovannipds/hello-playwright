const { firefox } = require('playwright');

(async () => {
  const browser = await firefox.launch({ headless: false, slowMo: 50 });
  await browser.close();
})();
