
create database  mini_task;

use mini_task;

CREATE TABLE tasks (
    id int auto_increment primary key,
    task VARCHAR(255) NOT NULL,
    createdAt DATETIME NOT NULL default CURRENT_TIMESTAMP,
    status ENUM('active', 'completed') NOT NULL default 'active'
);
