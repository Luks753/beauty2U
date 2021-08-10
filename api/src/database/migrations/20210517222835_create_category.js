exports.up = function(knex) {
    return knex.schema.createTable('categories', table=>{
        table.increments('id').primary();
        table.string('nome').notNullable().unique();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('categories')
};
