import { Router } from "express";
import { body, oneOf, validationResult } from "express-validator";
import { handleInputErrors } from "./modules/middleware";
import {
  createProduct,
  deleteProduct,
  getOneProduct,
  getProducts,
} from "./handlers/products";
import {
  createUpdate,
  deleteUpdate,
  getOneUpdate,
  getUpdates,
  updateUpdate,
} from "./handlers/update";

const router = Router();

/*
 * Product
 */

router.get("/product", getProducts);
router.get("/product/:id", getOneProduct);
router.post(
  "/product",
  body("name").isString(),
  handleInputErrors,
  createProduct,
);
router.put(
  "/product/:id",
  body("name").isString(),
  handleInputErrors,
  (req, res) => {},
);
router.delete("/product/:id", deleteProduct);

/*
 * Update
 */

router.get("/update", getUpdates);
router.get("/update/:id", getOneUpdate);
router.post(
  "/update",
  body("title").exists().isString(),
  body("body").exists().isString(),
  body("productId").exists().isString(),
  updateUpdate,
);
router.put(
  "/update/:id",
  body("title").optional(),
  body("body").optional(),
  body("status").isIn(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]).optional(),
  body("version").optional(),
  createUpdate,
);
router.delete("/update/:id", deleteUpdate);

/*
 * Update Point
 */

router.get("/updatepoint", () => {});
router.get("/updatepoint/:id", () => {});
router.post(
  "/updatepoint",
  body("name").exists().isString(),
  body("Description").exists().isString(),
  body("updateId").exists().isString(),
  () => {},
);
router.put(
  "/updatepoint/:id",
  body("name").optional().isString(),
  body("Description").optional().isString(),
  () => {},
);
router.delete("/updatepoint/:id", () => {});

export default router;
