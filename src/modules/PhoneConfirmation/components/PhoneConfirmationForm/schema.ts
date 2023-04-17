import { object, string } from "yup";
import { VALIDATION_MESSAGES } from "../../../../shared/validation/messages";

const FORM_FIELDS = {
    CODE: "Code",
};

export const schema = object().shape({
    code: string().required(VALIDATION_MESSAGES.REQUIRED(FORM_FIELDS.CODE)),
});
