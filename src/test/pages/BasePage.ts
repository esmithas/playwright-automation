import { Page } from 'playwright';
import { baseSelectors } from "../selectors/BaseSelectors";

export class BasePage {
    constructor(private page: Page) { }

    async navigateToHome() {
        await this.page.locator(baseSelectors.homeLink).click();
    }

    async navigateToFindOwners() {
        await this.page.locator(baseSelectors.findOwnersLink).click();
    }

    async navigateToVeterinarians() {
        await this.page.locator(baseSelectors.veterinariansLink).click();
    }
}