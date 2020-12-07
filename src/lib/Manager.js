const Employee = require('./Employee');

class Manager extends Employee {
    constructor(id, firstName, lastName, email, officeNumber) {
        super(id, firstName, lastName, email);
        this.additionalInfoLabel = 'Office Number';
        this.additionalInfoValue = officeNumber;
        this.roll = 'Manager';
    }

    getAddtionalInfo() {
        return this.additionalInfo;
    }

}

module.exports = Manager;
