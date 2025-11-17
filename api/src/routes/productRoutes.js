import { Router } from "express";
import * as productController from "../controllers/productController";
import { validate } from "../middlewares/validate";
import { productSchema } from "../schemas/productSchema";

const router = Router();

router.get("/", productController.list);
router.post("/", validate(productSchema) ,productController.create);

export default router;