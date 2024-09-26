import Producto from "../models/producto.js";

const httpProducto = {
    // Get
    getAll: async (req, res) => {
        try {
            const producto = await Producto.find();
            res.json(producto);
        } catch (error) {
            res.status(500).json({
                error: "Error al obtener los productos",
                details: error.message
            });
        }
    },

    // Post
    registroProducto: async (req, res) => {
        try {
            const { codigo_producto, cantidad, valor_unitario, fecha_vencimiento, fecha_elaboracion } = req.body;

            const producto = new Producto({ 
                codigo_producto, 
                cantidad, 
                valor_unitario, 
                fecha_vencimiento, 
                fecha_elaboracion 
            });
            
            await producto.save();
            res.json(producto);
        } catch (error) {
            res.status(500).json({
                error: "Error al registrar el producto",
                details: error.message
            });
        }
    },

    // Put
    editarproducto: async (req, res) => {
        try {
            const { id } = req.params;
            const { codigo_producto, cantidad, valor_unitario, fecha_vencimiento, fecha_elaboracion } = req.body;
            
            const producto = await Producto.findByIdAndUpdate(
                id,
                {
                    codigo_producto, 
                    cantidad, 
                    valor_unitario, 
                    fecha_vencimiento, 
                    fecha_elaboracion
                }, 
                { new: true }
            );

            if (!producto) {
                return res.status(404).json({ error: "Producto no encontrado" });
            }

            res.json(producto);
        } catch (error) {
            res.status(500).json({
                error: "Error al editar el producto",
                details: error.message
            });
        }
    },

    // Activar producto
    putactivar: async (req, res) => {
        try {
            const { id } = req.params;
            const producto = await Producto.findByIdAndUpdate(
                id,
                { estado: 1 },
                { new: true }
            );

            if (!producto) {
                return res.status(404).json({ error: "Producto no encontrado para activar" });
            }

            res.json(producto);
        } catch (error) {
            res.status(500).json({
                error: "Error al activar el producto",
                details: error.message
            });
        }
    },

    // Inactivar producto
    putinactivar: async (req, res) => {
        try {
            const { id } = req.params;
            const producto = await Producto.findByIdAndUpdate(
                id,
                { estado: 0 },
                { new: true }
            );

            if (!producto) {
                return res.status(404).json({ error: "Producto no encontrado para inactivar" });
            }

            res.json(producto);
        } catch (error) {
            res.status(500).json({
                error: "Error al inactivar el producto",
                details: error.message
            });
        }
    }
}

export default httpProducto;
