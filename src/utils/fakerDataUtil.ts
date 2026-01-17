import { faker } from '@faker-js/faker';

export class FakerDataUtil {
    static generateFirstName(): string {
        return faker.person.firstName();
    }
    static generateMiddleName(): string {
        return faker.person.middleName();
    }
    static generateLastName(): string {
        return faker.person.lastName();
    }
    static generateEmail(): string {
        return faker.internet.email();
    }
    static generateDateOfBirth(): string {
        return faker.date.birthdate({ min: 18, max: 65, mode: 'age' }).toISOString().split('T')[0];
    }
    static generateGender(): string {
        const genders = ['Male', 'Female', 'Other'];
        return genders[Math.floor(Math.random() * genders.length)];
    }
    static generateNationality(): string {
        return faker.location.country();
    }
    static generateEmployeeId(): string {
        return faker.number.int({ min: 1000, max: 9999 }).toString();
    }
    static generatePhoneNumber(): string {
        return faker.phone.number();
    }
    static generateAddress(): string {
        return faker.location.streetAddress();
    }  
    static generateCity(): string {
        return faker.location.city();
    }
    static generateZipCode(): string {
        return faker.location.zipCode();
    }
    static generateCompanyName(): string {
        return faker.company.name();
    }
    static generateJobTitle(): string {
        return faker.person.jobTitle();
    }
    static generateRandomNumber(min: number, max: number): number {
        return faker.number.int({ min, max });
    }   
}
