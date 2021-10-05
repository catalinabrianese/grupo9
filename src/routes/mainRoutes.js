const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");
const {check} = require("express-validator");
const mainController = require("../controllers/mainController");
const authMiddleware = require("../middlewares/authMiddleware");
const guestMiddleware = require("../middlewares/guestMiddleware");
const multerDS = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       //cb(null, path.join(__dirname, '../../public/img')); 
    }, 
    filename: function (req, file, cb) { 
        let newImage=file.originalname;
       cb(null,newImage);
    }
    });
const uploadFile = multer({ storage: multerDS });

router.get("/", mainController.index);

router.get("/productos", authMiddleware, mainController.products);
router.get("/productos/detalledeproducto/:id", mainController.detailproducts);

router.get("/carrito", mainController.carrito);


router.get("/productos/crear",authMiddleware, mainController.crear);
router.post("/productos/crear",authMiddleware,uploadFile.single('imagen'), mainController.guardar);

router.get("/productos/editar/:id",authMiddleware, mainController.editar);
router.post("/productos/editar/:id",authMiddleware, mainController.actualizar);

router.delete("/productos/eliminar/:id",authMiddleware, mainController.eliminar);

router.get("/api",mainController.api);
router.get("/api/:id",mainController.mostrar);
router.get("/api/buscar",mainController.buscar);


router.delete("/eliminar/:id", mainController.eliminar);

module.exports=(router);