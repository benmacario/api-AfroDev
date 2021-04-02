const mysql = require('mysql');

const conexao = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'afro9i5sR16dev',
  database: 'afrodev'
});

module.exports = conexao;