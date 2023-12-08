const express = require('express')

const {
    getTutorials,
    getTutorial,
    playTutorial,
} = require('../controllers/tutorialController')
const router = express.Router()
// GET all tutorials
router.get('/', getTutorials)

// GET a single tutorial
router.get('/:id', getTutorial)

// POST a new workout
router.post('/', playTutorial)
