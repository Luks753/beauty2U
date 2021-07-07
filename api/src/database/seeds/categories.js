
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('categories')
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        //{id: 1, colName: 'Cabelo'},
        //{id: 2, colName: 'Unhas'},
        {id: 3, nome: 'Pe'},
        {id: 4, nome: 'Make'},
        {id: 5, nome: 'Pele'},
        {id: 6, nome: 'Depilação'},
      ]);
    });
};
