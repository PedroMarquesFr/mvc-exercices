const jokeService = require("../model/jokeModel")

const getRandomJokeByCategory = async (req, res) => {
  const { categorie } = req.params;
  const joke = await jokeService.getJokeByCategory(categorie);
  console.log(joke)
  return res.render("joke/index.ejs", { joke });
};

module.exports = {getRandomJokeByCategory};
