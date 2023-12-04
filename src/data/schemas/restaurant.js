const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
  name: String,
  owner: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  categories: [{
    type: Schema.Types.ObjectId,
    ref: "category",
  }],
});

const Restaurant = mongoose.model("restaurant", RestaurantSchema);


module.exports = Restaurant;
