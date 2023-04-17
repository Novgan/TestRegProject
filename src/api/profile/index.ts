import { client } from "../config";
import { PROFILE_ENDPOINTS } from "./endpoints";
import { PromisedServerResponse } from "../../shared/models/axios";
import { ServerAdditionalUserInfo } from "../../modules/AdditionalInfo/components/AdditionalInfoForm/models";
import { AxiosResponse } from "axios";

export const registerUser = (body: { email: string; password: string; ref: string }): PromisedServerResponse =>
    client.post(PROFILE_ENDPOINTS.registerUser(), body);

export const loginUser =
    (body: { email: string; password: string }) =>
    (): Promise<
        AxiosResponse<{
            status: boolean;
            msg: string;
            user_data: ServerAdditionalUserInfo;
        }>
    > =>
        client.post(PROFILE_ENDPOINTS.loginUser(), body);

export const confirmPhone = (body: { phone: string }): PromisedServerResponse =>
    client.post(PROFILE_ENDPOINTS.confirmPhone(), body);

export const addAdditionalUserInfo = (body: {
    birth_date: string;
    lname: string;
    name: string;
    sname: string;
    phone: string;
    gender_id: number;
}): PromisedServerResponse<ServerAdditionalUserInfo> => client.post(PROFILE_ENDPOINTS.addAdditionalInfo(), body);
