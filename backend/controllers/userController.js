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
    const userID= user._id;

    res.status(200).json({ userEmail, firstName, token, userID })
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
    const userID= user._id;
    const token = createToken(user._id)
    res.status(200).json({ userEmail, firstName, token, userID})
  } catch (error) {
    res.status(400).json({ error: error.message })
  }


}


const getEnrolledTutorials = async (req, res) => {
  try {
    const userId = req.user.id;

    // Find the user by ID and populate the enrolledTutorials field
    const user = await User.findById(userId).populate({
      path: 'enrolledTutorials.tutId',
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const enrolledTutorials = user.enrolledTutorials || [];

    // Map the enrolledTutorials array to include only the necessary information
    const formattedEnrolledTutorials = enrolledTutorials.map((enrolledTutorial) => {
      return {
        tutId: enrolledTutorial.tutId,
        progLang: enrolledTutorial.progLang
      };
    });

    if (formattedEnrolledTutorials.length > 0) {
      // Sort tutorials by updatedAt in descending order (most recent first)
      formattedEnrolledTutorials.sort((a, b) => b.tutId.updatedAt - a.tutId.updatedAt);
    }

    res.status(200).json({ enrolledTutorials: formattedEnrolledTutorials });
  } catch (error) {
    console.error('Error fetching enrolled tutorials:', error.message);
    res.status(500).json({ error: error.message });
  }
};





module.exports = { signupUser, loginUser, getEnrolledTutorials }