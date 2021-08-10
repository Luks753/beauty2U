exports.up = function(knex) {
    return knex.schema.createTable('schedules', table=>{
        table.increments('id').primary();
        table.string('dia_da_semana').notNullable();
        table.time('hora_inicio').notNullable();
        table.time('hora_fim').notNullable();
        table.integer('professional_id').unsigned();
        table.foreign('professional_id')
            .references('id')
            .inTable('professionals');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('schedules')
};
