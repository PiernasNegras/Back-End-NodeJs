import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

//---------------------imports de rutas--------------------------.
import productosRouter from './src/routes/productosRouter.js';
import authRouter from './src/routes/authRoutes.js';
import { authentication } from './src/middlewares/authentication.js';


const app = express();

//----------------configuraicon basica, permite todos los origenes.
app.use(cors());
app.use(bodyParser.json());

// ------------------rutas----------------------------.
app.get('/',(req,res) =>{
    res.send('Hola do mundo Express!');
});

// ruta de autenticacion.
app.use('/auth',authRouter);

// ruta de productos, con middleware de auth.
app.use('/api',authentication,productosRouter);


// middelware para manejar error 404
app.use((req, res, next)=>{
    res.status(404).send('El recurso no esta, el recurso no esta, el recurso no existe');
});

// defino el puerto
const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`Servidor corriendo na http://localhost:${PORT}`);
    
});