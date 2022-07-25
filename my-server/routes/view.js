const express = require('express'),
    router = express.Router(),
    mysql = require('mysql');

let db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'task',
    insecureAuth: true,
    multipleStatements: true
});

// get view
router.get('/', function (req, res) {
    res.json({
        error: false,
        status: 200,
        message: "View Apis working"
    })
});

// get Sources
router.get('/get-sources', function (req, res) {
    let sql = `SELECT * FROM sources;`;
    db.query(sql, [], function (error, data) {
        if (error) throw error;
        return res.send({ error: false, data: data, status: 200, message: 'Source List' });
    })
});

// get Conditions
router.get('/get-conditions', function (req, res) {
    let sql = `SELECT * FROM conditions;`;
    db.query(sql, [], function (error, data) {
        if (error) throw error;
        return res.send({ error: false, data: data, status: 200, message: 'Conditions List' });
    })
});

// get Product List
router.get('/get-product/:limit/:offset/:sort', function (req, res) {
    let limit = req.params.limit;
    let offset = req.params.offset;
    let sort = req.params.sort;

    let sortOrder = ''
    if(sort > 0){
        sortOrder = `WHERE Tags LIKE '%${sort}%'`
    }

    let sql = `SELECT * FROM products ${sortOrder} ORDER BY ProductID DESC LIMIT ${limit} OFFSET ${offset};`;
    sql += `SELECT COUNT(*) count FROM products ${sortOrder};`;
    db.query(sql, [], function (error, data) {
        if (error) throw error;
        return res.send({ error: false, data: data[0], count: data[1][0].count, status: 200, message: 'Product List' });
    })
});

// search Product List
router.post('/search-product/:limit/:offset/:sort', function (req, res) {
    let limit = req.params.limit;
    let offset = req.params.offset;
    let sort = req.params.sort;
    let productSearch = req.body.productSearch;

    let sortOrder = ''
    if(sort > 0){
        sortOrder = `AND Tags LIKE '%${sort}%'`
    }

    let sql = `SELECT * FROM products WHERE (Name LIKE '%${productSearch}%' OR Brand LIKE '%${productSearch}%') ${sortOrder} ORDER BY ProductID DESC LIMIT ${limit} OFFSET ${offset};`;
    sql += `SELECT COUNT(*) count FROM products WHERE (Name LIKE '%${productSearch}%' OR Brand LIKE '%${productSearch}%') ${sortOrder};`;
    db.query(sql, [], function (error, data) {
        if (error) throw error;
        return res.send({ error: false, data: data[0], count: data[1][0].count, status: 200, message: 'Product List' });
    })
});

module.exports = router;