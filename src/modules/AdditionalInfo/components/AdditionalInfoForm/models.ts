export interface AdditionalInfoFormProps {
    onLogoutHandler: () => void;
    isFetching: boolean;
}
export interface AdditionalInfoFormFields {
    lastName: string;
    firstName: string;
    middleName: string;
    birthday: string;
    sex: string;
    phone: string;
    email: string;
}

export interface ServerAdditionalUserInfo {
    id: number;
    token: string;
    is_confirm_email: number;
    is_confirm_phone: number;
    is_profile_created: number;
    email: string;
    phone: string;
    password: string;
    lname: string;
    name: string;
    sname: string;
    birth_date: string;
    reset_password_token: string;
    confirm_phone_code: string;
    gender_id: number;
}
