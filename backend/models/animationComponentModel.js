const mongoose = require('mongoose')

const Schema = mongoose.Schema

const animCompSchema = new Schema({

    _id: {
        type: String,
        required: true
    },
    animComp: {
        type: String,
        required: true
    },
    OOPConcept: {
        type: String,
        required: true,
        enum: ["class", "object", "instance", "inheritance", "abstraction", "encapsulation", "polymorphism", "interface","method overriding", "method overloading", "abstract class"]
    },
    compSize: { 
        type: [String],
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('AnimationComponent', animCompSchema)