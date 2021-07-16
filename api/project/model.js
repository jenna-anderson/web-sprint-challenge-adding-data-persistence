const db = require('../../data/dbConfig')

const getProjects = async () => {
    const projects = await db('projects')
    const projectsWithBoolean = projects.map(project => {
        if(project["project_completed"] === 0) {
            return {
                    ...project,
                    "project_completed": false
            }
        } else {
            return {
                ...project,
                "project_completed": true
            }
        }
    })
    return projectsWithBoolean
}

const createProject = () => {
    console.log('createProject successfully wired')
}

module.exports = {
    getProjects,
    createProject
}