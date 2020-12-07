const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(id, firstName, lastName, email, gitHub) {
        super(id, firstName, lastName, email);
        this.additionalInfoLabel = 'GitHub Username';
        this.additionalInfoValue = `<a href="https://gitHub.com/${gitHub}" target="_blank">${gitHub}</a>`;
        this.roll = 'Engineer';
    }

    getAddtionalInfo() {
        return this.additionalInfo;
    }
}

module.exports = Engineer;