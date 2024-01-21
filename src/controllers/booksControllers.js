const Libro = require("../models/BookModel");

exports.getLibros = async (req, res) => {
  try {
    const libros = await Libro.find();
    res.json(libros);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener la lista de libros" });
  }
};

exports.getLibroById = async (req, res) => {
  const { id } = req.params;
  try {
    const libro = await Libro.findById(id);
    if (!libro) {
      return res.status(404).json({ error: "Libro no encontrado" });
    }
    res.json(libro);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el libro" });
  }
};

exports.createLibro = async (req, res) => {
  const { title, author } = req.body;
  try {
    const nuevoLibro = new Libro({ title, author });
    const libroGuardado = await nuevoLibro.save();
    res.status(201).json(libroGuardado);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el libro" });
  }
};

exports.updateLibro = async (req, res) => {
  const { id } = req.params;
  const { title, author } = req.body;
  try {
    const libro = await Libro.findByIdAndUpdate(
      id,
      { title, author },
      { new: true }
    );
    if (!libro) {
      return res.status(404).json({ error: "Libro no encontrado" });
    }
    res.json(libro);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el libro" });
  }
};

exports.deleteLibro = async (req, res) => {
  const { id } = req.params;
  try {
    const libro = await Libro.findByIdAndDelete(id);
    if (!libro) {
      return res.status(404).json({ error: "Libro no encontrado" });
    }
    res.json({ mensaje: "Libro eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el libro" });
  }
};
