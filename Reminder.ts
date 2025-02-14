class Reminder {
    constructor(title, description, dateTime) {
        this.title = title;
        this.description = description;
        this.dateTime = dateTime;
        this.isCompleted = false;
    }

    setReminder(title, description, dateTime) {
        this.title = title;
        this.description = description;
        this.dateTime = dateTime;
    }

    markAsCompleted() {
        this.isCompleted = true;
    }

    getReminderDetails() {
        return {
            title: this.title,
            description: this.description,
            dateTime: this.dateTime,
            isCompleted: this.isCompleted,
        };
    }
}

export default Reminder;