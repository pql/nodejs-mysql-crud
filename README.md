# node-mysql-crud
用 nodejs 来完成 mysql 的增删该查，然后运用 restful 来完成接口的提供
```
create database db_test;

use db_test;

CREATE TABLE users (
id int(11) NOT NULL auto_increment,
name varchar(100) NOT NULL,
age int(3) NOT NULL,
PRIMARY KEY (id)
);
```
