
class Employee {
    constructor(id, firstName, lastName, email) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.additionalInfoLabel = null;
        this.additionalInfoValue = '';
        this.roll = 'Employee';
    }

    getId() {
        return this.id;
    }
    
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }

    getEmail() {
        return this.email;
    }

    getRoll() {
        return this.roll;
    }

    getAddtionalInfo() {
        return `${this.addtionalInfoLabel}: ${this.additionalInfoValue}`;
    }

}

module.exports =  Employee;
