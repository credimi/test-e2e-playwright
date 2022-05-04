import { test, expect } from '@playwright/test';

test.use({
    ignoreHTTPSErrors: true
});

test.describe('Intro Step Application tests', () => {
    test('1. If the user click on "Prosegui" without having filled the forms, then on the page is shown the "{fieldName} obbligatorio" text', async ({ page }) => {
        // Go to https://www.test-20220419-website.qa.credimi.com/ottieni-proposta/
        await page.goto('https://www.test-20220419-website.qa.credimi.com/ottieni-proposta/');
        // Click text=Accetta
        await page.locator('text=Accetta').click();
        // Click text=Prosegui
        await page.locator('text=Prosegui').click();
        // Click text=Email obbligatoria
        await expect(page.locator('text=Email obbligatoria')).toBeVisible();
        // Click text=Partita IVA obbligatoria
        await expect(page.locator('text=Partita obbligatoria')).toBeVisible();
        // Take a screenshot of the failed step
        await page.screenshot({ path: 'screenshot.png' });
        // Click text=Campo obbligatorio
        await expect(page.locator('text=Campo obbligatorio')).toBeVisible();
    });

    test('2. If the user inserts ad invalid email, then on the page is shown the message "Email non valida"', async ({ page }) => {
        // Go to https://www.test-20220419-website.qa.credimi.com/ottieni-proposta/
        await page.goto('https://www.test-20220419-website.qa.credimi.com/ottieni-proposta/');
        // Click text=Accetta
        await page.locator('text=Accetta').click();
        // Fill input[name="email"]
        await page.locator('input[name="email"]').fill('ciccio@email');
        // Click text=Verifica se la tua azienda è finanziabile in 1 clickEmailPartita IVAInserisci la >> svg
        await page.locator('text=Verifica se la tua azienda è finanziabile in 1 clickEmailPartita IVAInserisci la >> svg').click();
        // Click text=Prosegui
        await page.locator('text=Prosegui').click();
        // Click text=Email non valida
        await expect(page.locator('text=Email non valida')).toBeVisible();
    });

    test('3. If the user fills correctly the intro form but the VAT code is not correct, then on the page is shown "Partita IVA non valida, riprova"', async ({ page }) => {

        // Go to https://www.test-20220419-website.qa.credimi.com/ottieni-proposta/
        await page.goto('https://www.test-20220419-website.qa.credimi.com/ottieni-proposta/');

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

    test('4. If the user fills correctly the intro form but the VAT code is not valid, then on the page is shown "Partita IVA non valida, riprova"', async ({ page }) => {
        // Go to https://www.test-20220419-website.qa.credimi.com/ottieni-proposta/
        await page.goto('https://www.test-20220419-website.qa.credimi.com/ottieni-proposta/');
        // Go to https://www.test-20220419-website.qa.credimi.com/ottieni-proposta/#step-intro
        await page.goto('https://www.test-20220419-website.qa.credimi.com/ottieni-proposta/#step-intro');
        // Click text=Accetta
        await page.locator('text=Accetta').click();
        // Fill input[name="email"]
        await page.locator('input[name="email"]').fill('test@credimi.com');
        // Fill text=Partita IVAInserisci la Partita IVA dell’azienda per cui stai facendo richiesta >> [placeholder=" "]
        await page.locator('text=Partita IVAInserisci la Partita IVA dell’azienda per cui stai facendo richiesta >> [placeholder=" "]').fill('03544290830');
        // Click text=Verifica se la tua azienda è finanziabile in 1 clickEmailPartita IVAInserisci la >> svg
        await page.locator('text=Verifica se la tua azienda è finanziabile in 1 clickEmailPartita IVAInserisci la >> svg').click();
        // Click text=Prosegui
        await page.locator('text=Prosegui').click();
        // Click text=Partita IVA non trovata
        await page.locator('text=Partita IVA non trovata').click();
    });
});