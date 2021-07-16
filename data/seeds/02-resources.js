
exports.seed = function(knex) {
      return knex('resources').insert([
        {resource_name: 'Home Depot'},
        {resource_name: 'dad', resource_description: 'when in doubt, ask dad how to do it'},
        {resource_name: 'Pinterest', resource_description: 'app to get wall color inspiration'},
      ]);
};
