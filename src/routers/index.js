const express = require('express');
const userRouter = require('./user');
const categoryRouter = require('./category');
const restaurantRouter = require('./restaurants');

const router = express.Router();

router.use('/users', userRouter);
router.use('/category', categoryRouter);
router.use('/restaurant', restaurantRouter);

module.exports = router;
