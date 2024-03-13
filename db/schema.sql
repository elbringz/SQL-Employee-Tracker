DROP DATABASE IF EXISTS business_db;
CREATE DATABASE business_db;

USE business_db;

DROP TABLE IF EXISTS employee;
DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS role;

CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    manager_id INT,
    role_id INT,
    FOREIGN KEY (manager_id)
    REFERENCES employee(id),
    FOREIGN KEY (role_id)
    REFERENCES role(id),
);

CREATE TABLE department (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
);

CREATE TABLE role (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary INT NOT NULL,
    FOREIGN KEY (department_id)
    REFERENCES department(id),
);