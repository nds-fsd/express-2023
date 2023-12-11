const express = require('express');
const userRouter = require('./user');
const categoryRouter = require('./category');
const restaurantRouter = require('./restaurants');
const authRouter = require('./auth');
const { jwtMiddleware } = require('../security/jwt');

const router = express.Router();

router.use('/users', userRouter);
router.use('/category', jwtMiddleware, categoryRouter);
router.use('/restaurant', jwtMiddleware, restaurantRouter);
router.use('/auth', authRouter);

module.exports = router;
