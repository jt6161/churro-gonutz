
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('orders').del()
    .then(function () {
      // Inserts seed entries
      return knex("orders").insert([
        { cust_name: "Marisa" },
        { cust_name: "Zia" },
        { cust_name: "Jenn" }
      ]);
    });
};
