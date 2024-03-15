-- Seeds for departments with id and names
INSERT INTO department (id, name) VALUES
(1, 'Sales'),
(2, 'Engineering'),
(3, 'Finance'),
(4, 'Legal');

-- Seeds for roles with id, title, salary, and department
INSERT INTO role (id, title, salary, department_id) VALUES
(1, 'Sales Lead', 100000, 1),
(2, 'Software Engineer', 120000, 2),
(3, 'Salesman', 80000, 1),
(4, 'Legal Team Lead', 200000, 4),
(5, 'Engineering Lead', 200000, 2),
(6, 'Lawyer', 150000, 4);

-- Seeds for employees with id, name, roleID, and managerID
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES
(1, 'Greg', 'Smith', 1, NULL),
(2, 'Cynthia', 'Cruz', 5, NULL),
(3, 'Jerry', 'Jones', 3, 1),
(4, 'Sarah', 'Jackson', 2, 2),
(5, 'Peter', 'Parker', 4, NULL),
(6, 'Jeremy', 'Jackson', 4, 5);