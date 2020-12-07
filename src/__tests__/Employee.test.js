const { it, beforeEach, expect } = require('@jest/globals');
const Employee = require('../../src/lib/Employee');

describe('Test that an employee can be created and can', () => {
    beforeEach(() => {
        this.employee = new Employee(1, 'Joe', 'Riley', 'joe@joe.joe');
    });

    it('get the Id of the employee.', () => {
        expect(this.employee.getId === 1);
    })

    it('get the full name of the employee.', () => {
        expect(this.employee.getFullName() === 'Joe Riley');
    })

    it('get the email address of the employee.', () => {
        expect(this.employee.getEmail() === 'joe@joe.joe');
    })

    it('get the roll of the employee.', () => {
        expect(this.employee.getRoll() === 'Employee');
    })
});
