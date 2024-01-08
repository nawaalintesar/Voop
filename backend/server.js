require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const tutorialRoutes= require('./routes/tutorials')
const projectRoutes= require('./routes/projects')
const userRoutes=require('./routes/user')
// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/tutorials', tutorialRoutes)
app.use('/api/projects', projectRoutes)
app.use('/api/user', userRoutes)
// home, log in sign up dashboard 
app.get('/dashboard', (req,res)=>{
  res.json({msg:"welcome"}) //call functions from profileController.js
  // need to get recent projects and recent tutorials ( limitted to 4/5) and display the user's name
})
app.get('/profile', (req,res)=>{
  res.json({msg:"welcome"})//call functions from profileController.js
  // profile information
//   delele account
// update account information
// forgot password feature
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
  },{
    socketTimeoutMS: 45000, // Example value, adjust as needed
    connectTimeoutMS: 30000, // Example value, adjust as needed
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }) 