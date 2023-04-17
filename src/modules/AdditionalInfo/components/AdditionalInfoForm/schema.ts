import { object, string } from "yup";
import { VALIDATION_MESSAGES } from "../../../../shared/validation/messages";

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
    birthday: string().required(VALIDATION_MESSAGES.REQUIRED(FORM_FIELDS.BIRTHDAY)),
    sex: string().required(VALIDATION_MESSAGES.REQUIRED(FORM_FIELDS.SEX)),
    phone: string().required(VALIDATION_MESSAGES.REQUIRED(FORM_FIELDS.PHONE)),
});
