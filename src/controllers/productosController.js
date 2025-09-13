import * as productosService from '../services/productosService.js';

/**
 * GET /api/productos
 * Recupera todos los productos disponibles.
 */
export const getAllProductos = async (req, res, next) => {
    try {
        const productos = await productosService.getAllProductos();
        return res.status(200).json(productos);
    } catch (error) {
        next(error);
    };
};

/**
 * GET /api/productos/:id
 * Obtiene un producto por su ID.
 * Nota: Firestore usa IDs como strings, no es necesario parseInt().
 */
export const getProductosById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const producto = await productosService.getProductoById(id);
        if (producto) {
            return res.status(200).json(producto);
        };
        return res.status(404).json({ message: 'Producto no encontrado' });
    } catch (error) {
        next(error);
    };
};

/**
 * POST /api/productos
 * Crea un nuevo producto con los datos enviados en el body.
 */
export const createProducto = async (req, res, next) => {
    try {
        const { name, price, category } = req.body;
        const newProducto = await productosService.createProducto({ name, price, category });
        return res.status(201).json(newProducto);
    } catch (error) {
        next(error);
    };
};

/**
 * DELETE /api/productos/:id
 * Elimina un producto existente tras verificar su existencia.
 */
export const deleteProducto = async (req, res, next) => {
    try {
        const { id } = req.params;
        const producto = await productosService.getProductoById(id);
        if (!producto) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        };
        await productosService.deleteProducto(id);
        return res.status(200).json({ message: 'Producto borrado correctamente', id });
    } catch (error) {
        next(error);
    };
};

/**
 * PUT /api/productos/:id
 * Actualiza campos permitidos de un producto existente.
 */
export const updateProducto = async (req, res, next) => {
    try {
        const { id } = req.params;

        // Verificar que el producto exista.
        const exists = await productosService.getProductoById(id);
        if (!exists) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        };

        // Filtrar solo los campos válidos del body.
        const data = {};
        const updatableFields = ['name', 'price', 'category'];
        updatableFields.forEach(field => {
        if (req.body[field] !== undefined) {
            data[field] = req.body[field];
        };
        });

        // Actualizar el producto y devolver el resultado.
        const updated = await productosService.updateProducto(id, data);
        return res.status(200).json(updated);
    } catch (error) {
        next(error);
    };
};
