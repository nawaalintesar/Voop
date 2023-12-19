const Tutorial = require('../models/tutorialModel')
const User = require('../models/userModel');
const mongoose = require('mongoose')
const fs = require('node:fs');


// get all tutorials
const viewTutorials = async (req, res) => {
  const tutorials = await Tutorial.find({}).sort({ createdAt: -1 })

  res.status(200).json(tutorials)
}
const populateDatabase = async (req, res) => {
  await Tutorial.deleteMany(); 
  // Example usage
  const path = require('path');
  const filePath = path.join(__dirname, '../models/Tutorials/Classes.txt');
  try {
    // Read the content of the file
    const fileContent = fs.readFileSync(filePath, 'utf8');

    // Split the file content by lines
    const lines = fileContent.split('\n');
    // Initialize variables
    let tutName = lines[0];
    let tutDescription = "";
    let level = [];
    let progLang = "";
    let levelNumber = 0;
    let code = [];
    let tutorialSteps = [];
    let noTutSteps = 0;
    // Process each line


    for (const line of lines) {
      // Check for the first line and assign it to tutName
      if (!tutName && !line.startsWith('//')) {
        tutName = line.trim();
        continue; // Skip to the next iteration
      }
      // Check for the line that starts with //Tutorial Description
      if (line.startsWith('//Tutorial Description')) {
        // Read lines assign them to tutDescription
        let currentIndex = lines.indexOf(line) + 1; // Move to the next line
        while (currentIndex < lines.length && !lines[currentIndex].startsWith('//DescriptionEnd')) {
          tutDescription += lines[currentIndex] + '\n';
          currentIndex++;
        }
        continue; // Skip to the next iteration
      }
      // Check for the line that starts with //Level
      if (line.startsWith('//Level')) {
        // If this is not the first level, push the previous level information to the level array
        if (levelNumber !== 0) {
          level.push({
            levelNumber,
            progLang,
            code: code,
            noTutSteps: tutorialSteps.length,
            tutorialSteps: tutorialSteps
          });
          // Log the results
          console.log('Tutorial Name:', tutName);
          console.log('Tutorial Description:', tutDescription.trim());
          console.log('Level Number:', levelNumber);
          console.log('Programming Language:', progLang);
          console.log('No of Steps:', noTutSteps);
          console.log('Code:', code.join('\n'));
          console.log('Steps:', tutorialSteps.join('\n'))

          // Reset arrays for the new level
          code = [];
          tutorialSteps = [];
          noTutSteps = 0;
        }

        // Check for the line that starts with //Level
        if (line.startsWith('//Level')) {
          // Split from the character 1- and get level number and language
          const regex = /\/\/Level (\d+)- (\S+)/;
          const match = line.match(regex);

          if (match) {
            levelNumber = parseInt(match[1], 10);
            progLang = match[2].trim();

            // Check for the code section
            let isCodeSection = false;

            // Iterate through the lines to read code until //Steps
            for (let i = lines.indexOf(line) + 1; i < lines.length; i++) {
              if (lines[i].startsWith('//Code')) {
                isCodeSection = true;
                continue;
              } else if (lines[i].startsWith('//Steps')) {
                break; // Stop when reaching "//Steps"
              }

              if (isCodeSection) {
                code.push(lines[i].trim());
              }
            }

            let isStepsSection = false;

            for (let i = lines.indexOf(line) + 1; i < lines.length; i++) {
              // Check for the line that starts with //Steps
              if (lines[i].startsWith('//Steps')) {
                console.log(lines[i])
                isStepsSection = true;
                continue;
                
              }

              // Read lines until the string '--------------' and assign them to steps
              if (isStepsSection) {
                if (lines[i].startsWith('--------------')) {
                  isStepsSection=false;
                  break; // Stop when reaching '--------------'
                }

                tutorialSteps.push(lines[i].trim());
                console.log(tutorialSteps);
                noTutSteps = tutorialSteps.length;
              }
            }
          }
        }
      }
    }
    if (levelNumber !== 0) {
      level.push({
        levelNumber,
        progLang,
        code: code,
        noTutSteps: tutorialSteps.length,
        tutorialSteps: tutorialSteps
      });
      // Log the results
      console.log('Tutorial Name:', tutName);
      console.log('Tutorial Description:', tutDescription.trim());
      console.log('Level Number:', levelNumber);
      console.log('Programming Language:', progLang);
      console.log('No of Steps:', noTutSteps);
      console.log('Code:', code.join('\n'));
      console.log('Steps:', tutorialSteps.join('\n'))
    }




    // Save the tutorial to the database
    const project = await Tutorial.create({
      tutName,
      tutDescription,
      level
    });
    res.status(200).json(project)

    console.log('Database populated successfully!');
  } catch (error) {
    res.status(500).json("error")
    console.error('Error populating database:', error.message); // this is not the actual error check console its the time out thing
  }
}



