import { LoginResponse } from "../models/LoginResponse";

export const mockLoginApiCall = (status: number, username: string | null): Promise<LoginResponse> => {
    return new Promise((resolve, reject) => {
        status = username ? status : 1;
        setTimeout(() => {
            switch (status) {
                case 0:
                    resolve({
                        status: 200,
                        message: 'Success: Request processed successfully.',
                    });
                    console.log(`${username} was added to the list`)
                    break;
                case 1:
                    reject({
                        status: 400,
                        message: 'Error: Conflict occurred, username is null.',
                    });
                    console.log(`${username} was not added to the list`)
                    break;
                case 2:
                    reject({
                        status: 409,
                        message: 'Error: Conflict occurred, username already exists.',
                    });
                    console.log(`${username} was not added to the list`)
                    break;
                case 3:
                    reject({
                        status: 500,
                        message: 'Error: Internal server error, please try again later.',
                    });
                    console.log(`${username} was not added to the list`)
                    break;
                default:
                    reject({
                        status: 500,
                        message: 'Error: Unexpected server error.',
                    });
                    console.log(`${username} was not added to the list`)
            }
        }, 1000);
    });
};

export const mockLogoutApiCall = (status: number, username: string): Promise<LoginResponse> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            switch (status) {
                case 0:
                    resolve({
                        status: 200,
                        message: 'Success: Request processed successfully.',
                    });
                    console.log(`${username} was added to the list`)
                    break;
                case 1:
                    reject({
                        status: 404,
                        message: 'Error: username does not exists.',
                    });
                    break;
                case 2:
                    reject({
                        status: 500,
                        message: 'Error: Internal server error, please try again later.',
                    });
                    break;
                default:
                    reject({
                        status: 500,
                        message: 'Error: Unexpected server error.',
                    });
            }
        }, 1000);
    });
};