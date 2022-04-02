const express = require('express');
const dotenv = require('dotenv');

// Load config
dotenv.config({ path: './config/config.env' });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/categories', require('./routes/categories'));


const port = process.env.EXPRESS_PORT || 3000;

app.listen(port, () => console.log(`Server is listening on port ${port}`));