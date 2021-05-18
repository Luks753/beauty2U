exports.up = function(knex) {
    return knex.schema.createTable('professionals_categories', table=>{
        table.integer('professional_id').unsigned();
        table.foreign('professional_id')
            .references('id')
            .inTable('professionals');
        table.integer('category_id').unsigned();
        table.foreign('category_id')
            .references('id')
            .inTable('categories');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('professionals_categories')
};
