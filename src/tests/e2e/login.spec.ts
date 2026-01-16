import { test, expect } from '../../fixtures/fixture'; // Import from YOUR fixture, not @playwright/test
import { Config } from '../../../config/config';
import loginData from '../../resources/testData/loginData.json';
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

        await loginPage.navigate();
        await loginPage.login(Config.username, Config.password);
        await expect(loginPage['page']).toHaveURL(/web\/index\.php\/dashboard\/index/);
    });

    test('should show error for locked out user', async ({ loginPage }) => {
        // Add Allure Metadata
        await allure.description("Verifies that a locked out user receives an appropriate error message upon login attempt.");
        await allure.owner("QA Team");
        await allure.severity("CRITICAL");
        await allure.tag("Regression");
        await loginPage.navigate();
        await loginPage.login(loginData.invalidUser.username, loginData.invalidUser.password);
        
        const errorText = await loginPage.getErrorMessage();
        expect(errorText).toContain('Invalid credentials');
    });
});