import { Page } from '@playwright/test';
import { BasePage } from './BasePage.page';
import { th } from '@faker-js/faker/.';

export class MyInfoPage extends BasePage {
    private readonly MY_INFO_HEADER = 'h6.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module';
    constructor(page: Page) {
        super(page);
    }
    async isMyInfoHeaderVisible(): Promise<boolean> {
        return await this.isVisible(this.MY_INFO_HEADER, 'My Info Header');
    }
    async navigateToMyInfo() {
        await this.click('a[href="/web/index.php/pim/viewMyDetails"]', 'My Info Link');
        await this.page.waitForLoadState('networkidle');
    }

    async getFirstName(): Promise<string> {
        const FIRST_NAME_INPUT = 'input[name="firstName"]';
        const locator = this.page.locator(FIRST_NAME_INPUT);
        return await locator.inputValue();
    }

    async changeFirstName(newFirstName: string) {
        const FIRST_NAME_INPUT = 'input[name="firstName"]';
        await this.fill(FIRST_NAME_INPUT, newFirstName, 'First Name Input');
    }

    async savePersonalDetailsChanges() {
        const PD_SAVE_BUTTON = 'button[type="submit"]:nth-child(2)';
        await this.click(PD_SAVE_BUTTON, 'Save Button');
        await this.page.waitForLoadState('networkidle');
    }
}