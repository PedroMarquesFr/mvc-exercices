const axios = require("axios");

const getJokeByCategory = (category) => {
  return axios
    .get(`https://api.chucknorris.io/jokes/random?category=${category}`)
    .then((r) => r.data.value);
};

module.exports = { getJokeByCategory };
