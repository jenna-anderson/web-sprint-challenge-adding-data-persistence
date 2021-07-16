const db = require('../../data/dbConfig')

const getTasks = async() => {
    const tasks = await db('tasks as t')
        .join('projects as p', 'p.project_id', 't.project_id')

    console.log(tasks)
    const tasksWithTasksBoolean = tasks.map(task => {
        if(task["task_completed"] === 0) {
            return {
                ...task,
                "task_completed": false
            }
        } else {
            return {
                ...task,
                "task_completed": true
            }
        }
    })
    const tasksWithBooleans = tasksWithTasksBoolean.map(task => {
        if(task["project_completed"] === 0) {
            return {
                ...task,
                "project_completed": false
            }
        } else {
            return {
                ...task,
                "project_completed": true
            }
        }
    })

    return tasksWithBooleans
}

const createTask = () => {
    console.log('createTask wired successfully')
}

module.exports = {
    getTasks,
    createTask
}
