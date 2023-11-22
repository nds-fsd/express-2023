const express = require('express');
const router = express.Router();
const userRouter = require('../controlers/user');
const {addDateMiddleware, validateUser} = require('../middlewares/index');

router.get('/', addDateMiddleware, userRouter.getUsers);
router.get('/:id', addDateMiddleware, userRouter.getUser);
router.post('/', validateUser, userRouter.createUser);
router.put('/:id', userRouter.updateUser);
router.patch('/:id', userRouter.patchUser);
router.delete('/:id',  userRouter.deleteUser);

module.exports = router;
