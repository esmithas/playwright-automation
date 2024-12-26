import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { OwnerPage } from '../pages/OwnerPage';

let ownerPage: OwnerPage;

When('accedo a la lista de owners', async function () {
    ownerPage = new OwnerPage(this.page);
    await ownerPage.clickToFindOwner();
});

Then('debo ver una lista de todos los owners de mascotas registrados correctamente', async function () {
    expect(await ownerPage.countListItemsOwners()).toBeGreaterThan(0);
});