const axios = require("axios");

const getJokes = () => {
  return axios
    .get(
      "https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=single"
    )
    .then((r) => {
      console.log(r.data);
      return r.data.joke;
    })
    .catch((err) => console.error(err));
};

module.exports = { getJokes };
