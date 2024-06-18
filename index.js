import express from 'express';
import usuario from './routes/usuario.js'
import dbconnect from './config/config.js';

const app = express();

app.use(express.json());

app.use("/api/usuario", usuario)

app.listen(3001, () => {
    console.log("El servidor está en el puerto 3001")
})

dbconnect()