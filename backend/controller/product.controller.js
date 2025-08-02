const productModel = require("../model/product.model");

const controller = {
    createProduct: async (req, res) => {
        try {
            const { sale, title, price, category } = req.body;
            const image = req.files?.image?.[0]?.filename;
            if (!category || !image) {
                return res.status(400).json({ message: "Category and image are required" });
            }
            const productCreate = new productModel({ sale, title, price, image, category });
            if (!productCreate) {
                res.status(400).json({ message: "Product not found" })
            }
            await productCreate.save()
            res.status(200).json({ message: "Succes Products", productCreate })
        } catch (error) {
            res.status(500).json({ message: "Internal server error" })
        }
    },
    getAllProduct: async (req, res) => {
        try {
            const category = req.query.category;
            const filter = category ? { category } : {};
            const product = await productModel.find(filter).sort({ createdAt: -1 })
            res.json(product)
        } catch (err) {
            res.status(500).json({ message: "Internal Server Error" })
        }
    },
    getSingleProduct: async (req, res) => {
        try {
            const { id } = req.params;
            const product = await productModel.findById(id)
            if (!product) {
                return res.status(400).json({ message: "Product not found" })
            }
            res.json(product);
        } catch (err) {
            res.status(500).json({ message: "Internal server error" })
        }
    },
    putProduct: async (req, res) => {
        try {
            const { id } = req.params;
            const updates = req.body;
            if (req.files?.image?.[0]?.filename) {
                updates.image = req.files.image[0].filename;
            }
            const updateProduct = await productModel.findByIdAndUpdate(id, updates, { new: true });
            if (!updateProduct) {
                return res.status(400).json({ message: "Product Not a Updates" })
            }
            res.status(200).json({ message: "product Updates Success", updateProduct })
        } catch (err) {
            console.log("update Error", err.message)
            res.status(500).json({ message: "Internal Server Error" })
        }
    },
    deleteProduct: async (req, res) => {
        try {
            const productDelete = await productModel.findByIdAndDelete(req.params.id);
            if (!productDelete) {
                return res.status(400).json({ message: "product id not found" })
            }
            res.json({ message: "delted products" })
        } catch (err) {
            res.status(500).json({ message: "Internal Server Error" })
        }
    }
}
module.exports = controller;