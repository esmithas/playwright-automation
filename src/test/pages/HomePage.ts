import { Page } from 'playwright';
import { homeSelectors } from "../selectors/HomeSelectors";

export class HomePage {
    constructor(private page: Page) { }

    async goto() {
        await this.page.goto(process.env.URL_BASE);
    }

    async getMessageWelcome() {
        return await this.page.locator(homeSelectors.welcomeHeading).innerText();
    }

    async getImagePets() {
        return this.page.locator(homeSelectors.petsImage);
    }
}