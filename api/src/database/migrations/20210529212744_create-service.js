exports.up = function(knex) {
    return knex.schema.createTable('services', table=>{
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.string('valor').notNullable();
        table.integer('professional_id').unsigned();
        table.foreign('professional_id')
            .references('id')
            .inTable('professionals');
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('services');
};
