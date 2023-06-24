import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import mongoose from 'mongoose';
import adminRoutes from './routes/admin.js';
import ticketRoutes from './routes/tickets.js';
// import passport from 'passport';
// import session from 'express-session';
// import path from 'path';

// Configuración de Express
const app = express();
const port = process.env.PORT || 3000;

dotenv.config();

// Configuración de Morgan
app.use(morgan('dev'));

// Configuración de Mongoose
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conexión a MongoDB exitosa'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

// Configuración de Passport y Sesión
// app.use(session({
//   secret: process.env.SESSION_SECRET,
//   resave: false,
//   saveUninitialized: false
// }));
// app.use(passport.initialize());
// app.use(passport.session());

// Paso Uno: Iniciando el servidor
app.listen(port, () => {
  console.log(`Servidor web en funcionamiento en el puerto ${port}`);
});

// Paso Dos: Configuración de las rutas
app.use('/admin', adminRoutes);
app.use('/tickets', ticketRoutes);

//Paso Tres 
// Establece la carpeta "views" como la carpeta de vistas
// app.set('views', path.join(__dirname, 'views'));

// Establecer el motor de plantillas EJS
app.set('view engine', 'ejs');

// Configuración de las rutas
app.get('/', (req, res) => {
  res.render('index');
});

// Paso 4 


