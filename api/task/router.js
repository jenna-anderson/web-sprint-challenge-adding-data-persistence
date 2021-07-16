const express = require('express')

const router = express.Router()

const Tasks = require('./model')

router.get('/', (req, res, next) => {
    console.log('tasksRouter connected')
    Tasks.getTasks()
})

router.post('/', (req, res, next) => {
    Tasks.createTask()
})

module.exports = router
