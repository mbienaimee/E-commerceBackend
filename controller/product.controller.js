import productModel from "../model/product.model.js";

const productController = {
  creating: async (req, res, next) => {
    try {
      const newProduct = await productModel.create();
      res.status(201).json({
        message: "product created",
        data: newProduct,
      });
    } catch (err) {}
  },
};
export default productController