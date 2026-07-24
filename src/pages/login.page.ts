import { Page } from "@playwright/test";
import { BasePage } from "./BasePage.page";

export class LoginPage extends BasePage {
    private readonly EMAIL_INPUT = "input[id='email']";
    private readonly PASSWORD_INPUT = "input[id='password']";
    private readonly SUBMIT_BUTTON = "button[id='submit']";
    private readonly ERROR_MESSAGE = "span[id='error']";
    constructor(page: Page) {
        super(page);
    }   
    async navigate() {
        await this.navigateTo('/');
    }   
    async login(email: string, password: string) {
        await this.fill(this.EMAIL_INPUT, email, 'Email Input');
        await this.fill(this.PASSWORD_INPUT, password, 'Password Input');
        await this.click(this.SUBMIT_BUTTON, 'Login Button');
        await this.page.waitForLoadState('networkidle');
    }   
    async getErrorMessage(): Promise<string> {
        const locator = this.page.locator(this.ERROR_MESSAGE);
        return await locator.textContent() || '';
    }

    async isSubmitButtonVisible(): Promise<boolean> {
        return await this.isVisible(this.SUBMIT_BUTTON, 'Submit Button');
    }
}