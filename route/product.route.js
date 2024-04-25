import productController from "../controller/product.controller.js";
import { Router } from "express";
const route = Router()

route.post('/add',productController.creating)

export default route