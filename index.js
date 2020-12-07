const express = require('express');
const handlebars = require('express-handlebars');
const startingEmployees = require('./src/__mocks__/employees')
const Engineer = require('./src/lib/Engineer');
const Manager = require('./src/lib/Manager');
const Intern = require('./src/lib/Intern');

const app = express();
const port = 3001; 

app.set('view engine', 'hbs');
app.set('views', `${__dirname}/src/views`)

app.engine('hbs', handlebars({
    layoutsDir: `${__dirname}/src/views/layouts`,
    extname: 'hbs',
    partialsDir: `${__dirname}/src/views/partials`,
}));

app.use(express.static(`${__dirname}/src/public`));

// Load some employees to play around with
const employees = [];
for (let index = 0; index < startingEmployees.length; index++){
    const employee = startingEmployees[index];
    if (employee.roll === 'Engineer') {
        employees.push(new Engineer(index, 
            employee.firstName,
            employee.lastName,
            employee.email,
            employee.gitHub,
            )
        )
    }
    if (employee.roll === 'Intern') {
        employees.push(new Intern(index, 
            employee.firstName,
            employee.lastName,
            employee.email,
            employee.school,
            ) 
        )
    }
    if (employee.roll === 'Manager') {
        employees.push(new Manager(index, 
            employee.firstName,
            employee.lastName,
            employee.email,
            employee.officeNumber,
            ) 
        )
    }
};

app.get('/', (req, res) => {
    res.render('main', {layout: 'index', employees: employees});
})

app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`App listening to port ${port}`);
});
