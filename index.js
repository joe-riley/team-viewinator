const express = require('express');
const { prompt } = require('inquirer');
const handlebars = require('express-handlebars');
const Handlebars = require('handlebars');
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

const employees = [];

const addManager = [
    {
        type: 'input',
        name: 'firstName',
        message: 'Please enter the manager\'s first name.',
    },
    {
        type: 'input',
        name: 'lastName',
        message: 'Please enter the manager\'s last name.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter the manager\'s email address.',
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Please enter the manager\'s office number.',
    },
]


const addEmployee = [
    {
        type: 'list',
        name: 'roll',
        message: 'Would you like to create an Engineer or an Intern?',
        choices: [
            'Engineer',
            'Intern',
        ]
    },
    {
        type: 'input',
        name: 'firstName',
        message: 'Enter the employee\'s first name.',
    },
    {
        type: 'input',
        name: 'lastName',
        message: 'Enter the employee\'s last name.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter the employee\'s email.',
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is the Engineer\'s github username?',
        when: (answers) => answers.roll === 'Engineer',
    },
    {
        type: 'input',
        name: 'school',
        message: 'What is the Intern\'s school?',
        when: (answers) => answers.roll === 'Intern',
    },
    {
        type: 'confirm',
        name: 'newEmployee',
        message: 'Would you like to add another employee?'
    }
]

const incrementId = () =>  employees.length + 1;


async function createManager () {
    try {
        return prompt(addManager).then((answers) => {
            employees.push(new Manager(incrementId(),
                answers.firstName,
                answers.lastName,
                answers.email,
                answers.officeNumber,
            ));
        })
    } catch (error) {
        throw error;
    }
}

async function createEmployees () {
    try {
        return prompt(addEmployee).then((answers) => {
            if (answers.roll === 'Intern') {
                employees.push(new Intern(incrementId(), 
                    answers.firstName, 
                    answers.lastName, 
                    answers.email, 
                    answers.school));
            }

            if (answers.roll === 'Engineer') {
                employees.push(new Intern(incrementId(), 
                    answers.firstName, 
                    answers.lastName, 
                    answers.email, 
                    answers.githubUsername
                ));
            }

            if (answers.newEmployee === true) {
                return createEmployees();
            }
        });
    } catch (error) {
        throw error;
    }
}


const createTestEmployees = () => {
    for (let index = 0; index < startingEmployees.length; index++){
        const employee = startingEmployees[index];
        if (employee.roll === 'Engineer') {
            employees.push(new Engineer(incrementId(), 
                employee.firstName,
                employee.lastName,
                employee.email,
                employee.additionalInfoValue,
                )
            )
        }
        if (employee.roll === 'Intern') {
            employees.push(new Intern(incrementId(), 
                employee.firstName,
                employee.lastName,
                employee.email,
                employee.additionalInfoValue,
                ) 
            )
        }
        if (employee.roll === 'Manager') {
            employees.push(new Manager(incrementId(), 
                employee.firstName,
                employee.lastName,
                employee.email,
                employee.additionalInfoValue,
                ) 
            )
        }
    };
}

app.get('/', (req, res) => {
    res.render('main', {layout: 'index', employees: employees});
})

async function startWebServer () {
    app.listen(port, () => {
        // eslint-disable-next-line no-console
        console.log(`App listening to port ${port}`);
    });

}

async function main () {
  await createManager();
  await createEmployees();
  await startWebServer();
  console.log('You may copy the source of the page wherever you would like.');
}

main();
