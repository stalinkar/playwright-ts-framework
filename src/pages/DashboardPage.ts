import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class DashboardPage extends BasePage {
    private readonly DASHBOARD_HEADER = 'h6.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module';

    constructor(page: Page) {
        super(page);
    }
    async isHeaderVisible(): Promise<boolean> {
        return await this.isElementVisible(this.DASHBOARD_HEADER, 'Dashboard Header');
    }
}