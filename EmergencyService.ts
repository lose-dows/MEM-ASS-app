class EmergencyService {
    private contacts: Contact[];

    constructor() {
        this.contacts = [];
    }

    addContact(contact: Contact): void {
        this.contacts.push(contact);
    }

    removeContact(contactId: string): void {
        this.contacts = this.contacts.filter(contact => contact.id !== contactId);
    }

    alertContacts(message: string): void {
        this.contacts.forEach(contact => {
            // Logic to send alert to the contact
            console.log(`Alert sent to ${contact.name}: ${message}`);
        });
    }

    getContacts(): Contact[] {
        return this.contacts;
    }
}