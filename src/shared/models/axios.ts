import { AxiosResponse } from "axios";

export interface ServerFormValidationError {
    field: string;
    message: string[];
    messageLocaliseId: string[];
}

export type BaseFormServerValidation = { status: string; message: string; errors: ServerFormValidationError[] };

export interface CommonServerResponse<DataT> {
    status: boolean;
    msg: string;
    data: DataT;
}

export interface CommonServerListResponse<DataT> extends Pick<CommonServerResponse<DataT>, "status" | "msg"> {
    data: DataT[];
    total: number;
}

export enum ResponseStatuses {
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    NOT_EXECUTABLE_CONTENT = 422,
    SERVER_ERROR = 500,
}
export type PromisedServerResponse<DataT = null> = Promise<ServerResponse<DataT>>;

export type ServerResponse<DataT = null> = AxiosResponse<CommonServerResponse<DataT>>;
