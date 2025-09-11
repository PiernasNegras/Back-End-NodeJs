import { db } from '../data/data.js'
import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    deleteDoc,
    doc
} from 'firebase/firestore';

//  instancia de la db referenciada a la collecion de productos.
const productosCollection = collection(db, 'productos');

// Defino el metodo para obtener todos los productos desde Firestore.
export async function getAllProductos() {
    try {
        // Utilizo getDocs para obtener todos los elementos de una coleccion.
        const querySnapshot = await getDocs(productosCollection);
        const productos = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return productos;
    } catch (error) {
        console.error('Error leyendo los productos', error);
        throw error;
    }
};

// Defino metodo para buscar producto por su ID usando FireStore.
export async function getProductoById(id) {
    try{
        // getDoc para obtener un unico documento por su id.
        const productoDoc = await getDoc(doc(productosCollection, id));
        
        if(!productoDoc.exists()){
            return null;
        }
        return {id: productoDoc.id, ...productoDoc.data()}
    } catch(error){
        console.log('Error leyendo los productos por ID', error);
        throw error;
    }
};


// Defino un método para guardar un producto en Firestore.
export async function saveProducto(producto) {
    try {
        // addDoc metodo para agregar un nuevo documento a la coleccion.
        const docRef = await addDoc(productosCollection, producto);
        return { id: docRef.id, ...producto };
    } catch (error) {
        console.error('Error al guardar el producto', error);
        throw error;
    }
};


// Defino un metodo para borrar un producto en FireStore.
export async function deleteProducto(id) {
    try{
        // deleteDoc se utiliza para obetener la referencia a un documento especifico dentro de la coleccion.
        await deleteDoc(doc(productosCollection, id));
    }catch(error){
        console.error('Error al borrar el producto', error);
        throw error;
    }
};

// import fs from 'fs'
// import path from 'path'
// import { fileURLToPath } from 'url'

// const __dirname = path.dirname(fileURLToPath(import.meta.url))
// const dataPath = path.join(__dirname, '../data/productos.json')

// export function getAllProductos() {
//     const data = fs.readFileSync(dataPath, 'utf-8')
//     return JSON.parse(data)
// }

// export function getProductoById(id) {
//     const numericId = typeof id === 'string' ? parseInt(id, 10) : id 
//     const productos = getAllProductos()
//     return productos.find(p => p.id === numericId)
// }

// export function saveProducto({name, price, category}) {
//     const productos = getAllProductos()
//     const newProducto = { id: productos.length, name, price, category }
//     productos.push(newProducto)
//     fs.writeFileSync(dataPath, JSON.stringify(productos, null, 2))
//     return newProducto
// }

// export function deleteProducto(id) {
//     const numericId = typeof id === 'string' ? parseInt(id, 10) : id
//     const productos = getAllProductos().filter(p => p.id !== numericId)
//     fs.writeFileSync(dataPath, JSON.stringify(productos, null, 2))
// }
