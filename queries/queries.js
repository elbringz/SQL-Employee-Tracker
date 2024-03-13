const connection = require('../config/connection');


function viewEmployees() {
    const query = `
    SELECT
        employee.id AS \`Employee Id\`,
        role.title AS \`Employee Role\`,
        employee.first_name AS \`First name\`,
        employee.last_name AS \`Last name\`,
        department.name AS \`Department\`,
        role.salary AS \`Salary\`,
        employee.manager_id AS \`Manager Id\`,
    FROM
        employee
    INNER JOIN
        department ON role.department_id = department.id
    INNER JOIN
        role ON employee.role_id = role.id
        `;
    return connection.promise().query(query);
};

function viewRoles() {
    const query = `
    SELECT
        role.id AS \`Role Id\`,
        role.salary AS \`Salary\`,
        role.title AS \`Title\`,
        department.name AS \`Department\`,
    FROM
        role
    INNER JOIN
        department ON role.department_id = department.id
        `;
    return connection.promise().query(query);
};

function viewDepartments() {
    const query = `
    SELECT
        department.id AS \`Department Id\`,
        department.name AS \`Department\`,
    FROM
        department
        `;
    return connection.promise().query(query);
};

function newEmployee(firstName, lastName, roleId, managerId) {
    const manager = managerId === '' ? null : managerId;
    const query = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';
    return connection.promise().query(query, [firstName, lastName, roleId, manager]);
};

function changeRole(employeeId, newRole) {
    const query = 'UPDATE employee SET role_id = ? WHERE id = ?';
    return connection.promise().query(query, [newRole, employeeId]);
};

function newRole(title, salary, department) {
    const query = 'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?, ?)';
    return connection.promise().query(query, [title, salary, department]);
};

function newDepartment(department) {
    const query = 'INSERT INTO department (name) VALUES (?)';
    return connection.promise(),query(query, [department]);
};

module.exports = {
    viewEmployees,
    viewRoles,
    viewDepartments,
    newEmployee,
    changeRole,
    newRole,
    newDepartment,
};