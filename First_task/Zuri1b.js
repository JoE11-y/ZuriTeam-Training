'use strict';

const fs = require('fs');
let rawdata = fs.readFileSync('data.json');
let student = JSON.parse(rawdata);

var express = require('express')

var display = express() // the sub app

display.get('/', function (req, res) {
    res.json(student);
    res.json(null)
    res.status(500).json({ error: 'message' })
    res.end();
}).listen(8080);