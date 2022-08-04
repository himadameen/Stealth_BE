const express = require('express');
const cors = require('cors');
const movieRoute = require('./router/Movie');
const { default: mongoose } = require('mongoose');
const cookies = require('cookie-parser');
const movie = require('./models/movie');
require("dotenv").config({ path: ".env" });

const app = express();


app.use(express.json());
app.use(cors());
app.use(cookies());


app.get('/', (req, res) => {
    try {
        res.send("<h1>WELCOME TO MOVIE DASHBOARD</h1><br/>");
        console.log("server started");
    }
    catch (err) {
        res.status(400).json(err);
    }
})

//delete cookies

app.get('/delete_cookie', (req, res) => {
    res.clearCookie("movie_name");
    res.send('cookie has been deleted');
    console.log("cookies is deleted");
    return res.redirect("/movie");
})


app.get('/setcookie', (req, res) => {
    res.cookie(`Cookie token name`, `encrypted cookie value`);
    res.send("cookies have been successful");
    console.log("got a cookies");
})


app.use('/movie', movieRoute);

mongoose.connect('mongodb+srv://Ameen:Hameen99@cluster0.dlzjf.mongodb.net/?retryWrites=true&w=majority')

app.listen(process.env.APP_PORT);