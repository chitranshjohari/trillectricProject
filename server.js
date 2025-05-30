const express = require('express');
const dotenv = require("dotenv").config();
const connection = require('./config/dbconnection');
const port = process.env.PORT;
connection();
const app = express();
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
})