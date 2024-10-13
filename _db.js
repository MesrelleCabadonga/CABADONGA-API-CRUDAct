const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'cabadonga_mesrelle',
  password: 'cabadonga@123',
  database: 'movie_db'
  });