const express = require('express')
// make sure they are limitted to one project unless they are logged in
const {
    viewProjects,
    getProject,
    createProject,
    deleteProject,
    updateProject
} = require('../controllers/projectController')

const requireAuth = require('../middleware/requireAuth')

// app.use((req) => {
//     console.log('Request URL:', req.url);
//   });

const router = express.Router()

// require auth for all workout routes
router.use(requireAuth)


// GET all projects
router.get('/', viewProjects)

// GET a single project
router.get('/:id', getProject)

// POST a new project
router.post('/', createProject)

// DELETE a project
router.delete('/:id', deleteProject)

// UPDATE a project
router.patch('/:id', updateProject)



module.exports = router