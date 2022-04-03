const express = require('express');
const dotenv = require('dotenv');

// Load config
dotenv.config({ path: './config/config.env' });

const app = express();

app.use(express.json());

// Routes
require('./routes/categories')(app);

// Global Error Handler
app.use((err, req, res, next) => {
    console.log(err.stack);
    console.log(err.name);
    console.log(err.code);
    res.status(500).json({
        message: "Something went horribly wrong",
    });
});

const port = process.env.EXPRESS_PORT || 3000;

// Used when testing
if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => console.log(`Server is listening on port ${port}`));
}

module.exports = app;