import express from 'express';
const router = express.Router();
// import transporter from '../config/nodemailer.js';

// Importar el modelo de tickets
import Ticket from '../models/ticket.js';

// Ruta para mostrar el formulario de compra de tickets
router.get('/buy', (req, res) => {
  res.render('buyTicket');
});

// Ruta para procesar la compra de tickets
router.post('/buy', (req, res) => {
  const { name, email } = req.body;

  // Crea un nuevo ticket en la base de datos
  const newTicket = new Ticket({ name, email });
  newTicket.save((err) => {
    if (err) {
      console.error('Error al guardar el ticket:', err);
      res.status(500).send('Error del servidor');
    } else {
      // Envía el ticket por correo electrónico
      sendTicketByEmail(newTicket);

      res.redirect('/tickets/success');
    }
  });
});

router.get('/buy-ticket', (req, res) => {
  res.render('buyTicket');
});


export default router;
