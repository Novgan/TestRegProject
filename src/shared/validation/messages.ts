export const VALIDATION_MESSAGES = {
    EQUAL_LENGTH_SYMBOLS: (fieldName: string, length: number) => `${fieldName} should be ${length} symbols`,
    MIN_LENGTH_SYMBOLS: (fieldName: string, minLength: number) =>
        `${fieldName} should be greater than ${minLength} symbols`,
    MAX_LENGTH_SYMBOLS: (fieldName: string, maxLength: number) =>
        `${fieldName} should be equal or less than ${maxLength} symbols`,
    REQUIRED: (fieldName: string) => `${fieldName} is required`,
    ENTER_VALID: (fieldName: string) => `Please, enter a valid ${fieldName.toLowerCase()}`,
    ENTER_VALID_PASSWORD: "The password must consist of Latin letters (A-z), Arabic numerals (0-9)",
    CONFIRM_PASSWORD: "Confirm passwords must match",
};
