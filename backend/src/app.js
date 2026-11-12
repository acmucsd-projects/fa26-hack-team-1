const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Health Check!');
});

module.exports = app; 