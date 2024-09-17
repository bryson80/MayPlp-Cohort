const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt')
const dotenv = require('dotenv');

// setting up the middleware
app.use(express.json());
app.use(cors());
dotenv.config();

// creating a connection
const dbConnect = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});

// Connect to the database server
dbConnect.connect((err) => {
    if(err) return console.log(err);
    console.log('Connected to the DB Server')
});