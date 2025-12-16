CREATE DATABASE ojas_school;
USE ojas_school;
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(100),
    role ENUM('student','teacher','parent'),
    standard VARCHAR(10),
    paid_until DATE
);
INSERT INTO users (name,email,password,role,standard,paid_until)
VALUES
('Student Demo','student@ojas.com','12345','student','10','2026-12-31'),
('Teacher Demo','teacher@ojas.com','12345','teacher',NULL,NULL),
('Parent Demo','parent@ojas.com','12345','parent',NULL,NULL);
