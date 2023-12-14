const express = require('express')

const {
    viewProjects,
    getProject,
    createProject,
    deleteProject,
    updateProject
} = require('../controllers/projectController')

const router = express.Router()
// GET all projects
router.get('/', getProject)

// GET a single project
router.get('/:id', getProject)

// POST a new project
router.post('/', createProject)

// DELETE a project
router.delete('/:id', deleteProject)

// UPDATE a project
router.patch('/:id', updateProject)

module.exports = router