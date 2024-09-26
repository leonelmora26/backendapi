import Usuario from "../models/usuario.js";

const helpersUsuario = {
  existeId: async (id, req) => {
    const existe = await Usuario.findById(id);

    if (!existe) {
      throw new Error(`El id no existe ${id}`);
    }

    req.req.UsuarioUpdate = existe;
  },

  existecedula: async (cedula, req) => {
    if (cedula.length < 10)
      throw new Error("La cédula debe contener 10 dígitos");

    const existe = await Usuario.findOne({
      $text: { $search: cedula },
    });

    if (existe) {
      if (req.method === "PUT" && req.req.body._id !== existe._id) {
        throw new Error(
          `Ya existe esa cédula en la base de datos para otro usuario!!!`
        );
      } else if (req.req.method === "POST") {
        throw new Error(`Ya existe esa cédula en la base de datos!!!`);
      }
    }
  }
}
 
export default helpersUsuario;
