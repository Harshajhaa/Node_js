const mongoose = require('mongoose');
const personSchema = new mongoose.Schema({
    name: {
        type : String,
        required: true
    }, 
    work: {
        type: String,
        enum: ['Chef', 'Waiter', 'Manager'],
        required: true
    },
    email:{
        type: String,
        unique: true
    }
});

const Person = mongoose.model('Person', personSchema)
module.exports = Person;