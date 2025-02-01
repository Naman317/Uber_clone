const userModel = require('../models/user_model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const blackListTokenModel = require('../models/blackListToken_model');
<<<<<<< HEAD
const driverModel = require('../models/driver_model');
=======
const captainModel = require('../models/captain_model');
>>>>>>> 15cfd4fc13b5fc178d9664780e840c8287c4a96f


module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }


    const isBlacklisted = await blackListTokenModel.findOne({ token: token });

    if (isBlacklisted) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id)

        req.user = user;

        return next();

    } catch (err) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
}

<<<<<<< HEAD
module.exports.authDriver = async (req, res, next) => {
=======
module.exports.authCaptain = async (req, res, next) => {
>>>>>>> 15cfd4fc13b5fc178d9664780e840c8287c4a96f
    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];


    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const isBlacklisted = await blackListTokenModel.findOne({ token: token });



    if (isBlacklisted) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
<<<<<<< HEAD
        const driver = await driverModel.findById(decoded._id)
        req.driver = driver;
=======
        const captain = await captainModel.findById(decoded._id)
        req.captain = captain;
>>>>>>> 15cfd4fc13b5fc178d9664780e840c8287c4a96f

        return next()
    } catch (err) {
        console.log(err);

        res.status(401).json({ message: 'Unauthorized' });
    }
}