import { test, expect } from '../../fixtures/fixture'; // Import from YOUR fixture, not @playwright/test
import { Config } from '../../utils/config';
import loginData from '../../resources/testData/loginData.json';
import * as allure from 'allure-js-commons'; // Import Allure types if needed for direct calls

test.describe('Login Functionality', () => {

    // test('should login successfully with valid credentials', async ({ loginPage }) => {
    //     // 1. Arrange
    //     await loginPage.navigate();

    //     // 2. Act
    //     await loginPage.login(loginData.validUser.username, Config.password);

    //     // 3. Assert
    //     await expect(loginPage['page']).toHaveURL(/inventory.html/); 
    // });
    test('should login successfully', async ({ loginPage }) => {
        // Add Allure Metadata
        await allure.description("Verifies that a valid user can access the inventory page.");
        await allure.owner("QA Team");
        await allure.severity("CRITICAL");
        await allure.tag("Smoke");

        await loginPage.navigate();
        await loginPage.login(Config.username, Config.password);
        await expect(loginPage['page']).toHaveURL(/inventory.html/);
    });

    test('should show error for locked out user', async ({ loginPage }) => {
        await loginPage.navigate();
        await loginPage.login(loginData.lockedOutUser.username, Config.password);
        
        const errorText = await loginPage.getErrorMessage();
        expect(errorText).toContain('Epic sadface: Sorry, this user has been locked out.');
    });
});