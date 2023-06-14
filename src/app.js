import express from 'express'

const app = express()

app.get('/saludos', (req, res) => {
    response.send('hola...')
})

app.listen(8080, () => console.log('escuchando 8080'))