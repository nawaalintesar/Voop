const express = require('express')
// make sure they are limitted to one project unless they are logged in
const {
    //fill functions here
} = require('../controllers/profileController')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all workout routes
router.use(requireAuth)

// GET all projects
router.get('/dashboard', viewProjects)

// GET a single project
router.get('/userprofile', getProject)

// POST a new project
router.post('/userprofile', createProject)

// DELETE a project
router.delete('/userprofile', deleteProject)

// UPDATE a project
router.patch('/userprofile', updateProject)

module.exports = router

// display recent projects and tutorials limitted to 4/5
// log in 
// sign up
// display name on dashboard
// delele account
// update account information
// forgot password feature