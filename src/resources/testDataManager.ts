import fs from 'fs';
import path from 'path';
import { Config as config } from '../../config/config';


export type User = {
    username: string;
    password: string;
};


type UserPools = Record<string, User[]>;


class TestDataManager {
    private userPools: UserPools;


    constructor() {
        const filePath = path.resolve(
            __dirname,
            `users/${config.env}.users.json`
        );


        const rawData = fs.readFileSync(filePath, 'utf-8');
        this.userPools = JSON.parse(rawData);
    }


    getUser(role: keyof UserPools): User {
        const pool = this.userPools[role];


        if (!pool || pool.length === 0) {
            throw new Error(`No available users for role: ${role}`);
        }


        // Non-destructive allocation (safe for parallel reads)
        return pool[Math.floor(Math.random() * pool.length)];
    }
}

export const testDataManager = new TestDataManager();