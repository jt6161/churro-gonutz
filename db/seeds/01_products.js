
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {name: 'Churro Single Stack', description: 'Single Stack of Churro Gonutz', price: '3', img_url: 'img_url' },
        {name: 'Churro Double Stack', description: 'Double Stack of Churro Gonutz', price: '5', img_url: 'img_url' },
        {name: 'Churro Triple Stack', description: 'Triple Stack of Churro Gonutz', price: '7', img_url: 'img_url' },
        {name: 'Churro Tower', description: 'Triple Stack of Churro Gonutz, two scoops of Vanilla Ice Cream, Chocolate drizzle with Whip Cream, Sprinkles and Maraschino Cherry.', price: '8', img_url: 'img_url' },
        {name: 'Chu-Reo', description: 'Churro Gonut topped with Vanilla Ice Cream, Oreo Crumble and Chocolate drizzle.', price: '5', img_url: 'img_url' },

        {name: 'Spicy Churro', description: 'Churro', price: '7', img_url: 'img_url' },
        {name: 'Churro Triple Stack', description: 'Triple Stack of Churro Gonutz', price: '7', img_url: 'img_url' },
        {name: 'Churro Triple Stack', description: 'Triple Stack of Churro Gonutz', price: '7', img_url: 'img_url' },
        {name: 'Churro Triple Stack', description: 'Triple Stack of Churro Gonutz', price: '7', img_url: 'img_url' }
      ]);
    });
};
