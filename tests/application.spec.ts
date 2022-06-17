import { test, expect, Page, chromium } from '@playwright/test';


test.beforeAll((async () => {
  // Make sure to run headed.
  const browser = await chromium.launch({ headless: false });

  // Setup context however you like.
  const context = await browser.newContext({ ignoreHTTPSErrors: true });
  await context.route('**/*', route => route.continue());

  // Pause the page, and start recording manually.
  const page = await context.newPage();
  await page.pause()
}))

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.main-website.qa.credimi.com/ottieni-proposta')
})


test.describe('Open application', () => {
  test('find title', async ({ page }) => {
    // Find title
    console.log(page.locator('.LoanApplication-module__mainTitle___1d2sZ').isVisible())
  });
})

