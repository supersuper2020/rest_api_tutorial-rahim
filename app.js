const express = require('express');
const app = express();
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser');
const cors = require('cors');

//Middlewares
app.use(cors());
app.use(bodyParser.json());


//Import Routes
const postRoutes = require('./routes/posts');
app.use('/posts', postRoutes);



//ROUTES
app.get('/', (req, res) => {
    res.send('We are on Home! (v2)');
});



//Connect to DB
mongoose.connect('mongodb+srv://testuser:KpJfreySWtpDcYjc@cluster0-ecbcl.mongodb.net/rest', 
    {useNewUrlParser: true, useUnifiedTopology: true}, ()  =>
    console.log('Connected to Mongo! (v2)')
);



//Start listeing to the server
app.listen(3000);

