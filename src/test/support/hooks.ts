import { Before, After, AfterStep } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config({ path: `.env.${process.env.NODE_ENV ?? 'qa'}` });

let browser: Browser;
let context: BrowserContext;
let page: Page;

Before(async function () {
    browser = await chromium.launch({ headless: false, args: ["--start-maximized"] });
    context = await browser.newContext({
        viewport: null,
        // recordVideo: {
        //     dir: 'videos/',
        // }
    });
    page = await context.newPage();
    this.page = page;
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