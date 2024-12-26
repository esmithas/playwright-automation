import { Page } from 'playwright';
import { petSelectors } from "../selectors/PetSelectors";

export class PetPage {
    constructor(private page: Page) { }

    async clickAddPetToOwner() {
        await this.page.locator(petSelectors.addPetToOwnerButton).click();
    }

    async fillName(name: string) {
        await this.page.locator(petSelectors.nameTexbox).fill(name);
    }

    async getInputBirthDate() {
        return await this.page.locator(petSelectors.birthDate);
    }

    async fillBirthDate(date: string) {
        await this.page.fill(petSelectors.birthDate, date);
    }

    async selectTypeOption(option: string) {
        await this.page.selectOption(petSelectors.typeSelect, { label: option });
    }

    async clickSavePet() {
        await this.page.locator(petSelectors.addPetButton).click();
    }
}