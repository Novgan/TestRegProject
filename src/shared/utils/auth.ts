import { client } from "../../api/config";
import { AxiosHeaders, AxiosRequestConfig, RawAxiosRequestHeaders } from "axios";

export const setAuthToken = (accessToken: string) => {
    window.localStorage.setItem("token", accessToken);
    client.defaults.headers.common.userToken = accessToken;
};

export const removeAuthToken = () => {
    window.localStorage.removeItem("token");
    delete client.defaults.headers.common.userToken;
};

export const removeAuthTokenFromAxiosConfig = (config: AxiosRequestConfig) => {
    const headers = config.headers as RawAxiosRequestHeaders;
    if (headers) {
        if (headers.userToken) {
            delete headers.userToken;
            return;
        }

        if ((headers.common as AxiosHeaders)?.has("userToken")) {
            (headers.common as AxiosHeaders).delete("userToken");
        }
    }
};

export const setAuthTokenToOriginalRequest = (config: AxiosRequestConfig, accessToken: string) => {
    const headers = config.headers as RawAxiosRequestHeaders;
    if (headers?.common) {
        (headers.common as AxiosHeaders).set("userToken", `Bearer ${accessToken}`);
        return;
    }

    if (headers) {
        headers.userToken = accessToken;
    }
};

export const setAuthTokenToAxiosClient = (token: string | null) => {
    if (token === null) return;
    client.defaults.headers.common.userToken = token;
};
