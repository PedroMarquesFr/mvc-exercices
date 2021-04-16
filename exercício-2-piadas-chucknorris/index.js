const express = require("express");
const categorieController = require("./controller/categorieController");
const jokeController = require("./controller/jokeController");

const app = express();
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", categorieController.getCategories);
app.get("/jokes/:categorie", jokeController.getRandomJokeByCategory);

app.listen(3000, () => console.log("listen port 3000"));
