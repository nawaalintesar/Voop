const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    },
    progLangsChosen: {
        type: [String],
        required: true,
        enum: ["python", "java", "c++"]
    },
    enrolledTutorials: {
        type: Schema.Types.ObjectId,
        ref: 'Tutorial'
    },
    createdProjects: {
        type: Schema.Types.ObjectId,
        ref: 'Project'
    },
    userProgressByLang: {
        type: [String],//needs constraints
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema)