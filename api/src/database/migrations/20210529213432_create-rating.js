exports.up = function(knex) {
    return knex.schema.createTable('ratings', table=>{
        table.increments('id').primary();
        table.integer('nota').notNullable();
        table.string('comentario').notNullable();
        table.time('data_hora');
        table.integer('service_id').unsigned();
        table.foreign('service_id')
            .references('id')
            .inTable('services');
        table.integer('user_id').unsigned();
        table.foreign('user_id')
            .references('id')
            .inTable('users');
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('ratings');
};
