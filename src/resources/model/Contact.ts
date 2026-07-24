interface Contact {
    firstName: string;
    lastName: string;
    dateOfBirth: string; // ISO format: YYYY-MM-DD
    email: string;
    phone: string;
    address1: string;
    address2?: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
}