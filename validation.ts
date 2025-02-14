export function validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

export function validatePhoneNumber(phone: string): boolean {
    const re = /^\+?[1-9]\d{1,14}$/;
    return re.test(String(phone));
}

export function validateReminderTime(time: string): boolean {
    const re = /^(0[0-9]|1[0-2]):[0-5][0-9] (AM|PM)$/;
    return re.test(String(time));
}

export function validateNotEmpty(value: string): boolean {
    return value.trim().length > 0;
}