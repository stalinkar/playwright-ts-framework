import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { APIClient } from '../utils/APIClient';

// 1. Declare the types of fixtures
type MyFixtures = {
    loginPage: LoginPage;
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
    // API Client injection
    apiClient: async ({ request }, use) => {
        const apiClient = new APIClient(request);
        await use(apiClient);
    },
});

// 3. Export 'expect' so we don't need to import it from @playwright/test in test files
export { expect } from '@playwright/test';