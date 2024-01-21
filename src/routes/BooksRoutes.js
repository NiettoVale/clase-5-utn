const express = require("express");
const librosController = require("../controllers/booksControllers");

const router = express.Router();

router.get("/libros", librosController.getLibros);
router.get("/libros/:id", librosController.getLibroById);
router.post("/libros", librosController.createLibro);
router.put("/libros/:id", librosController.updateLibro);
router.delete("/libros/:id", librosController.deleteLibro);

module.exports = router;
