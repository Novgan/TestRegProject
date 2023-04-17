import { object, ref, string } from "yup";
import { REGEX_VALIDATION } from "../../../../../../shared/validation/rules";
import { VALIDATION_MESSAGES } from "../../../../../../shared/validation/messages";

const FORM_FIELDS = {
    EMAIL: "E-mail",
    PASSWORD: "Password",
    PASSWORD_CONFIRMATION: "Password confirmation",
};

export const schema = object().shape({
    email: string()
        .required(VALIDATION_MESSAGES.REQUIRED(FORM_FIELDS.EMAIL))
        .matches(REGEX_VALIDATION.EMAIL, VALIDATION_MESSAGES.ENTER_VALID(FORM_FIELDS.EMAIL)),
    password: string().required(VALIDATION_MESSAGES.REQUIRED(FORM_FIELDS.PASSWORD)),
    passwordConfirmation: string()
        .required(VALIDATION_MESSAGES.REQUIRED(FORM_FIELDS.PASSWORD_CONFIRMATION))
        .oneOf([ref("password")], VALIDATION_MESSAGES.CONFIRM_PASSWORD),
});
