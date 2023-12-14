const express = require('express')
// make sure they can only see tutorials if they are logged in
const {
    viewTutorials,
    getTutorial,
    enrollTutorial,
    playTutorial,
} = require('../controllers/tutorialController')
const router = express.Router()
// GET all tutorials
router.get('/', viewTutorials)

// GET a single tutorial
router.get('/:id', getTutorial)

// POST a new tutorial enrollment request
router.post('/:id/enroll', enrollTutorial)

// POST a new tutorial play 
router.post('/:id/play', playTutorial)

module.exports = router