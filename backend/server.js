require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const tutorialRoutes= require('/routes/tutorials')
const projectRoutes= require('/routes/projects')
// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/tutorials', tutorialRoutes)
app.use('/api/projects', projectRoutes)
// home, log in sign up dashboard 
app.get('/dashboard', (req,res)=>{
  res.json({msg:"welcome"})
  // need to get recent projects and recent tutorials as well as profile information
})

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 