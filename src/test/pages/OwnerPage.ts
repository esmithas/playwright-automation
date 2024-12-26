import { Page } from 'playwright';
import { ownerSelectors } from "../selectors/OwnerSelectors";

export class OwnerPage {
    constructor(private page: Page) { }

    async fillLastName(lastName: string) {
        await this.page.locator(ownerSelectors.lastNameTexbox).fill(lastName);
    }

    async clickToFindOwner() {
        await this.page.locator(ownerSelectors.findOwnerButton).click();
    }

    async clickToAddOwner() {
        await this.page.locator(ownerSelectors.addOwnerButton).click();
    }

    async countListItemsOwners() {
        return (await this.page.locator(ownerSelectors.itemsOwnersTable).all()).length;
    }
}