const tutorialModel = require('../models/tutorialModel');
const Tutorial = require('../models/tutorialModel')
const User = require('../models/userModel');
const mongoose = require('mongoose')

// get all tutorials
const getTutorials = async (req, res) => {
  const tutorials = await Tutorial.find({}).sort({ createdAt: -1 })

  res.status(200).json(tutorials)
}

// get a single tutorial for view
const getTutorial = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such ' })
  }

  const tutorial = await Tutorial.findById(id)

  if (!tutorial) {
    return res.status(404).json({ error: 'No such tutorial' })
  }

  res.status(200).json(tutorial)
}

const enrollTutorial = async (req, res) => {
  // Once authentication part is done, this should be using userId.
  const userId = "u001";
  const tutorialId = req.params.id;

  try {
    // get user information
    const user = await User.findOne({ _id: userId });
    // Check if the tutorial exists
    const tutorial = await Tutorial.findOne({ _id: tutorialId });

    if (!tutorial) {
      console.error('Tutorial not found');
      return res.status(404).json({ error: 'Tutorial not found' });
    }

    // Check if the user is already enrolled in the tutorial
    const tutorialFound = await User.findOne({ _id: userId, enrolledTutorials: tutorialId });

    if (tutorialFound) {
      console.error('Tutorial already enrolled');
      return res.status(400).json({ error: 'Tutorial already enrolled' });
    }

    // Enroll the user in the tutorial
    const result = await User.updateOne(
      { _id: userId },
      { $addToSet: { enrolledTutorials: tutorialId } }
    );

    console.log(`Tutorial with ID ${tutorialId} enrolled successfully for user with ID ${userId}`);
    res.status(200).json({ message: 'Tutorial enrolled successfully' });
  } catch (error) {
    console.error('Error enrolling tutorial:', error.message);
    res.status(500).json({ error: 'Invalid Tutorial ID' });
  }
};


const playTutorial = async (req, res) => {

  //once authentication part is done this should be using userId for now im making it static u001
  userId = "u001";
  tutorialId = req.params.id;
  try {
    // get user information
    const user = await User.findOne({ _id: userId });
    // Check if the tutorial exists
    const tutorial = await Tutorial.findOne({ _id: tutorialId });

    if (!tutorial) {
      console.error('Tutorial not found');
      return res.status(404).json({ error: 'Tutorial not found' });
    }

    // Check if the user is already enrolled in the tutorial
    const tutorialFound = await User.findOne({ _id: userId, enrolledTutorials: tutorialId });

    if (!tutorialFound) {
      console.error('Tutorial is not enrolled');
      return res.status(400).json({ error: 'Tutorial is not enrolled' });
    }

    tutorial.tutSteps.forEach((step, index) => {
      console.log(`Step ${index + 1}: ${step}`);
    });

    // Return the tutorial steps to the user's web page
    res.status(200).json({ tutorialSteps: tutorial.tutSteps , message: 'Tutorial completed!'});
    console.log(`Tutorial ${tutorial.tutName} played successfully for user ${user.userName}`);
  } catch (error) {
    console.error('Error playing tutorial:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
}


module.exports = {
  getTutorials,
  getTutorial,
  enrollTutorial,
  playTutorial
}