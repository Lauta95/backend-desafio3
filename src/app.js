import express from 'express';
const app = express()
import ProductManager from './funciones.js';
const productManager = new ProductManager();

app.listen(8080);

app.get('/products', async (req, res) => {
    // desestructuración de objetos javascript para extraer el valor del parametro limit del objeto req.query y asignarlo a la variable limit.
    const { limit } = req.query;
    try {
        const products = await productManager.getProducts();
        if (!limit) {
            res.json(products);
        } else {
            const limiteDeProductos = products.slice(0, limit);
            res.json(limiteDeProductos);
        }
    } 
    catch(err) {
        res.json(err);
        // console.log(err);
    }
});
