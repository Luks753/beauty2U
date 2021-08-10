
exports.up = function(knex) {
    return knex.schema.table('professionals', function(table){
        table.string('cpf').unique();
        table.string('cnpj').unique();
        table.decimal('average',7,2);
      })
};

exports.down = function(knex) {
    return knex.schema.table(table => {
        table.dropColumns(['cpf', 'cnpj', 'average']);
    })
};
