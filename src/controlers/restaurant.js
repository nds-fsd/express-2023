const Restaurant = require("../data/schemas/restaurant");

const getAll = async (req, res) => {
  const queryStrings = {
    categories: req.query.categories,
  };

  console.log(req.jwtPayload);

  const result = await Restaurant.find(queryStrings).populate(["categories", "owner"]);
  res.json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await Restaurant.findById(id);
  res.json(result);
};

const create = async (req, res) => {
  const body = req.body;

  const restaurantData = {
    name: body.name,
    owner: body.owner,
    categories: body.categories,
  };

  const newRestaurant = new Restaurant(restaurantData);
  await newRestaurant.save();
  res.send(newRestaurant);
};

const addCategory = async (req, res) => {
  const { categoryId, restaurantId } = req.body;

  const body = { $push: { categories: categoryId } };

  const updatedRestaurant = await Restaurant.findByIdAndUpdate(
    restaurantId,
    body
  );

  res.status(201).json(updatedRestaurant);
};

module.exports = { getAll, create, getById, addCategory };
//.populate(["owner",'categories']);
