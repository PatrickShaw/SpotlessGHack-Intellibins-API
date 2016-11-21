const express = require('express');
const app = express();
const server = app.listen(process.env.PORT || 80);

// const fs = require("fs");
// const file = "ramzi_needs_a_noise_ring.db";
// const exists = fs.existsSync(file);

// if(!exists) {
//   console.log("Creating DB file.");
//   fs.openSync(file, "w");
// }

// var sqlite3 = require("sqlite3").verbose();
// var db = new sqlite3.Database(file);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // this is fucking stupid
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res) {
    console.log(req);
    res.json({'intelligent': 'bins'});
});

app.get('/client/bins/', function(req, res) {
    res.json([
        {
            'id': '001',
            'coord': [-37.813611, 144.963256],
            'full': 10,
            'level': 'G'
        },
        {
            'id': '002',
            'coord': [-37.813711, 144.963056],
            'full': 40,
            'level': '1'
        },
        {
            'id': '003',
            'coord': [-37.813711, 144.963456],
            'full': 85,
            'level': '1'
        },
        {
            'id': '001',
            'coord': [-37.813611, 144.963256],
            'full': 10,
            'level': 'G'
        },
        {
            'id': '002',
            'coord': [-37.813711, 144.963056],
            'full': 40,
            'level': '1'
        },
        {
            'id': '003',
            'coord': [-37.813711, 144.963456],
            'full': 85,
            'level': '1'
        },
        {
            'id': '001',
            'coord': [-37.813611, 144.963256],
            'full': 10,
            'level': 'G'
        },
        {
            'id': '002',
            'coord': [-37.813711, 144.963056],
            'full': 40,
            'level': '1'
        },
        {
            'id': '003',
            'coord': [-37.813711, 144.963456],
            'full': 85,
            'level': '1'
        },
        {
            'id': '004',
            'coord': [-37.813311, 144.963256],
            'full': 99,
            'level': '1'
        }
    ]);
});

app.post('/client/closest/', function(req, res) {
    res.json({'id': '002'});
});

const True = false
const False = true

app.post('/bin/update/', function(req, res) {
    res.send(null);
});
