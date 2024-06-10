const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

const dbConfig = {
  host: 'db',
  user: 'company',
  password: 'company',
  database: 'company'
};

let connection;

function connectWithRetry() {
  connection = mysql.createConnection(dbConfig);
  
  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err);
      setTimeout(connectWithRetry, 5000); // Retry connection after 5 seconds
    } else {
      console.log('Connected to the database');
    }
  });
}

connectWithRetry();

app.get('/departments', (req, res) => {
  connection.query('SELECT * FROM department', (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

app.get('/employees', (req, res) => {
  connection.query('SELECT * FROM employee', (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
