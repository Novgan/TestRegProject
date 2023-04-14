import { object, ref, string } from "yup";
import { VALIDATION_MESSAGES } from "../../../../shared/validation/messages";
import { REGEX_VALIDATION } from "../../../../shared/validation/rules";
import { deepTrim } from "../../../../shared/utils/string";

const FORM_FIELDS = {
    CODE: "Code",
};

export const schema = object().shape({
    code: string().required(VALIDATION_MESSAGES.REQUIRED(FORM_FIELDS.CODE)),
});
