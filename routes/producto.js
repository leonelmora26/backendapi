import { Router } from "express";
import httpProducto from "../controllers/producto.js";
import { check } from "express-validator";
import validarCampos from "../middlewares/validar.js";

const router = new Router();

//Get
router.get("/all", httpProducto.getAll);

//Post
router.post(
    "/agregar",
    [
        check ("descripcion").not().isEmpty(),
        check("codigo_producto").not().isEmpty(),
        check("cantidad").not().isEmpty(),
        check("valor_unitario").not().isEmpty(),
        check("fecha_vencimiento").not().isEmpty(),
        check("fecha_elaboracion").not().isEmpty(),
        validarCampos,
    ],
    httpProducto.registroProducto);

//Put

router.put("/editar/:id",
    [
        check("id", "ingresa una id").not().isEmpty(),
        check("id", "Id no válida").isMongoId(),
        check("codigo_producto").not().isEmpty(),
        check("cantidad").not().isEmpty(),
        check("valor_unitario").not().isEmpty(),
        check("fecha_vencimiento").not().isEmpty(),
        check("fecha_elaboracion").not().isEmpty(),
        validarCampos,
    ],
    httpProducto.editarproducto
);

router.put("activar/:id",
    [
        check("id", "Ingrese un ID válido").not().isEmpty(),
        check("id", "Ingrese un ID válido").isMongoId(),
        validarCampos,
    ],
    httpProducto.putactivar
);

router.put("inacrivar/:id",
    [
        check("id", "Ingrese un ID válido").not().isEmpty(),
        check("id", "Ingrese un ID válido").isMongoId(),
        validarCampos,
    ],
    httpProducto.putinactivar
);

export default router;
