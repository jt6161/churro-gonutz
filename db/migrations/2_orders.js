exports.up = function(knex, Promise) {
  return knex.schema.createTable('orders', (table) => {
    table.increments();
    table.string('name').notNullable();
    table.integer('total price').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('orders');
};
