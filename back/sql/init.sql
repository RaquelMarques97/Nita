create database nita;
use nita;

CREATE TABLE client
(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(90) 
     
);

CREATE TABLE service
(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(90),    
    price INT
);

CREATE TABLE client_service
(
    client_service_id INTEGER PRIMARY KEY AUTO_INCREMENT,  
    date date,
    client_id INTEGER,
    service_id INTEGER,
    FOREIGN KEY (client_id) REFERENCES client(id),
    FOREIGN KEY (service_id) REFERENCES service(id)
);

