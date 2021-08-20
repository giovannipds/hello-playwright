// example.spec.js
const { test, expect } = require('@playwright/test');

test('my test', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright');

  // Expect an attribute "to be strictly equal" to the value.
  await expect(page.locator('text="Get started"')).toHaveAttribute('href', '/docs/intro');

  // Expect an element "to be visible".
  await expect(page.locator('text=Learn more >> nth=0')).toBeVisible();

  await page.click('text="Get started"');
  // Expect some text to be visible on the page.
  await expect(page.locator('text=Installation >> nth=0')).toBeVisible();

  // Compare screenshot with a stored reference.
  expect(await page.screenshot()).toMatchSnapshot('get-started.png');
});
