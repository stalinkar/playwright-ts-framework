import { Page, Locator, test } from "@playwright/test";
export abstract class BasePage {
    protected page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    /**
     * Wrapper method to navigate to a URL with a test step
     * @param url 
     * @access protected
     * @returns Promise<void>
     * @arguments {string} url - The URL to navigate to
     * @example
     * await this.navigateTo('http://example.com');
     */
    protected async navigateTo(url: string) {
        await test.step(`Navigate to ${url}`, async () => {
            await this.page.goto(url);
        });
    }

    /**
     * Wrapper method to click an element with a test step
     * @param locator 
     * @param description 
     * @access protected
     * @returns Promise<void>
     * @arguments {Locator} locator - The locator of the element to click
     * @arguments {string} description - A description of the element for logging
     * @example
     * await this.click(this.submitButton, 'Submit Button');
     */
    protected async click(selector: string, description: string) {
        const locator = this.page.locator(selector);
        if (arguments.length < 2 || !description) {
            await test.step(`Click on ${locator}`, async () => {
                await locator.waitFor({ state: 'visible' });
                await locator.click();
            });
        } else {
            await test.step(`Click on ${description}`, async () => {
                await locator.waitFor({ state: 'visible' });
                await locator.click();
            });
        }
    }
    protected async fill(selector: string, value: string, description: string) {
        const locator = this.page.locator(selector);
        if (arguments.length < 2 || !description) {
            await test.step(`Fill input ${locator} with ${value}`, async () => {
                await locator.waitFor({ state: 'visible' });
                await locator.fill(value);
            });
        } else {
            await test.step(`Fill ${description} with ${value}`, async () => {
                await locator.waitFor({ state: 'visible' });
                await locator.fill(value);
            });
        }
    }
    protected async getText(selector: string, description: string): Promise<string> {
        const locator = this.page.locator(selector);
        if (arguments.length < 2 || !description) {
            return await test.step(`Get text from ${locator}`, async () => {
                await locator.waitFor({ state: 'visible' });
                return await locator.textContent() || '';
            });
        } else {
            return await test.step(`Get text from ${description}`, async () => {
                await locator.waitFor({ state: 'visible' });
                return await locator.textContent() || '';
            });
        }
    }

    protected async isVisible(selector: string, description: string): Promise<boolean> {
        const locator = this.page.locator(selector);
        return await test.step(`Check if ${description} is visible`, async () => {
            try {
                await locator.waitFor({ state: 'visible', timeout: 5000 });
                return true;
            } catch {
                return false;
            }
        }); 
    }

    protected async waitForUrl(urlPart: string) {
        await this.page.waitForURL(`**/*${urlPart}*`);
    }
}