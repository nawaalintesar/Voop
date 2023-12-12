const nlpHandler = require('../nlp/nlpHandler');
const mongoose = require('mongoose')

// get all user's code projects
const viewProjects= async (req, res) => {
    const tutorials = await Tutorial.find({}).sort({ createdAt: -1 })
  
    res.status(200).json(tutorials)
  }
  
  // get a single project for view
  const getProject = async (req, res) => {
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

// create a new code project
const createProject = async (req, res) => {

    // const { title, load, reps } = req.body

    // let emptyFields = []

    // if (!title) {
    //     emptyFields.push('title')
    // }
    // if (!load) {
    //     emptyFields.push('load')
    // }
    // if (!reps) {
    //     emptyFields.push('reps')
    // }
    // if (emptyFields.length > 0) {
    //     return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
    // }

    // // add to the database
    // try {
    //     const workout = await Workout.create({ title, load, reps })
    //     res.status(200).json(workout)
    // } catch (error) {
    //     res.status(400).json({ error: error.message })
    // }
}

// delete a project
const deleteProject = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'No such workout' })
    }

    const workout = await Workout.findOneAndDelete({ _id: id })

    if (!workout) {
        return res.status(400).json({ error: 'No such workout' })
    }

    res.status(200).json(workout)
}

// update a an existing project
const updateProject = async (req, res) => {
    updateCode() // from the second time they click run it has to look for changes to the code and update it
    nlpHandler.generateRecommendations() // this is needed to do the next 3
    modifyRelations()
    addComponent()
    removeComponent()
    
    // const { id } = req.params

    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //     return res.status(400).json({ error: 'No such workout' })
    // }

    // const workout = await Workout.findOneAndUpdate({ _id: id }, {
    //     ...req.body
    // })

    // if (!workout) {
    //     return res.status(400).json({ error: 'No such workout' })
    // }

    // res.status(200).json(workout)
}
async function displayOOPConcepts(){

}
module.exports = {
    viewProjects,
    getProject,
    createProject,
    deleteProject,
    updateProject
}