const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'testosterona',
  database : 'nita'
});
module.exports  =  connection;
