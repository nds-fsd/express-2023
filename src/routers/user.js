const express = require('express');
const router = express.Router();
const userRouter = require('../controlers/user');
const {addDateMiddleware} = require('../middlewares/index');

router.get('/', addDateMiddleware, userRouter.getUser);

module.exports = router;
