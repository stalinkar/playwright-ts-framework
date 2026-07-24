import { Page } from "@playwright/test";
import { BasePage } from "./BasePage.page";

export class ContactListPage extends BasePage {
    private readonly HEADER_TEXT = 'body > div > header > h1';
    private readonly CONTACT_LIST_TABLE = '.contactTable';
    private readonly ADD_CONTACT_BUTTON = 'button#add-contact';
    constructor(page: Page) {
        super(page);
    }

    async navigate() {
        await this.navigateTo('/contactList');
    }

    async isHeaderVisible(): Promise<boolean> {
        return await this.isVisible(this.HEADER_TEXT, 'Contact List Header');
    }

    async isConactListTableVisible(): Promise<boolean> {
        const TABLE_SELECTOR = '.contactTable';
        return await this.isVisible(TABLE_SELECTOR, 'Contact List Table');
    }

    async clickAddContactButton() {
        await this.click(this.ADD_CONTACT_BUTTON, 'Add Contact Button');
        await this.page.waitForLoadState('networkidle');
    }
}
