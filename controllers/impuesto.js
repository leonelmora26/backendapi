import Impuesto from "../models/impuesto.js"

const htppImpuesto = {
    //GET
    getAll: async (req, res) => {
        try {
            const impuesto = await Impuesto.find();
            res.json(impuesto);
        } catch (error) {
            res.status(500).json({
                error: "Error al obtener el impuesto",
                details: error.message
            });
        }
    },

    //POST 
    registroImpuesto: async (req, res) => {
        try {
            const { codigo_impuesto_cargo, retencion, valor_retencion, reteica, valor_reteica, porcentaje_descuento } = req.body;

            const impuesto = new Impuesto({
                codigo_impuesto_cargo,
                retencion,
                valor_retencion,
                reteica,
                valor_reteica,
                porcentaje_descuento
            });

            await impuesto.save();
            res.json(impuesto);
        } catch (error) {
            res.status(500).json({
                error: "Error al registrar el impuesto",
                details: error.message
            });
        }
    },

    // Put
    editarImpuesto: async (req, res) => {
        try {
            const { id } = req.params;
            const { codigo_impuesto_cargo, retencion, valor_retencion, reteica, valor_reteica, porcentaje_descuento } = req.body;

            const impuesto = await Impuesto.findByIdAndUpdate(
                id,
                {
                    codigo_impuesto_cargo,
                    retencion,
                    valor_retencion,
                    reteica,
                    valor_reteica,
                    porcentaje_descuento
                },
                { new: true }
            );

            if (!impuesto) {
                return res.status(404).json({ error: "impuesto no encontrado" });
            }

            res.json(impuesto);
        } catch (error) {
            res.status(500).json({
                error: "Error al editar el impuesto",
                details: error.message
            });
        }
    },

    // Activar impuesto
    putactivar: async (req, res) => {
        try {
            const { id } = req.params;
            const impuesto = await Impuesto.findByIdAndUpdate(
                id,
                { estado: 1 },
                { new: true }
            );

            if (!impuesto) {
                return res.status(404).json({ error: "impuesto no encontrado para activar" });
            }

            res.json(impuesto);
        } catch (error) {
            res.status(500).json({
                error: "Error al activar el impuesto",
                details: error.message
            });
        }
    },

    // Inactivar impuesto
    putinactivar: async (req, res) => {
        try {
            const { id } = req.params;
            const impuesto = await Impuesto.findByIdAndUpdate(
                id,
                { estado: 0 },
                { new: true }
            );

            if (!impuesto) {
                return res.status(404).json({ error: "impuesto no encontrado para inactivar" });
            }

            res.json(impuesto);
        } catch (error) {
            res.status(500).json({
                error: "Error al inactivar el impuesto",
                details: error.message
            });
        }
    }
}

export default htppImpuesto;