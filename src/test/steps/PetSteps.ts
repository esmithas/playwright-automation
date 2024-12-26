import { BeforeStep } from '@cucumber/cucumber';
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { PetPage } from '../pages/PetPage';
import Pet from "../interfaces/IPet";

let petPage: PetPage;

BeforeStep(async function () {
    petPage = new PetPage(this.page);
});

When('selecciono la opción para agregar mascotas', async function () {
    await petPage.clickAddPetToOwner();
});

When('agrego y completo el formulario con la información de las mascotas', async function (dataTable) {
    const petsInfo: Pet[] = dataTable.hashes();
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

