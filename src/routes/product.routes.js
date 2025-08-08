import {createProduct, getAllProducts, getProductById, updateProduct, deleteProduct} from '../controllers/product.controller.js'

export default (app) => {
    app.post('/create-product', createProduct);
    app.get('/get-all-products' , getAllProducts)
    app.get('/get-product-by-id/:id' , getProductById)
    app.delete('/delete-product/:id' , deleteProduct)
    app.put('/update-product/:id' , updateProduct)
}