async function calculateProgress(tutorial) {
  const totalSteps = tutorial.level.reduce((acc, level) => acc + level.noTutSteps, 0);
  const completedSteps = tutorial.level.reduce((acc, level) => acc + (level.tutCompletedSteps || 0), 0);
  const progress = (completedSteps / totalSteps) * 100;

  return isNaN(progress) ? 0 : progress;
};



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

  res.status(200).json(tutorial) //right now gets the whole tutorial this should take only the description to be displayed on the tutorial page
}

const enrollTutorial = async (req, res) => {
  // Once authentication part is done, this should be using userId.
  const ObjectId = require('mongodb').ObjectId;
  const userId = "65810b9b1d91631463299a28";

  const tutorialId = req.params.id;

  try {
    // get user information
    const user = await User.findById(userId);
    // Check if the tutorial exists
    const tutorial = await Tutorial.findById(tutorialId);
    if (!tutorial) {
      console.error('Tutorial not found');
      return res.status(404).json({ error: 'Tutorial not found' });
    }

    if (!user) {
      console.error('user not found');
      return res.status(404).json({ error: 'user not found' });
    }

    // Check if the user is already enrolled in the tutorial
    // const tutorialFound = await User.findById({_id:new ObjectId(userId), enrolledTutorials: tutorialId});
    const tutorialFound = await User.findOne({ enrolledTutorials: tutorialId });
    if (tutorialFound) {
      console.error('Tutorial already enrolled');
      return res.status(400).json({ error: 'Tutorial already enrolled' });
    }

    // Enroll the user in the tutorial
    const result = await User.updateOne(
      { _id: new ObjectId(userId) },
      { $addToSet: { enrolledTutorials: tutorialId } }
    );

    console.log(`Tutorial with ID ${tutorialId} enrolled successfully for user with ID ${userId}`);
    res.status(200).json({ message: 'Tutorial enrolled successfully' });
  } catch (error) {
    console.error('Error enrolling tutorial:', error.message);
    res.status(500).json({ error: 'Invalid Tutorial ID' });
  }
};


const getEnrolledTutorials = async (req, res) => {
  const userId = "65810b9b1d91631463299a28"
  //const userId = req.params.userId; // Assuming you have the user ID in the request parameters

  try {
    // Find the user by ID and populate the enrolledTutorials field
    const user = await User.findById(userId).populate({
      path: 'enrolledTutorials' // Sort in descending order
    });
    const enrolledTutorials = user.enrolledTutorials || [];
    if (enrolledTutorials.length > 0) {
      // Sort projects by createdAt in descending order (most recent first)
      enrolledTutorials.sort((a, b) => b.updatedAt - a.updatedAt);
    }

    console.log(enrolledTutorials);
    res.status(200).json({ enrolledTutorials });
  } catch (error) {
    console.error('Error fetching enrolled tutorials:', error.message);
  }
};
//getEnrolledTutorials();
const playTutorial = async (req, res) => {

  //once authentication part is done this should be using userId for now im making it static 65810b9b1d91631463299a28
  userId = "65810b9b1d91631463299a28";
  tutorialId = req.params.id;
  try {
    // get user information
    const user = await User.findById(userId);
    // Check if the tutorial exists
    const tutorial = await Tutorial.findById(tutorialId);

    if (!tutorial) {
      console.error('Tutorial not found');
      return res.status(404).json({ error: 'Tutorial not found' });
    }

    // Check if the user is already enrolled in the tutorial
    const tutorialFound = await User.findById({ _id: userId, enrolledTutorials: tutorialId });

    if (!tutorialFound) {
      console.error('Tutorial is not enrolled');
      return res.status(400).json({ error: 'Tutorial is not enrolled' });
    }

    tutorial.tutSteps.forEach((step, index) => {
      // after the front end is connected it has to be on click do each step
      console.log(`Step ${index + 1}: ${step}`);
      const progress = calculateProgress(tutorial);
    });

    // Return the tutorial steps to the user's web page all at once

    res.status(200).json({ tutorialSteps: tutorial.tutSteps, message: 'Tutorial completed!' });
    console.log(`Tutorial ${tutorial.tutName} played successfully for user ${user.userName}`);
  } catch (error) {
    console.error('Error playing tutorial:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
}


module.exports = {
  viewTutorials,
  getTutorial,
  enrollTutorial,
  playTutorial,
  getEnrolledTutorials,
  populateDatabase
}