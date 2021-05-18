exports.up = function(knex) {
  return knex.schema.table('professionals', function(table){
    table.integer('address_id').unsigned().unique()
    table.foreign('address_id')
        .references('id')
        .inTable('addresses');
  })
};

exports.down = function(knex) {
  return knex.schema.dropColumn('address_id');
};
