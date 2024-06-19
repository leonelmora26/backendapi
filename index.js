import express from 'express';
import http from 'http';
import "dotenv/config";
import mongoose from 'mongoose'
import usuario from './routes/usuario.js';
import proyecto from './routes/proyecto.js';



const app = express();
const port= process.env.PORT

app.use(express.json());

app.use("/api/usuario", usuario);
app.use("/api/proyecto", proyecto);

const server = http.createServer(app)

mongoose.connect(`${process.env.mongoDB}`)
  .then(() => console.log('Conexión a mongoDB exitosa!'));

server.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
    console.log('hola soy mongo', process.env.mongoDB)
});