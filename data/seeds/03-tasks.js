
exports.seed = function(knex) {
      return knex('tasks').insert([
        {task_description: 'pick paint color', task_notes: 'get inspiration from Pinterest and paint cards', project_id: 2},
        {task_description: 'tape off edges', project_id: 2},
        {task_description: 'paint walls', project_id: 2},
        {task_description: 'buy weed killer', task_completed: true, project_id: 1},
        {task_description: 'spray weeds', project_id: 1},
        {task_description: 'call dad', task_notes: 'when the weeds fight back and infiltrate the home call dad', project_id: 1},
      ]);
};
