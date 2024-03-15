require('dotenv').config();
const mysql = require('mysql2');
// sets up sql connection using env
const sqlConnection = mysql.createConnection({
    host: 'localhost',
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
});
// connects to db and logs if connection is successful
sqlConnection.connect((err) => {
    if(err) {
        console.log('Unable to connect');
    } else {
        console.log('Successfully connected');
    }
});

module.exports = sqlConnection;