import nodemailer from 'nodemailer';

// Configuración de transporte de correo electrónico
const transporter = nodemailer.createTransport({
  // Configura tu proveedor de correo electrónico (por ejemplo, Gmail)
  service: 'Gmail',
  auth: {
    user: 'tu_correo@gmail.com',
    pass: 'tu_contraseña'
  }
});

// Función para enviar el ticket por correo electrónico
export const sendTicketByEmail = (ticket) => {
  const mailOptions = {
    from: 'tu_correo@gmail.com',
    to: ticket.email,
    subject: 'Ticket de compra',
    text: `¡Gracias por tu compra, ${ticket.name}! Adjunto encontrarás tu ticket.`
    // Puedes adjuntar el ticket como un archivo PDF o cualquier otro formato deseado
    // adjuntos: [
    //   { filename: 'ticket.pdf', path: '/ruta/al/ticket.pdf' }
    // ]
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error('Error al enviar el correo electrónico:', err);
    } else {
      console.log('Correo electrónico enviado:', info.response);
    }
  });
};
