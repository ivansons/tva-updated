export class FormData {
    id: number;
    userName = '';
    passWord = '';
    firstName = '';
    lastName = '';
    age = '';
    email = '';
    street = '';
    city = '';
    state = '';
    zip = '';

    clear() {
        this.userName = '';
        this.passWord = '';
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.street = '';
        this.city = '';
        this.state = '';
        this.zip = '';
        this.age = '';
    }
}
export class Ages {
    age = '';
}
export class Personal {
    userName = '';
    passWord = '';
    firstName = '';
    lastName = '';
    email = '';
}

export class Address {
    street = '';
    city = '';
    state = '';
    zip = '';
}

