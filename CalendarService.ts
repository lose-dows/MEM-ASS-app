export class CalendarService {
    private events: Array<{ date: string; title: string; description?: string }> = [];

    addEvent(date: string, title: string, description?: string): void {
        this.events.push({ date, title, description });
    }

    getEventsForDate(date: string): Array<{ title: string; description?: string }> {
        return this.events.filter(event => event.date === date);
    }

    removeEvent(date: string, title: string): void {
        this.events = this.events.filter(event => event.date !== date || event.title !== title);
    }

    getAllEvents(): Array<{ date: string; title: string; description?: string }> {
        return this.events;
    }
}