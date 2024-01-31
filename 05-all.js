const express = require('express')

const app = express()

// Metodo All: Ruta que funciona con todos los metodos (GET, PUT, POST, DELETE)

app.all('/info', (req, res) => {
    res.send('Info') 
})

app.listen(3000)

console.log('Server on port 3000')