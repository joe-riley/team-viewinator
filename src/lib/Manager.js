const Employee = require('./Employee');

class Manager extends Employee {
    constructor(id, firstName, lastName, email, officeNumber) {
        super(id, firstName, lastName, email);
        this.officeNumber = officeNumber;
        this.roll = 'Manager';
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

}

module.exports = Manager;
