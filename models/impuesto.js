import mongoose from "mongoose";

const impuesto = new mongoose.Schema({
    codigo_impuesto_cargo: { type: String, required: true, unique:true,  },
    retencion: { type: String, required: true, unique:true,  },
    valor_retencion: { type: String, required: true, unique:true,  },
    reteica: { type: String, required: true, unique:true,  },
    valor_reteica: { type: String, required: true, unique:true,  },
    porcentaje_descuento: { type: String, required: true, unique:true,  },
    estado : { type: Boolean, default:1}

})

export default mongoose.model("Impuesto", impuesto);
 