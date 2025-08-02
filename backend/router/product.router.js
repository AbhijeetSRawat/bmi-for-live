const express = require('express');
const upload = require('../middleware/upload');
const { createProduct, getAllProduct, getSingleProduct, putProduct, deleteProduct } = require('../controller/product.controller');
const productRouter = express.Router();
productRouter.post(
    "/", upload.fields([{ name: 'image', maxCount: 1 }]), createProduct
)
productRouter.get(
    "/", getAllProduct
)
productRouter.get(
    "/:id", getSingleProduct
)
productRouter.put(
    "/:id", upload.fields([{ name: 'image', maxCount: 1 }]), putProduct
)
productRouter.delete(
    "/:id", deleteProduct
)
module.exports = productRouter;