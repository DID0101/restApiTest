const express = require('express');
const app = express();
const mongoose = require("mongoose");


//Middle ware 

//ROUTES
//GET()-> Fetch the data , POST() -> Push the data 
//PATCH() -> update , Delete() -> Delete the data

app.get('/',(req,res)=>{
    res.send ("im inside Home")
});

app.get('/posts',(req,res)=>{
    res.send ("im inside Post")
});

// connect mongo db 
mongoose.connect(
    "mongodb+srv://ddr:ddr@cluster0.a802mb0.mongodb.net/?retryWrites=true&w=majority",
    ()=>{
    console.log("connected to mongo db")
})

// Create listining port 

app.listen(3000);
