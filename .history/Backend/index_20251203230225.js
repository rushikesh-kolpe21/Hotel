const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const mongoose = require('mongoose'); 
const PORT = process.env.PORT || 5000;

require('dotenv').config(); // Load environment variables
require('./Models/dbConn'); // only checking connection

app.use(cors()); // for cross origin requests
app.use(bodyParser.json()); // to parse JSON bodies

// Menu Router
const menuRouter = require('./Routers/Menu');
app.use("/api/menu", menuRouter);


// Start the server

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});