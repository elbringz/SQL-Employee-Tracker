const sqlConnection = require('../config/connection');

// Grabs all employee data from table and returns it
function viewEmployees() {
    const query = `
    SELECT
        employee.id AS \`Employee Id\`,
        employee.first_name AS \`First name\`,
        employee.last_name AS \`Last name\`,
        role.title AS \`Employee Role\`,
        department.name AS \`Department\`,
        role.salary AS \`Salary\`,
        employee.manager_id AS \`Manager Id\`
    FROM
        employee
    INNER JOIN
        role ON employee.role_id = role.id
    INNER JOIN
        department ON role.department_id = department.id
        `;
    return sqlConnection.promise().query(query);
};
// grabs all role data from table and returns
function viewRoles() {
    const query = `
    SELECT
        role.id AS \`Role Id\`,
        role.salary AS \`Salary\`,
        role.title AS \`Title\`,
        department.name AS \`Department\`
    FROM
        role
    INNER JOIN
        department ON role.department_id = department.id
        `;
    return sqlConnection.promise().query(query);
};
// grabs all department data from table and returns it
function viewDepartments() {
    const query = `
    SELECT
        department.id AS \`Department Id\`,
        department.name AS \`Department\`
    FROM
        department
        `;
    return sqlConnection.promise().query(query);
};

// sets params for new employees and inserts data into table when given
function newEmployee(firstName, lastName, roleId, managerId) {
    const manager = managerId === '' ? null : managerId;
    const query = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';
    return sqlConnection.promise().query(query, [firstName, lastName, roleId, manager]);
};
// takes employee id and new role id and updates the employee
function changeRole(employeeId, newRole) {
    const query = 'UPDATE employee SET role_id = ? WHERE id = ?';
    return sqlConnection.promise().query(query, [newRole, employeeId]);
};
// accepts data to create new role and adds it to roles table
function newRole(title, salary, department) {
    const query = 'INSERT INTO role(title, salary, department_id) VALUES (?, ?, ?)';
    return sqlConnection.promise().query(query, [title, salary, department]);
};
// accepts department title and adds it to department table
function newDepartment(department) {
    const query = 'INSERT INTO department (name) VALUES (?)';
    return sqlConnection.promise().query(query, [department]);
};
// exports all queries
module.exports = {
    viewEmployees,
    viewRoles,
    viewDepartments,
    newEmployee,
    changeRole,
    newRole,
    newDepartment,
};