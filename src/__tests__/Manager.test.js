const { it, beforeEach, expect } = require('@jest/globals');
const Manager = require('../../src/lib/Manager');

describe('Test that a manager can be created and can', () => {
    beforeEach(() => {
        this.employee = new Manager(1, 'Joe', 'Riley', 'joe@joe.joe', 73);
    });

    it('get the Id of the manager.', () => {
        expect(this.employee.getId === 1);
    })

    it('get the full name of the manager.', () => {
        expect(this.employee.getFullName() === 'Joe Riley');
    })

    it('get the email address of the manager.', () => {
        expect(this.employee.getEmail() === 'joe@joe.joe');
    })

    it('get the roll of the manager.', () => {
        expect(this.employee.getRoll() === 'Manager');
    })

    it('get the git hub username of the engineer.', () => {
        expect(this.employee.getOfficeNumber() === 73);
    })
})