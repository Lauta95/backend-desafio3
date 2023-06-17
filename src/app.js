const express = require("express");
const ProductManager = require("./productManager");
const app = express()
const productManager = new ProductManager();
const port = 8080;

app.get('/saludo', (req, res) => {
    console.log(req.query);
    res.send('hola...')
})

app.listen(8080, () => console.log('escuchando 8080'))