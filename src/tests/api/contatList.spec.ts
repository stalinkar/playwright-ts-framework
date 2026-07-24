import { authTest as test, expect } from '../../auth/auth.fixtures';



test('authenticated user lands on Contact List page', async ({ contactListPage }) => {
    await contactListPage.navigate();
    // await expect(contactListPage.isHeaderVisible()).resolves.toBe(true);
    await expect(contactListPage.isConactListTableVisible()).resolves.toBe(true);
});