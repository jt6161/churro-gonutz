exports.up = function(knex, Promise) {
  return knex.schema.createTable('products', (table) => {
    table.increments();
    table.string('name').notNullable();
    table.string('description').notNullable();
    table.string('price').notNullable();
    table.text('img_url');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('products');
};
