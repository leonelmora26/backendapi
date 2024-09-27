import mongoose from "mongoose";

const usuario = new mongoose.Schema({
  nombre: { type: String, require: true, },
  identificacion: { type: String, require: true,},
  correo:  { type: String, require: true, unique: true},
  direccion: { type: String, require: true, unique: true},
  telefono: { type: String, require: true, unique: true},
  idProducto: {type:mongoose.Schema.Types.ObjectId,ref:'Producto', require:true},
  idImpuesto: {type:mongoose.Schema.Types.ObjectId,ref:'Impuesto', require:true},
  estado: { type: Boolean, default: 1 },
  createAT: { type: Date, default: Date.now },
});

export default mongoose.model("Usuario", usuario);
