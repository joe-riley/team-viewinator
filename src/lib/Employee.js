
class Employee {
    constructor(id, firstName, lastName, email) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
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

}

module.exports =  Employee;
