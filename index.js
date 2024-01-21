const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const librosRoutes = require("./src/routes/BooksRoutes");

const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect("mongodb://localhost:27017/api_libros", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());

app.use("/", librosRoutes);

app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
