const mongoose = require('mongoose');
const crypto = require('crypto');
const uuidv1 = require('uuid/v1');

const {Objectid} = mongoose.Schema;

const usersSchema = new mongoose.Schema(
    {
      _id: {
        auto: true
      },
      name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
      },
      surname: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
      },
      email: {
        type: String,
        required: true,
        trim: true,
        unique: true
      },
     password: {
        type: String,
        required: true,
        trim: true
      },
      birthdate:{
          type: Date,
          default: Date.now()
      },
      avatar: {
        type: String,
        default: '',
        trim: true
      },
      banner:{
        type: String,
        default: '',
        trim: true
      },
      biography: {
        type: String,
        default: '',
        trim: true,
        maxlength: 200
      },
      location:{
        type: String,
        default: '',
        trim: true
      },
      website: {
        type: String,
        default: '',
        trim: true
      }

    }, {timestamps: true }
   
)

module.exports = mongoose.model('Users', usersSchema);