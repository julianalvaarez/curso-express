const express = require('express')

const app = express()

// Partes de una request:
// Endpoint: Ruta en la cual se pide la request (ej: /user)
// header: Informacion adicional acerca del contenido que enviamos al servidor
// Body: Contenido que enviamos al servidor

// Esto sirve para que express acepte que el cliente envie datos en formato JSON y en formato texto
app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({extended: false})) // Sirve para admitir datos de un formulario

app.post('/user', (req, res) => {
    res.send('Usuario creado')
    console.log(req.body) // Esto mostraria el objeto JSON o el texto que envio el cliente
})

app.listen(3000)

console.log('Server on port 3000')