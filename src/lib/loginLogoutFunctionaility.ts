import { mockLoginApiCall, mockLogoutApiCall } from "./mockLoginLogoutApi";
import { removeUsername, retrieveUsername, storeUsername } from "./sessionStorage";

export const loginApiCall = async (status: number, username: string) => {
    if (username === null) {
        throw new Error('Username cannot be null');
    }
    try {
        const response = await mockLoginApiCall(status, username);
        storeUsername(username)
        console.log(`Success: ${response.message}`);
    } catch (error: any) {
        throw new Error(`Error: ${error.message} (Status: ${error.status})`);
    }
};

export const logoutApiCall = async (status: number) => {
    const username = retrieveUsername();
    if (username === null) {
        throw new Error('Username cannot be null');
    }
    try {
        const response = await mockLogoutApiCall(status, username);
        console.log(`Success: ${response.message}`);
        removeUsername()
    } catch (error: any) {
        throw new Error(`Error: ${error.message} (Status: ${error.status})`);
    }
};

