const express = require('express');
const router = express.Router();
const controller = require('../controllers/menu');

// Ruta para obtener todos los productos
router.get('/', controller.list);
  
// Ruta para agregar un nuevo producto
router.post('/create',controller.create);

router.delete('/delete', controller.destroy);

module.exports = router;

