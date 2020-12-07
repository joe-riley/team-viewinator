const { it, beforeEach, expect } = require('@jest/globals');
const Intern = require('../../src/lib/Intern');

describe('Test that an employee can be created and can', () => {
    beforeEach(() => {
        this.employee = new Intern(1, 'Joe', 'Riley', 'joe@joe.joe', 'University of Texas - Austin');
    });

    it('get the Id of the intern.', () => {
        expect(this.employee.getId === 1);
    })

    it('get the full name of the intern.', () => {
        expect(this.employee.getFullName() === 'Joe Riley');
    })

    it('get the email address of the intern.', () => {
        expect(this.employee.getEmail() === 'joe@joe.joe');
    })

    it('get the roll of the intern.', () => {
        expect(this.employee.getRoll() === 'Intern');
    })

    it('get the git hub username of the engineer.', () => {
        expect(this.employee.getSchool() === 'University of Texas - Austin');
    })
})