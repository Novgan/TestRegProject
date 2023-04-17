import { object, ref, string } from "yup";
import { VALIDATION_MESSAGES } from "../../../../shared/validation/messages";
import { REGEX_VALIDATION } from "../../../../shared/validation/rules";

const FORM_FIELDS = {
    EMAIL: "E-mail",
    PASSWORD: "Password",
    PASSWORD_CONFIRMATION: "Password confirmation",
};

export const schema = object().shape({
    email: string()
        .required(VALIDATION_MESSAGES.REQUIRED(FORM_FIELDS.EMAIL))
        .matches(REGEX_VALIDATION.EMAIL, VALIDATION_MESSAGES.ENTER_VALID(FORM_FIELDS.EMAIL)),
    password: string()
        .required(VALIDATION_MESSAGES.REQUIRED(FORM_FIELDS.PASSWORD))
        .min(8, VALIDATION_MESSAGES.MIN_LENGTH_SYMBOLS(FORM_FIELDS.PASSWORD, 8))
        .max(14, VALIDATION_MESSAGES.MAX_LENGTH_SYMBOLS(FORM_FIELDS.PASSWORD, 14))
        .matches(REGEX_VALIDATION.PASSWORD, VALIDATION_MESSAGES.ENTER_VALID_PASSWORD),
    passwordConfirmation: string()
        .required(VALIDATION_MESSAGES.REQUIRED(FORM_FIELDS.PASSWORD_CONFIRMATION))
        .oneOf([ref("password")], VALIDATION_MESSAGES.CONFIRM_PASSWORD),
});
