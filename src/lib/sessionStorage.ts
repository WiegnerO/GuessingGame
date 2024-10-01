// sessionStorageUtils.ts

// Function to store the username in sessionStorage
export const storeUsername = (username: string | null): void => {
    if (username === null) {
        throw new Error('Username cannot be null');
    }

    try {
        sessionStorage.setItem('username', username);
        console.log(`Username "${username}" stored in sessionStorage.`);
    } catch (error) {
        console.error('Error storing username in sessionStorage:', error);
    }
};

// Function to retrieve the username from sessionStorage
export const retrieveUsername = (): string | null => {
    try {
        const username = sessionStorage.getItem('username');
        if (username) {
            console.log(`Username "${username}" retrieved from sessionStorage.`);
            return username;
        } else {
            console.log('No username found in sessionStorage.');
            return null;
        }
    } catch (error) {
        console.error('Error retrieving username from sessionStorage:', error);
        return null;
    }
};

// Function to remove the username from sessionStorage
export const removeUsername = (): void => {
    try {
        sessionStorage.removeItem('username');
        console.log('Username removed from sessionStorage.');
    } catch (error) {
        console.error('Error removing username from sessionStorage:', error);
    }
};
