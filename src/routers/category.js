const express = require("express");
const categoriesController = require("../controlers/category");

const router = express.Router();

router.get("/",categoriesController.getAll)
router.post("/", categoriesController.create);

module.exports = router;
