import { isString, isArray, isPlainObject, isEmpty, filter, map, pickBy, mapValues, isNull } from "lodash";
import { REGEX_VALIDATION } from "../validation/rules";

export const deepTrim = (object: Record<string, unknown> | string | Array<unknown>): unknown => {
    if (isString(object)) {
        return trimString(object);
    }
    if (isArray(object)) return sanitizeArray(object);
    if (isPlainObject(object)) return sanitizeObject(object);
    return object;
};

function trimString(string: string): string {
    return isEmpty(string)
        ? string
        : string
              .replace(REGEX_VALIDATION.NON_WHITESPACE_CHARACTERS_EXCLUDE_NEW_LINE, " ")
              .replace(REGEX_VALIDATION.NEW_LINE_CHARACTERS, "\n")
              .trim();
}

function sanitizeArray(array: Array<unknown>) {
    return filter(map(array, deepTrim), isProvided);
}

function sanitizeObject(object: Record<string, unknown>) {
    return pickBy(mapValues(object, deepTrim), isProvided);
}

function isProvided(value: unknown) {
    return !isNull(value) || !isString(value) || !isArray(value) || !isPlainObject(value);
}
