const mongoose = require('mongoose')

const Schema = mongoose.Schema

const tutorialSchema = new Schema({
    tutName: {
        type: String,
        required: true,
    },
    tutDescription: {
        type: String,
        required: true,
    },
    level: [
        {
            levelNumber: {
                type: Number,
                enum: [1, 2, 3],
                required: true,
            },
            progLang: {
                type: String,
                required: true,
                enum: ["Java", "Python", "C++"]
            },
            code: {
                type: [String],
                required: true,
            },
            tutorialSteps: {
                type: [String],
                required: true,
            },
            diagramID: {
                type: Number,
            },
            noTutSteps: {
                type: Number,
                required: true,
            },
            tutCompletedSteps: {
                type: Number,
            },
        },
    ],
}, { timestamps: true });
tutorialSchema.index({ 'level.levelNumber': 1 });
module.exports = mongoose.model('Tutorial', tutorialSchema);
