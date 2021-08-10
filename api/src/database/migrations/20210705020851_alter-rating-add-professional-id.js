
exports.up = function(knex) {
    return knex.schema.table('ratings', function(table){
        table.integer('professional_id').unsigned();
        table.foreign('professional_id')
            .references('id')
            .inTable('ratings');
      })
};

exports.down = function(knex) {
    return knex.schema.table('ratings', table => {
        table.dropColumn('professional_id');
    })
};
