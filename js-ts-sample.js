//@ts-check
const { webkit } = require('playwright');

(async () => {
  const browser = await webkit.launch({ headless: false });
  /** @type {import('playwright').Page} */
  let page;
  page = await browser.newPage();
  await page.goto('http://whatsmyuseragent.org/');
  await browser.close();
})();
