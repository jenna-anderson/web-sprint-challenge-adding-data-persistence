const express = require('express')

const router = express.Router()

const Resources = require('./model')

router.get('/', async (req, res, next) => {
    try {
        const resources = await Resources.getResources()
        res.status(200).json(resources)
    } catch(err) {
        next(err)
    }
})

router.post('/', (req, res, next) => {
    Resources.createResource()
})

module.exports = router
