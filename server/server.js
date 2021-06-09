const express = require('express');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.listen(port, (err)=>{
    if(err) throw err;
    console.log(`LIstening on port: ${port}.`);
});

// Hello World