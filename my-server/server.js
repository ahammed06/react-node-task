const express =  require('express'),
app = express(),
cors = require('cors'),
bodyParser = require('body-parser'),
fs = require('fs'),
path = require("path"),
fileupload = require('express-fileupload');

const database = require('./db.js')

// routers
const insertRouter = require('./routes/insert');
const viewRouter = require('./routes/view');

// use the modules
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());

app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    next();
});

let fileUploadPathTemp = path.join(__dirname, '../my-app/public/temp/');
app.use(fileupload({
    useTempFiles: true,
    tempFileDir:fileUploadPathTemp        
}));

var http = require('http');
var httpServer = http.createServer(app);

// use router
app.use('/insert', insertRouter);
app.use('/view', viewRouter);

//Home
app.get('/', function (req, res) {
    res.json({
        status: 200,
        message: "API working"
    })
});

httpServer.listen(4000, function () {
    console.log('Node app is running on port 4000');
});