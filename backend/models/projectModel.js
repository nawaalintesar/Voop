const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ProjectSchema = new Schema({
    prjName: {
        type: String,
        required: true
    },
    OOPConcept: {
        type: [String],
        enum: ["class", "object", "instance", "inheritance", "abstraction", "encapsulation", "polymorphism", "interface","method overriding", "method overloading", "abstract class"]

    },
    progLang: {
        type: String,
        required: true,
        enum: ["python", "java", "c++"]
    },
    prjCode: {
        type: String,
        required: true
    },
    codeDictionary: {
        type: [String]
    },
    diagramID: {
        type: Schema.Types.ObjectId,
        ref: 'Diagram'
    },
    codeStates:{
        type:[String]
    },
    constraints:{
        type:[String]
    },
    codeRecs:{
        type: [String]
    }
}, { timestamps: true })

module.exports = mongoose.model('Project', ProjectSchema)