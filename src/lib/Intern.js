const Employee = require('./Employee');

class Intern extends Employee {
    constructor(id, firstName, lastName, email, school) {
        super(id, firstName, lastName, email);
        this.school = school;
        this.roll = 'Intern';
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;