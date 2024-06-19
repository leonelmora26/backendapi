import proyecto from "../models/proyecto.js";

const helpersProyecto = {
  existeCodigo: async (codigo, req) => {
    if (codigo) {
      const existe = await proyecto.findOne({ $text: { $search: codigo } });
      if (existe) {
        if (req.req.method === "PUT" && req.req.body._id != existe._id) {
          throw new Error(`Ya existe ese codigo en la base de datos!!! `);
        } else if (req.req.method === "POST") {
          throw new Error(`Ya existe ese codigo en la base de datos!!! `);
        }
      }
    }
  },
};

export default helpersProyecto;
