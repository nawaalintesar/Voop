const Tutorial = require('./tutorialController');
const Project = require('./projectController');
const User = require('../models/userModel');
const mongoose = require('mongoose')


// display recent projects and tutorials limitted to 4/5
// log in 
// sign up
// display name on dashboard
// delele account
// update account information
// forgot password feature
const getAccountInfo = async (req, res) => {
  // const userId =  req.user.id;
  const userId = req.user.id;
   if (!mongoose.Types.ObjectId.isValid(userId)) {
     return res.status(400).json({error: 'No such workout'})
   }
 
   const user = await User.findById(userId);
   if (!user) {
     return res.status(400).json({error: 'No such workout'})
   }
 
   res.status(200).json(user)
};

const updateAccountInfo = async (req, res) => {


    //const userId =  req.user.id;
    const userId = req.user._id;
    console.log("ID IS userID", userId);
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({error: 'No aasdf such workout'})
    }
  
    const user = await User.findOneAndUpdate(
      { _id: userId },
      {
        $set: {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          userEmail: req.body.userEmail,
          // Add other fields you want to update as needed
        },
      },
      { new: true }
    );
  
    if (!user) {
      return res.status(400).json({error: 'No such workout'})
    }
  
    res.status(200).json(user)
};
async function deleteAccount() {

}
async function forgotPassword() {

}

module.exports = {
    
updateAccountInfo,
getAccountInfo
}