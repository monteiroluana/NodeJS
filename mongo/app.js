const express = require('express');
const app = express();
const mongoose = require ("mongoose");
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
const Book = require('./Book.model');

dotenv.config();

// db
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("DB Connected"))

mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`)
});


app.get('/', (req,res) => {
    res.send('Hello MongoDB!');
})

app.get('/book', (req,res) => {
    res.send('getting all books');
    Book.find({})
    .exec((err, books) => {
        if(err){
            res.send('error has occured');
        }else{
            console.log(books);
            res.json(books);
        }
    })
})

const port = 3000;
app.listen(port, () => {
    console.log(`A NodeJS API is listenig on port: ${port}`);
});