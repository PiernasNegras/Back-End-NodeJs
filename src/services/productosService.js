import * as producto from '../models/productosModels.js'
// servicios que llama al modelo correspondiente.
export const getAllProductos = () => {
    return producto.getAllProductos();
};

// traer producto por id.
export const getProductoById = async (id) => {
    return producto.getProductoById(id);
};

// crear producto.
export const createProducto = async (productoData) => { 
    return producto.saveProducto(productoData);
};

// borrar por id.
export const deleteProducto = async (id) => {
    return producto.deleteProducto(id);
}

// actualiza producto por id
export const updateProducto = async (id,data) => {
    return producto.updateProducto(id,data);
}