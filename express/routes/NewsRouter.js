const express= require("express")
const NewsS = require("../models/NewsModel.js")
const cors = require("cors")
const NewsRouter  = express.Router();
const bodyParser = require("body-parser");
const app = require("../server.js");
NewsRouter.use(cors())
NewsRouter.use(bodyParser.json())
NewsRouter.get("/",(req,res,next)=>{
     NewsS.find({})
     .then((news)=>{
        res.statusCode = 200;
        res.setHeader("Content-Type","application/json")
         res.json({news})
         
     })
     .catch((err)=>console.log(err))
})
NewsRouter.post("/",(req,res,next)=>{
    NewsS.create({newsHeading : req.body.newsHeading, DriveLink: req.body.DriveLink})
    .then((news)=>{
        res.statusCode = 200;
        res.header("Access-Control-Allow-Origin", "*");
         res.setHeader("Content-Type","application/json")
        res.json(news);
    })
    .catch((err)=>{
        res.statusCode = 402;
        res.header("Access-Control-Allow-Origin", "*");
        res.send("Error,Please try again")
    })
})
NewsRouter.delete("/:id",(req,res,next)=>{
    NewsS.deleteOne({_id:req.params.id})
    .then((news)=>{
        res.statusCode = 200;
        res.header("Access-Control-Allow-Origin", "*");
        res.setHeader("Content-Type","application/json");
        NewsS.find({})
    
        .then((resp)=>{
            res.statusCode = 200;
            res.header("Access-Control-Allow-Origin", "*");
            res.setHeader("Content-Type","application/json")
            res.json(resp)
        })
    })
    .catch((err)=>{
        res.statusCode = 402;
        res.send("Error,Please try again")
    })
})
module.exports = NewsRouter