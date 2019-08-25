const express = require('express');
const mysql = require('mysql');

const app = express();

const db = mysql.createConnection ({
    host: 'HOMIE\\SQLEXPRESS',
    user: 'MicrosoftAccount\\', //microsoft email after \\
    password: '',               //Microsoft account password/pin
    database: 'displaydb'
});

db.connect((err) => {
  if(err){
    throw err;
  }
  console.log('MySQL connected...');
});

app.listen(8080, function () {
    console.log('Server is running...');
});
