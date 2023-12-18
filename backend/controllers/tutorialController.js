const Tutorial = require('../models/tutorialModel')
const User = require('../models/userModel');
const mongoose = require('mongoose')
const fs = require('node:fs');


// get all tutorials
const viewTutorials = async (req, res) => {
  const tutorials = await Tutorial.find({}).sort({ createdAt: -1 })

  res.status(200).json(tutorials)
}

async function populateDatabase(filePath) {
  try {
    // Read the content of the file
    const fileContent = fs.readFileSync(filePath, 'utf8');

    // Split the file content by lines
    const lines = fileContent.split('\n');
    // Initialize variables
    let tutName = lines[0];
    let tutDescription = "";
    let levels = [];
    let progLang = "";
    let levelNumber = 0;
    let code = ['asdf'];
    let tutorialSteps = [];
    let noTutSteps = 0;
    let descriptionStrings = null;
    let oopConcept = null;
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
        // If this is not the first level, push the previous level information to the levels array
        if (levelNumber !== 0) {
          levels.push({
            levelNumber,
            progLang,
            code: code.join('\n'),
            noTutSteps: tutorialSteps.length,
            tutorialSteps: tutorialSteps.join('\n')
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

            for (const line of lines) {
              // Check for the line that starts with //Steps
              if (line.startsWith('//Steps')) {
                isStepsSection = true;
                continue; // Skip to the next iteration
              }

              // Read lines until the string '--------------' and assign them to steps
              if (isStepsSection) {
                if (line.startsWith('--------------')) {
                  break; // Stop when reaching '--------------'
                }

                tutorialSteps.push(line.trim());
                noTutSteps = tutorialSteps.length;
              }
            }
          }
        }
      }
    }
    if (levelNumber !== 0) {
      levels.push({
        levelNumber,
        progLang,
        code: code.join('\n'),        
        noTutSteps: tutorialSteps.length,
        tutorialSteps: tutorialSteps.join('\n')
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

    const newTutorial = new Tutorial({
      tutName: tutName.trim(),
      tutDescription: tutDescription.trim(),
      levels
  });
  tutName= "Samepl";
  tutDescription="asdfas";
  level= [
    {
      "levelNumber": 1,
      "progLang": "Java",
      "code": ["public class HelloWorld {", "  public static void main(String[] args) {", "    System.out.println(\"Hello, World!\");", "  }", "}"],
      "tutorialSteps": ["Step 1: Open your IDE.", "Step 2: Create a new Java class.", "Step 3: Write the 'Hello, World!' program.", "Step 4: Run the program."],
      "diagramID": 1,
      "codeDictionary": { 1: [1, 2, 3], 2: [4] },
      "noTutSteps": 4,
      "tutCompletedSteps": 0
    }
  ];
  

    // Save the tutorial to the database
    const project = await Tutorial.create({
      tutName,
      tutDescription,
      level
    });
    
    

    console.log('Database populated successfully!');
  } catch (error) {
    console.error('Error populating database:', error.message);
  }
}

// Example usage
const filePath = './backend/models/Tutorials/Classes.txt';
populateDatabase(filePath);

async function calculateProgress(tutorial) {
  const totalSteps = tutorial.levels.reduce((acc, level) => acc + level.noTutSteps, 0);
  const completedSteps = tutorial.levels.reduce((acc, level) => acc + (level.tutCompletedSteps || 0), 0);
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

const getEnrolledTutorials = async (req, res) => {

  const userId = "u001"
  //const userId = req.params.userId; // Assuming you have the user ID in the request parameters

  try {
    // Find the user by ID and populate the enrolledTutorials field
    const user = await User.findById(userId).populate('enrolledTutorials');

    // Calculate progress for each enrolled tutorial
    const enrolledTutorialsInfo = user.enrolledTutorials.map((tutorial) => {
      const progress = calculateProgress(tutorial);

      return {
        tutorialId: tutorial._id,
        tutName: tutorial.tutName,
        progress,
      };
    });

    res.status(200).json(enrolledTutorialsInfo);
  } catch (error) {
    console.error('Error fetching enrolled tutorials:', error.message);
    res.status(500).json({ error: 'Internal server error' });
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
      // after the front end is connected it has to be on click do each step
      console.log(`Step ${index + 1}: ${step}`);
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
  getEnrolledTutorials
}