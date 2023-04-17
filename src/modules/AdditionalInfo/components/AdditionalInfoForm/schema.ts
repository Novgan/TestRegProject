import { object, string } from "yup";
import { VALIDATION_MESSAGES } from "../../../../shared/validation/messages";
import { REGEX_VALIDATION } from "../../../../shared/validation/rules";

const FORM_FIELDS = {
    LAST_NAME: "Last name",
    FIRST_NAME: "First name",
    MIDDLE_NAME: "Middle name",
    BIRTHDAY: "Birthday",
    SEX: "Sex",
    PHONE: "Phone",
};

export const schema = object().shape({
    lastName: string().required(VALIDATION_MESSAGES.REQUIRED(FORM_FIELDS.LAST_NAME)),
    firstName: string().required(VALIDATION_MESSAGES.REQUIRED(FORM_FIELDS.FIRST_NAME)),
    middleName: string().required(VALIDATION_MESSAGES.REQUIRED(FORM_FIELDS.MIDDLE_NAME)),
    birthday: string()
        .required(VALIDATION_MESSAGES.REQUIRED(FORM_FIELDS.BIRTHDAY))
        .matches(REGEX_VALIDATION.BIRTHDAY, VALIDATION_MESSAGES.ENTER_VALID(FORM_FIELDS.BIRTHDAY)),
    sex: string().required(VALIDATION_MESSAGES.REQUIRED(FORM_FIELDS.SEX)),
    phone: string()
        .required(VALIDATION_MESSAGES.REQUIRED(FORM_FIELDS.PHONE))
        .matches(REGEX_VALIDATION.UKRAINIAN_PHONE, VALIDATION_MESSAGES.ENTER_VALID(FORM_FIELDS.PHONE)),
});
