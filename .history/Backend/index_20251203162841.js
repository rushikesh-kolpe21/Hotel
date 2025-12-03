const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;

// require('dotenv').config();
require('./Models/dbConn');

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});