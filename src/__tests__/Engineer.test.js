const { it, beforeEach, expect } = require('@jest/globals');
const Engineer = require('../../src/lib/Engineer');

describe('Test that an employee can be created and can', () => {
    beforeEach(() => {
        this.employee = new Engineer(1, 'Joe', 'Riley', 'joe@joe.joe', 'joe-riley');
    });

    it('get the Id of the engineer.', () => {
        expect(this.employee.getId === 1);
    })

    it('get the full name of the engineer.', () => {
        expect(this.employee.getFullName() === 'Joe Riley');
    })

    it('get the email address of the engineer.', () => {
        expect(this.employee.getEmail() === 'joe@joe.joe');
    })

    it('get the roll of the engineer.', () => {
        expect(this.employee.getRoll() === 'Engineer');
    })

    it('get the git hub username of the engineer.', () => {
        expect(this.employee.getGitHub() === 'joe-riley');
    })
});