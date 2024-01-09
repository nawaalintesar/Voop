const User = require('../models/userModel')
const jwt = require('jsonwebtoken')


const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' })
}


// login a user
const loginUser = async (req, res) => {
  const { userEmail, userPassword } = req.body

  try {
    const user = await User.login(userEmail, userPassword)

    const token = createToken(user._id)
    const firstName = user.firstName;

    res.status(200).json({ userEmail, firstName, token })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}



// signup a user
const signupUser = async (req, res) => {

  console.log(req.body)
  const { firstName, lastName, userEmail, userPassword, userConfirmation } = req.body
  try {
    const user = await User.signup(firstName, lastName, userEmail, userPassword, userConfirmation)
    //const firstName = user.firstName;

    const token = createToken(user._id)
    res.status(200).json({ userEmail, firstName, token })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }


}

module.exports = { signupUser, loginUser }