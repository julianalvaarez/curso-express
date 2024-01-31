const {Router} = require('express')

const router = Router() // Sirve para exportar las rutas al router principal

router.get('/users', (req, res) => {
    res.send('User Page')
})

router.get('/profile', (req, res) => {
    res.send('Profile Page')
})

module.exports = router