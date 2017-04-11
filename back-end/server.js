var express = require('express');
var cors = require('cors');
var functions = require('./functions');
var app = express();

app.use(cors());
app.post('/search', functions.search);

app.listen(3000);
