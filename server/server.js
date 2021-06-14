const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 5000;
const app = express();


//.env file
require('dotenv').config();

app.use(cors());


// Mongoose connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useCreateIndex: true,useUnifiedTopology: true, useNewUrlParser: true});
const connection = mongoose.connection;
connection.once("open", (err)=>{
    if(err) throw err;
    console.log("Mongo DB connected")
});


app.listen(port, (err)=>{
    if(err) throw err;
    console.log(`LIstening on port: ${port}.`);
});
