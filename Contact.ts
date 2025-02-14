class Contact {
    constructor(public name: string, public phone: string, public email?: string) {}

    updateContact(name: string, phone: string, email?: string) {
        this.name = name;
        this.phone = phone;
        if (email) {
            this.email = email;
        }
    }

    getContactInfo() {
        return {
            name: this.name,
            phone: this.phone,
            email: this.email,
        };
    }
}

export default Contact;