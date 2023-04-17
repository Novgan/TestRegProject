export const PROFILE_ENDPOINTS = {
    root: "profile",
    registerUser() {
        return `${this.root}/registration`;
    },
    loginUser() {
        return `${this.root}/loginUser`;
    },
    addAdditionalInfo() {
        return `${this.root}/profileCreate`;
    },
    confirmPhone() {
        return `${this.root}/confirmPhoneSendSms`;
    },
};
