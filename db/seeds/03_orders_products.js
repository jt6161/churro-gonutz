exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("orders_products")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("orders_products").insert([
        { product_id: 3, order_id: 3 },
        { product_id: 2, order_id: 1 },
        { product_id: 3, order_id: 3 },
        { product_id: 5, order_id: 2 },
        { product_id: 7, order_id: 2 }
      ]);
    });
};
