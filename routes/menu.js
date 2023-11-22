const express = require('express');
const router = express.Router();
const controller = require('../controllers/menu');

// Ruta para obtener todos los productos
router.get('/menu', controller.list);
  
// Ruta para agregar un nuevo producto
router.post('/menu',controller.create);

router.delete('/menu/:id', controller.destroy);

module.exports = router;

