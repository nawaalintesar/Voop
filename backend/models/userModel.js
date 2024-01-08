const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

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
        required: true,
        unique: true
    },
    userPassword:{
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

userSchema.statics.signup = async function(firstName, lastName, email, password, userConfirmation) {

    console.log(userConfirmation)
    // validation
    if (!email || !password || !firstName) {
      throw Error('All fields must be filled')
    }
    if (!validator.isEmail(email)) {
      throw Error('Email not valid')
    }
    if (!validator.isStrongPassword(password)) {
      throw Error('Password not strong enough')
    }
    if(password!=userConfirmation){
      throw Error('Passwords do not match')

    }
  
    const exists = await this.findOne({ userEmail: email })
  
    if (exists) {
      throw Error('Email already in use')
    }
  
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
  
    const user = await this.create({ firstName, lastName, userEmail: email, userPassword: hash, enrolledTutorials: null, createdProjects: null }) //adds into the db
  
    return user
  }
  
  // static login method
  userSchema.statics.login = async function(email, password) {
  
    if (!email || !password) {
      throw Error('All fields must be filled')
    }
  
    const user = await this.findOne({ userEmail: email })
    if (!user) {
      throw Error('Incorrect email')
    }
  
    if (password==true) return user;
    const match = await bcrypt.compare(password, user.userPassword)
    if (!match) {
      throw Error('Incorrect password')
    }
  
    return user
  }

module.exports = mongoose.model('User', userSchema)