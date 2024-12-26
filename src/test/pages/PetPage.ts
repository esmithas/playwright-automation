import { Locator, Page } from 'playwright';
import { petSelectors } from "../selectors/PetSelectors";
import IPet from "../interfaces/IPet";
import IVisit from '../interfaces/IVisitPet';

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

    async fillDateVisit(date: string) {
        await this.page.fill(petSelectors.dateVisitDate, date);
    }

    async fillDescriptionVisit(description: string) {
        await this.page.locator(petSelectors.descriptionVisitDate).fill(description);
    }

    async clickSaveVisit() {
        await this.page.locator(petSelectors.saveVisitButton).click();
    }

    async isFindVisitToList(visit: IVisit, listVisits: IVisit[]) {
        return listVisits.some(item => item.date === visit.date && item.description === visit.description);
    }

    async clickUpdatePet() {
        await this.page.locator(petSelectors.updatePettButton).click();
    }

    async findInfoPetToTable(namePet: string) {
        const rowsPetListJSON: IPet[] = [];
        const rowsPetTable = await this.page.locator(petSelectors.itemsPetTable).all();
        for (const pet of rowsPetTable) {
            const name = await pet.locator(petSelectors.itemsNamePetTable).innerText()
            if (name === namePet) {
                const rowsVisitJSON: IVisit[] = [];
                const rowsVisitTable = await pet.locator(petSelectors.itemsPetVisitTable).all();
                await rowsVisitTable.pop()
                for (const visit of rowsVisitTable) {
                    rowsVisitJSON.push({
                        date: await visit.locator(petSelectors.itemDatePetVisitTable).innerText(),
                        description: await visit.locator(petSelectors.itemDescriptionPetVisitTable).innerText()
                    });
                }
                await rowsPetListJSON.push({
                    name,
                    birthDate: await pet.locator(petSelectors.itemsDatePetTable).innerText(),
                    type: await pet.locator(petSelectors.itemsTypePetTable).innerText(),
                    visits: rowsVisitJSON
                });
            }
        }
        return rowsPetListJSON;
    }

    async actionToPet(namePet: string, action: string) {
        const rowsPetTable = await this.page.locator(petSelectors.itemsPetTable).all();
        for (const pet of rowsPetTable) {
            const name = await pet.locator(petSelectors.itemsNamePetTable).innerText()
            if (name === namePet) {
                switch (action.toUpperCase()) {
                    case 'EDIT_PET': await pet.locator(petSelectors.editPetButton).click(); break;
                    case 'ADD_VISIT': await pet.locator(petSelectors.addVisitButton).click(); break;
                    default:
                        break;
                }
                break;
            }
        }
    }
}