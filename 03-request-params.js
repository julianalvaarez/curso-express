const express = require('express')

const app = express()

// Para hacer rutas dinamicas y recibir datos por parametros de esta ruta se usa : y un nombre significativo
app.get('/users/:user', (req, res) => {
    res.send(`User: ${req.params.user}`) // Asi accedemos al dato que nos envio el cliente desde la ruta
    console.log(req.params) // Se mostraria {user: parametro}
})

app.listen(3000)

console.log('Server on port 3000')