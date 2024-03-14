const chatRouter = require('express').Router();
const ChatConroller = require('../controllers/chatsController');

chatRouter.post('/', ChatConroller.createChat);

module.exports = chatRouter;