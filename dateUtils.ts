// filepath: /memory-assist-app/memory-assist-app/src/utils/dateUtils.ts

export function formatDate(date: Date, format: string): string {
    const options: Intl.DateTimeFormatOptions = {};
    
    if (format.includes('year')) options.year = 'numeric';
    if (format.includes('month')) options.month = 'long';
    if (format.includes('day')) options.day = 'numeric';

    return new Intl.DateTimeFormat('en-US', options).format(date);
}

export function isToday(date: Date): boolean {
    const today = new Date();
    return date.getFullYear() === today.getFullYear() &&
           date.getMonth() === today.getMonth() &&
           date.getDate() === today.getDate();
}

export function addDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

export function subtractDays(date: Date, days: number): Date {
    return addDays(date, -days);
}