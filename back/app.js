// declare all the necessary libraries
const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./routes/index.js');

const cors = require('cors');

app.use(cors())



// set up the application
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

// implement the API part
app.use('/', router);

//app.use('/newclient', newclient); //where newclient is imported
//app.use('/newservice', newservice); //where newservice is imported
//app.use('/work', work); //where work is imported

/// in case path is not found, return the 'Not Found' 404 code
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// launch the node server
let server = app.listen(process.env.PORT || 5000, function () {
    console.log('Listening on port ' + server.address().port);
});