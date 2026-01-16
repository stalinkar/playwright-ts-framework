import { Config } from '../../../config/config';
import { test, expect } from '../../fixtures/fixture';

test.describe('Dashboard Functionality', () => {
    test('should display dashboard elements correctly', async ({ loginPage, dashboardPage }) => {
        await loginPage.navigate();
        await loginPage.login(Config.username, Config.password);
        const isHeaderVisible = await dashboardPage.isHeaderVisible();
        expect(isHeaderVisible).toBeTruthy();
    });
});