const express = require("express");
const RestaurantController = require("../controlers/restaurant");

const router = express.Router();

router.get("/", RestaurantController.getAll);
router.get("/:id", RestaurantController.getById);
router.post("/", RestaurantController.create);
router.patch("/add-category", RestaurantController.addCategory);

module.exports = router;
