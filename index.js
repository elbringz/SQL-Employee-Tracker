const query = require('./queries/queries');
const inquirer = require('inquirer');



function init() {
    // prompts user to choose an option
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'action',
                message: 'Choose from the options below.',
                choices: [
                    'View roles',
                    'View departments',
                    'View employees',
                    'Add role',
                    'Add department',
                    'Add employee',
                    'Update a role',
                    'Quit',
                ],
            },
        ])
        .then((choice) => {
            switch (choice.action) {
                // checks which option is selected and calls the corresponding query
                case 'View roles' :
                    query.viewRoles()
                    .then(([rows, fields]) => {
                        console.table(rows);
                        init();
                    })
                    .catch((err) => {
                        console.error(err);
                        init();
                    });
                break;
                
                case 'View departments' :
                    query.viewDepartments()
                    .then(([rows, fields]) => {
                        console.table(rows);
                        init();
                    })
                    .catch((err) => {
                        console.error(err);
                        init();
                    });
                break;

                case 'View employees' :
                    query.viewEmployees()
                    .then(([rows, fields]) => {
                        console.table(rows);
                        init();
                    })
                    .catch((err) => {
                        console.error(err);
                        init();
                    });
                break;

                case 'Add role' :
                    // If role requiring input is selected, creates prompts for inputs
                    inquirer
                        .prompt([
                            {
                                type: 'input',
                                name: 'title',
                                message: 'Enter the role title.',
                            },
                            {
                                type: 'input',
                                name: 'salary',
                                message: 'Enter the role salary',
                            },
                            {
                                type: 'input',
                                name: 'department',
                                message: 'Enter the department ID',
                            },
                        ])
                        .then((data) => {
                            // populates query params with prompt input data
                            query.newRole(data.title, data.salary, data.department)
                            .then(([rows, fields]) => {
                                console.log('Role added.');
                                init();
                            })
                            .catch((err) => {
                                console.error(err);
                                init();
                            });
                        });
                break;

                case 'Add department' :
                    inquirer
                        .prompt([
                            {
                                type: 'input',
                                name: 'title',
                                message: 'Enter the department name',
                            },
                        ])
                        .then((data) => {
                            query.newDepartment(data.title)
                            .then(([rows, fields]) => {
                                console.log('Department added');
                                init();
                            })
                            .catch((err) => {
                                console.error(err);
                                init();
                            });
                        });
                break;

                case 'Add employee' :
                    inquirer
                        .prompt([
                            {
                                type: 'input',
                                name: 'first',
                                message: 'Enter employee first name',
                            },
                            {
                                type: 'input',
                                name: 'last',
                                message: 'Enter employee last name',
                            },
                            {
                                type: 'input',
                                name: 'role',
                                message: 'Enter role id',
                            },
                            {
                                type: 'input',
                                name: 'manager',
                                message: 'Enter employee manager id',
                            },
                        ])
                        .then((data) => {
                            query.newEmployee(data.first, data.last, data.role, data.manager)
                            .then(([rows, fields]) => {
                                console.log('Employee added');
                                init();
                            })
                            .catch((err) => {
                                console.error(err);
                                init();
                            });
                        });
                break;

                case 'Update a role' :
                    inquirer
                        .prompt([
                            {
                                type: 'input',
                                name: 'employeeID',
                                message: 'Enter the employee id',
                            },
                            {
                                type: 'input',
                                name: 'roleID',
                                message: 'Enter the new role id',
                            },
                        ])
                        .then((data) => {
                            query.changeRole(data.employeeID, data.roleID)
                            .then(([rows, fields]) => {
                                console.log('Employee updated');
                                init();
                            })
                            .catch((err) => {
                                console.error(err);
                                init();
                            });
                        });
                break;
                        // if user selects quit option, exits process
                case 'Quit' :
                    process.exit(0);
                
                    // If action is invalid, log error
                default:
                    console.log('Error');
                    init();
            }
        })
}   
// calls init function
init();