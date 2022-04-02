const express = require('express');
const dotenv = require('dotenv');

// Load config
dotenv.config({ path: './config/config.env' });

const app = express();

app.use(express.json());

// Routes
require('./routes/categories')(app);


const port = process.env.EXPRESS_PORT || 3000;

app.listen(port, () => console.log(`Server is listening on port ${port}`));