import { defineConfig, devices } from '@playwright/test';
import { Config } from './config/config';


const baseURL = process.env.BASE_URL || 'http://localhost:3000';
const headless = (process.env.HEADLESS || 'true') === 'true';
const retries = Number(process.env.RETRIES ?? 1);


export default defineConfig({
    testDir: './src/tests',
    timeout: 60_000,
    expect: { timeout: 5000 },
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries,
    workers: process.env.CI ? 1 : undefined, // allow Playwright to auto decide locally
    // reporter: [['list'], ['html', { outputFolder: 'playwright-report' }]],
    reporter: [
        ['list'], // Console output
        ['html'], // Standard backup
        ['allure-playwright', { outputFolder: 'allure-results' }]
    ],
    use: {
        baseURL: Config.baseUrl,
        headless,
        actionTimeout: 15_000,
        navigationTimeout: 30_000,
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure'
    },
    projects: [
        { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
        { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
        { name: 'webkit', use: { ...devices['Desktop Safari'] } }
    ]
});