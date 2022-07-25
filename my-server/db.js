const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/ReactNodeTask', {
    useNewUrlParser: true
},
err => {
    if(!err){
        console.log('db connected');
    }else{
        console.log('db connection error'+err);
    }
});