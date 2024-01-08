const express = require('express')
const {
    updateAccountInfo,
    getAccountInfo
} = require('../controllers/profileController')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all workout routes
router.use(requireAuth)

// UPDATE profile
router.patch('/update', updateAccountInfo)

// GET a single project
router.get('/', getAccountInfo)

// // POST a new project
// router.post('/userprofile', createProject)

// // DELETE a project
// router.delete('/userprofile', deleteProject)

module.exports = router

// display recent projects and tutorials limitted to 4/5
// log in 
// sign up
// display name on dashboard
// delele account
// update account information
// forgot password feature