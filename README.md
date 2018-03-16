## This project was  Simple Library System used React & Nodejs.
Simple Library System Solution to Add and List Books

### Proposed Solution
- Admin should be able to add books
- Admin should be able to view the added book as a list
- Admin should be able to delete books

### Technologies​
- Frontend : ReactJS and Redux with CSS framework
- Backend Service: Node JS - Express
- Database: Mysql, but used [Stored Procedures](https://dev.mysql.com/doc/connector-net/en/connector-net-tutorials-stored-procedures.html) also.
```
  connection.query('call addBook("'+makeid()+'","'+ req.body.title+'")', function (error, results, fields) {
    connection.release();
    //response code here
  });
```
### prepare database

- create database name with [librarybook](https://dev.mysql.com/doc/refman/5.7/en/creating-database.html)
- import sql file into database `db.sql`

### Install dependency and start server(node project/backend)
> `npm install nodemon -g`  Install [nodemon](https://www.npmjs.com/package/nodemon) globaly.<br>
> go to the server directory `cd server`<br>
> `npm install` Install dependency.<br>
> `npm start ` start the server


### Install dependency and start client (react project/Frontend)
>  go to the client directory `cd client`<br>
> `npm install` Install dependency.<br>
> `npm start `

## Something Missing?

If you have ideas for more “How To” recipes that should be on this page, [let me know](https://github.com/sivatharan/React-and-Nodejs-Simple-Library-System/issues) or [contribute some!](https://github.com/sivatharan/React-and-Nodejs-Simple-Library-System/blob/master/README.md)