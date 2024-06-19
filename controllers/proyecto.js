import Proyecto from "../models/proyecto.js";

const httpProyecto = {
  //Get
  getAll: async (req, res) => {
    try {
      const proyecto = await Proyecto.find().populate("idUsuario");
      res.json(proyecto);
    } catch (error) {
      res.status(500).json({ error });
    }
  },

  getPorUsuario: async (req, res) => {
    const idUsuario = req.params.idUsuario;

    try {
      const proyectos = await Proyecto.find( {idUsuario} ).populate("idUsuario")
      res.json(proyectos);
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  //Post registro proyecto
  registroProyecto: async (req, res) => {
    try {
      const { codigo, nombre, descripcion, idUsuario } = req.body;

      const proyecto = new Proyecto({
        codigo,
        nombre,
        descripcion,
        idUsuario,
      });

      await proyecto.save();

      const proyect = await Proyecto.findById(proyecto._id).populate("idUsuario")

      res.json(proyect);
    } catch (error) {
      res.status(500).json({ error });
    }
  },

  editarProyecto: async (req, res) => {
    try {
      const { id } = req.params;
      const { codigo, nombre, descripcion, idUsuario } = req.body;

      const proyecto = await Proyecto.findByIdAndUpdate(
        id,
        {
          codigo,
          nombre,
          descripcion,
          idUsuario,
        },
        { new: true }
      ).populate("idUsuario");

      res.json(proyecto);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  },

  putActivar: async (req, res) => {
    try {
      const { id } = req.params;
      const proyecto = await Proyecto.findByIdAndUpdate(
        id,
        { estado: 1 },
        { new: true }
      );
      res.json(proyecto);
    } catch (error) {
      res.status(500).json({ error });
    }
  },

  putInactivar: async (req, res) => {
    try {
      const { id } = req.params;

      const proyecto = await Proyecto.findByIdAndUpdate(
        id,
        { estado: 0 },
        { new: true }
      );
      res.json(proyecto);
    } catch (error) {
      res.status(500).json({ error });
    }
  },
};

export default httpProyecto;
