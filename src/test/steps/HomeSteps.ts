import { Given } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

let homePage: HomePage;

Given('que estoy en la página principal', async function () {
    homePage = new HomePage(this.page);
    await homePage.goto();
    expect(await homePage.getMessageWelcome()).toEqual('Bienvenido');
    expect(await homePage.getImagePets()).toBeVisible();
});