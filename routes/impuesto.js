import { Router } from "express";
import htppImpuesto from "../controllers/impuesto.js";
import { check } from "express-validator";
import validarCampos from "../middlewares/validar.js";

const router = new Router();

//Get
router.get("/all", htppImpuesto.getAll);

//Post
router.post(
    "/agregar",
    [
        check("codigo_impuesto_cargo").not().isEmpty(),
        check("retencion").not().isEmpty(),
        check("valor_retencion").not().isEmpty(),
        check("reteica").not().isEmpty(),
        check("valor_reteica").not().isEmpty(),
        check("porcentaje_descuento").not().isEmpty(),

        
        validarCampos,
    ],
    htppImpuesto.registroImpuesto);

//Put

router.put("/editar/:id",
    [
        check("id", "ingresa una id").not().isEmpty(),
        check("id", "Id no válida").isMongoId(),
        check("codigo_impuesto_cargo").not().isEmpty(),
        check("retencion").not().isEmpty(),
        check("valor_retencion").not().isEmpty(),
        check("reteica").not().isEmpty(),
        check("valor_reteica").not().isEmpty(),
        check("porcentaje_descuento").not().isEmpty(),
        validarCampos,
    ],
    htppImpuesto.editarImpuesto
);

router.put("activar/:id",
    [
        check("id", "Ingrese un ID válido").not().isEmpty(),
        check("id", "Ingrese un ID válido").isMongoId(),
        validarCampos,
    ],
    htppImpuesto.putactivar
);

router.put("inactivar/:id",
    [
        check("id", "Ingrese un ID válido").not().isEmpty(),
        check("id", "Ingrese un ID válido").isMongoId(),
        validarCampos,
    ],
    htppImpuesto.putinactivar
);

export default router;
