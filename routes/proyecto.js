import { Router } from "express";
import httpProyecto from "../controllers/proyecto.js";
import { check } from "express-validator";
import validarCampos from "../middlewares/validar.js";
import helpersUsuario from "../helpers/usuario.js";
import helpersProyecto from "../helpers/proyecto.js";

const router = new Router();

//Get
router.get("/all", httpProyecto.getAll);

router.get(
  "/buscarPorUsuario/:idUsuario",
  [
    check("idUsuario", "Seleccione un usuario").not().isEmpty(),
    check("idUsuario", "El id es invalido").isMongoId(),
    check("idUsuario").custom(helpersUsuario.existeId),
    validarCampos,
  ],
  httpProyecto.getPorUsuario
);

//Post
router.post(
  "/registro",
  [
    check("codigo", "Digite el codigo").not().isEmpty(),
    check("codigo").custom(helpersProyecto.existeCodigo),
    check("nombre", "Digite el nombre").not().isEmpty(),
    check("descripcion", "Digite la descripción").not().isEmpty(),
    check("idUsuario", "Seleccione un usuario").not().isEmpty(),
    check("idUsuario", "El id es invalido").isMongoId(),
    check("idUsuario").custom(helpersUsuario.existeId),
    validarCampos,
  ],
  httpProyecto.registroProyecto
);

//Put

router.put(
  "/editar/:id",
  [
    check("codigo", "Digite el codigo").not().isEmpty(),
    check("codigo").custom(helpersProyecto.existeCodigo),
    check("nombre", "Digite el nombre").not().isEmpty(),
    check("descripcion", "Digite la descripción").not().isEmpty(),
    check("idUsuario", "Seleccione un usuario").not().isEmpty(),
    check("idUsuario", "El id es invalido").isMongoId(),
    check("idUsuario").custom(helpersUsuario.existeId),
    validarCampos,
  ],
  httpProyecto.editarProyecto
);

router.put(
  "/inactivar/:id",
  [
    check("id", "Ingrese un ID válido").not().isEmpty(),
    check("id", "Ingrese un ID válido").isMongoId(),
    validarCampos,
  ],
  httpProyecto.putInactivar
);
router.put(
  "/activar/:id",
  [
    check("id", "Ingrese un ID válido").not().isEmpty(),
    check("id", "Ingrese un ID válido").isMongoId(),
    validarCampos,
  ],
  httpProyecto.putActivar
);

export default router;
