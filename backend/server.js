require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const tutorialRoutes= require('./routes/tutorials')
const projectRoutes= require('./routes/projects')
const profileRoutes= require('./routes/profile')
const userRoutes=require('./routes/user')
// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  console.log('Request Headers:', req.headers);
  next()
})

// routes
app.use('/api/tutorials', tutorialRoutes)
app.use('/api/projects', projectRoutes)
app.use('/api/user', userRoutes)
app.use('/api/profile', profileRoutes)

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