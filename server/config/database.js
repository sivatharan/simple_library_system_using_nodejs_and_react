/**
 * @author A.Sivatharan
 * created on 14.03.2018
 */
var mysql  = require('mysql');
const db_config = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'librarybook'
}

const pool  = mysql.createPool(db_config);

module.exports = pool;