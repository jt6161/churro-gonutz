
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {name: 'Churro Single Stack', description: 'Single Stack of Churro Gonutz', price: '300', img_url: 'img_url' },
        {name: 'Churro Double Stack', description: 'Double Stack of Churro Gonutz', price: '500', img_url: 'img_url' },
        {name: 'Churro Triple Stack', description: 'Triple Stack of Churro Gonutz', price: '700', img_url: 'img_url' },
        {name: 'Churro Tower', description: 'Triple Stack of Churro Gonutz, two scoops of Vanilla Ice Cream, Chocolate drizzle with Whip Cream, Sprinkles and Maraschino Cherry.', price: '800', img_url: 'img_url' },
        {name: 'Chu-Reo', description: 'Churro Gonut topped with Vanilla Ice Cream, Oreo Crumble and Chocolate drizzle.', price: '500', img_url: 'img_url' },
        {name: 'Spicy Churro', description: 'CAJETA Caramel Sauce and Chocolate drizzle with ancho chile powder.', price: '700', img_url: 'img_url' },
        {name: 'Fruity Pebbles', description: 'Churro with Vanilla Ice Cream, topped with Fruity Pebbles and Chocolate drizzle.', price: '500', img_url: 'img_url' },
        {name: 'Attn Bacon Lovers', description: 'Churro topped with Vanilla Ice Cream and Fresh Bacon Crumble drizzled with Salted Caramel.', price: '500', img_url: 'img_url' },
// toppings
        {name: 'Vanilla Ice Cream', description: 'Topping - Vanilla Ice Cream', price: '150', img_url: 'img_url' },
        {name: 'Bacon Brittle', description: 'Topping - Bacon Brittle', price: '50', img_url: 'img_url' },
        {name: 'Dulce De Leche', description: 'Topping - Dulce De Leche', price: '50', img_url: 'img_url' },
        {name: 'Oreo Crumble', description: 'Topping - Oreo Crumble', price: '50', img_url: 'img_url' },
        {name: 'M&Ms', description: 'Topping - M&Ms', price: '50', img_url: 'img_url' },
        {name: 'Caramel Sauce', description: 'Topping - Caramel Sauce', price: '25', img_url: 'img_url' },
        {name: 'Marshmallow Whip Cream', description: 'Topping - Marshmallow Whip Cream', price: '25', img_url: 'img_url' },
        {name: 'Rainbow Sprinkles', description: 'Topping - Rainbow Sprinkles', price: '25', img_url: 'img_url' },
        {name: 'Maraschino Cherry', description: 'Topping - Maraschino Cherry', price: '25', img_url: 'img_url' },
        {name: 'Whipped Cream', description: 'Topping - Whipped Cream', price: '25', img_url: 'img_url' },
// beverages
        {name: 'Small Churro Cafe', description: 'Small Hot Coffee', price: '450', img_url: 'img_url' },
        {name: 'Large Churro Cafe', description: 'Large Hot Coffee', price: '500', img_url: 'img_url' },
        {name: 'Small Hot Chocolate', description: 'Small Hot Chocolate', price: '450', img_url: 'img_url' },
        {name: 'Large Hot Chocolate', description: 'Large Hot Chocolate', price: '500', img_url: 'img_url' }
      ]);
    });
};
