import { test, expect } from '../../fixtures/fixture'; // Import from YOUR fixture, not @playwright/test
// import { Config } from '../../../config/config';
// import loginData from '../../resources/data/qa.loginData.json';
import { testDataManager } from '../../resources/testDataManager';
import * as allure from 'allure-js-commons'; // Import Allure types if needed for direct calls

test.describe('Login Functionality', () => {
    
    test('should have login button visible on the login page', async ({ loginPage }) => {
        // Add Allure Metadata
        await allure.description("Verifies that the login button is visible on the login page.");
        await allure.owner("QA Team");
        await allure.severity("MINOR");
        await allure.tag("UI");
        await loginPage.navigate();
        const isVisible = await loginPage.isLoginButtonVisible();
        expect(isVisible).toBeTruthy();
    });

    test('should login successfully', async ({ loginPage }) => {
        // Add Allure Metadata
        await allure.description("Verifies that a valid user can access the inventory page after logging in.");
        await allure.owner("QA Team");
        await allure.severity("CRITICAL");
        await allure.tag("Smoke");

        const user = testDataManager.getUser('adminUsers');

        await loginPage.navigate();
        await loginPage.login(user.username, user.password);
        await expect(loginPage['page']).toHaveURL(/web\/index\.php\/dashboard\/index/);
    });

    test('should show error for locked out user', async ({ loginPage }) => {
        // Add Allure Metadata
        await allure.description("Verifies that a locked out user receives an appropriate error message upon login attempt.");
        await allure.owner("QA Team");
        await allure.severity("CRITICAL");
        await allure.tag("Regression");

        const user = testDataManager.getUser('invalidUsers');

        await loginPage.navigate();
        await loginPage.login(user.username, user.password);

        const errorText = await loginPage.getErrorMessage();
        expect(errorText).toContain('Invalid credentials');
    });
});