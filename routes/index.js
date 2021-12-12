const express = require('express');
const router = express.Router();
let { menu, detalle } = require('../controlllers/mainController');

/* GET home page. */
router.get('/', menu);
router.get('/detalle/:id', detalle);

module.exports = router;