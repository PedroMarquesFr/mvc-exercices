const jokesModel = require("../Model/joke");
const listJokes = async (req, res) => {
  const joke = await jokesModel.getJokes();
  return res.render("jokeView.ejs", { joke });
};

module.exports = { listJokes };
