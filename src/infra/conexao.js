const mysql = require('mysql');

const conexao = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'afrodev',
  password: 'afro9i5sR16dev',
  database: 'afrodevAPI'
});

module.exports = conexao;