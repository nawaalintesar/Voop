const Tutorial = require('../models/tutorialModel')
const User = require('../models/userModel');
const mongoose = require('mongoose')

// get all tutorials
const getTutorials = async (req, res) => {
  const tutorials = await Tutorial.find({}).sort({createdAt: -1})

  res.status(200).json(workouts)
}

// get a single tutorial for view
const getTutorial = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such tutorial'})
  }

  const tutorial = await Tutorial.findById(id)

  if (!tutorial) {
    return res.status(404).json({error: 'No such tutorial'})
  }

  res.status(200).json(tutorial)
}

async function enrollTutorial(userId, tutorialId) {
  try {
    // Add the tutorial to the user's enrolledTutorials
    const result = await User.updateOne(
      { _id: userId },
      { $addToSet: { enrolledTutorials: tutorialId } }
    );

    if (result.nModified === 0) {
      console.error('Tutorial already enrolled or user not found');
      return;
    }

    console.log(`Tutorial with ID ${tutorialId} enrolled successfully for user with ID ${userId}`);
  } catch (error) {
    console.error('Error enrolling tutorial:', error.message);
  }
}

async function playTutorial(userId, tutorialId) {
  try {
    // Get the enrolled tutorials for the user
    const user = await User.findById(userId).populate('enrolledTutorials');
    
    if (!user) {
      console.error('User not found');
      return;
    }

    // Find the tutorial in the user's enrolled tutorials
    const tutorial = user.enrolledTutorials.find(tut => tut._id.toString() === tutorialId);

    if (!tutorial) {
      console.error('Tutorial not enrolled for the user');
      return;
    }

    // Assuming tutSteps is an array of strings in the Tutorial model
    tutorial.tutSteps.forEach((step, index) => {
      console.log(`Step ${index + 1}: ${step}`);
    });

    console.log(`Tutorial ${tutorial.tutName} played successfully for user ${user.userName}`);
  } catch (error) {
    console.error('Error playing tutorial:', error.message);
  }
}

module.exports = {
  getTutorials,
  getTutorial,
  enrollTutorial,
  playTutorial
}