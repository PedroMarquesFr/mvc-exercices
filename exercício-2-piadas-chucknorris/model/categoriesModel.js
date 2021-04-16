const axios = require("axios");

const getCategories = () => {
  return axios
    .get("https://api.chucknorris.io/jokes/categories")
    .then((r) => r.data);
};

module.exports = { getCategories };
