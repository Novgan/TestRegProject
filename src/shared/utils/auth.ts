import { client } from "../../api/config";

export const setAuthToken = (accessToken: string) => {
    window.localStorage.setItem("token", accessToken);
    client.defaults.headers.common.userToken = accessToken;
};

export const removeAuthToken = () => {
    window.localStorage.removeItem("token");
    delete client.defaults.headers.common.userToken;
};

export const getAuthToken = () => {
    return window.localStorage.getItem("token");
};
