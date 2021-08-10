
exports.up = function(knex) {
    return knex.schema.table('ratings', table => {
        table.dropColumn('data_hora');
    })
};

exports.down = function(knex) {
    return knex.schema.table('ratings', function(table){
        table.time('data_hora');
      })
};
