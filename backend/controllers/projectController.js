const mongoose = require('mongoose')
const nlpHandler = require('../nlp/nlpHandler');
const User = require('../models/userModel');
const Project = require('../models/projectModel')

// get all user's code projects
const viewProjects = async (req, res) => {
  const userId = "u001"; // Replace with the actual user ID

  try {
    // Find the user by ID and populate the createdProjects field
    const user = await User.findById(userId).populate('createdProjects');

    // Extract project details from the populated createdProjects field
    const projectsInfo = user.createdProjects.map(project => ({
      prjName: project.prjName,
      progLang: project.progLang,
      createdAt: project.createdAt,
    }));

    // Sort projects by createdAt in descending order (most recent first)
    projectsInfo.sort((a, b) => b.createdAt - a.createdAt);

    res.status(200).json(projectsInfo);
  } catch (error) {
    console.error('Error fetching created projects:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// get a single project for view
const getProject = async (req, res) => {
  const userId = "u001"; // Replace with the actual user ID

  try {
    const { id } = req.params;

    // Find the project by ID
    const project = await Project.findById(id);

    // Return userCode from the last codeState (assuming there is at least one)
    const lastCodeState = project.codeStates.length > 0 ? project.codeStates.slice(-1)[0] : null;
    const userCode = lastCodeState ? lastCodeState.userCode : '';

    // Return project details (name, language, code, etc.)
    res.status(200).json({
      prjName: project.prjName,
      progLang: project.progLang,
      prjCode: userCode,
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

    res.status(200).json(project);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// delete a project
const deleteProject = async (req, res) => {
  const { id } = req.params

  const project = await Workout.findOneAndDelete({ _id: id })

  if (!project) {
    return res.status(400).json({ error: 'No such project' })
  }

  res.status(200).json(project)
}

// update a an existing project
const updateUserCode = async (projectId, codeIndex, updatedCode) => {
  try {
    const project = await Project.findById(projectId);
    if (!project) {
      throw new Error('Project not found');
    }

    const codeState = project.codeStates.find((state) => state.codeIndex === codeIndex);
    codeState.codeDictionary.userCode = updatedCode;
    //call the following functions:
    // nlp stuff
    // generate the animation
    // find and display oop concepts
     // nlpHandler.generateRecommendations() // this is needed to do the next 3
  // modifyRelations()
  // addComponent()
  // removeComponent()

    await project.save();
    return project;
  } catch (error) {
    throw new Error(`Error updating user code: ${error.message}`);
  }
};
const updateProjectWithAnalysis = async (projectId, codeIndex, analysisResults) => {
  try {
    // Fetch the project and code state
    const project = await Project.findById(projectId);
    if (!project) {
      throw new Error('Project not found');
    }

    const codeState = project.codeStates.find((state) => state.codeIndex === codeIndex);
    if (!codeState) {
      throw new Error('Code state not found');
    }

    // Update the project with the analysis results
    // For example, update OOP concepts, constraints, etc.
    // ...

    await project.save();
    return project;
  } catch (error) {
    throw new Error(`Error updating project with analysis results: ${error.message}`);
  }
};

 const updateProject = async (req, res) => {
//   const { id } = req.params

//   const project = await Project.findOneAndUpdate({ _id: id }, {
//       ...req.body
//   })

//   if (!project) {
//       return res.status(400).json({ error: 'No such project' })
//   }

//   res.status(200).json(project)
 }
async function displayOOPConcepts() {
  // takes identifiedOOPConcepts and displays in grammarly popup
}
module.exports = {
  viewProjects,
  getProject,
  createProject,
  deleteProject,
  updateProject
}