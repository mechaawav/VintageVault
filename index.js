import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './database.js';
import path from 'path';
import { fileURLToPath } from 'url';
import routes from './routes/index.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  connectDB(); 
  console.log(`Servidor iniciado en el puerto ${port}`);
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(__dirname + '/public'));
// Importacion de rutas de routes:

app.use('/', routes);

