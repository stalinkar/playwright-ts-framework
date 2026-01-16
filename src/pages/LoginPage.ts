import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
    private readonly USERNAME_INPUT = "input[name='username']";
    private readonly PASSWORD_INPUT = "input[name='password']";
    private readonly LOGIN_BUTTON = "button[type='submit']";
    private readonly ERROR_MESSAGE = '.oxd-text.oxd-text--p.oxd-alert-content-text';
    constructor(page: Page) {
        super(page);
    }   
    async navigate() {
        await this.navigateTo('/');
    }   
    async login(username: string, password: string) {
        await this.fillInput(this.USERNAME_INPUT, username, 'Username Input');
        await this.fillInput(this.PASSWORD_INPUT, password, 'Password Input');
        await this.clickElement(this.LOGIN_BUTTON, 'Login Button');
    }   
    async getErrorMessage(): Promise<string> {
        const locator = this.page.locator(this.ERROR_MESSAGE);
        return await locator.textContent() || '';
    }

    async isLoginButtonVisible(): Promise<boolean> {
        return await this.isElementVisible(this.LOGIN_BUTTON, 'Login Button');
    }
}