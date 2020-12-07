const Employee = require('./Employee');

class Intern extends Employee {
    constructor(id, firstName, lastName, email, school) {
        super(id, firstName, lastName, email);
        this.additionalInfoLabel = 'School';
        this.additionalInfoValue = school;
        this.roll = 'Intern';
    }

    getAddtionalInfo() {
        return this.additionalInfo;
    }
}

module.exports = Intern;