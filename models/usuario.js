import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
  nombre: { type: String, require: true, },
  apellido: { type: String, require: true,},
  cedula: { type: String, index: 'text', require: true, unique: true, minlength:7, maxlength: 10},
  correo: { type: String, require: true, unique: true},
  telefono: { type: String, required: true, unique:true,  },
  estado: { type: Boolean, default: 1 },
  createAT: { type: Date, default: Date.now },
});

export default mongoose.model("Usuario", usuarioSchema);
