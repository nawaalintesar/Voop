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

  // Example usage
  const path = require('path');
  const paths = [
    path.join(__dirname, '../models/Tutorials/Classes.txt'),
    path.join(__dirname, '../models/Tutorials/Encapsulation.txt'),
    path.join(__dirname, '../models/Tutorials/Abstract.txt'),
    path.join(__dirname, '../models/Tutorials/Over.txt'),
    path.join(__dirname, '../models/Tutorials/Inheritance.txt'),
    path.join(__dirname, '../models/Tutorials/Interfaces.txt'),
    path.join(__dirname, '../models/Tutorials/Polymorphism.txt'),
    path.join(__dirname, '../models/Tutorials/Combined.txt'),
  ];
  try {
    for (const filePath of paths) {
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
                  // console.log(lines[i])
                  isStepsSection = true;
                  continue;

                }

                // Read lines until the string '--------------' and assign them to steps
                if (isStepsSection) {
                  if (lines[i].startsWith('--------------')) {
                    isStepsSection = false;
                    break; // Stop when reaching '--------------'
                  }

                  tutorialSteps.push(lines[i].trim());
                  // console.log(tutorialSteps);
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
      }


      const existingTutorial = await Tutorial.findOne({ tutName });

      if (existingTutorial) {
        existingTutorial.tutDescription = tutDescription;
        existingTutorial.level = level;
        await existingTutorial.save();

      }
      else {

        // Save the tutorial to the database
        const project = await Tutorial.create({
          tutName,
          tutDescription,
          level
        });
      }
      console.log('Database populated successfully!');
    }
  } catch (error) {
    res.status(500).json("error")
    console.error('Error populating database:', error.message); // this is not the actual error check console its the time out thing

  } finally {
    // Send a response outside the try-catch block
    res.status(200).json("All files processed successfully!");
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
  // console.log(tutorial)
  if (!tutorial) {
    return res.status(404).json({ error: 'No such tutorial' })
  }

  res.status(200).json(tutorial) //right now gets the whole tutorial this should take only the description to be displayed on the tutorial page
}


const ObjectId = mongoose.Types.ObjectId;

const enrollTutorial = async (req, res) => {
  const userID = req.body.userID;
  const selectedLanguage = req.body.selectedLanguage; // Assuming the selected language is in the request body

  const tutorialId = req.params.id.toString();

  try {
    // get user information
    const user = await User.findById(userID);

    // Check if the tutorial exists
    const tutorial = await Tutorial.findById(tutorialId);

    console.log("ID IS ACTUALLY", tutorial ? tutorial._id : 'Not Found');

    if (!tutorial) {
      console.error('Tutorial not found 215');
      return res.status(404).json({ error: 'Tutorial not found 215' });
    }

    if (!user) {
      console.error('User not found');
      return res.status(404).json({ error: 'User not found' });
    }

    // Check if the user is already enrolled in the tutorial
    const tutorialFound = await User.findOne({ enrolledTutorials: new ObjectId(tutorialId) });

    if (tutorialFound) {
      console.error('Tutorial already enrolled');
      return res.status(400).json({ error: 'Tutorial already enrolled' });
    } else {
      // Enroll the user in the tutorial with the selected language
      const result = await User.updateOne(
        { _id: new ObjectId(userID) },
        {
          $addToSet: {
            enrolledTutorials: {
              tutId: new ObjectId(tutorial._id),
              progLang: selectedLanguage,
            },
          },
        }
      );
      
      console.log(`Tutorial with ID ${tutorial._id} enrolled successfully for user with ID ${userID}`);
      res.status(200).json({ message: 'Tutorial enrolled successfully' });
    }
  } catch (error) {
    console.error('Error enrolling tutorial:', error.message);
    res.status(500).json({ error: error.message });
  }
};


const getEnrolledTutorials = async (req, res) => {
  try {
    const userId = req.user.id;
    console.log("hi");
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


//not using this function rn
const playTutorial = async (req, res) => {

  //once authentication part is done this should be using userId for now im making it static  req.user.id;
  const userId = req.user.id
  const tutorialId = req.params.id;
  try {
    // get user information
    const user = await User.findById(userId);
    // Check if the tutorial exists
    //const tutorial = await Tutorial.findById(tutorial._id);
    const tutorial = await Tutorial.findById(mongoose.Types.ObjectId(tutorialId));

    if (!tutorial) {
      console.error('Tutorial not found292');
      return res.status(404).json({ error: 'Tutorial not found292' });
    }

    // Check if the user is already enrolled in the tutorial
    const tutorialFound = await User.findById({ _id: userId, enrolledTutorials: tutorialId });

    if (!tutorialFound) {
      console.error('Tutorial is not enrolled30');
      return res.status(400).json({ error: 'Tutorial is not enrolled' });
    }

    tutorial.tutSteps.forEach((step, index) => {
      // after the front end is connected it has to be on click do each step
      // console.log(`Step ${index + 1}: ${step}`);
      const progress = calculateProgress(tutorial);
    });

    // Return the tutorial steps to the user's web page all at once

    res.status(200).json({ tutorialSteps: tutorial.tutSteps, message: 'Tutorial completed!' });
    console.log(`Tutorial ${tutorial.tutName} played successfully for user ${user.userName}`);
    console.log(progress)
  } catch (error) {
    console.error('Error playing tutorial:', error.message);
    res.status(500).json({ error: 'Internal server error HOW' });
  }
}

const searchAllTutorials = async (searchTerm) => {
  // Trim and convert to lowercase for case-insensitive search
  const trimmedSearchTerm = searchTerm.trim().toLowerCase();

  // If the trimmed search term is empty, return a message indicating no search is performed
  if (!trimmedSearchTerm) {
    return { message: 'No search term provided.' };
  }

  // Perform case-insensitive search logic in the Tutorial model
  const searchResults = await Tutorial.find({
    $text: { $search: trimmedSearchTerm },
  });

  // If no results are found, return a message indicating no results
  if (searchResults.length === 0) {
    return { message: 'No results found.' };
  }

  return searchResults;
};

module.exports = {
  viewTutorials,
  getTutorial,
  enrollTutorial,
  playTutorial,
  getEnrolledTutorials,
  populateDatabase
}