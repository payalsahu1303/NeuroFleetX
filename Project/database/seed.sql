CREATE DATABASE neurofleetx;
USE neurofleetx;

CREATE TABLE users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    role VARCHAR(50) NOT NULL
);

INSERT INTO users (name, email, password, role)
VALUES ('Admin User', 'admin@neurofleetx.com', 'admin123', 'ADMIN');


