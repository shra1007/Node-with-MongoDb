const mongoose = require('mongoose');

let MasterTableSchema = new mongoose.Schema({
    key:String,
    value:String
})


let MasterTable = new mongoose.model("MasterTable",MasterTableSchema)

module.exports= {MasterTable}