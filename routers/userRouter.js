const userRouter = require('express').Router();
const UserController = require('../controllers/userController');
const TodoController = require('../controllers/todoController');
const paginationMW = require('../middlewares/pagination');
const { findUser } = require('../middlewares/usersMW');

userRouter.post('/', UserController.createUser);
userRouter.get('/', paginationMW, UserController.getUsers);

userRouter.get('/:userId', findUser, UserController.getUser);
userRouter.put('/:userId', findUser, UserController.updateUser);
userRouter.delete('/:userId', findUser, UserController.deleteUser);

userRouter.post('/:userId/todos', findUser, TodoController.createTodo);
userRouter.get('/:userId/todos', findUser, TodoController.getUserTodos);

userRouter.get('/:userId/todos/:todoId', findUser, TodoController.getTodo);
userRouter.put('/:userId/todos/:todoId', findUser, TodoController.updateTodo);
userRouter.delete(
  '/:userId/todos/:todoId',
  findUser,
  TodoController.deleteTodo
);

module.exports = userRouter;
