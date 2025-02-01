const mongoose = require('mongoose');

const blacklistTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
<<<<<<< HEAD
        expires: 86400
=======
        expires: 86400 // 24 hours in seconds
>>>>>>> 15cfd4fc13b5fc178d9664780e840c8287c4a96f
    }
});

module.exports = mongoose.model('BlacklistToken', blacklistTokenSchema);