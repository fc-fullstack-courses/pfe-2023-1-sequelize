const { User } = require('../models');
const { Op } = require('sequelize');

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
};

module.exports.getUser = async (req, res, next) => {
  try {
    const {
      params: { userId },
    } = req;

    // const users = await User.findAll({
    //   where: {
    //     id: userId
    //   }
    // });
    // const [user] = users;

    // пошук 1 запису по первинному ключу
    const user = await User.findByPk(userId, {
        attributes : {
        exclude: ['password']
      }
    });

    // пошук 1 запису якій проходить перевірку
    // const user = await User.findOne({
    //   where: {
    //     id: userId
    //   },
    //   attributes : {
    //     exclude: ['password']
    //   }
    // });

    res.send(user);
  } catch (error) {
    next(error);
  }
};

module.exports.getUsers = async (req, res, next) => {
  try {
    /*
      SELECT * FROM users;
    */
    const users = await User.findAll();

    /*
    
    */

    /*
      SELECT firstName, lastName, email, balance FROM users;
    */
    // const users = await User.findAll({
    //   attributes: ['firstName', 'lastName', 'email', 'balance'],
    // });

    /*
      SELECT firstName, lastName, email as Пошта, balance FROM users;
    */
    // const users = await User.findAll({
    //   attributes: ['firstName', 'lastName', ['email', 'Пошта'], 'balance'],
    // });

    /*
      SELECT * але без паролю  FROM users;
    */

    // const users = await User.findAll({
    //   attributes: {
    //     exclude: ['password']
    //   },
    // });

    /*
      SELECT * FROM users WHERE last_name = 'Doe';
    */
    // const users = await User.findAll({
    //   where: {
    //     lastName: 'Doe',
    //   },
    // });

    /*
      SELECT * FROM users WHERE first_name = 'Test' AND id > 1;
    */
    // const users = await User.findAll({
    //   where: {
    //     // firstName: 'Test',
    //     // id: {
    //     //   [Op.gt]: 1
    //     // } ,
    //     [Op.and]: [{ firstName: 'Test' }, { id: { [Op.gt]: 1 } }],
    //   },
    // });

    res.send(users);
  } catch (error) {
    next(error);
  }
};

module.exports.updateUser = async (req, res, next) => {
  try {
    const {
      body,
      params: { userId },
    } = req;

    /*
      UPDATE users SET last_name = 'iusdfkhdsfbdsh' WHERE id = 1;
    */

    // v1 через модель
    const [updatedRows, [updatedUser]] = await User.update(body, {
      where: {
        id: userId,
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
};

module.exports.deleteUser = async (req, res, next) => {
  try {
    const {
      params: { userId },
    } = req;

    /*
      DELETE FROM users WHERE id = userId;
    */
    await User.destroy({
      where: {
        id: userId,
      },
    });

    res.send('user deleted');
  } catch (error) {
    next(error);
  }
};
