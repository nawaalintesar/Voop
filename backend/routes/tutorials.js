const express = require('express')
// make sure they can only see tutorials if they are logged in
const {
    viewTutorials,
    getTutorial,
    enrollTutorial,
    playTutorial,
    getEnrolledTutorials,
    populateDatabase
} = require('../controllers/tutorialController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all workout routes
router.use(requireAuth)

// GET all tutorials
router.get('/', viewTutorials)
// GET all enrolled tutorials
router.get('/enrolled', getEnrolledTutorials)
router.get('/populate', populateDatabase)

// GET a single tutorial
router.get('/:id', getTutorial)

// POST a new tutorial enrollment request
router.post('/:id/enroll', enrollTutorial)

// POST a new tutorial play 
router.post('/:id/play', playTutorial)

module.exports = router