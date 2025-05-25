// routes/clientes.routes.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('cliente');
});

module.exports = router;
