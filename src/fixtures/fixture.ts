import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { MyInfoPage } from '@pages/MyInfo';
import { APIClient } from '../utils/APIClient';

// 1. Declare the types of fixtures
type MyFixtures = {
    loginPage: LoginPage;
    dashboardPage: DashboardPage;
    myInfoPage: MyInfoPage;
    apiClient: APIClient;
};

// 2. Extend the base test to include fixtures
export const test = base.extend<MyFixtures>({
    
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
    // Define the myInfoPage fixture
    myInfoPage: async ({ page }, use) => {
        const myInfoPage = new MyInfoPage(page);
        await use(myInfoPage);
    },
    // API Client injection
    apiClient: async ({ request }, use) => {
        const apiClient = new APIClient(request);
        await use(apiClient);
    },
});

// 3. Export 'expect' so we don't need to import it from @playwright/test in test files
export { expect } from '@playwright/test';