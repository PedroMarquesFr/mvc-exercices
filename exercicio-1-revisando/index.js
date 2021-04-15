const express = require("express");
const jokeController = require("./Controller/jokeController");

const app = express();
app.set("view engine", "ejs");
app.set("views", "./View");

app.get("/joke", jokeController.listJokes);

app.listen(3000, () => console.log("listen port 3000"));
