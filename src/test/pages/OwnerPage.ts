import { Page } from 'playwright';
import { ownerSelectors } from "../selectors/OwnerSelectors";
import IOwnerTable from "../interfaces/IOwnerTable";

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

    async fillFirstName(lastName: string) {
        await this.page.locator(ownerSelectors.firstNameTexbox).fill(lastName);
    }

    async fillAddress(lastName: string) {
        await this.page.locator(ownerSelectors.addressTexbox).fill(lastName);
    }

    async fillCity(lastName: string) {
        await this.page.locator(ownerSelectors.cityTexbox).fill(lastName);
    }

    async fillPhone(lastName: string) {
        await this.page.locator(ownerSelectors.phoneTexbox).fill(lastName);
    }

    async clickToSaveOwner() {
        await this.page.locator(ownerSelectors.saveOwnerButton).click();
    }

    async clickLastPageOwners() {
        await this.page.locator(ownerSelectors.lastPageOwners).click();
    }

    async getLastPageOwners() {
        return await this.page.locator(ownerSelectors.lastPageOwners);
    }

    async getTextAddressOwners() {
        return await this.page.locator(ownerSelectors.itemsAddressOwnerInfo).innerText();
    }

    async getListItemsOwners() {
        const rowsOwnerListJSON: IOwnerTable[] = [];
        const rowsOwnerList = await this.page.locator(ownerSelectors.itemsOwnersTable).all();
        for (const owner of rowsOwnerList) {
            rowsOwnerListJSON.push({
                name: await owner.locator(ownerSelectors.nameColOwnerTable).innerText(),
                address: await owner.locator(ownerSelectors.addressColOwnerTable).innerText(),
                city: await owner.locator(ownerSelectors.cityColOwnerTable).innerText(),
                phone: await owner.locator(ownerSelectors.phoneColOwnerTable).innerText(),
                pets: await owner.locator(ownerSelectors.petsColOwnerTable).innerText()
            })
        }
        return rowsOwnerListJSON;
    }

    async isFindOwnerToList(fullname: string, listOwners: IOwnerTable[]) {
        return listOwners.some(item => item.name === fullname);
    }

    async clickEditOwner() {
        await this.page.locator(ownerSelectors.editOwnerButton).click();
    }

    async clickToUpdateOwner() {
        await this.page.locator(ownerSelectors.updatedOwnerButton).click();
    }

    async getSuccessMessageAlert() {
        return await this.page.locator(ownerSelectors.successMessageAlert).innerText();
    }

    async findOwnerToList(lastname: string, listOwners: IOwnerTable[]) {
        return listOwners.filter(item => item.name.includes(lastname));
    }

    async actionToPetOntable(fullname: string) {
        const rowsPetTable = await this.page.locator(ownerSelectors.itemsOwnersTable).all();
        if (rowsPetTable.length > 0) {
            let isFinToList = false;
            for (const pet of rowsPetTable) {
                const name = await pet.locator(ownerSelectors.nameColOwnerTable);
                if (await name.innerText() === fullname) {
                    await name.click();
                    isFinToList = true;
                    break;
                }
            }
            
        }
    }
}