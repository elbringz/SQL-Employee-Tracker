const connection = require('../config/connection');


function viewEmployees() {
    const query = `
    SELECT
        employee.id AS \`Employee Id\`,
        role.title AS \`Employee Role\`,
        `
}