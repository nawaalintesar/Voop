const mongoose = require('mongoose')

const Schema = mongoose.Schema

const tutorialSchema = new Schema({
    tutName: {
        type: String,
        required: true
    },
    OOPConcept: {
        type: String
    },
    progLang: {
        type: String,
        required: true,
        enum: ["python", "java", "c++"]
    },
    tutCode: {
        type: Number,
        required: true
    },
    codeDictionary: {
        type: Number
    },
    diagramID: {
        type: Number
    },
    tutSteps: {
        type: [String],
        required: true
    },
    noTutSteps:{
        type: Number,
        required:true
    },
    tutCompletedSteps: {
        type: Number
    },
    tutDescription: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Tutorial', tutorialSchema)