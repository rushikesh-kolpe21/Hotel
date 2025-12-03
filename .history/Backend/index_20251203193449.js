const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const mongoose = require('mongoose'); 
const PORT = process.env.PORT || 5000;

require('dotenv').config(); // Load environment variables
require('./Models/dbConn'); // only checking connection

app.use(cors()); // 
app.use(bodyParser.json());


const menuRouter = require('./Routers/Menu');
app.use("/api/menu", menuRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});