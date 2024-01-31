const express = require('express')

const app = express()

// Middlewares: Son funciones que se ejecutan antes de que la peticion del cliente llegue al servidor

app.get('/profile', (req, res) => {
    res.send('Profile Page')  //  Si se pide una request se accede al servidor ya que esta antes del middleware
})



// Se usa .use para crear middlewares
app.use((req, res, next) => {
    if (req.query.password === '123') {  // Si la query password es 123, se accede al servidor
        next()  // next() sirve para indicar que la peticion continue hacia el servidor
    } else {
        res.send('No autorizado')   // Si la query password es incorrecta, no se accede al servidor
    }
    console.log('Funcion ejecutada') // Esto se ejecuta antes que las respuestas del servidor

})

app.get('/dashboard', (req, res) => {
    res.send('Acceso autorizado a el panel de control') 
})

app.listen(3000)

console.log('Server on port 3000')