
exports.up = function(knex) {
    return knex.schema.createTable('restaurants', table => {
        table.increments();

        table.string('name', 255).notNullable()
        table.string('date', 125).notNullable()
        
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('restaurants');
};
