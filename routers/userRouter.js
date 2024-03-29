const userRouter = require('express').Router();
const UserController = require('../controllers/userController');
const paginationMW = require('../middlewares/pagination');
const { findUser } = require('../middlewares/usersMW');
const imageUpload = require('../utils/fileUtils/images');
const todoRouter = require('./todoRouter');

userRouter.post('/', UserController.createUser);
userRouter.get('/', paginationMW, UserController.getUsers);

userRouter.get('/:userId', findUser, UserController.getUser);
userRouter.put('/:userId', findUser, UserController.updateUser);
userRouter.delete('/:userId', findUser, UserController.deleteUser);

userRouter.post(
  '/:userId/pictures',
  imageUpload.single('picture'),
  findUser,
  UserController.addPicture
);

userRouter.use('/:userId/todos', findUser, todoRouter);

module.exports = userRouter;
