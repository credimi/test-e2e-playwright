import { test, expect } from '@playwright/test';

test.use({
    ignoreHTTPSErrors: true
});

test.describe('Confirm Revenue Step Application Tests', () => {
    test('1. If the user clicks on "Prosegui" without filling the revenue text field, then on the page is shown the "Campo Obbligatorio" message', async ({ page }) => {
        // Go to https://www.test-20220419-website.qa.credimi.com/ottieni-proposta/
        await page.goto('https://www.test-20220419-website.qa.credimi.com/ottieni-proposta/');
        // Click text=Accetta
        await page.locator('text=Accetta').click();
        // Fill input[name="email"]
        await page.locator('input[name="email"]').fill('test@credimi.com');
        await page.locator('text=Partita IVAInserisci la Partita IVA dell’azienda per cui stai facendo richiesta >> [placeholder=" "]').fill('03273820047');
        // Click text=Verifica se la tua azienda è finanziabile in 1 clickEmailPartita IVAInserisci la >> svg
        await page.locator('text=Verifica se la tua azienda è finanziabile in 1 clickEmailPartita IVAInserisci la >> svg').click();
        // Click text=Prosegui
        await Promise.all([
            page.waitForNavigation(/*{ url: 'https://www.test-20220419-website.qa.credimi.com/ottieni-proposta/#step-revenue' }*/),
            page.locator('text=Prosegui').click()
        ]);
        // Click text=Prosegui
        await page.locator('text=Prosegui').click();
        // Click text=Campo obbligatorio
        await expect(page.locator('text=Campo obbligatorio')).toBeVisible();
    });
});