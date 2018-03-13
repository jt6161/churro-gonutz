const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

/* GET orders page. */
router.get('/', function(req, res, next) {
  knex('orders').then(orders => res.json(orders))
});

module.exports = router;
