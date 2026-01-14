import { test, expect } from '../fixtures/fixture';

test.describe('Hybrid API & UI Scenarios', () => {

    test('Verify user data via API and UI consistency', async ({ apiClient, loginPage, page }) => {
        // 1. API Action: Check if the service is up or fetch user metadata
        const response = await apiClient.get('https://www.saucedemo.com/main.js');
        expect(response.status()).toBe(200);

        // 2. UI Action: Standard Login
        await loginPage.navigate();
        await loginPage.login('standard_user', 'secret_sauce');

        // 3. Assertion: Ensure UI reached the correct state
        await expect(page).toHaveURL(/inventory.html/);
    });
});