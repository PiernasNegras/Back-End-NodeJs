import express from 'express';
const router = express.Router();

// importo controlladores
import {
    getAllProductos,
    getProductosById,
    createProducto,
    deleteProducto
} from '../controllers/productosController.js'

/**
 * @typedef Producto
 * @property {string} id - ID generado por Firestore
 * @property {string} name.required - Nombre del producto
 * @property {number} price.required - Precio del producto
 * @property {string} category.required - Categoría del producto
 */

/**
 * @route GET /api/productos
 * @group Productos - Operaciones sobre productos
 * @returns {Array.<Producto>} 200 - Lista de productos
 * @returns {Error} 500 - Error interno del servidor
 */
router.get('/productos', getAllProductos);

/**
 * @route GET /api/productos/{id}
 * @group Productos - Operaciones sobre productos
 * @param {string} id.path.required - ID del producto
 * @returns {Producto.model} 200 - Datos del producto
 * @returns {Error} 404 - Producto no encontrado
 */
router.get('/productos/:id', getProductosById);

/**
 * @route POST /api/productos
 * @group Productos - Operaciones sobre productos
 * @param {Producto.model} producto.body.required - Datos del nuevo producto
 * @returns {object} 201 - Producto creado correctamente
 * @returns {Error} 400 - Datos de entrada inválidos
 */
router.post('/productos', createProducto);

/**
 * @route DELETE /api/productos/{id}
 * @group Productos - Operaciones sobre productos
 * @param {string} id.path.required - ID del producto a eliminar
 * @returns {object} 200 - Confirmación de borrado
 * @returns {Error} 404 - Producto no encontrado
 */
router.delete('/productos/:id',deleteProducto);

export default router;