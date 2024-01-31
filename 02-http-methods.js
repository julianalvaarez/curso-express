
const express = require('express')

const app = express()

// Metodo GET: Es cuando el cliente pide datos del servidor
app.get('/', (req, res) => {
    res.send('Lista de datos')
    
})

// Metodo POST: Es cuando el cliente envia datos al servidor
app.post('/', (req, res) => {
    res.send('Recibiendo datos')
    
})

// Metodo PUT: Es cuando el cliente actualiza datos del servidor
app.post('/', (req, res) => {
    res.send('Actualizando datos')
    
})

// Metodo DELETE: Es cuando el cliente elimina datos del servidor
app.post('/', (req, res) => {
    res.send('Eliminando datos')
    
})

// Metodo PATCH: Es cuando el cliente actualiza una parte de un dato del servidor
app.patch('/', (req, res) => {
    res.send('Actualizando una parte de los datos')
    
})

app.listen(3000)
console.log(`server on port ${3000}`)