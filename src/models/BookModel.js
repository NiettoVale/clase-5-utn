const mongoose = require("mongoose");

const libroSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  // Otros campos relevantes
});

const Libro = mongoose.model("Libro", libroSchema, "libros");

module.exports = Libro;
