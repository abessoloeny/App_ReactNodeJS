const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
const pacientes = require('./services/pacientes');

app.use('/pacientes', pacientes);
app.use('*', (req, res) => {
    res.status(404).json({
        message: 'Ruta o Enlace Incorrectos'
    })
})

app.listen(port, () => {
    console.log(`Escuchando el servidor en http://localhost:${port} `);
})