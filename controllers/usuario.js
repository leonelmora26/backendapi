import Usuario from "../models/usuario.js";

const httpUsuario = {
  //Get
  getAll: async (req, res) => {
    try {
      const usuario = await Usuario.find()
        .populate("idProducto")
        .populate("idImpuesto");
      res.json({ usuario });
    } catch (error) {
      res.status(500).json({ error });
    }
  },

  //Post registro usuario
  registroUsuario: async (req, res) => {
    try {
      const { nombre, identificacion, correo, direccion, telefono, idProducto, idImpuesto } = req.body;

      const usuario = new Usuario({ nombre, identificacion, correo, direccion, telefono, idProducto, idImpuesto });
      await usuario.save();

      res.json(usuario);
    } catch (error) {
      res.status(500).json({ error });
    }
  },

  editarUsuario: async (req, res) => {
    try {
      const { id } = req.params;
      const { nombre, identificacion } = req.body;

      const usuario = await Usuario.findByIdAndUpdate(
        id,
        {
          nombre,
          identificacion,
        },
        { new: true }
      );

      res.json(usuario);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  },

  putActivar: async (req, res) => {
    try {
      const { id } = req.params;
      const usuario = await Usuario.findByIdAndUpdate(
        id,
        { estado: 1 },
        { new: true }
      );
      res.json(usuario);
    } catch (error) {
      res.status(500).json({ error });
    }
  },

  putInactivar: async (req, res) => {
    try {
      const { id } = req.params;

      const usuario = await Usuario.findByIdAndUpdate(
        id,
        { estado: 0 },
        { new: true }
      );
      res.json(usuario);
    } catch (error) {
      res.status(500).json({ error });
    }
  },
};

export default httpUsuario;
