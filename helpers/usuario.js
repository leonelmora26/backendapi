import Usuario from "../models/usuario.js";

const helpersUsuario = {
  existecedula: async (cedula, req) => {
    if (cedula.length < 10)
      throw new Error("La cédula debe contener 10 dígitos");

    const existe = await Usuario.findOne({
      $text: { $search: cedula },
    });

    if (existe) {
      if (req.method === "PUT" && req.req.body._id != existe._id) {
        throw new Error(
          `Ya existe esa cédula en la base de datos para otro usuario!!!`
        );
      } else if (req.req.method === "POST") {
        throw new Error(`Ya existe esa cédula en la base de datos!!!`);
      }
    }

    req.UsuarioUpdate = existe;
  },

  existeTelefono: async (telefono, req) => {
    if (telefono.length != 10)
      throw new Error("El teléfono debe contener 10 digitos");
    const existe = await Usuario.findOne({ telefono });

    if (existe) {
      if (req.method === "PUT" && req.req.body._id != existe._id) {
        throw new Error(`Ya existe ese teléfono en la base de datos!!! `);
      } else if (req.req.method === "POST") {
        throw new Error(`Ya existe ese teléfono en la base de datos!!! `);
      }
    }

    req.req.UsuarioUpdate = existe;
  },

  existeCorreo: async (correo, req) => {
    const existe = await Usuario.findOne({ correo });

    if (!existe && req.req.method === "GET") {
      throw new Error(`El correo no se encuentra registrado`);
    }

    if (existe) {
      if (req.method === "PUT" && req.req.body._id != existe._id) {
        throw new Error(`Ya existe ese correo en la base de datos!!! `);
      } else if (req.req.method === "POST") {
        throw new Error(`Ya existe ese correo en la base de datos!!! `);
      }
    }

    req.req.UsuarioUpdate = existe;
  },
};
export default helpersUsuario;
