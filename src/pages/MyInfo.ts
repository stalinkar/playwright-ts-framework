import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class MyInfoPage extends BasePage {
    private readonly MY_INFO_HEADER = 'h6.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module';
    constructor(page: Page) {
        super(page);
    }
    async isMyInfoHeaderVisible(): Promise<boolean> {
        return await this.isElementVisible(this.MY_INFO_HEADER, 'My Info Header');
    }
    async navigateToMyInfo() {
        await this.clickElement('a[href="/web/index.php/pim/viewMyDetails"]', 'My Info Link');
    }

    async getFirstName(): Promise<string> {
        const FIRST_NAME_INPUT = 'input[name="firstName"]';
        const locator = this.page.locator(FIRST_NAME_INPUT);
        this.page.waitForLoadState("domcontentloaded");
        return await locator.inputValue();
    }

    async changeFirstName(newFirstName: string) {
        const FIRST_NAME_INPUT = 'input[name="firstName"]';
        await this.fillInput(FIRST_NAME_INPUT, newFirstName, 'First Name Input');
    }

    async saveChanges() {
        const SAVE_BUTTON = 'button[type="submit"]';
        await this.clickElement(SAVE_BUTTON, 'Save Button');
    }
}