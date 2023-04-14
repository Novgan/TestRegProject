export interface LoginFormFields {
    email: string;
    password: string;
}

export interface LoginResponse {
    access_token: string;
    expires_in: number;
    role: string | null;
    token_type: string;
}
