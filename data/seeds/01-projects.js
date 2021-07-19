
exports.seed = function(knex) {
      return knex('projects').insert([
        {project_name: 'weed the yard', project_description: 'the lawn has been overrun with weeds - need to remove them all so we can have the best lawn on the block'},
        {project_name: 'paint the office'}
      ]);
};
