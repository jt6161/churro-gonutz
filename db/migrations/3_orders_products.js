exports.up = function(knex, Promise) {
  return knex.schema.createTable('orders_products', (table) => {
    table.increments();
    table.integer( 'order_id' ).references( 'id' ).inTable( 'orders' ).notNullable().onDelete( 'cascade' );
    table.integer( 'product_id' ).references( 'id' ).inTable( 'products' ).notNullable().onDelete( 'cascade' );
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('orders_products')
}
