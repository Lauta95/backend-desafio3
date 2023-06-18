import express from 'express';
const app = express()
import ProductManager from './funciones.js';
const productManager = new ProductManager();

app.listen(8080);

app.get('/products', async (req, res) => {
    const limit = req.query.limit;
    try {
        const products = await productManager.getProducts();
        if (!limit) {
            res.json(products);
        } else {
            const limiteDeProductos = products.slice(0, limit);
            res.json(limiteDeProductos);
        }
    }
    catch (err) {
        res.json(err);
    }
});
app.get('/products/:pid', async (req, res) => {
    let pid = req.params.pid;
    try {
        console.log(req.params);
        const product = await productManager.getProductById(Number(pid));
        res.json(product);
    }
    catch(err){
        res.json(err);
        console.log(err);
    }
});
