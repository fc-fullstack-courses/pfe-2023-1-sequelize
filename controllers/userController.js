const { User } = require('../models');

module.exports.createUser = async (req, res, next) => {
  try {
    const { body } = req;

    // створення 1 запису (INSERT INTO)
    const user = await User.create(body);

    // стрворення декількох записів одночасно
    /*
      const users = await User.bulkCreate([
        userData1,
        userData2,
      ]);
    */

    res.send(user);
  } catch (error) {
    next(error);
  }
}

module.exports.getUser = async (req, res, next) => {
  try {
    res.send('user data');
  } catch (error) {
    next(error);
  }
}

module.exports.getUsers = async (req, res, next) => {
  try {
    res.send('full user list');
  } catch (error) {
    next(error);
  }
}

module.exports.updateUser = async (req, res, next) => {
  try {
    const {body, params: {userId} } = req;

    /*
      UPDATE users SET last_name = 'iusdfkhdsfbdsh' WHERE id = 1;
    */

    // v1 через модель
    const [updatedRows, [updatedUser]] = await User.update(body, {
      where: {
        id: userId
      },
      // RETURNING *
      returning: true,
      // RETURNING first_name, last_name
      // returning: ['firstName', 'lastName']
    });

    res.send(updatedUser);
  } catch (error) {
    next(error);
  }
}

module.exports.deleteUser = async (req, res, next) => {
  try {
    const { params: {userId}} = req;

    /*
      DELETE FROM users WHERE id = userId;
    */
    await User.destroy({
      where: {
        id: userId
      }
    });
    
    res.send('user deleted');
  } catch (error) {
    next(error);
  }
}