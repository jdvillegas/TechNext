const express = require('express');
const app = express();
const puerto = 3010;

app.get('/', (req, res) => {
    res.send('Servicio de BD tienda en funcionamiento');
});

//Cargar librería para 'parseo' de contenido JSON
//var bodyParser = require('body-parser');
app.use(express.json());

//Cargar libreria para habilitar CORS
const cors = require('cors');
app.use(cors())

require("./rutas/moneda.rutas")(app);
require("./rutas/pais.rutas")(app);
require("./rutas/usuario.rutas")(app);

app.listen(puerto, () => {
    console.log(`Servicio de BD tienda escuchando en http://localhost:${puerto}`);
})