import { test, expect } from '../../fixtures/fixture';
import { Config } from '../../utils/config';
import { faker } from '@faker-js/faker';
import * as allure from 'allure-js-commons'; // Import Allure types if needed for direct calls

test.describe('My Info Functionality', () => {
    test('should update personal details successfully', async ({ loginPage, myInfoPage }) => {
        // Add Allure Metadata
        await allure.description("Verifies that a user can update their personal details in the My Info section.");
        await allure.owner("QA Team");
        await allure.severity("MAJOR");
        await allure.tag("UI");

        await loginPage.navigate();
        await loginPage.login(Config.username, Config.password);
        await myInfoPage.navigateToMyInfo();
        const isHeaderVisible = await myInfoPage.isMyInfoHeaderVisible();
        expect(isHeaderVisible).toBeTruthy(); 
        // await myInfoPage.updatePersonalDetails(
        //     myInfoData.personalDetails.firstName,
        //     myInfoData.personalDetails.lastName,
        //     myInfoData.personalDetails.employeeId
        // );
        let firstName = faker.person.firstName();
        await myInfoPage.changeFirstName(firstName);
        await myInfoPage.saveChanges(); 
        const updatedFirstName = await myInfoPage.getFirstName();
        expect(updatedFirstName).toBe(firstName);
    });
});