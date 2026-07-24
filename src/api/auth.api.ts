import { request } from "@playwright/test";
import { Config as config } from "../../config/config";

export async function apiLogIn(email:string, password: string, storageState:string) {
    const context = await request.newContext({baseURL: config.apiBaseUrl});
    const data = {
            "email": email,
            "password": password
        }
    const response = await context.post('/users/login', {
        data: data
    });
    
    if (response.status() !== 200) {
        throw new Error(`Login failed with status ${response.status()}`);
    }   
    // const token = await response.json();
    await context.storageState({ path: storageState });
    await context.dispose();
}