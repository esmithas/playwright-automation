import { Page } from 'playwright';
import { homeSelectors } from "../selectors/HomeSelectors";

export class HomePage {
    constructor(private page: Page) { }

    async goto() {
        await this.page.goto('https://petclinic-production.up.railway.app/');
    }

    async getMessageWelcome() {
        return await this.page.locator(homeSelectors.welcomeHeading).innerText();
    }

    async getImagePets() {
        return this.page.locator(homeSelectors.petsImage);
    }
}