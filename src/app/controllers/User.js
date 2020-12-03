// import { Users, validateUser } from '../../../models/users'
const { Users, validateUser } = require('../../../models/users');

class UserController {
  async index(req, res) {
    const user = await Users.findAll({
      include: [
        {
          model: Users,
          as: 'users',
        },
      ],
      order: [
        ['createdAt', 'DESC'],
        [{ model: Users, as: 'users' }, 'createdAt', 'DESC'],
      ],
    });
    return res.status(200).json({
      users: user,
      message: 'Users retrieved successfully.',
    });
  }

  async getById(req, res) {
    const { id } = req.params;
    const user = Users.findByPk(id, {
      include: [
        {
          model: Users,
          as: 'user',
        },
      ],
    });
    return res.status(200).json({
      user,
      message: 'User retreived successfully.',
    });
  }

  async store(req, res) {
    const { error } = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    return res.status(200).json();
  }
}

export default new UserController();
