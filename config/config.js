import mongoose from 'mongoose';

const dbconnect = () => {
    mongoose.connect("mongodb://localhost:27017/prueba")
    .then(() => {
        console.log("Conexión exitosa");
    })
    .catch((error) => {
        console.error("Error en la conexión", error);
    });
};

export default dbconnect;
