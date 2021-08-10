exports.up = function (knex) {
    return knex.schema.createTable('professionals', table => {
        table.increments('id').primary();
        table.string('razao_social').notNullable().unique();
        table.bool('atende_domicilio').notNullable();
        table.integer('user_id').unsigned()
        table.foreign('user_id')
            .references('id')
            .inTable('users');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('professionals')
};
