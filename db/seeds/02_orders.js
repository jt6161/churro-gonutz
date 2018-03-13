
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('orders').del()
    .then(function () {
      // Inserts seed entries
      return knex('orders').insert([
        {name: 'Triple Stack', price: '700' },
        {name: 'Curro Tower', price: '800' }
      ]);
    });
};
