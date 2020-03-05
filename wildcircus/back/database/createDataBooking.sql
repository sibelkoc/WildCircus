DROP database IF EXISTS booking_db;

CREATE database booking_db;

USE booking_db;

CREATE TABLE users (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    lastname VARCHAR(100) NOT NULL,
    firstname VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(200) NOT NULL,
    phone VARCHAR(45) NOT NULL,
);


CREATE TABLE bookings (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    date DATE NOT NULL,
    hour FLOAT NOT NULL,
    price FLOAT NOT NULL,
    user_id INT,
);

ALTER TABLE bookings
    ADD CONSTRAINT fk_orders__user_id FOREIGN KEY (user_id) REFERENCES users(id),




