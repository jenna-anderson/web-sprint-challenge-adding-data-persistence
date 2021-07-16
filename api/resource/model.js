const db = require('../../data/dbConfig')

const getResources = async () => {
    const resources = await db('resources')
    return resources
}

const createResource = () => {
    console.log('createResources wired successfully')
}

module.exports = {
    getResources,
    createResource
}