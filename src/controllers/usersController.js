const User = require('../models/user');
const bcrypt = require('bcryptjs');

class UserController {
  async getAll(req, res) {
    const users = await User.findAll({
      attributes: ['id', 'name', 'email'],
    });
    res.json(users);
  }

  async getById(req, res) {
    const { id } = req.params;

    const user = await User.findByPk(id, {
      attributes: ['id', 'name', 'email'],
    });

    if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });

    res.json(user);
  }

  async update(req, res) {
    const { id } = req.params;
    const { name, email, password } = req.body;

    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });

    if (password) {
      user.password = await bcrypt.hash(password, 10);
    }

    if (name) user.name = name;
    if (email) user.email = email;

    await user.save();

    res.json({ id: user.id, name: user.name, email: user.email });
  }

  async delete(req, res) {
    const { id } = req.params;

    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });

    await user.destroy();

    res.status(204).send();
  }
}

module.exports = new UserController();
