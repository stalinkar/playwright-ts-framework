import * as dotenv from 'dotenv';
import path from 'path';

// Initialize dotenv
dotenv.config();

export const Config = {
    env: process.env.NODE_ENV || 'qa',
    baseUrl: process.env.BASE_URL || 'https://thinking-tester-contact-list.herokuapp.com',
    email: process.env.EMAIL || 'test.user@dummy.com',
    password: process.env.PASSWORD || 'Abcd@123',
    timeout: 30000,
    apiBaseUrl: process.env.API_BASE_URL || 'https://thinking-tester-contact-list.herokuapp.com',
    browser: process.env.BROWSER || 'chromium',
    retries: Number(process.env.RETRIES || 1),
    headless: (process.env.HEADLESS || 'true') === 'true',
};