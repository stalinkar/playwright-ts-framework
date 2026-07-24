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
        const isVisible = await loginPage.isSubmitButtonVisible();
        expect(isVisible).toBeTruthy();
    });

    test('should login successfully', async ({ loginPage }) => {
        // Add Allure Metadata
        await allure.description("Verifies that a valid user can access the inventory page after logging in.");
        await allure.owner("QA Team");
        await allure.severity("CRITICAL");
        await allure.tag("Smoke");
        await allure.tags("Regression", "Smoke");
        await allure.link('https://example.com/test-case-link', 'Test Case Link');
        await allure.step("Login to the application", async () => {
            console.log("Starting login step...");
        });
        await allure.step("Retrieve user credentials", async () => {
            console.log("Retrieving user credentials...");
        });
        await allure.parameter("User Type", "Standard User");
        await allure.parentSuite("Authentication Tests");
        await allure.suite("Login Tests");
        await allure.subSuite("Positive Login Tests");
        await allure.epic("User Authentication");
        await allure.feature("Login Functionality");
        await allure.story("Standard User Login");
        await allure.logStep("Navigating to login page and performing login action");
        await allure.testCaseId("TC-001");
        await allure.issue("BUG-123", "Known issue with login functionality");
        await allure.layer("UI");
        await allure.tms("TMS-001", "Test management system link");

        const user = testDataManager.getUser('standardUsers');
        console.log("Using user:", user);

        await loginPage.navigate();
        await loginPage.login(user.email, user.password);
        await expect(loginPage['page']).toHaveURL(/contactList/);
        await allure.attachment("Login Screenshot", await loginPage['page'].screenshot(), "image/png");
        // await allure.attachmentPath("Login Page HTML", await loginPage['page'].content(), "text/html");
        await allure.descriptionHtml("<p>This test verifies that a standard user can log in successfully.</p>");   
        await allure.displayName("Standard User Login Test");
        await allure.label("component", "Login Page");
    });

    test('should show error for locked out user', async ({ loginPage }) => {
        // Add Allure Metadata
        await allure.description("Verifies that a locked out user receives an appropriate error message upon login attempt.");
        await allure.owner("QA Team");
        await allure.severity("CRITICAL");
        await allure.tag("Regression");

        const user = testDataManager.getUser('invalidUsers');

        await loginPage.navigate();
        await loginPage.login(user.email, user.password);

        const errorText = await loginPage.getErrorMessage();
        console.log("Error message displayed:", errorText);
        expect(errorText).toContain('Incorrect username or password');
    });
});