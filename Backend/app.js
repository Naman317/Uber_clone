const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
<<<<<<< HEAD
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
const connectToDb = require('./db/db');
const userRoutes = require('./routes/userRoute');
const driverRoutes = require('./routes/driverRoute');
const mapsRoutes = require('./routes/MapRoute');
const rideRoutes = require('./routes/RideRoute');

connectToDb();

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/users', userRoutes);
app.use('/drivers', driverRoutes);
app.use('/maps', mapsRoutes);
app.use('/rides', rideRoutes);



=======
const connectdb = require('./db/db');
const cors = require('cors');
connectdb();
const cookie=require('cookie-parser');


const app = express();

app.use(cookie());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const userRoutes = require('./routes/userRoute'); // corrected spelling
const exp = require('constants');

app.get('/', (req, res) => {
    res.send("hi");
});


app.use('/users', userRoutes); // corrected spelling
>>>>>>> 15cfd4fc13b5fc178d9664780e840c8287c4a96f

module.exports = app;
