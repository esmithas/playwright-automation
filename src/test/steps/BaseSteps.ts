import { BeforeStep } from '@cucumber/cucumber';
import { Given } from '@cucumber/cucumber';
import { BasePage } from '../pages/BasePage';

let basePage: BasePage;

BeforeStep(async function () {
    basePage = new BasePage(this.page);
});

Given('que me dirigo al menú de home', async function () {
    await basePage.navigateToHome();
});

Given('que me dirigo al menú de find owners', async function () {
    await basePage.navigateToFindOwners();
});

Given('que me dirigo al menú de veterinarians', async function () {
    await basePage.navigateToVeterinarians();
});