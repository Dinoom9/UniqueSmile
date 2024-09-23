/**
 * Function to validate an Israeli phone number
 * @param phoneNumber - The phone number to validate
 * @returns boolean - True if valid, otherwise false
 */
export const isValidIsraeliPhoneNumber = (phoneNumber: string): boolean => {
    // Remove any non-digit characters (like spaces or dashes)
    const cleanedNumber = phoneNumber.replace(/\D/g, '');
    const israelPhoneRegex = /^(?:\+972|0)(?:2|[3-9]\d?)\d{7}$/;

    // Validate with regex
    const isValid = israelPhoneRegex.test(phoneNumber);

    // Additional check for exact number length
    return isValid && cleanedNumber.length === 10;
};
