import { BeforeStep } from '@cucumber/cucumber';
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { OwnerPage } from '../pages/OwnerPage';
import Owner from "../interfaces/IOwner";
import OwnerTable from '../interfaces/IOwnerTable';

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
    const ownerInfo: Owner[] = dataTable.hashes();
    await ownerPage.fillFirstName(ownerInfo[0].firstName);
    await ownerPage.fillLastName(ownerInfo[0].lastName);
    await ownerPage.fillAddress(ownerInfo[0].address);
    await ownerPage.fillCity(ownerInfo[0].city);
    await ownerPage.fillPhone(ownerInfo[0].phone);
    await ownerPage.clickToSaveOwner();
});

Then('el nuevo owner {string} debe aparecer correctamente en la lista de owners', async function (fullname: string) {
    await ownerPage.clickLastPageOwners();
    const listOwners = await ownerPage.getListItemsOwners();
    const isFind = await ownerPage.isFindOwnerToList(fullname, listOwners);
    expect(isFind).toBeTruthy();
});

When('busco al owner que quiero editar por su apellido {string}', async function (lastname: string) {
    await ownerPage.fillLastName(lastname);
    await ownerPage.clickToFindOwner();
});

When('doy clic en editar owner', async function () {
    await ownerPage.clickEditOwner();
});

When('actualizo el campo address {string}', async function (address: string) {
    await ownerPage.fillAddress(address);
});

Then('guardo y se muestra la alerta {string}', async function (message: string) {
    await ownerPage.clickToUpdateOwner();
    const textAlert = await ownerPage.getSuccessMessageAlert();
    expect(textAlert).toEqual(message)
});

Then('busco al owner {string} y valido que se actualizo el correo {string}', async function (lastName: string, address: string) {
    await ownerPage.clickLastPageOwners();
    const listOwners = await ownerPage.getListItemsOwners();
    const ownerTable:OwnerTable[] = await ownerPage.findOwnerToList(lastName, listOwners);
    expect(ownerTable.length).toBeGreaterThan(0);
    expect(ownerTable[0].address).toEqual(address);
});

Then('busco al owner {string} y valido que se encuentran las mascotas', async function (lastName: string, dataTable) {
    await ownerPage.clickLastPageOwners();
    const listOwners = await ownerPage.getListItemsOwners();
    const ownerTable:OwnerTable[] = await ownerPage.findOwnerToList(lastName, listOwners);
    expect(ownerTable.length).toBeGreaterThan(0);
    
    const petsOwnerTable = ownerTable[0].pets;
    const pets: {namePet: string}[] = dataTable.hashes();
    for (const pet of pets) {
        expect(petsOwnerTable).toContain(pet.namePet);
    }
});