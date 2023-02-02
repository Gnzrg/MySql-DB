const express = require("express");

const router = express.Router();
const products = require("../controllers/products.controller.js");

router.get("/products", products.getAll);
// router.get("/products/:id", products.get);
router.post("/products", products.create);
router.delete("/products/:id", products.delete);
router.put("/products", products.update);

module.exports = router;
