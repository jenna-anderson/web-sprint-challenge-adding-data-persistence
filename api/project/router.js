const express = require('express')

const router = express.Router()

const Projects = require('./model')

router.get('/', (req, res, next) => {
    console.log('projectsRouter connected')
    Projects.getProjects()
})

router.post('/', (req, res, next) => {
    Projects.createProject()
})

module.exports = router