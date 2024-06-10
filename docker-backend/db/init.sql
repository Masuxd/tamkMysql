-- Create the department table
CREATE TABLE IF NOT EXISTS department (
    department_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NULL
);

-- Create the employee table
CREATE TABLE IF NOT EXISTS employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fname VARCHAR(255) NOT NULL,
    lname VARCHAR(255) NOT NULL,
    salary FLOAT NULL,
    bdate DATE NOT NULL,
    department_department_id INT NOT NULL,
    CONSTRAINT fk_employee_department FOREIGN KEY (department_department_id)
        REFERENCES department (department_id)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION
);

-- Debug: Check if tables are created
SHOW TABLES;

-- Insert data into the department table
INSERT INTO department (name) VALUES 
('HR'), 
('IT'), 
('Finance'), 
('Marketing');

-- Debug: Check data in the department table
SELECT * FROM department;

-- Insert data into the employee table
INSERT INTO employee (fname, lname, salary, bdate, department_department_id) VALUES 
('John', 'Doe', 50000, '1990-01-01', 1), 
('Jane', 'Smith', 60000, '1991-02-02', 2), 
('Alice', 'Johnson', 70000, '1992-03-03', 3), 
('Bob', 'Brown', 80000, '1993-04-04', 4);

-- Debug: Check data in the employee table
SELECT * FROM employee;
