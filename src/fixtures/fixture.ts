import { test as base, BrowserContext, Page } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { DashboardPage } from '../pages/dashboard.page';
import { AddContactPage } from '@pages/AddContact.page';
import { APIClient } from '../utils/APIClient';
import { ContactListPage } from '@pages/ContactList.page';

// 1. Declare the types of fixtures
type MyFixtures = {
    context: BrowserContext;
    page: Page;
    loginPage: LoginPage;
    dashboardPage: DashboardPage;
    addContactPage: AddContactPage;
    contactListPage: ContactListPage;
    apiClient: APIClient;
};

// 2. Extend the base test to include fixtures
export const test = base.extend<MyFixtures>({

    context: async ({ browser }, use) => {
        const context = await browser.newContext();
        await use(context);
        await context.close();
    },

    page: async ({ context }, use) => {
        const page = await context.newPage();
        await use(page);
        await page.close();
    },
    
    // Define the loginPage fixture (Standard page injection)
    loginPage: async ({ page }, use) => {
        // Set up the fixture
        const loginPage = new LoginPage(page);
        
        // Use the fixture (pass it to the test)
        await use(loginPage);

        // (Optional) Clean up code can go here after 'use'
    },

    // Define the dashboardPage fixture
    dashboardPage: async ({ page }, use) => {
        const dashboardPage = new DashboardPage(page);
        await use(dashboardPage);
    },
    // Define the addContactPage fixture
    addContactPage: async ({ page }, use) => {
        const addContactPage = new AddContactPage(page);
        await use(addContactPage);
    },
    // Define the contactListPage fixture
    contactListPage: async ({ page }, use) => {
        const contactListPage = new ContactListPage(page);
        await use(contactListPage);
    },
    // API Client injection
    apiClient: async ({ request }, use) => {
        const apiClient = new APIClient(request);
        await use(apiClient);
    },
});

// 3. Export 'expect' so we don't need to import it from @playwright/test in test files
export { expect } from '@playwright/test';