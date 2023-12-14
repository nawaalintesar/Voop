const mongoose = require('mongoose')
const nlpHandler = require('../nlp/nlpHandler');
const User = require('../models/userModel');
const Project = require('../models/projectModel')

// get all user's code projects
const viewProjects = async (req, res) => {
  const projects = await Project.find({}).sort({ createdAt: -1 })

  res.status(200).json(projects)
}

// get a single project for view
const getProject = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such ' })
  }

  const project = await Project.findById(id)

  if (!project) {
    return res.status(404).json({ error: 'No such project' })
  }

  res.status(200).json(project)
}

// create a new code project
const createProject = async (req, res) => {

  const { prjName, progLang } = req.body

  let emptyFields = []

  if (!prjName) {
      emptyFields.push('prjName')
  }
  if (!progLang) {
      emptyFields.push('progLang')
  }
  if (emptyFields.length > 0) {
      return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
  }

  // add to the database
  try {
      const project = await Project.create({ prjName, progLang })
      res.status(200).json(project)
  } catch (error) {
      res.status(400).json({ error: error.message })
  }
}

// delete a project
const deleteProject = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'No such project' })
  }

  const project = await Workout.findOneAndDelete({ _id: id })

  if (!project) {
    return res.status(400).json({ error: 'No such project' })
  }

  res.status(200).json(workout)
}

// update a an existing project
const updateProject = async (req, res) => {
  updateCode() // from the first time they click run it has to look for changes to the code and update it
  // nlpHandler.generateRecommendations() // this is needed to do the next 3
  // modifyRelations()
  // addComponent()
  // removeComponent()

  const { id } = req.params

  const project = await Project.findOneAndUpdate({ _id: id }, {
      ...req.body
  })

  if (!project) {
      return res.status(400).json({ error: 'No such project' })
  }

  res.status(200).json(project)
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