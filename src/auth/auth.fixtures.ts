import { ContactListPage } from '@pages/ContactList.page';
import { test as base } from '@playwright/test';
import path from 'path';

type AuthFixtures = {
    contactListPage: ContactListPage;
};


export const authTest = base.extend<AuthFixtures>({
        contactListPage: async ({ page }, use) => {
            const contactListPage = new ContactListPage(page);
            await use(contactListPage);
        },
        page: async ({ browser }, use) => {
        const context = await browser.newContext({
            storageState: path.resolve('storage/standardUser.json')
        });


        const page = await context.newPage();
        await use(page);


        await page.close();
        await context.close();
    }
});

export { expect } from '@playwright/test';

