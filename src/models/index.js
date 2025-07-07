const sequelize = require('../configs/database');
const User = require('./user');
const Note = require('./note');

User.hasMany(Note, {
  foreignKey: 'userId',
  as: 'notes',
  onDelete: 'CASCADE',
});

Note.belongsTo(User, {
  foreignKey: 'userId',
  as: 'user',
});

module.exports = {
  sequelize,
  User,
  Note,
};

