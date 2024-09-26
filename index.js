import express from 'express';
import http from 'http';
import "dotenv/config";
import mongoose from 'mongoose'
import usuario from './routes/usuario.js';
import proyecto from './routes/proyecto.js';
import producto from './routes/producto.js'
import impuesto from './routes/impuesto.js'

import cors from 'cors';




const app = express();
app.use(cors());

const port= process.env.PORT

app.use(express.json());

app.use("/api/usuario", usuario);
app.use("/api/proyecto", proyecto);
app.use ("/api/producto", producto);
app.use ("/api/impuesto", impuesto);


const server = http.createServer(app)

mongoose.connect(`${process.env.mongoDB}`)
  .then(() => console.log('Conexión a mongoDB exitosa!'));

server.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
    console.log('hola soy mongo', process.env.mongoDB)
});