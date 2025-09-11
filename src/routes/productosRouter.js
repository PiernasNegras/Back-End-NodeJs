import express from 'express';
const router = express.Router();

// importo controlladores
import {
    getAllProductos,
    getProductosById,
    createProducto,
    deleteProducto
} from '../controllers/productosController.js'


router.get('/productos', getAllProductos);

router.get('/productos/:id', getProductosById);

router.post('/productos', createProducto);

router.delete('/productos/:id',deleteProducto);

export default router;