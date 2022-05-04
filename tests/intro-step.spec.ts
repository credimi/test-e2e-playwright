import { test, expect } from '@playwright/test';

test.use({
    ignoreHTTPSErrors: true
});

test.describe('Intro Step Application tests', () => {
    test('4. If the user fills correctly the intro form but the VAT code is not active, then on the page is shown "Partita IVA non trovata"', async ({ page }) => {

        // Go to https://www.test-e2e-playwright-website.qa.credimi.com/ottieni-proposta/
        await page.goto('https://www.test-e2e-playwright-website.qa.credimi.com/ottieni-proposta/');

        // Click text=Accetta
        await page.locator('text=Accetta').click();

        // Fill input[name="email"]
        await page.locator('input[name="email"]').fill('test@credimi.com');

        // Fill text=Partita IVAInserisci la Partita IVA dell’azienda per cui stai facendo richiesta >> [placeholder=" "]
        await page.locator('text=Partita IVAInserisci la Partita IVA dell’azienda per cui stai facendo richiesta >> [placeholder=" "]').fill('4271597854891');

        // Click text=Prosegui
        await page.locator('text=Prosegui').click();

        // Click text=Partita IVA non valida, riprova!
        await expect(page.locator('text=Partita IVA non valida, riprova!')).toBeVisible();
    });
});