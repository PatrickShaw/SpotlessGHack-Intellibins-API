const express = require('express');
const app = express();
const server = app.listen(12312);

app.get('/', function(req, res) {
    res.json({hello: "world"});
});