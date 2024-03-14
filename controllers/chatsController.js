const { createChat } = require('../services/chat.service');

module.exports.createChat = async (req, res, next) => {
  try {
    const {
      body: { userId, ...chatData },
    } = req;

    const chat = await createChat(chatData, userId);

    res.send({ data: chat });
  } catch (error) {
    next(error);
  }
};

module.exports.getChats = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
