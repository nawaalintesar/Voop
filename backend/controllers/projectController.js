const mongoose = require('mongoose')
const nlpHandler = require('../nlp/nlpHandler');
const User = require('../models/userModel');
const Project = require('../models/projectModel')

// get all user's code projects
const viewProjects = async (req, res) => {
  const userId =  req.user.id;; // Replace with the actual user ID
  console.log("hello im in view projects");
  try {
    // Find the user by ID and populate the createdProjects field
    const user = await User.findById(userId).populate({
      path: 'createdProjects' // Sort in descending order
    });
    const createdProjects = user.createdProjects || [];
    if (createdProjects.length > 0) {
      // Sort projects by createdAt in descending order (most recent first)
      createdProjects.sort((a, b) => b.updatedAt - a.updatedAt);
    }

    res.status(200).json(createdProjects);
  } catch (error) {
    console.error('Error fetching created projects:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// get a single project for view
const getProject = async (req, res) => {
  const userId =  req.user.id;; // Replace with the actual user ID

  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: 'No such ' })
    }
    // Find the project by ID
    const project = await Project.findById(id);
    if (!project) {
      return res.status(404).json({ error: 'No such project' })
    }
    // Return userCode from the last codeState (assuming there is at least one)
    const lastCodeState = project.codeStates.length > 0 ? project.codeStates.slice(-1)[0] : null;
    const userCode = lastCodeState ? lastCodeState.userCode : '';

    // Return project details (name, language, code, etc.)
    res.status(200).json({
      project
      // Add other relevant project details as needed
    });
  } catch (error) {
    console.error('Error fetching project:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};



// create a new code project
const createProject = async (req, res) => {
  const { prjName, progLang } = req.body;

  let emptyFields = [];

  if (!prjName) {
    emptyFields.push('prjName');
  }
  if (!progLang) {
    emptyFields.push('progLang');
  }
  if (emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all fields', emptyFields });
  }

  // add to the database
  try {
    // Create the initial code state
    const initialCodeState = {
      codeIndex: 0,
      userCode: '', // Set the initial userCode to an empty string
      diagramID: null, // You can set it to null or provide a default value
      OOPConcept: [],
    };

    // Create the project with the initial code state
    const project = await Project.create({
      prjName,
      progLang,
      codeStates: [initialCodeState], // Initialize with the initial code state
    });
    const userId =  req.user.id;; // Replace with the actual user ID

    const user = await User.findByIdAndUpdate(
      userId,
      { $push: { createdProjects: project._id } },
      { new: true }
    );
    res.status(200).json(project);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// delete a project
const deleteProject = async (req, res) => {
  const { id } = req.params
  const userId =  req.user.id;;
  const user = await User.findByIdAndUpdate(
    userId,
    { $pull: { createdProjects: id } },
    { new: true }
  );
  const project = await Project.findOneAndDelete({ _id: id })

  if (!project) {
    return res.status(400).json({ error: 'No such project' })
  }

  res.status(200).json("deleted")
}

const updateProject = async (req, res) => {
  const userId =  req.user.id;
  const { id } = req.params;
  const updatedCode = req.body.updatedCode;
  console.log("updatedCode", updatedCode)
  // const updatedCodeString= 
  try {
    // only allow if its in the users created projects
    const project = await Project.findById(id);
    if (!project) {
      throw new Error('Project not found');
    }
    // Find the latest code state and check if the code has changed
    const latestCodeState = project.codeStates.reduce((max, state) =>
      state.codeIndex > max.codeIndex ? state : max, { codeIndex: -1 });
    if (JSON.stringify(latestCodeState.userCode) === JSON.stringify([updatedCode])) {
      // based on the recommendations and constriants
      // modifyRelations()
      // addComponent()
      // removeComponent()
      // Update the project with the analysis results
      // For example, update OOP concepts, constraints, etc.
      res.status(200).json("no code change");
    }
    else {
      // If the code has changed, proceed to create a new code state
      const newCodeIndex = latestCodeState.codeIndex + 1;

      // Call the following functions:
      // comiple, parse, analyse code to find classes, relations and info
      const result = await nlpHandler.analyzeCode(updatedCode, project.progLang);
      const classes = result.classes;
      const relationships = result.relationships;
      console.log("everything", result)
      console.log("asdfasdfadsfasdfsadfdsa")
      console.log(classes);
      console.log("asd", relationships);
      console.log("code", updatedCode);
      // generate the animation
      // find and display oop concepts
      // nlpHandler.generateRecommendations() // this is needed to do the next 3
      // Create a new code state with the updated code
      const newCodeState = {
        codeIndex: newCodeIndex,
        userCode: [updatedCode],
        classes: classes,
        relationships: relationships
      };

      // Add the new code state to the project
      project.codeStates.push(newCodeState);
      await project.save();
      res.status(200).json(project);
    }

  } catch (error) {
    res.status(400).json("Error");
    throw new Error(`Error updating: ${error.message}`);

  }
};


async function displayOOPConcepts() {
  // takes identified OOP Concepts and displays in grammarly popup
}

const searchCreatedProjects = async (searchTerm) => {
  const userId =  req.user.id;;
  // Trim and convert to lowercase for case-insensitive search
  const trimmedSearchTerm = searchTerm.trim().toLowerCase();

  // If the trimmed search term is empty, return a message indicating no search is performed
  if (!trimmedSearchTerm) {
    return { message: 'No search term provided.' };
  }

  try {
    // Find the user by ID
    const user = await User.findById(userId).populate('createdProjects');

    // If the user or createdProjects array is empty, return a message indicating no projects are found
    if (!user || !user.createdProjects || user.createdProjects.length === 0) {
      return { message: 'No projects found for the user.' };
    }

    // Filter projects based on the prjName containing the trimmed search term
    const matchingProjects = user.createdProjects.filter((project) =>
      project.prjName.toLowerCase().includes(trimmedSearchTerm)
    );

    // If no matching projects are found, return a message indicating no results
    if (matchingProjects.length === 0) {
      return { message: 'No matching projects found.' };
    }

    return matchingProjects;
  } catch (error) {
    console.error('Project search failed:', error);
    throw error;
  }
};

module.exports = {
  viewProjects,
  getProject,
  createProject,
  deleteProject,
  updateProject
}