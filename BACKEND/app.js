// Extraer las dependencias
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const port = 3000;
const app = express();

// Definir la url de la conexión 
const mongoDB = 'mongodb://localhost:27017/ejercicios'; // Corregido

// Conectamos a la base de datos
mongoose.connect(mongoDB); // Eliminamos opciones obsoletas

// Verificar la conexión
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de la conexión a la base de datos'));
db.once('open', () => {
    console.log('Conexión exitosa');
});

// Express como json
app.use(express.json());

// Habilito los cors
app.use(cors());

// Defino un modelo de datos para MongoDB y Express
const Schema = mongoose.Schema;

const aprendizSchema = new Schema({
    nombre: String,
    apellido: String,
    ficha: String
}, {
    collection: 'aprendices'
});

const Aprendiz = mongoose.model('Aprendiz', aprendizSchema);

// Ruta para obtener todos los aprendices
app.get('/aprendices', async (req, res) => {
    try {
        const aprendices = await Aprendiz.find();
        res.json(aprendices);
    } catch (err) {
        res.status(404).send(err);
    }
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
