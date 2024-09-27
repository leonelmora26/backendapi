import mongoose from "mongoose";

const producto = new mongoose.Schema({
  descripcion: { type: String, require: true, unique: true },
  codigo_producto: { type: String, require: true, unique: true },
  cantidad: { type: String, require: true, unique: true},
  valor_unitario: { type: String, required: true, unique: true},
  fecha_vencimiento: { type: String, required: true, unique:true},
  fecha_elaboracion: { type: String, required: true, unique:true},
  estado : { type: Boolean, default:1}

})
export default mongoose.model("Producto", producto);
