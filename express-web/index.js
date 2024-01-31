const express = require('express')
const morgan = require('morgan')

const app = express()
let products = [
    {
        "id": 1,
        "name": "laptop",
        "price": 3500
    }
]

app.use(morgan('dev'))
app.use(express.json())

app.get('/products', (req, res) => {
    res.json(products)
})

app.post('/products', (req, res) => {
    const newProduct = {
        id: products.length + 1,
        ...req.body
    }
    products.push(newProduct)
    res.send(products)
})

app.put('/products/:id', (req, res) => {
    const newData = req.body
    const id = parseInt(req.params.id)

    const productFound = products.filter(product => product.id === id)
    if (productFound.length === 0) return res.status(404).json({message: "Product Not Found"})
    
    products = products.map(product => product.id === id ? {...product, ...newData} : product)
    res.json({
        message: "Product updated successfully"
    })
})

app.delete('/products/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const productFound = products.filter(product => product.id === id)
    if (productFound.length === 0) return res.status(404).json({message: "Product Not Found"})
    products = products.filter(product => product.id !== id)
    res.json(products)
})

app.get('/products/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const productFound = products.filter(product => product.id === id)
    if (productFound.length === 0) return res.status(404).json({message: "Product Not Found"})
    res.json(productFound)
})



app.listen(3000)

console.log(`Server on port ${3000}`)