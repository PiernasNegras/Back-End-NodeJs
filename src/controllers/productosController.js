import * as productosService from '../services/productosService.js';

export const getAllProductos = async (req, res) => {
    const productos = await productosService.getAllProductos();
    res.status(200).json(productos);
};

export const getProductosById = async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const producto = await productosService.getProductoById(id);
    if (producto) {
    return res.status(200).json(producto);
    }
    return res.status(404).json({ message: 'Producto no encontrado' });
};

export const createProducto = async (req, res) => {
    const { name, price, category } = req.body;
    const newProducto = await productosService.createProducto({ name, price, category });
    res.status(201).json(newProducto);
};

export const deleteProducto = async (req, res) => {
    const { id } = req.params;
    const producto = await productosService.getProductoById(id);
    if (!producto) {
    return res.status(404).json({ message: 'Producto no encontrado' });
    }
    await productosService.deleteProducto(id);
    return res.status(200).json({ message: 'Producto borrado correctamente', id });
};
