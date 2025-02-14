export class User {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public phone: string,
        public address: string,
        public dateOfBirth: Date,
        public emergencyContacts: Contact[] = []
    ) {}

    updateProfile(name: string, email: string, phone: string, address: string): void {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
    }

    addEmergencyContact(contact: Contact): void {
        this.emergencyContacts.push(contact);
    }

    removeEmergencyContact(contactId: string): void {
        this.emergencyContacts = this.emergencyContacts.filter(contact => contact.id !== contactId);
    }

    getProfile(): object {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            phone: this.phone,
            address: this.address,
            dateOfBirth: this.dateOfBirth,
            emergencyContacts: this.emergencyContacts
        };
    }
}