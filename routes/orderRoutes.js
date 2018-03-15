const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

/* GET orders page. */
router.get('/', function(req, res, next) {
 Promise.all([
   knex("orders"),
   knex("orders_products"),
   knex("products")
 ]).then(result => {
   let orders = result[0];
   let ordersProducts = result[1];
   let products = result[2];

   let something = orders.map(order => {
     let orderedProducts = ordersProducts
       .filter(orderedProduct => orderedProduct.order_id == order.id)
       .map(item => {
         return products.find(product => product.id == item.product_id);
       });
     return { order_details: order, ordered_items: orderedProducts };
   });
   res.json(something);
 });
});

router.get('/:order_id', (req, res) => {
  knex('orders_products')
    .select('products.*')
    .where('order_id', req.params.order_id)
    .innerJoin('products', 'orders_products.product_id', 'products.id')
    .then((results) => {
      knex('orders')
        .where('id', req.params.order_id)
        .then((theOrder) => {
          res.json({
            order_details: theOrder,
            product_list: results
          });  
        })  
    })
})

module.exports = router;
