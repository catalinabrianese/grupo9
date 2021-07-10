const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

router.get("/", mainController.index);

router.get("/productos", mainController.products);
router.get("/detalledeproducto/:id", mainController.detailproducts);
router.get("/login", mainController.login);
router.get("/carrito", mainController.carrito);

router.get("/crear", mainController.crear);
router.post("/crear", mainController.guardar);
router.get("/editar/:id", mainController.editar);
//router.put("/editar/:id", mainController.actualizar);

router.post("/eliminar/:id", mainController.eliminar);

module.exports=(router);