export class NotificationService {
    sendReminderNotification(reminder: string): void {
        console.log(`Reminder: ${reminder}`);
        // Additional logic for sending reminder notifications can be added here
    }

    sendEmergencyAlert(alertMessage: string, contacts: string[]): void {
        contacts.forEach(contact => {
            console.log(`Sending alert to ${contact}: ${alertMessage}`);
            // Additional logic for sending emergency alerts can be added here
        });
    }
}