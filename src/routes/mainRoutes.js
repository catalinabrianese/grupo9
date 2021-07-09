const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

router.get("/", mainController.index);


router.get("/detalledeproducto/:id", mainController.products);
router.get("/login", mainController.login);
router.get("/carrito", mainController.carrito);

router.get("/crear", mainController.crear);
router.post("/crear", mainController.guardar);
router.get("/editar/:id?", mainController.editar);
//router.put("/editar/:id", mainController.actualizar);

module.exports=(router);