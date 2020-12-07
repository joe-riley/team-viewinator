const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(id, firstName, lastName, email, gitHub) {
        super(id, firstName, lastName, email);
        this.gitHub = gitHub;
        this.roll = 'Engineer';
    }

    getGitHub() {
        return this.gitHub;
    }
}

module.exports = Engineer;