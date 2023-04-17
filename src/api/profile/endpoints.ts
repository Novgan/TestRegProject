export const PROFILE_ENDPOINTS = {
    root: "profile",
    registerUser() {
        return `${this.root}/registration`;
    },
    addAdditionalInfo() {
        return `${this.root}/profileCreate`;
    },
    confirmPhone() {
        return `${this.root}/confirmPhoneSendSms`;
    },
    confirmEmail(token: string, ref: string) {
        return `${this.root}/confirmEmail?data={"token":"${token}","ref":"${ref}"}`;
    },
};
