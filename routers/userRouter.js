const userRouter = require('express').Router();
const UserController = require('../controllers/userController');
const paginationMW = require('../middlewares/pagination');

userRouter.post('/', UserController.createUser);
userRouter.get('/', paginationMW, UserController.getUsers);

userRouter.get('/:userId', UserController.getUser);
userRouter.put('/:userId', UserController.updateUser);
userRouter.delete('/:userId', UserController.deleteUser);

module.exports = userRouter;
