const express = require('express')
const path = require('path')
const userRoutes = require('./routes/users')

const app = express()

// Express Settings
app.set('case sensitive roting', true)
app.set('appName', 'ExpressJS Course')
app.set('port', 3000)

// Middlewares
app.use(express.json())
app.use(userRoutes) // Asi usamos las rutas del archivo users

// Routes
app.use('/public', express.static(path.join(__dirname, 'static')))

app.listen(app.get('port'))
console.log(`Server ${app.get('appName')} on port ${app.get('port')}`)