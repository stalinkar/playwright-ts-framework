import * as dotenv from 'dotenv';
import path from 'path';

// Initialize dotenv
dotenv.config();

export const Config = {
    baseUrl: process.env.BASE_URL || 'https://opensource-demo.orangehrmlive.com',
    username: process.env.USER_NAME || 'Admin',
    password: process.env.PASSWORD || 'admin123',
    timeout: 30000,
    apiBaseUrl: process.env.API_URL || 'https://api.saucedemo.com',
    browser: process.env.BROWSER || 'chromium'
};