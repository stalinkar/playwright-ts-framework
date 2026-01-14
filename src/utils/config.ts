import * as dotenv from 'dotenv';
import path from 'path';

// Initialize dotenv
dotenv.config();

export const Config = {
    baseUrl: process.env.BASE_URL || 'https://www.saucedemo.com',
    username: process.env.USERNAME || 'standard_user',
    password: process.env.PASSWORD || 'secret_sauce',
    timeout: 30000,
    apiBaseUrl: process.env.API_URL || 'https://api.saucedemo.com'
};