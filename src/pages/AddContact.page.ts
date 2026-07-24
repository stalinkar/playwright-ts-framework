import { BasePage } from "./BasePage.page";
import { Page } from "@playwright/test";

export class AddContactPage extends BasePage {
    private readonly ADD_CONTACT_HEADER = 'body > div > header > h1';
    private readonly FIRST_NAME_INPUT = '#firstName';
    private readonly LAST_NAME_INPUT = '#lastName';
    private readonly DATE_OF_BIRTH_INPUT = '#birthdate';
    private readonly EMAIL_INPUT = '#email';
    private readonly PHONE_INPUT = '#phone';
    private readonly ADDRESS_1_INPUT = '#street1';
    private readonly ADDRESS_2_INPUT = '#street2';
    private readonly CITY_INPUT = '#city';
    private readonly STATE_INPUT = '#stateProvince';
    private readonly POSTAL_CODE_INPUT = '#postalCode';
    private readonly COUNTRY_INPUT = '#country';
    private readonly SUBMIT_BUTTON = 'button#saveContact';
    private readonly CANCEL_BUTTON = 'button#cancel';

    constructor(page: Page) {
        super(page);
    }

    async isHeaderVisible(): Promise<boolean> {
        return await this.isVisible(this.ADD_CONTACT_HEADER, 'Add Contact Header');
    }
    async fillContactForm(contact: Contact): Promise<void> { 
        await this.fill(this.FIRST_NAME_INPUT, contact.firstName, 'First Name');
        await this.fill(this.LAST_NAME_INPUT, contact.lastName, 'Last Name');
        await this.fill(this.DATE_OF_BIRTH_INPUT, contact.dateOfBirth, 'Date of Birth');
        await this.fill(this.EMAIL_INPUT, contact.email, 'Email');
        await this.fill(this.PHONE_INPUT, contact.phone, 'Phone');
        await this.fill(this.ADDRESS_1_INPUT, contact.address1, 'Address 1');
        if (contact.address2) {
            await this.fill(this.ADDRESS_2_INPUT, contact.address2, 'Address 2');
        }
        await this.fill(this.CITY_INPUT, contact.city, 'City');
        await this.fill(this.STATE_INPUT, contact.state, 'State');
        await this.fill(this.POSTAL_CODE_INPUT, contact.postalCode, 'Postal Code');
        await this.fill(this.COUNTRY_INPUT, contact.country, 'Country');
    }

    async submitForm(): Promise<void> {
        await this.click(this.SUBMIT_BUTTON, 'Submit Button');
    }
}