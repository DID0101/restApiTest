const express = require('express');
const app = express();
const mongoose = require("mongoose");
require ("dotenv/config")

const bodyParser = require('body-parser');

app.use(bodyParser.json());

//Middle ware 

// app.use('/posts',()=>{
//     console.log('this is midleware')
// })

//import routes

const postsRoute = require('./routes/posts');

app.use("/posts", postsRoute);


//ROUTES
//GET()-> Fetch the data , POST() -> Push the data 
//PATCH() -> update , Delete() -> Delete the data

app.get('/',(req,res)=>{
    res.send ("im inside Home")
});


// connect mongo db 
mongoose.connect(
    process.env.DB_CONNECTION,
    ()=>{
    console.log("connected to mongo db")
})

// Create listining port 

app.listen(3000);
