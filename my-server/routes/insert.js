const express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    fs = require('fs'),
    path = require("path");

let fileUploadPath = path.join(__dirname, '../../my-app/public/uploads/');

function cusfileupload(file) {
    if (!fs.existsSync(fileUploadPath)) {
        fs.mkdir(fileUploadPath, { recursive: true }, err => {
            console.log("err ", err);
        });
    }

    
    renamefile: while (file != null) {
    
        let filepathcheck = path.join(fileUploadPath, file.name);
    
        if (fs.existsSync(filepathcheck)) {
    
            let filetype = file.name.substring(file.name.lastIndexOf('.'), file.name.length);
    
            let namestring = file.name.replace(/\s+/g, '_').replace(filetype, '');
            let filenum = namestring.match(/\d+/g);
                if (filenum != null && (filenum.length != null || filenum.length != undefined)) {
                let n = filenum.length;
                let onlyname = namestring.replace(parseInt(filenum[n - 1]), '');
                file.name = onlyname + (parseInt(filenum[n - 1]) + 1) + filetype;
            } else {
                file.name = namestring + 1 + filetype;
            }
    
            continue renamefile;
        } else {

            file.mv(path.join(fileUploadPath, file.name), (err) => {
                if (err) throw err;
    
            });
    
            break;
        }
    }
    
    return file.name;
}

let ts = Date.now();
let date_ob = new Date(ts);
let date = date_ob.getDate();
let month = date_ob.getMonth() + 1;
let year = date_ob.getFullYear();
let hour = date_ob.getHours();
let minute = date_ob.getMinutes();
let second = date_ob.getSeconds();

let curDate = year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;

const Product = require('../models/product.model');

// get Insert
router.get('/', function (req, res) {
    res.json({
        fileUploadPath: fileUploadPath,
        error: false,
        status: 200,
        message: "Insert Apis working"
    })
});

// post Product Insert
router.post('/add-product', function (req, res) {
    let Name = req.body.Name;
    let Brand = req.body.Brand;
    let RamRom = req.body.RamRom;
    let Tags = req.body.Tags;
    let Price = req.body.Price;

    let BestValue = false
    let BestCamera = false
    let BestPerformance = false

    let Image = ''
    if (req.files.Image) {                        
        Image = cusfileupload(req.files.Image);
    }

    if(Tags.includes("1")){
        BestValue = true
    }else if(Tags.includes("2")){
        BestCamera = true
    }else if(Tags.includes("3")){
        BestPerformance = true
    }

    let product = new Product()
    product.Name = Name
    product.Brand = Brand
    product.RamRom = RamRom
    product.Tags = Tags
    product.Price = Price
    product.Image = Image
    product.BestValue = BestValue
    product.BestCamera = BestCamera
    product.BestPerformance = BestPerformance
    product.DateInserted = curDate
    product.save((err, data) => {
        if(!err){
            console.log(data);
            return res.send({ error: false, status: 200, message: 'Product Inserted' });
        }else{
            console.log(err);
            return res.send({ error: true, status: 400, message: 'Product Not Inserted' });
        }
    })
});

module.exports = router;