const express = require('express')

const app = express()

// Queries: Son los datos que se envían al servidor a través de la URL. De esta forma: 
// http://ejemplo.com/ruta?nombre=Juan&edad=25"

app.get('/user', (req, res) => {
    res.send(`User: ${req.query}`) // Asi accedemos al dato que nos envio el cliente a traves de la URL
    console.log(req.query) // Se mostrarian los datos de la query en formato de {}
})

app.listen(3000)

console.log('Server on port 3000')