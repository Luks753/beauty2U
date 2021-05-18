exports.up = function(knex) {
  return knex.schema.createTable('addresses', table=>{
    table.increments('id').primary();
    table.string('logradouro').notNullable();
    table.integer('numero');
    table.string('estado').notNullable();
    table.string('cep').notNullable();
    table.string('cidade').notNullable();
    table.string('bairro').notNullable();
    table.decimal('latitude',10,8);
    table.decimal('longitude',11,8);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('addresses');
};
