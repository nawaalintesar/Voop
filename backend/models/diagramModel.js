const mongoose = require('mongoose')

const Schema = mongoose.Schema

const diagramSchema = new Schema({

    _id: {
        type: String,
        required: true
    },
    userID:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    animComp: {
        type: Schema.Types.ObjectId,
        ref: 'AnimationComponent'
    },
    OOPConcept: {
        type: [String],
        required: true,
        enum: ["class", "instance", "inheritance", "abstraction", "encapsulation", "polymorphism", "interface","method overriding", "method overloading", "abstract class"]

    },
    compSize: { 
        type: [String],
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Diagram', diagramSchema)