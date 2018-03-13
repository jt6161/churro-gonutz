
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('orders').del()
    .then(function () {
      // Inserts seed entries
      return knex('orders').insert([
        {name: 'Triple Stack', total price: '700' },
        {name: 'Curro Tower', total price: '800' }
      ]);
    });
};
