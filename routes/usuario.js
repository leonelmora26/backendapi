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
    check("identificacion", "Digite el numero de identificación").not().isEmpty(),
    check("idProducto", "idProducto inválida").isMongoId(),
    check("idImpuesto", "id impuesto inválida").isMongoId(),
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
    check("identificacion", "Digite la identificacion").not().isEmpty(),
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
