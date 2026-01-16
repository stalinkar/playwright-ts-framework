import { APIResponse, APIRequestContext, test } from "@playwright/test";
import { Config } from "../../config/config";  

export class APIClient {
    private request: APIRequestContext;
    constructor(request: APIRequestContext) {
        this.request = request;
    }

    /**
     * Generic POST method with logging and response validation
     */
    async post(endpoint: string, data: any, headers?: { [key: string]: string }) {
        return await test.step(`API POST Request: ${endpoint}`, async () => {
            const response = await this.request.post(endpoint, {
                data,
                headers: {
                    'Content-Type': 'application/json',
                    ...headers,
                },
            });
            await this.logResponse(response);
            return response;
        });
    }

    /**
     * Generic GET method
     */
    async get(endpoint: string, params?: { [key: string]: string | number | boolean }) {
        return await test.step(`API GET Request: ${endpoint}`, async () => {
            const response = await this.request.get(endpoint, { params });
            await this.logResponse(response);
            return response;
        });
    }

    private async logResponse(response: APIResponse) {
    // In a real framework, you'd use a logger like Winston. 
    // For now, we ensure basic visibility in Playwright traces.
    console.log(`Status: ${response.status()} | URL: ${response.url()}`);
        if (!response.ok()) {
            console.error(`API Error: ${await response.text()}`);
        }
    }
}