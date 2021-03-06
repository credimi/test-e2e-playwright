import { test, expect } from '@playwright/test';

test.use({
    ignoreHTTPSErrors: true
});

test.describe('Confirm Revenue Step Application Tests', () => {
    test('1. If the user clicks on "Prosegui" without filling the revenue text field, then on the page is shown the "Campo Obbligatorio" message', async ({ page }) => {
        await page.goto('https://www.main-website.qa.credimi.com/ottieni-proposta/');
        // Click text=Accetta
        await page.locator('text=Accetta').click();
        // Fill input[name="email"]
        await page.locator('input[name="email"]').fill('test@credimi.com');
        await page.locator('text=Partita IVAInserisci la Partita IVA dell’azienda per cui stai facendo richiesta >> [placeholder=" "]').fill('03273820047');
        // Click text=Verifica se la tua azienda è finanziabile in 1 clickEmailPartita IVAInserisci la >> svg
        await page.locator('text=Verifica se la tua azienda è finanziabile in 1 clickEmailPartita IVAInserisci la >> svg').click();
        // Click text=Prosegui
        await Promise.all([
            page.waitForNavigation(/*{ url: 'https://www.main-website.qa.credimi.com/ottieni-proposta/#step-revenue' }*/),
            page.locator('text=Prosegui').click()
        ]);
        // Click text=Prosegui
        await page.locator('text=Prosegui').click();
        // Click text=Campo obbligatorio
        await expect(page.locator('text=Campo obbligatorio')).toBeVisible();
    });

    test('3a. If the user is not elegible, then he steps on the no product page', async ({ page }) => {
        // Go to https://www.main-website.qa.credimi.com/ottieni-proposta/
        await page.goto('https://www.main-website.qa.credimi.com/ottieni-proposta/');
        // Click text=Accetta
        await page.locator('text=Accetta').click();
        // Fill input[name="email"]
        await page.locator('input[name="email"]').fill('test@credimi.com');
        // Fill text=Partita IVAInserisci la Partita IVA dell’azienda per cui stai facendo richiesta >> [placeholder=" "]
        await page.locator('text=Partita IVAInserisci la Partita IVA dell’azienda per cui stai facendo richiesta >> [placeholder=" "]').fill('00283140762');
        // Click text=Verifica se la tua azienda è finanziabile in 1 clickEmailPartita IVAInserisci la >> svg
        await page.locator('text=Verifica se la tua azienda è finanziabile in 1 clickEmailPartita IVAInserisci la >> svg').click();
        // Click text=Prosegui
        await Promise.all([
            page.waitForNavigation(/*{ url: 'https://www.main-website.qa.credimi.com/ottieni-proposta/#step-revenue' }*/),
            page.locator('text=Prosegui').click()
        ]);
        // Fill [placeholder="\36 0\.000"]
        await page.locator('[placeholder="\\36 0\\.000"]').fill('100000');
        // Click text=Prosegui
        await Promise.all([
            page.waitForNavigation(/*{ url: 'https://www.main-website.qa.credimi.com/ottieni-proposta/#step-noproducts' }*/),
            page.locator('text=Prosegui').click()
        ]);
        // Click text=Ci dispiace! Non possiamo procedere con la tua richiesta
        await expect(page.locator('text=Ci dispiace! Non possiamo procedere con la tua richiesta')).toBeVisible();
    });


    test('3b. If the user is eligible, then it lands on the positive outcome page', async ({ page }) => {
        // Go to https://www.main-website.qa.credimi.com/ottieni-proposta/
        await page.goto('https://www.main-website.qa.credimi.com/ottieni-proposta/');
        // Click text=Accetta
        await page.locator('text=Accetta').click();
        // Fill input[name="email"]
        await page.locator('input[name="email"]').fill('test@credimi.com');
        // Fill text=Partita IVAInserisci la Partita IVA dell’azienda per cui stai facendo richiesta >> [placeholder=" "]
        await page.locator('text=Partita IVAInserisci la Partita IVA dell’azienda per cui stai facendo richiesta >> [placeholder=" "]').fill('01128840525');
        // Click text=Verifica se la tua azienda è finanziabile in 1 clickEmailPartita IVAInserisci la >> svg
        await page.locator('text=Verifica se la tua azienda è finanziabile in 1 clickEmailPartita IVAInserisci la >> svg').click();
        // Click text=Prosegui
        await Promise.all([
            page.waitForNavigation(/*{ url: 'https://www.main-website.qa.credimi.com/ottieni-proposta/#step-revenue' }*/),
            page.locator('text=Prosegui').click()
        ]);
        // Click [placeholder="\36 0\.000"]
        await page.locator('[placeholder="\\36 0\\.000"]').click();
        // Fill [placeholder="\36 0\.000"]
        await page.locator('[placeholder="\\36 0\\.000"]').fill('200000');
        // Click text=Prosegui
        await Promise.all([
            page.waitForNavigation(/*{ url: 'https://www.main-website.qa.credimi.com/ottieni-proposta/#step-eligible' }*/),
            page.locator('text=Prosegui').click()
        ]);
        // Click text=Inizia la richiesta
        await expect(page.locator('text=Inizia la richiesta')).toBeVisible();
    });
});