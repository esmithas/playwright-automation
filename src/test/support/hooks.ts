import { Before, After, AfterStep } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium } from '@playwright/test';

let browser: Browser;
let context: BrowserContext;
let page: Page;

Before(async function () {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();
    this.page = page; // Guarda la página en el contexto de Cucumber
});

AfterStep(async function ({ result }) {
    const screenshot = await this.page.screenshot({
        path: `./reports/evidencies/screenshot-test ${result.status}-${Date.now()}.png`,
        fullPage: true
    });
    this.attach(screenshot, 'image/png');
});

After(async function () {
    await page.close();
    await context.close();
    await browser.close();
});