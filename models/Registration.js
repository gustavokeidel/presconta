const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Registration = new Schema({

        name: {
          type: String,
        },
        rn: {
          type: Number,
        },
        email: {
          type: String,
        },
        date: {
          type: String,
        },
        pass: {
          type: String,
        },
        confirmpass: {
          type: String,
        },
        term: {
          type: String,
        },

        regdate: {
            type: String,
            default: Date.now()
          }  ,
    })
    //Collection
    mongoose.model('registration', Registration)


