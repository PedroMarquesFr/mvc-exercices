const categoriesModel = require("../model/categoriesModel");

const getCategories = async (req, res) => {
  const categories = await categoriesModel.getCategories();
  console.log(categories);
  return res.render("categories/index.ejs", { categories });
};
module.exports = { getCategories };
