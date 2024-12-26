import { BeforeStep } from '@cucumber/cucumber';
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { OwnerPage } from '../pages/OwnerPage';
import Owner from "../interfaces/IOwner";

let ownerPage: OwnerPage;

BeforeStep(async function () {
    ownerPage = new OwnerPage(this.page);
});

When('accedo a la lista de owners', async function () {
    await ownerPage.clickToFindOwner();
});

Then('debo ver una lista de todos los owners de mascotas registrados correctamente', async function () {
    expect(await ownerPage.countListItemsOwners()).toBeGreaterThan(0);
});

When('selecciono agregar owner', async function () {
    await ownerPage.clickToAddOwner();
});

When('registro el owner en el formulario con los datos', async function (dataTable) {
    const data: Owner[] = dataTable.hashes();
    await ownerPage.fillFirstName(data[0].firstName);
    await ownerPage.fillLastName(data[0].lastName);
    await ownerPage.fillAddress(data[0].address);
    await ownerPage.fillCity(data[0].city);
    await ownerPage.fillPhone(data[0].phone);
    await ownerPage.clickToSaveOwner();
});

Then('el nuevo owner {string} debe aparecer correctamente en la lista de owners', async function (fullname: string) {
    await ownerPage.clickLastPageOwners();
    const listOwners = await ownerPage.getListItemsOwners();
    const isFind = await ownerPage.findOwnerToList(fullname, listOwners);
    expect(isFind).toBeTruthy();
});
