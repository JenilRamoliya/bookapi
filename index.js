const e = require('express');
const express = require('express');
const mongoose = require('mongoose');
const route = require('./route');

mongoose.connect("mongodb+srv://Jenil:Jenil@cluster0.dziyg.mongodb.net/Student?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true}).then(
()=>{
    const app = express();
    app.use("/api",route);
    app.listen(process.env.PORT || 3000,()=>{
        console.log("server started..!!");
    })
});