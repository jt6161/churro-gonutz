const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

/* GET orders page. */
router.get('/', function(req, res, next) {
  knex('orders')
    .then((orders) => {
      let ordersPromises = orders.map(order => {
        return knex("orders_products")
          .select("products.*")
          .where("order_id", order.id)
          .innerJoin("products", "orders_products.product_id", "products.id")
          .then(results => {
            knex("orders")
              .where("id", order.id)
          });
      })
      Promise.all(ordersPromises)
        .then(stuff => console.log(stuff))
      console.log('ordersPromises', ordersPromises)
    })
    // .then(orders => res.json(orders))
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


// {
//   order_id,
//   customer_name,
//   products ordered

// }