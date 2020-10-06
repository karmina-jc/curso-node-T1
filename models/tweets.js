const mongoose = require('mongoose');
const {Objectid} = mongoose.Schema;

const tweetSchema = new mongoose.Schema(
    {
        _id: {
            auto: true
        },
        userId: {
            type: Objectid,
            ref: 'Users'
        },
        message: {
            type: String,
            required: true,
            maxlength: 140
        }

    }, {timestamps: true}
)

module.exports = mongoose.model('Tweets', tweetSchema);