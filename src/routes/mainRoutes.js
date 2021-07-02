const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

router.get("/", mainController.index);
router.get("/register", mainController.register);

router.get("/detalledeproducto/:id", mainController.products);
router.get("/login", mainController.login);
router.get("/carrito", mainController.carrito);

module.exports=(router);