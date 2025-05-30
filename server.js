const express = require('express');
const dotenv = require("dotenv").config();
const connection = require('./config/dbconnection');
const port = process.env.PORT;
const app = express();
connection();
app.use(express.json())

const { addData, fetchdata } = require('./controller/DataController');
app.post('/api/add', addData);
app.get('/api/fetch/:id', fetchdata)
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
})