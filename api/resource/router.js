const express = require('express')

const router = express.Router()

const Resources = require('./model')

router.get('/', (req, res, next) => {
    console.log('projectsRouter connected')
    Resources.getResources()
})

router.post('/', (req, res, next) => {
    Resources.createResource()
})

module.exports = router
