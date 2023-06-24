import express from 'express';
const router = express.Router();

// Importa el modelo de productos
import Product from '../models/product.js';

// Ruta para mostrar el dashboard del administrador
router.get('/dashboard', (req, res) => {
  // Lógica para obtener los datos del stock de zapatillas desde la base de datos
  Product.find({}, (err, products) => {
    if (err) {
      console.error('Error al obtener los productos:', err);
      res.status(500).send('Error del servidor');
    } else {
      res.render('admin/dashboard', { products });
    }
  });
});

// Ruta para actualizar el stock de una zapatilla
router.post('/update-stock', (req, res) => {
  const { productId, stock } = req.body;

  // Actualiza el stock de la zapatilla en la base de datos
  Product.findByIdAndUpdate(productId, { stock }, (err) => {
    if (err) {
      console.error('Error al actualizar el stock:', err);
      res.status(500).send('Error del servidor');
    } else {
      res.redirect('/admin/dashboard');
    }
  });
});

export default router;
