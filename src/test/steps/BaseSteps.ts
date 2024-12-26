import { Given } from '@cucumber/cucumber';
import { BasePage } from '../pages/BasePage';

let basePage: BasePage;

Given('que me dirigo al menú de home', async function () {
    basePage = new BasePage(this.page);
    await basePage.navigateToHome();
});

Given('que me dirigo al menú de find owners', async function () {
    basePage = new BasePage(this.page);
    await basePage.navigateToFindOwners();
});

Given('que me dirigo al menú de veterinarians', async function () {
    basePage = new BasePage(this.page);
    await basePage.navigateToVeterinarians();
});