
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('orders').del()
    .then(function () {
      // Inserts seed entries
      return knex("orders").insert([
        { cust_name: "John" },
        { cust_name: "Carlos" },
        { cust_name: "Jenn" },
        { cust_name: "Nick" }
      ]);
    });
};
