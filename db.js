// db.js
const mysql = require('mysql2/promise');

// Create the pool
const pool = mysql.createPool({
  host:     '127.0.0.1',
  user:     'ptb',
  password: '12345',
  database: 'test',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;
