
exports.up = function(knex) {
    return knex.schema.table('ratings', table => {
        table.dropForeign('service_id','ratings_service_id_foreign');
        table.dropColumn('service_id');
    })
};

exports.down = function(knex) {
    return knex.schema.table('ratings', function(table){
        table.integer('service_id').unsigned();
        table.foreign('service_id')
            .references('id')
            .inTable('services');
      })
};
