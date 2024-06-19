import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
  codigo: { type: String, index: 'text', require: true, unique: true },
  nombre: { type: String, require: true },
  descripcion: { type: String, require: true },
  idUsuario: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario", require: true },
  estado: { type: Boolean, default: 1 },
  createAT: { type: Date, default: Date.now },
});

export default mongoose.model("Proyecto", usuarioSchema);
