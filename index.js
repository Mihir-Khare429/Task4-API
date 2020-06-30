const app = require('express')();
const fs = require('fs');
const port = process.env.PORT || 3002;
const tvInfo = require('./tv-info.json');

app.get('/',async(req,res) => {
    try{
        res.send({
            About : "Contains Information about TV Series",
            data : tvInfo
        })
    }catch(err){
        console.log(err)
    }
})

app.listen(port)