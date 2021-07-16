const express = require('express')
const server = require('../server')

const router = express.Router()

router.get('/', (req, res, next) => {
    console.log('projectsRouter connected')
})

module.exports = router