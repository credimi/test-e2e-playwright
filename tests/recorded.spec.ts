import { test, expect } from '@playwright/test';

test.use({
    ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {

    // Go to https://www.test-e2e-playwright-website.qa.credimi.com/ottieni-proposta/
    await page.goto('https://www.test-e2e-playwright-website.qa.credimi.com/ottieni-proposta/');

    // Go to https://www.test-e2e-playwright-website.qa.credimi.com/ottieni-proposta/#step-intro
    await page.goto('https://www.test-e2e-playwright-website.qa.credimi.com/ottieni-proposta/#step-intro');

    // Click text=Accetta
    await page.locator('text=Accetta').click();

    // Click input[name="email"]
    await page.locator('input[name="email"]').click();

    // Fill input[name="email"]
    await page.locator('input[name="email"]').fill('test@credimi.com');

    // Press Tab
    await page.locator('input[name="email"]').press('Tab');

    // Fill text=Partita IVAInserisci la Partita IVA dell’azienda per cui stai facendo richiesta >> [placeholder=" "]
    await page.locator('text=Partita IVAInserisci la Partita IVA dell’azienda per cui stai facendo richiesta >> [placeholder=" "]').fill('4271597854891');

    // Press Tab
    await page.locator('text=Partita IVAInserisci la Partita IVA dell’azienda per cui stai facendo richiesta >> [placeholder=" "]').press('Tab');

    // Click text=Verifica se la tua azienda è finanziabile in 1 clickEmailPartita IVAInserisci la >> svg
    await page.locator('text=Verifica se la tua azienda è finanziabile in 1 clickEmailPartita IVAInserisci la >> svg').click();

    // Click text=Prosegui
    await page.locator('text=Prosegui').click();

    // Click text=No, grazie
    await page.locator('text=No, grazie').click();

    // Click text=Partita IVA non valida, riprova!
    await page.locator('text=Partita IVA non valida, riprova!').click();

});