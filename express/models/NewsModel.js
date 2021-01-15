const mongoose = require("mongoose")

const NewsSchema = new mongoose.Schema({
    newsHeading : {
        type:String,
        required:true
    },
    DriveLink :{
        type:String,
        default:"NA"
    }
},{timestamps:true})

const NewsS = mongoose.model('NewsList', NewsSchema);

module.exports = NewsS