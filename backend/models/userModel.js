const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({

    firstName: {
        type: String,
        required: true
    },
    lastName:{
        type:String
    },
    userEmail: {
        type: String,
        required: true
    },
    enrolledTutorials: [{
        type: Schema.Types.ObjectId,
        ref: 'Tutorial'
    }],
    createdProjects: [{
        type: Schema.Types.ObjectId,
        ref: 'Project',
    }]
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema)