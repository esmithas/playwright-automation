import { BeforeStep } from '@cucumber/cucumber';
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { PetPage } from '../pages/PetPage';
import IPet from "../interfaces/IPet";
import IVisit from '../interfaces/IVisitPet';

let petPage: PetPage;

BeforeStep(async function () {
    petPage = new PetPage(this.page);
});

When('selecciono la opción para agregar mascotas', async function () {
    await petPage.clickAddPetToOwner();
});

When('agrego y completo el formulario con la información de las mascotas', async function (dataTable) {
    const petsInfo: IPet[] = dataTable.hashes();
    for (let index = 0; index < petsInfo.length; index++) {
        const pet = petsInfo[index];
        await petPage.fillName(pet.name);
        await petPage.fillBirthDate(pet.birthDate);
        await petPage.selectTypeOption(pet.type);
        await petPage.clickSavePet();

        if (index < (petsInfo.length - 1)) {
            await petPage.clickAddPetToOwner();
        }
    }
});

When('agrego una visita a la mascota {string}', async function (namePet: string) {
    await petPage.actionToPet(namePet, 'ADD_VISIT');
});

When('edito la mascota {string}', async function (namePet: string) {
    await petPage.actionToPet(namePet, 'EDIT_PET');
});

When('completo el formulario de visita', async function (dataTable) {
    const visit: IVisit[] = dataTable.hashes();
    await petPage.fillDateVisit(visit[0].date);
    await petPage.fillDescriptionVisit(visit[0].description);
});

When('actualizo el campo fecha nacimiento de mascota {string}', async function (date: string) {
    await petPage.fillBirthDate(date);
});

Then('guardo la visita', async function () {
    await petPage.clickSaveVisit();
});

Then('la visita debe aparecer correctamente en la lista de visitas asociadas a la mascota {string}', async function (namePet: string, dataTable) {
    const infoPet: IPet[] = await petPage.findInfoPetToTable(namePet);
    expect(infoPet.length).toBeGreaterThan(0);
    const visitsTable: IVisit[] = infoPet[0].visits;
    const visit: IVisit = dataTable.hashes()[0];
    const isFidVisit = await petPage.isFindVisitToList(visit, visitsTable);
    expect(isFidVisit).toBeTruthy();
});

Then('guardo los datos de la mascota', async function () {
    await petPage.clickUpdatePet();
});

Then('valido que la fecha {string} se actualizo en la lista de la mascota {string}', async function (date: string, namePet: string) {
    const infoPet: IPet[] = await petPage.findInfoPetToTable(namePet);
    expect(infoPet.length).toBeGreaterThan(0);
    const birthDateTable: string = infoPet[0].birthDate;
    expect(birthDateTable).toEqual(date);
});

