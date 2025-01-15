const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const connectdb = require('./db/db');
const cors = require('cors');
connectdb();

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const userRoutes = require('./routes/userRoute'); // corrected spelling
const exp = require('constants');

app.get('/', (req, res) => {
    res.send("hi");
});


app.use('/users', userRoutes); // corrected spelling

module.exports = app;
