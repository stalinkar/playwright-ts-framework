import { test, expect } from '../../fixtures/fixture';
import { Config } from '../../../config/config';
import { testDataManager } from '../../resources/testDataManager';
import { faker } from '@faker-js/faker';
import * as allure from 'allure-js-commons'; // Import Allure types if needed for direct calls
import { FakerDataUtil } from '@utils/fakerDataUtil';
import { add } from 'winston';

test.describe('Add Contact Functionality', () => {
    test('should able toadd contact details successfully', async ({ loginPage, contactListPage, addContactPage }) => {
        // Add Allure Metadata
        await allure.description("Verifies that a user can add contact details in the My Info section.");
        await allure.owner("QA Team");
        await allure.severity("MAJOR");
        await allure.tag("UI");
        await allure.tags("Regression", "Smoke");
        await allure.link('https://example.com/test-case-link', 'Test Case Link');

        const user = testDataManager.getUser('adminUsers');

        await loginPage.navigate();
        await loginPage.login(user.email, user.password);
        await contactListPage.clickAddContactButton();

        // const contactData: Contact = {
        //     firstName: FakerDataUtil.generateFirstName(),
        //     lastName: FakerDataUtil.generateLastName(),
        //     email: FakerDataUtil.generateEmail(),
        //     phone: FakerDataUtil.generatePhoneNumber(),
        //     address1: FakerDataUtil.generateAddress(),
        //     city: FakerDataUtil.generateCity(),
        //     state: FakerDataUtil.generateState(),
        //     postalCode: FakerDataUtil.generateZipCode(),
        //     country: FakerDataUtil.generateCountry()
        // };

        // await addContactPage.fillContactDetails(contactData);
        // await addContactPage.navigateToMyInfo();
        // const isHeaderVisible = await addContactPage.isMyInfoHeaderVisible();
        // expect(isHeaderVisible).toBeTruthy();
        // await addContactPage.updatePersonalDetails(
        //     myInfoData.personalDetails.firstName,
        //     myInfoData.personalDetails.lastName,
        //     myInfoData.personalDetails.employeeId
        // );
        // let firstName = FakerDataUtil.generateFirstName();
        // await addContactPage.changeFirstName(firstName);
        // await addContactPage.savePersonalDetailsChanges();
        // const updatedFirstName = await addContactPage.getFirstName();
        // expect(updatedFirstName).toBe(firstName);
    });
});