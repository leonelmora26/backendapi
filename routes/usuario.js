import { Router } from "express";
import httpUsuario from "../controllers/usuario.js";
import { check } from "express-validator";
import validarCampos from "../middlewares/validar.js";
import helpersUsuario from "../helpers/usuario.js";

const router = new Router();

//Get
router.get("/all", httpUsuario.getAll);

//Post
router.post(
  "/registro",
  [
    check("nombre", "Digite el nombre").not().isEmpty(),
    check("apellido", "Digite el apellido").not().isEmpty(),
    check("cedula", "Digite la cedula").not().isEmpty(),
    check("cedula").custom(helpersUsuario.existecedula),
    check("correo", "Digite el correo").not().isEmpty(),
    check("correo", "Dirección de correo no válida").isEmail(),
    check('correo').custom(helpersUsuario.existeCorreo),
    check("telefono", "Digite el telefono").not().isEmpty(),
    check('telefono').custom(helpersUsuario.existeTelefono),
    validarCampos,
  ],
  httpUsuario.registroUsuario
);


//Put

router.put(
  "/editar/:id",
  [
    check("id", "Ingrese una id").not().isEmpty(),
    check("id", "Id no válida").isMongoId(),
    check("nombre", "Digite el nombre").not().isEmpty(),
    check("apellido", "Digite el apellido").not().isEmpty(),
    check("cedula", "Digite la cedula").not().isEmpty(),
    check('cedula').custom(helpersUsuario.existecedula),
    check("correo", "Digite el correo").not().isEmpty(),
    check("correo", "Dirección de correo no válida").isEmail(),
    check('correo').custom(helpersUsuario.existeCorreo),
    check("telefono", "Digite el telefono").not().isEmpty(),
    check('telefono').custom(helpersUsuario.existeTelefono),
    validarCampos,
  ],
  httpUsuario.editarUsuario
);

router.put(
  "/inactivar/:id",
  [
    check("id", "Ingrese un ID válido").not().isEmpty(),
    check("id", "Ingrese un ID válido").isMongoId(),
    validarCampos,
  ],
  httpUsuario.putInactivar
);
router.put(
  "/activar/:id",
  [
    check("id", "Ingrese un ID válido").not().isEmpty(),
    check("id", "Ingrese un ID válido").isMongoId(),
    validarCampos,
  ],
  httpUsuario.putActivar
);

export default router;
