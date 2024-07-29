require("dotenv").config();

const express = require('express');

const colors = require('colors');

const db = require('./config/db')

const app = express();

const PORT = process.env.PORT || 5000 ;

app.listen(PORT, async () => {console.log(`Server Started at port ${PORT}`.bgBlue)
    await db();
    console.log("MongoDB Connected".bgGreen)
});