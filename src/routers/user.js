const express = require('express');
const router = express.Router();
const userRouter = require('../controlers/user');
const {addDateMiddleware, validateUser} = require('../middlewares/index');

router.get('/', addDateMiddleware, userRouter.getUser);
router.post('/', validateUser, userRouter.createUser);

module.exports = router;
