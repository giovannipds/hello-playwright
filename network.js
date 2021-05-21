const { firefox } = require('playwright');

(async () => {
  const browser = await firefox.launch({ headless: false });
  const page = await browser.newPage();
  await page.route(/.css/, route => route.abort());
  await page.goto('https://stackoverflow.com/');
  await page.screenshot({ path: 'no-css.png' });
  await browser.close();
})();
