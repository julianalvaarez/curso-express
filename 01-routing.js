const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.sendFile('./static/index.html', {
        root: __dirname
    })
    
})

app.get('/about', (req, res) => {
    res.sendFile('./assets/react.svg', {
        root: __dirname
    })
    
})

app.get('/products', (req, res) => {
    res.json({
        product: 'PC',
        price: 4000
    })
    
})

app.listen(3000)
console.log(`server on port ${3000}`)