const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
    firstName : {
        type: String,
        require: true
    },
    surName : {
        type: String,
        require: true
    },
    lastName : {
        type: String,
        require: true
    },

    schoolName : {
        type: String,
        require: true
    },
    department : {
        type: String,
        require: true
    },
    address : {
        type: String,
        require: true
    },
    regNumber : {
        type: String,
        require: true
    },
    email : {
        type: String,
        require: true
    },
    password : {
        type: String,
        require: true,
        minlength: [6, 'password must be 6 or more characters']
    },
})

const registration = mongoose.model('register', registrationSchema)

module.exports = registration