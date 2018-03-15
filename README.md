## This project was React-and-Nodejs-Simple-Library-System.
Simple Library System Solution to Add and List Books

### Proposed Solution
- Admin should be able to add books
- Admin should be able to view the added book as a list
- Admin should be able to delete books

### Technologies​
- Frontend : ReactJS and Redux with a any CSS framework
- Backend Service: Node JS - Express
- Database: Mysql, but used [Stored Procedures](https://dev.mysql.com/doc/connector-net/en/connector-net-tutorials-stored-procedures.html) also.
```
  connection.query('call addBook("'+makeid()+'","'+ req.body.title+'")', function (error, results, fields) {
    connection.release();
    //response code here
  });
```
### prepare database
---
1.create database name with [librarybook](https://dev.mysql.com/doc/refman/5.7/en/creating-database.html)
2.get sql from  server/db.sql and import it
---