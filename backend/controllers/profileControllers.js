const Tutorial = require('./tutorialController');
const Project = require('./projectController');
const User = require('../models/userModel');
const mongoose = require('mongoose')

// get the dashboard
const viewDashboard = async (req, res) => {
    //display name on dashboard
    const user = await User.findById(req.user);

    // Fetch all projects
    const allProjects = await Project.viewProjects();
    // Limit the number of projects to 5 for the dashboard
    const topProjects = allProjects.slice(0, 5);
    // Fetch all tutorials
    const allTutorials = await Tutorial.viewTutorials();
    // Limit the number of tutorials to 5 for the dashboard
    const topTutorials = allTutorials.slice(0, 5);

    res.status(200).json({
        userName: user.userName,
        topProjects,
        topTutorials
    });
}

// display recent projects and tutorials limitted to 4/5
// log in 
// sign up
// display name on dashboard
// delele account
// update account information
// forgot password feature
async function updateAccountInfo() {

}
async function deleteAccount() {

}
async function forgotPassword() {

}
async function updateAccountInfo() {

}
module.exports = {
    viewTutorials,

}