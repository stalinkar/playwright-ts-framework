import { FakerDataUtil } from "@utils/fakerDataUtil";

export class DataFactory {
    static getUniqueEmail(firstName: string, lastName: string): string {
        const timestamp = Date.now();
        const email = FakerDataUtil.generateEmail();
        return `${firstName}.${lastName}+${timestamp}@${email.split('@')[1]}`;
    }
}