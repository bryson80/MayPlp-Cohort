const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt')


app.use(express.json())
app.use(cors())

app.listen(3000, () => {
    console.log("sever is running on PORT 3000")
})