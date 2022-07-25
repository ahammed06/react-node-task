const express = require('express'),
    router = express.Router();
const database = require('../db.js')

const Condition = require('../models/condition.model');
const Source = require('../models/source.model');
const Product = require('../models/product.model');


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
    Source.find((err, data) => {
        if(!err){
            return res.send({ error: false, data: data, status: 200, message: 'Source List' });
        }else{
            return res.send({ error: true, data: [], status: 400, message: 'Source List' });
        }
    })
});

// get Conditions
router.get('/get-conditions', function (req, res) {
    Condition.find((err, data) => {
        if(!err){
            return res.send({ error: false, data: data, status: 200, message: 'Conditions List' });
        }else{
            return res.send({ error: true, data: [], status: 400, message: 'Conditions List' });
        }
    })
});

// get Product List
router.get('/get-product/:limit/:offset/:sort', function (req, res) {
    let limit = req.params.limit;
    let offset = req.params.offset;
    let sort = req.params.sort;

    let qry = {}
    if(sort==1){
        qry = { BestValue: { $eq: true } }
    }else if(sort==2){
        qry = { BestCamera: { $eq: true } }
    }else if(sort==3){
        qry = { BestPerformance: { $eq: true } }
    }

    Product.find(qry, (err, data) => {
        if(!err){
            return res.send({ error: false, data: data, status: 200, message: 'Product List' });
        }else{
            return res.send({ error: true, data: [], status: 400, message: 'Product List Error' });
        }
    }).sort({"DateInserted":-1}).skip(offset).limit(limit)
});

// search Product List
router.post('/search-product/:limit/:offset/:sort', function (req, res) {
    let limit = req.params.limit;
    let offset = req.params.offset;
    let sort = req.params.sort;
    let productSearch = req.body.productSearch;
    let qry = {}
    
    if(sort==1){
        qry["BestValue"] = { $eq: true }
    }else if(sort==2){
        qry["BestCamera"] = { $eq: true }
    }else if(sort==3){
        qry["BestPerformance"] = { $eq: true }
    }
    if(productSearch){
        qry["$or"] = [{ Name: {$regex: `${productSearch}.*`, $options: 'i'}}, {Brand: {$regex: `${productSearch}.*`, $options: 'i'} }]
    }

    Product.find(qry, (err, data) => {
        if(!err){
            return res.send({ error: false, data: data, status: 200, message: 'Product List' });
        }else{
            return res.send({ error: true, data: [], status: 400, message: 'Product List Error' });
        }
    }).sort({"DateInserted":-1}).skip(offset).limit(limit)
});

module.exports = router;