import express from 'express'

import ProductManager from "./funciones.js"

const app = express()

app.get('/saludo', (req, res) => {
    console.log(req.query);
    res.send('hola...')
})

app.listen(8080, () => console.log('escuchando 8080'))